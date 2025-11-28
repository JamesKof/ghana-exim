import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle2, Upload, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const steps = [
  { id: 1, title: "Entity Information" },
  { id: 2, title: "Business Details" },
  { id: 3, title: "Facility Request" },
  { id: 4, title: "Documents" },
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

const Apply = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    entityType: "",
    companyName: "",
    registrationNumber: "",
    yearEstablished: "",
    contactPerson: "",
    email: "",
    phone: "",
    address: "",
    // Step 2
    industry: "",
    annualTurnover: "",
    exportExperience: "",
    exportDestinations: "",
    mainProducts: "",
    // Step 3
    facilityType: "",
    amount: "",
    purpose: "",
    tenure: "",
    collateral: "",
    // Step 4
    documents: [] as File[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length) {
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
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Application Submitted!",
      description: "Thank you for your application. Our team will review it and contact you shortly.",
    });

    setIsSubmitting(false);
    setCurrentStep(1);
    setFormData({
      entityType: "",
      companyName: "",
      registrationNumber: "",
      yearEstablished: "",
      contactPerson: "",
      email: "",
      phone: "",
      address: "",
      industry: "",
      annualTurnover: "",
      exportExperience: "",
      exportDestinations: "",
      mainProducts: "",
      facilityType: "",
      amount: "",
      purpose: "",
      tenure: "",
      collateral: "",
      documents: [],
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
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
      </section>

      {/* Application Form */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          {/* Progress */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-colors ${
                        currentStep >= step.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {currentStep > step.id ? (
                        <CheckCircle2 className="w-6 h-6" />
                      ) : (
                        step.id
                      )}
                    </div>
                    <span className="text-xs mt-2 text-muted-foreground hidden md:block">
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-full h-1 mx-2 rounded ${
                        currentStep > step.id ? "bg-primary" : "bg-muted"
                      }`}
                      style={{ minWidth: "40px", maxWidth: "100px" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 md:p-10 shadow-sm">
            {/* Step 1: Entity Information */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold text-foreground mb-6">Entity Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Entity Type *
                    </label>
                    <select
                      value={formData.entityType}
                      onChange={(e) => setFormData({ ...formData, entityType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background"
                      required
                    >
                      <option value="">Select type</option>
                      <option value="sole-proprietor">Sole Proprietor</option>
                      <option value="partnership">Partnership</option>
                      <option value="limited-company">Limited Company</option>
                      <option value="cooperative">Cooperative</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Registration Number *
                    </label>
                    <input
                      type="text"
                      value={formData.registrationNumber}
                      onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Year Established
                    </label>
                    <input
                      type="text"
                      value={formData.yearEstablished}
                      onChange={(e) => setFormData({ ...formData, yearEstablished: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Business Address *
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background"
                      required
                    />
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
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Industry/Sector *
                    </label>
                    <input
                      type="text"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Annual Turnover (GHS)
                    </label>
                    <input
                      type="text"
                      value={formData.annualTurnover}
                      onChange={(e) => setFormData({ ...formData, annualTurnover: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Export Experience (Years)
                    </label>
                    <input
                      type="text"
                      value={formData.exportExperience}
                      onChange={(e) => setFormData({ ...formData, exportExperience: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Export Destinations
                    </label>
                    <input
                      type="text"
                      value={formData.exportDestinations}
                      onChange={(e) => setFormData({ ...formData, exportDestinations: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background"
                      placeholder="e.g., USA, UK, China"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Main Products/Services *
                  </label>
                  <textarea
                    value={formData.mainProducts}
                    onChange={(e) => setFormData({ ...formData, mainProducts: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background resize-none"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 3: Facility Request */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold text-foreground mb-6">Facility Request</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Facility Type *
                    </label>
                    <select
                      value={formData.facilityType}
                      onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background"
                      required
                    >
                      <option value="">Select facility type</option>
                      {facilityTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Amount Requested (GHS) *
                    </label>
                    <input
                      type="text"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Tenure (Months)
                    </label>
                    <input
                      type="text"
                      value={formData.tenure}
                      onChange={(e) => setFormData({ ...formData, tenure: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Proposed Collateral
                    </label>
                    <input
                      type="text"
                      value={formData.collateral}
                      onChange={(e) => setFormData({ ...formData, collateral: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Purpose of Facility *
                  </label>
                  <textarea
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background resize-none"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 4: Documents */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold text-foreground mb-6">Supporting Documents</h2>
                <div className="bg-muted rounded-2xl p-8 text-center">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-foreground font-medium mb-2">Upload your documents</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Business registration, financial statements, export licenses, etc.
                  </p>
                  <label className="btn-gold px-6 py-3 rounded-xl font-semibold cursor-pointer inline-block">
                    Choose Files
                    <input type="file" multiple className="hidden" />
                  </label>
                </div>
                <div className="bg-accent/10 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-accent" />
                    Required Documents
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Certificate of Incorporation/Business Registration</li>
                    <li>• Audited Financial Statements (Last 3 years)</li>
                    <li>• Business Plan</li>
                    <li>• Export License (if applicable)</li>
                    <li>• Collateral Documentation</li>
                    <li>• Valid ID of Directors</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-10 pt-6 border-t border-border">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-3 rounded-xl border border-border hover:bg-muted transition-colors flex items-center gap-2"
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
                  className="btn-gold px-8 py-3 rounded-xl font-semibold flex items-center gap-2"
                >
                  Next
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold px-8 py-3 rounded-xl font-semibold flex items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Apply;
