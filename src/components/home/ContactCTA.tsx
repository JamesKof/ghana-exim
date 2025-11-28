import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Navy curved background */}
      <div className="absolute inset-0 bg-primary section-curve-both mx-4 lg:mx-8" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gexim-blue/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-accent font-semibold text-sm uppercase tracking-wider mb-6">
                Contact Us
              </span>
              <h2 className="text-display-sm md:text-display-md text-white mb-6">
                Want to Know More
                <span className="text-gradient-light block">About Us?</span>
              </h2>
              <p className="text-xl text-white/70 mb-10 leading-relaxed">
                Do you need help choosing the right solution or have any other questions? We are here to help your business grow!
              </p>
              <Link
                to="/contact"
                className="btn-gold px-8 py-4 text-lg font-semibold inline-flex items-center gap-3 group"
              >
                Get In Touch With Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Contact info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover-lift">
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-4">
                  <Phone className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Call Us</h3>
                <p className="text-white/60">0302-234668</p>
                <p className="text-white/60">0302-234669</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover-lift">
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-4">
                  <Mail className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Email Us</h3>
                <p className="text-white/60 break-all">enquiry@eximbankghana.com</p>
              </div>
              
              <div className="sm:col-span-2 bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover-lift">
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-4">
                  <MapPin className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Head Office</h3>
                <p className="text-white/60">
                  Africa Trade House, Ambassadorial Enclave, Liberia Road, Accra, Ghana
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
