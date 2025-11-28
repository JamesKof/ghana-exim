import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle2, Upload, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const steps = [
  { id: 1, title: "Entity Information" },
  { id: 2, title: "Business Details" },
  { id: 3, title: "Facility Request" },
  { id: 4, title: "Review & Submit" },
];

const facilityTypes = [
  "Pre-Shipment Credit",
  "Post-Shipment Credit",
  "Project Finance",
  "Export Credit Insurance",
  "Guarantees",
  "SME Loan",
  "Other",
];

const entityTypes = [
  "Sole Proprietor",
  "Partnership",
  "Limited Company",
  "Cooperative",
];

const industries = [
  "Agriculture & Agro-processing",
  "Manufacturing",
  "Mining & Extractives",
  "Technology & ICT",
  "Services",
  "Construction",
  "Other",
];

// Form validation schema
const applicationSchema = z.object({
  entityType: z.string().min(1, "Please select an entity type"),
  businessName: z.string().min(2, "Business name must be at least 2 characters").max(200),
  registrationNumber: z.string().optional(),
  industry: z.string().min(1, "Please select an industry"),
  annualRevenue: z.string().optional(),
  employeeCount: z.string().optional(),
  yearsInBusiness: z.string().optional(),
  exportExperience: z.string().optional(),
  facilityType: z.string().min(1, "Please select a facility type"),
  amountRequested: z.string().optional(),
  purpose: z.string().min(10, "Please describe the purpose in detail").max(2000),
  repaymentPeriod: z.string().optional(),
  contactName: z.string().min(2, "Contact name must be at least 2 characters").max(100),
  contactTitle: z.string().optional(),
  contactEmail: z.string().email("Please enter a valid email").max(255),
  contactPhone: z.string().min(10, "Please enter a valid phone number").max(20),
  additionalInfo: z.string().max(2000).optional(),
});

const Apply = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 - Entity Information
    entityType: "",
    businessName: "",
    registrationNumber: "",
    dateOfIncorporation: "",
    industry: "",
    // Step 2 - Business Details
    annualRevenue: "",
    employeeCount: "",
    yearsInBusiness: "",
    exportExperience: "",
    // Step 3 - Facility Request
    facilityType: "",
    amountRequested: "",
    currency: "GHS",
    purpose: "",
    repaymentPeriod: "",
    // Contact Information
    contactName: "",
    contactTitle: "",
    contactEmail: "",
    contactPhone: "",
    additionalInfo: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateCurrentStep = () => {
    setErrors({});
    
    let fieldsToValidate: Partial<typeof formData> = {};
    
    switch (currentStep) {
      case 1:
        fieldsToValidate = {
          entityType: formData.entityType,
          businessName: formData.businessName,
          industry: formData.industry,
        };
        break;
      case 2:
        return true; // No required fields in step 2
      case 3:
        fieldsToValidate = {
          facilityType: formData.facilityType,
          purpose: formData.purpose,
          contactName: formData.contactName,
          contactEmail: formData.contactEmail,
          contactPhone: formData.contactPhone,
        };
        break;
      default:
        return true;
    }

    const result = applicationSchema.partial().safeParse(fieldsToValidate);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return false;
    }
    
    // Additional check for required fields
    const requiredFields = Object.entries(fieldsToValidate);
    for (const [key, value] of requiredFields) {
      if (!value || (typeof value === 'string' && value.trim() === '')) {
        setErrors(prev => ({ ...prev, [key]: 'This field is required' }));
        return false;
      }
    }
    
    return true;
  };

  const handleNext = () => {
    if (validateCurrentStep() && currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation
    const result = applicationSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      toast({
        title: "Validation Error",
        description: "Please review and correct the errors.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("facility_applications").insert({
        entity_type: formData.entityType,
        business_name: formData.businessName,
        registration_number: formData.registrationNumber || null,
        date_of_incorporation: formData.dateOfIncorporation || null,
        industry: formData.industry,
        annual_revenue: formData.annualRevenue || null,
        employee_count: formData.employeeCount || null,
        years_in_business: formData.yearsInBusiness || null,
        export_experience: formData.exportExperience || null,
        facility_type: formData.facilityType,
        amount_requested: formData.amountRequested ? parseFloat(formData.amountRequested.replace(/,/g, "")) : null,
        currency: formData.currency,
        purpose: formData.purpose,
        repayment_period: formData.repaymentPeriod || null,
        contact_name: formData.contactName,
        contact_title: formData.contactTitle || null,
        contact_email: formData.contactEmail,
        contact_phone: formData.contactPhone,
        additional_info: formData.additionalInfo || null,
      });

      if (error) throw error;

      toast({
        title: "Application Submitted!",
        description: "Thank you for your application. Our team will review it and contact you shortly.",
      });

      // Reset form
      setIsSubmitting(false);
      setCurrentStep(1);
      setFormData({
        entityType: "",
        businessName: "",
        registrationNumber: "",
        dateOfIncorporation: "",
        industry: "",
        annualRevenue: "",
        employeeCount: "",
        yearsInBusiness: "",
        exportExperience: "",
        facilityType: "",
        amountRequested: "",
        currency: "GHS",
        purpose: "",
        repaymentPeriod: "",
        contactName: "",
        contactTitle: "",
        contactEmail: "",
        contactPhone: "",
        additionalInfo: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again later.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: string) => 
    `w-full px-4 py-3 rounded-xl border ${errors[field] ? "border-destructive" : "border-input"} bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all`;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-accent font-semibold text-sm uppercase tracking-wider mb-6">
              Get Started
            </span>
            <h1 className="text-display-md md:text-display-lg text-primary-foreground mt-4 mb-6">
              Apply for a Facility
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Complete the application form below to apply for financing from Ghana EXIM Bank.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{ borderRadius: "3rem 3rem 0 0" }} />
      </section>

      {/* Application Form */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          {/* Progress */}
          <ScrollAnimation className="mb-12">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                        currentStep >= step.id
                          ? "bg-primary text-primary-foreground shadow-lg"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {currentStep > step.id ? (
                        <CheckCircle2 className="w-6 h-6" />
                      ) : (
                        step.id
                      )}
                    </div>
                    <span className="text-xs mt-2 text-muted-foreground hidden md:block font-medium">
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-full h-1 mx-2 rounded transition-colors duration-300 ${
                        currentStep > step.id ? "bg-primary" : "bg-muted"
                      }`}
                      style={{ minWidth: "40px", maxWidth: "100px" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </ScrollAnimation>

          {/* Form */}
          <ScrollAnimation animation="fade-up">
            <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 md:p-10 shadow-sm">
              {/* Step 1: Entity Information */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Entity Information</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Entity Type *</label>
                      <select
                        value={formData.entityType}
                        onChange={(e) => setFormData({ ...formData, entityType: e.target.value })}
                        className={inputClass("entityType")}
                        required
                      >
                        <option value="">Select type</option>
                        {entityTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.entityType && <p className="text-sm text-destructive mt-1">{errors.entityType}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Business Name *</label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className={inputClass("businessName")}
                        required
                        maxLength={200}
                      />
                      {errors.businessName && <p className="text-sm text-destructive mt-1">{errors.businessName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Registration Number</label>
                      <input
                        type="text"
                        value={formData.registrationNumber}
                        onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
                        className={inputClass("registrationNumber")}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Date of Incorporation</label>
                      <input
                        type="date"
                        value={formData.dateOfIncorporation}
                        onChange={(e) => setFormData({ ...formData, dateOfIncorporation: e.target.value })}
                        className={inputClass("dateOfIncorporation")}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-2">Industry/Sector *</label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className={inputClass("industry")}
                        required
                      >
                        <option value="">Select industry</option>
                        {industries.map((ind) => (
                          <option key={ind} value={ind}>{ind}</option>
                        ))}
                      </select>
                      {errors.industry && <p className="text-sm text-destructive mt-1">{errors.industry}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Business Details */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Business Details</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Annual Revenue (GHS)</label>
                      <input
                        type="text"
                        value={formData.annualRevenue}
                        onChange={(e) => setFormData({ ...formData, annualRevenue: e.target.value })}
                        className={inputClass("annualRevenue")}
                        placeholder="e.g., 500,000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Number of Employees</label>
                      <select
                        value={formData.employeeCount}
                        onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                        className={inputClass("employeeCount")}
                      >
                        <option value="">Select range</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-100">51-100</option>
                        <option value="101-500">101-500</option>
                        <option value="500+">500+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Years in Business</label>
                      <select
                        value={formData.yearsInBusiness}
                        onChange={(e) => setFormData({ ...formData, yearsInBusiness: e.target.value })}
                        className={inputClass("yearsInBusiness")}
                      >
                        <option value="">Select range</option>
                        <option value="Less than 1 year">Less than 1 year</option>
                        <option value="1-3 years">1-3 years</option>
                        <option value="3-5 years">3-5 years</option>
                        <option value="5-10 years">5-10 years</option>
                        <option value="10+ years">10+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Export Experience</label>
                      <select
                        value={formData.exportExperience}
                        onChange={(e) => setFormData({ ...formData, exportExperience: e.target.value })}
                        className={inputClass("exportExperience")}
                      >
                        <option value="">Select experience</option>
                        <option value="None">None</option>
                        <option value="Less than 1 year">Less than 1 year</option>
                        <option value="1-3 years">1-3 years</option>
                        <option value="3-5 years">3-5 years</option>
                        <option value="5+ years">5+ years</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Facility Request */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Facility Request & Contact</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Facility Type *</label>
                      <select
                        value={formData.facilityType}
                        onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                        className={inputClass("facilityType")}
                        required
                      >
                        <option value="">Select facility type</option>
                        {facilityTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.facilityType && <p className="text-sm text-destructive mt-1">{errors.facilityType}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Amount Requested (GHS)</label>
                      <input
                        type="text"
                        value={formData.amountRequested}
                        onChange={(e) => setFormData({ ...formData, amountRequested: e.target.value })}
                        className={inputClass("amountRequested")}
                        placeholder="e.g., 100,000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Repayment Period</label>
                      <select
                        value={formData.repaymentPeriod}
                        onChange={(e) => setFormData({ ...formData, repaymentPeriod: e.target.value })}
                        className={inputClass("repaymentPeriod")}
                      >
                        <option value="">Select period</option>
                        <option value="6 months">6 months</option>
                        <option value="12 months">12 months</option>
                        <option value="24 months">24 months</option>
                        <option value="36 months">36 months</option>
                        <option value="48 months">48 months</option>
                        <option value="60 months">60 months</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Contact Title</label>
                      <select
                        value={formData.contactTitle}
                        onChange={(e) => setFormData({ ...formData, contactTitle: e.target.value })}
                        className={inputClass("contactTitle")}
                      >
                        <option value="">Select title</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Ms">Ms</option>
                        <option value="Dr">Dr</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Contact Name *</label>
                      <input
                        type="text"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className={inputClass("contactName")}
                        required
                        maxLength={100}
                      />
                      {errors.contactName && <p className="text-sm text-destructive mt-1">{errors.contactName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Contact Email *</label>
                      <input
                        type="email"
                        value={formData.contactEmail}
                        onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                        className={inputClass("contactEmail")}
                        required
                        maxLength={255}
                      />
                      {errors.contactEmail && <p className="text-sm text-destructive mt-1">{errors.contactEmail}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Contact Phone *</label>
                      <input
                        type="tel"
                        value={formData.contactPhone}
                        onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                        className={inputClass("contactPhone")}
                        required
                        maxLength={20}
                      />
                      {errors.contactPhone && <p className="text-sm text-destructive mt-1">{errors.contactPhone}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Purpose of Facility *</label>
                    <textarea
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      rows={4}
                      className={inputClass("purpose") + " resize-none"}
                      required
                      maxLength={2000}
                      placeholder="Describe how you intend to use the facility..."
                    />
                    {errors.purpose && <p className="text-sm text-destructive mt-1">{errors.purpose}</p>}
                  </div>
                </div>
              )}

              {/* Step 4: Review */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Review Your Application</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-muted rounded-2xl p-6">
                      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        Entity Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div><span className="text-muted-foreground">Entity Type:</span> <span className="font-medium">{formData.entityType}</span></div>
                        <div><span className="text-muted-foreground">Business Name:</span> <span className="font-medium">{formData.businessName}</span></div>
                        <div><span className="text-muted-foreground">Industry:</span> <span className="font-medium">{formData.industry}</span></div>
                        {formData.registrationNumber && <div><span className="text-muted-foreground">Reg. Number:</span> <span className="font-medium">{formData.registrationNumber}</span></div>}
                      </div>
                    </div>

                    <div className="bg-muted rounded-2xl p-6">
                      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        Facility Request
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div><span className="text-muted-foreground">Facility Type:</span> <span className="font-medium">{formData.facilityType}</span></div>
                        {formData.amountRequested && <div><span className="text-muted-foreground">Amount:</span> <span className="font-medium">GHS {formData.amountRequested}</span></div>}
                        {formData.repaymentPeriod && <div><span className="text-muted-foreground">Period:</span> <span className="font-medium">{formData.repaymentPeriod}</span></div>}
                      </div>
                      <div className="mt-4">
                        <span className="text-muted-foreground text-sm">Purpose:</span>
                        <p className="font-medium text-sm mt-1">{formData.purpose}</p>
                      </div>
                    </div>

                    <div className="bg-muted rounded-2xl p-6">
                      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        Contact Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div><span className="text-muted-foreground">Name:</span> <span className="font-medium">{formData.contactTitle} {formData.contactName}</span></div>
                        <div><span className="text-muted-foreground">Email:</span> <span className="font-medium">{formData.contactEmail}</span></div>
                        <div><span className="text-muted-foreground">Phone:</span> <span className="font-medium">{formData.contactPhone}</span></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Additional Information (Optional)</label>
                    <textarea
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                      rows={3}
                      className={inputClass("additionalInfo") + " resize-none"}
                      maxLength={2000}
                      placeholder="Any additional information you'd like to share..."
                    />
                  </div>

                  <div className="bg-accent/10 rounded-xl p-6">
                    <p className="text-sm text-foreground">
                      By submitting this application, you confirm that all information provided is accurate and complete. 
                      Our team will review your application and contact you within 5-7 business days.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-10 pt-6 border-t border-border">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-6 py-3 rounded-full border border-border hover:bg-muted transition-colors flex items-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </button>
                ) : (
                  <div />
                )}
                {currentStep < steps.length ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn-gold px-8 py-3 font-semibold flex items-center gap-2"
                  >
                    Next
                    <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold px-8 py-3 font-semibold flex items-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </form>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default Apply;
