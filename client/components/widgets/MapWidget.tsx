import { useEffect, useRef, useState } from "react";

function loadLeaflet(): Promise<void> {
  return new Promise((resolve, reject) => {
    if ((window as any).L) return resolve();
    // CSS
    const existingCss = document.querySelector("link[data-leaflet]");
    if (!existingCss) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      link.setAttribute("data-leaflet", "true");
      document.head.appendChild(link);
    }
    // Script
    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Leaflet"));
    document.body.appendChild(script);
  });
}

export type Hotspot = {
  name: string;
  coords: [number, number];
  description: string;
  link?: string;
};

const HOTSPOTS: Hotspot[] = [
  {
    name: "Delhi",
    coords: [28.6139, 77.209],
    description: "Red Fort, Qutub Minar, rich Mughal heritage",
    link: "/resources",
  },
  {
    name: "Varanasi",
    coords: [25.3176, 82.9739],
    description: "Spiritual ghats on the Ganga",
    link: "/resources",
  },
  {
    name: "Jaipur",
    coords: [26.9124, 75.7873],
    description: "Pink City, forts & palaces",
    link: "/library",
  },
  {
    name: "Mumbai",
    coords: [19.076, 72.8777],
    description: "Gateway of India, arts & cinema",
    link: "/library",
  },
  {
    name: "Hampi",
    coords: [15.335, 76.46],
    description: "UNESCO ruins of Vijayanagara",
    link: "/resources",
  },
  {
    name: "Kochi",
    coords: [9.9312, 76.2673],
    description: "Backwaters, Kathakali, spice trade",
    link: "/library",
  },
  {
    name: "Kolkata",
    coords: [22.5726, 88.3639],
    description: "Intellectual capital, Durga Puja",
    link: "/forum",
  },
];

export default function MapWidget({ height = 420 }: { height?: number }) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let map: any;
    let destroyed = false;

    loadLeaflet()
      .then(() => {
        if (destroyed) return;
        const L = (window as any).L;
        if (!mapRef.current) return;
        map = L.map(mapRef.current).setView([22.9734, 78.6569], 5);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 18,
        }).addTo(map);

        HOTSPOTS.forEach((spot) => {
          const marker = L.marker(spot.coords).addTo(map);
          const html = `<div style="min-width:200px"><strong>${spot.name}</strong><div class="text-xs opacity-80">${spot.description}</div><div style="margin-top:8px"><a href="${spot.link || "/"}" class="text-primary underline">Explore</a></div></div>`;
          marker.bindPopup(html);
        });

        setReady(true);
      })
      .catch(() => setReady(false));

    return () => {
      destroyed = true;
      if (map) map.remove();
    };
  }, []);

  return (
    <div className="relative">
      {!ready && (
        <div className="absolute inset-0 z-10 grid place-items-center rounded-lg bg-muted/40">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
            </svg>
            Loading interactive map…
          </div>
        </div>
      )}
      <div
        ref={mapRef}
        className="w-full rounded-lg border"
        style={{ height }}
      />
    </div>
  );
}
