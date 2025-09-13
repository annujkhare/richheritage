import { useMemo } from "react";
import MapWidget from "@/components/widgets/MapWidget";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const media = {
  videos: [
    {
      title: "Bharatanatyam Performance",
      url: "https://www.youtube.com/embed/4uQ8Zc2f1SM",
    },
    {
      title: "Holi Festival in Vrindavan (360°)",
      url: "https://www.youtube.com/embed/Y3LQ2G2JV2g",
    },
  ],
  images: [
    {
      title: "Taj Mahal, Agra",
      src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Hawa Mahal, Jaipur",
      src: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Backwaters, Kerala",
      src: "https://images.unsplash.com/photo-1602785164804-77f2b46a3a74?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Varanasi Ghats",
      src: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1600&auto=format&fit=crop",
    },
  ],
};

const regions = [
  {
    name: "North",
    img: "https://images.unsplash.com/photo-1549893079-842e6e66ea0a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "West",
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "South",
    img: "https://images.unsplash.com/photo-1545243424-0ce743321e11?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "East",
    img: "https://images.unsplash.com/photo-1524499982521-1ffb7f17fd3f?q=80&w=1200&auto=format&fit=crop",
  },
];

const themes = [
  { name: "Festivals", color: "from-[hsl(30,95%,55%)] to-[hsl(7,85%,55%)]" },
  {
    name: "Art & Dance",
    color: "from-[hsl(210,90%,45%)] to-[hsl(230,80%,55%)]",
  },
  { name: "Cuisine", color: "from-[hsl(160,70%,40%)] to-[hsl(140,65%,45%)]" },
  {
    name: "Heritage Sites",
    color: "from-[hsl(42,95%,55%)] to-[hsl(30,90%,55%)]",
  },
];

export default function Index() {
  const recs = useMemo(() => {
    const picks = [
      "Explore Durga Puja in Kolkata",
      "Walk through Hampi's ruins",
      "Taste Hyderabadi biryani",
      "Listen to Hindustani ragas",
      "Discover Chola bronze art",
    ];
    return picks.sort(() => 0.5 - Math.random()).slice(0, 3);
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 opacity-90">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.6) 35%, rgba(255,255,255,0.4) 100%), url(https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=2000&auto=format&fit=crop)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        <div className="container py-16 md:py-24">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Discover India's living heritage
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-prose">
                Dive into regions, festivals, art, cuisine, and monuments
                through interactive maps, immersive tours, and a rich multimedia
                library.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-primary">
                  <Link to="/map">Explore Interactive Map</Link>
                </Button>
                <Button asChild variant="secondary">
                  <a href="#tours">Virtual Tours</a>
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                {recs.map((r) => (
                  <span key={r} className="rounded-full bg-muted px-3 py-1">
                    {r}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl border bg-card p-2 md:p-4 shadow-sm">
              <MapWidget height={360} />
              <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                <span>Click markers to preview hotspots</span>
                <Link to="/map" className="underline hover:text-primary">
                  Open full map
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions & Themes */}
      <section className="container py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Explore by Region</h2>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {regions.map((r) => (
                <Link
                  key={r.name}
                  to="/resources"
                  className="group relative overflow-hidden rounded-xl border"
                >
                  <img
                    src={r.img}
                    alt={r.name}
                    className="h-36 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-2 left-2 rounded bg-background/80 px-2 py-1 text-sm font-semibold">
                    {r.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Explore by Theme</h2>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {themes.map((t) => (
                <Link
                  key={t.name}
                  to="/resources"
                  className={`group relative rounded-xl border bg-gradient-to-br ${t.color} p-4 text-white`}
                >
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <p className="mt-2 text-white/80 text-sm max-w-[28ch]">
                    Curated articles, media, and maps for {t.name.toLowerCase()}
                    .
                  </p>
                  <span className="pointer-events-none absolute right-3 top-3 text-white/70">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tours */}
      <section id="tours" className="border-y bg-muted/30">
        <div className="container py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-2xl font-bold">Virtual Tours</h2>
            <p className="text-sm text-muted-foreground max-w-prose">
              Immerse yourself in monuments and festivals. Support for AR/VR
              devices will be added via ARCore/ARKit modules.
            </p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="aspect-video overflow-hidden rounded-xl border bg-black">
              <iframe
                className="h-full w-full"
                src={media.videos[1].url}
                title={media.videos[1].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="rounded-xl border p-6 bg-card">
              <h3 className="text-xl font-semibold">
                Launch interactive tours
              </h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-prose">
                Try a sample 360° experience now, with upcoming options for
                headset and mobile AR. Connect a backend to manage tour metadata
                and analytics.
              </p>
              <div className="mt-4 flex gap-3">
                <Button asChild>
                  <Link to="/library">Browse Tours</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/resources">How it works</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multimedia Library */}
      <section className="container py-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Multimedia Library</h2>
          <Link to="/library" className="text-sm underline hover:text-primary">
            View all
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {media.images.map((m) => (
            <figure
              key={m.title}
              className="group overflow-hidden rounded-xl border bg-card"
            >
              <img
                src={m.src}
                alt={m.title}
                className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="p-3 text-sm">{m.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Educational Resources */}
      <section className="border-t bg-muted/30">
        <div className="container py-12">
          <h2 className="text-2xl font-bold">Educational Resources</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Timeline of Indian History",
              "Epics: Ramayana & Mahabharata",
              "Schools of Indian Philosophy",
            ].map((t) => (
              <article key={t} className="rounded-xl border bg-card p-5">
                <h3 className="font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Detailed articles with citations, timelines, and maps to help
                  students and researchers.
                </p>
                <Link
                  to="/resources"
                  className="mt-3 inline-flex text-sm underline hover:text-primary"
                >
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="container py-14">
        <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-[hsl(30,95%,55%)] via-[hsl(160,70%,40%)] to-[hsl(210,90%,45%)] p-8 text-white">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-extrabold">
              Join the community
            </h2>
            <p className="mt-2 max-w-prose text-white/90">
              Share stories, crowdsource cultural hotspots, and upload your
              photos, videos, and audio to preserve local traditions.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild variant="secondary">
                <Link to="/forum">Go to Forum</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-white/10 text-white hover:bg-white/20"
              >
                <Link to="/library">Contribute Media</Link>
              </Button>
            </div>
          </div>
          <svg
            className="absolute -right-10 -top-10 h-48 w-48 opacity-30"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#fff"
              d="M39.7,-58.7C51.1,-52.1,61.2,-42.6,67.3,-30.8C73.4,-19,75.4,-4.9,73.3,8.8C71.2,22.5,65,35.8,55.5,46.3C45.9,56.9,33,64.7,20.1,65.4C7.2,66.1,-5.6,59.8,-19,55.7C-32.3,51.6,-46.1,49.8,-56.1,42.4C-66.1,35,-72.3,22,-73.6,8.1C-74.9,-5.9,-71.2,-20.7,-63.2,-32.1C-55.2,-43.6,-42.8,-51.7,-30.7,-59.3C-18.6,-66.8,-7.8,-73.9,3.6,-78.6C15.1,-83.3,30.2,-85.4,39.7,-58.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </section>
    </main>
  );
}
