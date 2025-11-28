import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const offices = [
  {
    city: "Head Office - Accra",
    address: "Africa Trade House, Ambassadorial Enclave, Liberia Road, Accra, Ghana",
    gps: "GL-040-2630",
    phones: ["0302-234668", "0302-234669", "0302-234664"],
  },
  {
    city: "Kumasi",
    address: "First Floor A2 Plaza Building, Dr. Osei Tuffuor By-Pass, Near Santasi Roundabout",
    gps: "AK-178-6780",
    phones: ["0322-041124"],
  },
  {
    city: "Tamale",
    address: "2nd Floor SSNIT Pension Tower, Dagomba Street",
    gps: "NT-0010-5301",
    phones: ["0372-028053", "0302-234664"],
  },
  {
    city: "Ho",
    address: "2nd Floor, Atsu Briggar's Plaza, Muvie Street, Ho",
    gps: "VH-0003-4357",
    phones: ["0362 027773", "0362 028392"],
  },
  {
    city: "Takoradi",
    address: "Ground Floor, Ghana Shippers' Authority, Chapel Hill, Takoradi",
    gps: "WS-349-3552",
    phones: ["0312 002262", "0312 002263"],
  },
];

const entityTypes = [
  "Government Entity",
  "Large African Corporate Entity",
  "Multinational Corporate Entity",
  "Small and Medium-Sized Enterprise",
  "Academia Entity",
  "Other",
];

const interestAreas = [
  "Loans or Credit",
  "Guarantees",
  "Business Advisory Services",
  "Research",
  "Export Trade",
  "Projects",
  "Employment",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    entityType: "",
    interest: "",
    title: "",
    name: "",
    organization: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });

    setFormData({
      entityType: "",
      interest: "",
      title: "",
      name: "",
      organization: "",
      phone: "",
      email: "",
      message: "",
    });
    setIsSubmitting(false);
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
              Get In Touch
            </span>
            <h1 className="text-display-md md:text-display-lg text-primary-foreground mt-4 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Have questions? We're here to help. Reach out to us and our team will respond promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-3xl p-8 md:p-10 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        I am a
                      </label>
                      <select
                        value={formData.entityType}
                        onChange={(e) => setFormData({ ...formData, entityType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        required
                      >
                        <option value="">Select entity type</option>
                        {entityTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        I am interested in
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        required
                      >
                        <option value="">Select interest area</option>
                        {interestAreas.map((area) => (
                          <option key={area} value={area}>{area}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Title
                      </label>
                      <select
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        required
                      >
                        <option value="">Select title</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Ms">Ms</option>
                        <option value="Dr">Dr</option>
                        <option value="Prof">Prof</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Organization *
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Message *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-primary rounded-3xl p-8 text-primary-foreground">
                <Mail className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <a href="mailto:enquiry@eximbankghana.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  enquiry@eximbankghana.com
                </a>
              </div>

              <div className="bg-card rounded-3xl p-8 shadow-sm">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Working Hours</h3>
                <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Locations
            </span>
            <h2 className="text-display-sm text-foreground mt-3">
              Office Locations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div key={office.city} className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-gexim transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{office.city}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{office.address}</p>
                    <p className="text-xs text-accent font-medium mb-3">GPS: {office.gps}</p>
                    <div className="space-y-1">
                      {office.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
