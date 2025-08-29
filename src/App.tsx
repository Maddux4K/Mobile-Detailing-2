import React, { useEffect, useState } from "react";
import "./index.css";

// Preston Hollow Mobile Detailing — Full Website
// Sections: Nav, Hero, Services, Before/After, Materials (generic, no brands), Booking (Square embed), Footer
// Exported as a single React component for Vite + Tailwind projects

// --- Business Config ---
const BUSINESS_NAME = "Preston Hollow Mobile Car Detailing";
const BUSINESS_TAGLINE = "Professional detailing at your doorstep";
const SERVICE_AREA = "Preston Hollow • North Dallas • Park Cities";
const BUSINESS_EMAIL = "prestonhollowdetailing@gmail.com";
const BUSINESS_PHONE_CALL = "+12148102476"; // tel: link

// --- Pricing ---
const PRICING = {
  exteriorOnly: 55,
  standardInterior: 99,
  premiumInterior: 189,
  fullStandard: 129,
  fullPremium: 229,
};

// --- Square embed snippet (loads the booking widget inside #square-booking-host) ---
const SQUARE_WIDGET_SRC =
  "https://app.squareup.com/appointments/buyer/widget/40rsi5zy5ksrjt/LKV2VGK3PZ4G4.js";

// --- Helpers ---
function currency(n: number) {
  return `$${n.toFixed(0)}`;
}
function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

// --- UI primitives ---
function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={cx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}
function SectionHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-10">
      {eyebrow && <div className="text-xs tracking-widest uppercase font-semibold text-gray-500">{eyebrow}</div>}
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2">{title}</h2>
      {subtitle && <p className="mt-3 text-base sm:text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
}

// --- Nav & Hero ---
function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
      <Container className="flex items-center justify-between h-16">
        <div className="font-semibold">{BUSINESS_NAME}</div>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-gray-900 text-gray-600">Services</a>
          <a href="#gallery" className="hover:text-gray-900 text-gray-600">Before/After</a>
          <a href="#materials" className="hover:text-gray-900 text-gray-600">Materials</a>
          <a href="#booking" className="hover:text-gray-900 text-gray-600">Book</a>
        </nav>
        <a href={`tel:${BUSINESS_PHONE_CALL}`} className="inline-flex items-center rounded-xl border px-3 py-1.5 text-sm font-medium hover:bg-gray-50">Call / Text</a>
      </Container>
    </header>
  );
}
function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <Container className="py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">{BUSINESS_TAGLINE}</h1>
          <p className="mt-4 text-lg text-gray-600">We come to you with a careful process — easy booking, transparent pricing, and results that make your car feel new again.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#booking" className="inline-flex items-center rounded-xl bg-black px-5 py-3 text-white font-semibold shadow hover:bg-gray-800">Book a Detail</a>
            <a href="#services" className="inline-flex items-center rounded-xl border px-5 py-3 font-semibold hover:bg-gray-50">View Services & Pricing</a>
          </div>
          <div className="mt-6 text-sm text-gray-500">Serving: {SERVICE_AREA}</div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-tr from-black/5 to-transparent rounded-3xl blur-2xl" />
          <div className="relative h-64 sm:h-80 rounded-3xl shadow-lg ring-1 ring-black/5 bg-gray-200 flex items-center justify-center text-gray-500">Showcase Photo</div>
        </div>
      </Container>
    </div>
  );
}

// --- Services ---
function Services() {
  const services = [
    {
      name: "Exterior Only",
      price: currency(PRICING.exteriorOnly),
      duration: "~2 hours",
      features: [
        "Foam cannon wash & rinse",
        "Wheels, tires, and tire shine",
        "Windows cleaned",
        "Spray‑on wax/sealant included",
      ],
    },
    {
      name: "Standard Interior",
      price: currency(PRICING.standardInterior),
      duration: "~2 hours",
      features: [
        "Full vacuum (carpets, seats, trunk)",
        "Dashboard, doors, mats, windows cleaned",
      ],
    },
    {
      name: "Premium Interior",
      price: currency(PRICING.premiumInterior),
      duration: "~2 hours",
      features: [
        "Steam cleaning & sanitation",
        "Seat shampoo/extraction (fabric)",
        "Leather clean & condition",
        "Pet hair removal",
      ],
    },
    {
      name: "Standard Detail (Interior + Exterior)",
      price: currency(PRICING.fullStandard),
      duration: "~4 hours",
      features: [
        "Foam cannon wash & rinse",
        "Wheels, tires, and tire shine",
        "Windows cleaned inside & out",
        "Interior vacuum & wipe‑down (dash, doors, mats)",
        "Light dusting throughout",
        "Spray‑on wax/sealant included",
      ],
    },
    {
      name: "Premium Detail (Interior + Exterior)",
      price: currency(PRICING.fullPremium),
      duration: "~5 hours",
      features: [
        "Everything in Standard",
        "Steam cleaning (vents, panels, deep sanitation)",
        "Seat shampoo & extraction (fabric)",
        "Leather cleaning & conditioning",
        "Extreme pet hair removal",
        "Added paint protection",
      ],
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-gray-50">
      <Container>
        <SectionHeader eyebrow="Services & Pricing" title="Transparent packages, real results" subtitle="Maintenance Detail: book within 6 weeks of your last full detail and save 50% on the same package." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <div key={svc.name} className="rounded-2xl border bg-white p-6 shadow-sm flex flex-col">
              <h3 className="text-lg font-semibold">{svc.name}</h3>
              <p className="mt-1 text-gray-600">{svc.duration}</p>
              <p className="mt-2 text-2xl font-extrabold">{svc.price}</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700 flex-1 list-disc pl-5">
                {svc.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// --- Before/After ---
function BeforeAfterSlider({ before, after, label = "Detail" }: { before: string; after: string; label?: string }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border bg-black">
      <img src={after} className="absolute inset-0 w-full h-full object-cover" alt={`${label} after`} />
      <img src={before} className="absolute inset-0 w-full h-full object-cover" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} alt={`${label} before`} />
      <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="w-1 h-full bg-white/70 shadow-[0_0_0_1px_rgba(0,0,0,0.2)]" />
      </div>
      <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(parseInt((e.target as HTMLInputElement).value))} className="absolute bottom-3 left-1/2 -translate-x-1/2 w-4/5" />
    </div>
  );
}
function Gallery() {
  const BEFORE = "https://images.unsplash.com/photo-1607868544592-0d2f8e9f4097?q=80&w=1200&auto=format&fit=crop";
  const AFTER = "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1200&auto=format&fit=crop";
  return (
    <section id="gallery" className="py-16 sm:py-24">
      <Container>
        <SectionHeader eyebrow="Results" title="Before / After" subtitle="Slide to see the difference our process makes." />
        <div className="grid lg:grid-cols-2 gap-6">
          <BeforeAfterSlider before={BEFORE} after={AFTER} label="Exterior Gloss" />
          <BeforeAfterSlider before={BEFORE} after={AFTER} label="Interior Refresh" />
        </div>
      </Container>
    </section>
  );
}

// --- Materials (generic; no brand names) ---
const MATERIALS = [
  { use: "Trim & tires", explains: "Water‑based dressing for a deep, satin finish without sling; safe on rubber, plastic, and vinyl." },
  { use: "Glass", explains: "Streak‑free cleaner for interior & exterior windows." },
  { use: "Sanitation", explains: "High‑temp steam lifts grime in vents, crevices, and fabrics while neutralizing odors." },
  { use: "Interior protectant", explains: "UV‑guard helps prevent fading and cracking on plastics & vinyl." },
  { use: "Leather care", explains: "Cleans and conditions with a natural, non‑shiny finish; optional fresh scent on request." },
  { use: "Upholstery", explains: "Fabric guard repels spills and makes future cleanups easier." },
  { use: "3‑step stain system", explains: "Breaks down spots, lifts stains, then neutralizes residues for a true clean." },
  { use: "Interior cleaner", explains: "Gentle cleaner for dashboards, door panels, and touch surfaces." },
  { use: "Textiles", explains: "Low‑foam cleaner safe for Alcantara and delicate fabrics." },
  { use: "Wheels", explains: "Acid‑free wheel & tire cleaner that cuts through brake dust and browning." },
  { use: "Paint protectant", explains: "Spray sealant adds gloss and hydrophobics for weeks." },
  { use: "All‑purpose cleaner", explains: "APC/degreaser for tough grime in safe dilutions." },
  { use: "Pre‑wash", explains: "Thick foam loosens dirt to reduce wash‑induced marring." },
];
function Materials() {
  return (
    <section id="materials" className="py-16 sm:py-24 bg-gray-50">
      <Container>
        <SectionHeader eyebrow="Materials we use" title="Professional products, transparent processes" subtitle="Here’s exactly what we use and why — no brand names listed to keep our process unique." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MATERIALS.map((m, i) => (
            <div key={i} className="rounded-2xl border p-5 bg-white">
              <div className="text-sm text-gray-500">{m.use}</div>
              <div className="text-lg font-semibold">{m.use}</div>
              <p className="mt-2 text-sm text-gray-700">{m.explains}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// --- Booking (Square embed, always embedded) ---
function Booking() {
  useEffect(() => {
    // Inject Square widget immediately on mount
    const existing = document.querySelector(`script[src="${SQUARE_WIDGET_SRC}"]`);
    if (!existing) {
      const s = document.createElement("script");
      s.src = SQUARE_WIDGET_SRC;
      s.async = true;
      s.onerror = () => console.error("Square widget failed to load");
      const host = document.getElementById("square-booking-host");
      if (host) host.appendChild(s);
      else document.body.appendChild(s);
    }
  }, []);

  return (
    <section id="booking" className="py-16 sm:py-24">
      <Container>
        <SectionHeader eyebrow="Book Online" title="Secure your spot with Square" subtitle="Instant confirmation is emailed to you." />
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="relative">
            <div id="square-booking-host" className="rounded-2xl border p-2 bg-white min-h-[360px]" />
          </div>
          <p className="text-xs text-gray-500 text-center">
            Need help? Text us at <a className="underline" href={`tel:${BUSINESS_PHONE_CALL}`}>{BUSINESS_PHONE_CALL}</a> or email {" "}
            <a className="underline" href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>.
          </p>
        </div>
      </Container>
    </section>
  );
}

// --- Footer ---
function Footer() {
  return (
    <footer className="border-t mt-16">
      <Container className="py-10 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-semibold">{BUSINESS_NAME}</div>
          <div className="text-gray-500">{BUSINESS_TAGLINE}</div>
        </div>
        <div className="text-gray-500">© {new Date().getFullYear()} Preston Hollow Mobile Detailing. All rights reserved.</div>
      </Container>
    </footer>
  );
}

// --- App ---
export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Nav />
      <Hero />
      <Services />
      <Gallery />
      <Materials />
      <Booking />
      <Footer />
    </div>
  );
}
