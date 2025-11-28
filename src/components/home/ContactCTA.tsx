import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-display-sm md:text-display-md text-primary-foreground mb-6">
              Get to Know More About Us?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Do you need help choosing the right solution or have any other questions? We are here to help!
            </p>
            <Link
              to="/contact"
              className="btn-gold px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center gap-2 group"
            >
              Get In Touch With Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Contact info */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <Phone className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Call Us</h3>
              <p className="text-primary-foreground/70">0302-234668</p>
              <p className="text-primary-foreground/70">0302-234669</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <Mail className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Email Us</h3>
              <p className="text-primary-foreground/70">enquiry@eximbankghana.com</p>
            </div>
            <div className="sm:col-span-2 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <MapPin className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Head Office</h3>
              <p className="text-primary-foreground/70">
                Africa Trade House, Ambassadorial Enclave, Liberia Road, Accra, Ghana
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
