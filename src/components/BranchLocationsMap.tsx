import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin, Phone, Navigation, X } from 'lucide-react';

const branches = [
  {
    name: "Head Office - Accra",
    address: "Africa Trade House, Ambassadorial Enclave, Liberia Road, Accra",
    gps: "GL-040-2630",
    phone: "0302-234668",
    coordinates: [-0.1870, 5.5600] as [number, number],
  },
  {
    name: "Kumasi Branch",
    address: "First Floor A2 Plaza Building, Dr. Osei Tuffuor By-Pass, Santasi",
    gps: "AK-178-6780",
    phone: "0322-041124",
    coordinates: [-1.6163, 6.6885] as [number, number],
  },
  {
    name: "Tamale Branch",
    address: "2nd Floor SSNIT Pension Tower, Dagomba Street, Tamale",
    gps: "NT-0010-5301",
    phone: "0372-028053",
    coordinates: [-0.8393, 9.4034] as [number, number],
  },
  {
    name: "Takoradi Branch",
    address: "Ground Floor, Ghana Shippers' Authority, Chapel Hill, Takoradi",
    gps: "WS-349-3552",
    phone: "0312-002262",
    coordinates: [-1.7468, 4.8965] as [number, number],
  },
  {
    name: "Ho Branch",
    address: "2nd Floor, Atsu Briggar's Plaza, Muvie Street, Ho",
    gps: "VH-0003-4357",
    phone: "0362-027773",
    coordinates: [0.4686, 6.6004] as [number, number],
  },
];

interface SelectedBranch {
  name: string;
  address: string;
  gps: string;
  phone: string;
  coordinates: [number, number];
}

const BranchLocationsMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);
  const [selectedBranch, setSelectedBranch] = useState<SelectedBranch | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current) return;

    const token = import.meta.env.VITE_MAPBOX_TOKEN;
    
    if (!token) {
      console.error('Mapbox token not found');
      return;
    }

    mapboxgl.accessToken = token;
    
    // Initialize map centered on Ghana
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-1.0232, 7.9465], // Center of Ghana
      zoom: 6,
      pitch: 30,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add fullscreen control
    map.current.addControl(new mapboxgl.FullscreenControl(), 'top-right');

    map.current.on('load', () => {
      setMapLoaded(true);
      
      // Add markers for each branch
      branches.forEach((branch) => {
        // Create custom marker element
        const el = document.createElement('div');
        el.className = 'custom-marker';
        el.innerHTML = `
          <div class="marker-pin">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#00563F" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3" fill="#D4AF37"/>
            </svg>
          </div>
        `;
        
        el.addEventListener('click', () => {
          setSelectedBranch(branch);
          map.current?.flyTo({
            center: branch.coordinates,
            zoom: 14,
            duration: 1500,
          });
        });

        const marker = new mapboxgl.Marker(el)
          .setLngLat(branch.coordinates)
          .addTo(map.current!);
        
        markers.current.push(marker);
      });
    });

    // Cleanup
    return () => {
      markers.current.forEach(marker => marker.remove());
      map.current?.remove();
    };
  }, []);

  const handleBranchClick = (branch: SelectedBranch) => {
    setSelectedBranch(branch);
    map.current?.flyTo({
      center: branch.coordinates,
      zoom: 14,
      duration: 1500,
    });
  };

  const resetView = () => {
    setSelectedBranch(null);
    map.current?.flyTo({
      center: [-1.0232, 7.9465],
      zoom: 6,
      duration: 1500,
    });
  };

  return (
    <div className="relative w-full">
      {/* Map Container */}
      <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-gexim-lg">
        <div ref={mapContainer} className="absolute inset-0" />
        
        {/* Loading overlay */}
        {!mapLoaded && (
          <div className="absolute inset-0 bg-muted flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-muted-foreground">Loading map...</p>
            </div>
          </div>
        )}

        {/* Selected Branch Info Card */}
        {selectedBranch && (
          <div className="absolute bottom-4 left-4 right-4 md:left-4 md:right-auto md:w-80 bg-card rounded-2xl shadow-gexim-xl p-5 animate-fade-in z-10">
            <button 
              onClick={resetView}
              className="absolute top-3 right-3 p-1 rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-foreground mb-1">{selectedBranch.name}</h4>
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{selectedBranch.address}</p>
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="text-accent font-semibold">{selectedBranch.gps}</span>
                  <a 
                    href={`tel:${selectedBranch.phone}`}
                    className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    {selectedBranch.phone}
                  </a>
                </div>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${selectedBranch.coordinates[1]},${selectedBranch.coordinates[0]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Map Legend */}
        <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm z-10">
          <p className="text-xs font-semibold text-foreground mb-1">GEXIM Branches</p>
          <p className="text-xs text-muted-foreground">Click markers to view details</p>
        </div>
      </div>

      {/* Branch List */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {branches.map((branch) => (
          <button
            key={branch.name}
            onClick={() => handleBranchClick(branch)}
            className={`text-left p-3 rounded-xl transition-all duration-200 ${
              selectedBranch?.name === branch.name
                ? 'bg-primary text-primary-foreground'
                : 'bg-card hover:bg-muted'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <MapPin className={`w-4 h-4 flex-shrink-0 ${
                selectedBranch?.name === branch.name ? 'text-accent' : 'text-primary'
              }`} />
              <p className={`text-sm font-semibold truncate ${
                selectedBranch?.name === branch.name ? 'text-primary-foreground' : 'text-foreground'
              }`}>
                {branch.name.replace(' Branch', '').replace('Head Office - ', '')}
              </p>
            </div>
            <p className={`text-xs truncate ${
              selectedBranch?.name === branch.name ? 'text-primary-foreground/70' : 'text-muted-foreground'
            }`}>
              {branch.phone}
            </p>
          </button>
        ))}
      </div>

      {/* Custom Marker Styles */}
      <style>{`
        .custom-marker {
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .custom-marker:hover {
          transform: scale(1.2);
        }
        .marker-pin {
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
        }
        .mapboxgl-ctrl-attrib {
          font-size: 10px;
        }
      `}</style>
    </div>
  );
};

export default BranchLocationsMap;
