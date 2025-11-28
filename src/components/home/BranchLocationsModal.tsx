import { useState } from "react";
import { MapPin, Phone, Clock, X, ChevronRight, Building2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const branches = [
  {
    id: 1,
    region: "Greater Accra",
    name: "Head Office - Accra",
    address: "No. 5 Starlets '91 Road, Accra",
    phone: "+233 302 611 617",
    hours: "Mon - Fri: 8:00 AM - 5:00 PM",
    coordinates: { top: "52%", left: "78%" },
    isHeadOffice: true,
  },
  {
    id: 2,
    region: "Ashanti",
    name: "Kumasi Branch",
    address: "Adum, Kumasi",
    phone: "+233 322 022 345",
    hours: "Mon - Fri: 8:00 AM - 5:00 PM",
    coordinates: { top: "48%", left: "45%" },
  },
  {
    id: 3,
    region: "Western",
    name: "Takoradi Branch",
    address: "Market Circle, Takoradi",
    phone: "+233 312 023 456",
    hours: "Mon - Fri: 8:00 AM - 5:00 PM",
    coordinates: { top: "65%", left: "32%" },
  },
  {
    id: 4,
    region: "Northern",
    name: "Tamale Branch",
    address: "Central Business District, Tamale",
    phone: "+233 372 024 567",
    hours: "Mon - Fri: 8:00 AM - 5:00 PM",
    coordinates: { top: "22%", left: "48%" },
  },
  {
    id: 5,
    region: "Eastern",
    name: "Koforidua Branch",
    address: "Main Street, Koforidua",
    phone: "+233 342 025 678",
    hours: "Mon - Fri: 8:00 AM - 5:00 PM",
    coordinates: { top: "50%", left: "60%" },
  },
  {
    id: 6,
    region: "Volta",
    name: "Ho Branch",
    address: "Municipal Road, Ho",
    phone: "+233 362 026 789",
    hours: "Mon - Fri: 8:00 AM - 5:00 PM",
    coordinates: { top: "52%", left: "72%" },
  },
];

interface BranchLocationsModalProps {
  trigger?: React.ReactNode;
}

export function BranchLocationsModal({ trigger }: BranchLocationsModalProps) {
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <button className="btn-gold px-6 py-3 inline-flex items-center gap-2 group">
            <MapPin className="w-5 h-5" />
            Find a Branch
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-background border-border">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            Our Branches Across Ghana
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid lg:grid-cols-5 gap-0 h-[500px]">
          {/* Interactive Map Section */}
          <div className="lg:col-span-3 relative bg-gradient-to-br from-primary/5 to-accent/5 p-6">
            {/* Ghana Map Outline - Stylized */}
            <div className="relative w-full h-full">
              {/* Map background shape */}
              <svg 
                viewBox="0 0 100 120" 
                className="absolute inset-0 w-full h-full opacity-20"
                preserveAspectRatio="xMidYMid meet"
              >
                <path 
                  d="M50 5 L75 10 L85 25 L82 45 L78 60 L80 75 L75 90 L65 100 L55 105 L45 105 L35 100 L25 90 L20 75 L22 60 L18 45 L15 25 L25 10 Z" 
                  fill="currentColor" 
                  className="text-primary"
                />
              </svg>
              
              {/* Branch pins */}
              {branches.map((branch) => (
                <button
                  key={branch.id}
                  onClick={() => setSelectedBranch(branch)}
                  className={cn(
                    "absolute transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300",
                    selectedBranch.id === branch.id 
                      ? "scale-125" 
                      : "hover:scale-110"
                  )}
                  style={{ top: branch.coordinates.top, left: branch.coordinates.left }}
                  title={branch.name}
                >
                  <div className={cn(
                    "relative",
                    selectedBranch.id === branch.id && "animate-pulse"
                  )}>
                    {/* Pin glow */}
                    <div className={cn(
                      "absolute inset-0 rounded-full blur-md transition-all",
                      selectedBranch.id === branch.id 
                        ? "bg-accent/60 scale-150" 
                        : "bg-primary/30 scale-100"
                    )} />
                    {/* Pin icon */}
                    <div className={cn(
                      "relative w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all",
                      selectedBranch.id === branch.id 
                        ? "bg-accent text-accent-foreground" 
                        : branch.isHeadOffice 
                          ? "bg-primary text-primary-foreground"
                          : "bg-background border-2 border-primary text-primary"
                    )}>
                      <MapPin className="w-5 h-5" />
                    </div>
                    {/* Label */}
                    <div className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap px-2 py-1 rounded-md text-xs font-medium transition-all",
                      selectedBranch.id === branch.id 
                        ? "bg-accent text-accent-foreground opacity-100"
                        : "bg-background/90 text-foreground opacity-0 group-hover:opacity-100"
                    )}>
                      {branch.region}
                    </div>
                  </div>
                </button>
              ))}
              
              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                <p className="text-xs font-semibold text-foreground mb-2">Legend</p>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-4 h-4 rounded-full bg-primary" />
                    <span>Head Office</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-4 h-4 rounded-full bg-background border-2 border-primary" />
                    <span>Branch</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-4 h-4 rounded-full bg-accent" />
                    <span>Selected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Branch List & Details */}
          <div className="lg:col-span-2 flex flex-col border-l border-border">
            {/* Branch list */}
            <div className="flex-1 overflow-y-auto">
              {branches.map((branch) => (
                <button
                  key={branch.id}
                  onClick={() => setSelectedBranch(branch)}
                  className={cn(
                    "w-full p-4 text-left border-b border-border transition-all",
                    selectedBranch.id === branch.id 
                      ? "bg-primary/10 border-l-4 border-l-primary" 
                      : "hover:bg-muted/50"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                      selectedBranch.id === branch.id ? "bg-primary text-primary-foreground" : "bg-muted"
                    )}>
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{branch.name}</h4>
                      <p className="text-xs text-muted-foreground">{branch.region} Region</p>
                      {branch.isHeadOffice && (
                        <span className="inline-block mt-1 px-2 py-0.5 bg-accent/20 text-accent text-xs rounded-full font-medium">
                          Head Office
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
            
            {/* Selected branch details */}
            <div className="p-4 bg-muted/30 border-t border-border">
              <h3 className="font-bold text-foreground mb-3">{selectedBranch.name}</h3>
              <div className="space-y-2.5">
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <span className="text-muted-foreground">{selectedBranch.address}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href={`tel:${selectedBranch.phone}`} className="text-primary hover:underline">
                    {selectedBranch.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{selectedBranch.hours}</span>
                </div>
              </div>
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(selectedBranch.address + ", Ghana")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full btn-gold py-2.5 text-sm font-semibold inline-flex items-center justify-center gap-2"
              >
                Get Directions
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
