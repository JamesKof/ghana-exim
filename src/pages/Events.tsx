import { Layout } from "@/components/layout/Layout";
import { Calendar, MapPin } from "lucide-react";

const Events = () => {
  return (
    <Layout>
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Stay Connected</span>
            <h1 className="text-display-md md:text-display-lg text-primary-foreground mt-4 mb-6">Events</h1>
            <p className="text-xl text-primary-foreground/80">Upcoming events and activities from Ghana EXIM Bank.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="bg-muted rounded-3xl p-12 text-center">
            <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">No Upcoming Events</h3>
            <p className="text-muted-foreground">Check back soon for information about upcoming events and activities.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
