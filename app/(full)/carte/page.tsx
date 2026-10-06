// app/carte/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { FaCheck, FaPlus, FaSearch, FaStar } from "react-icons/fa";
import { useCart } from "../context/Cartcontext";
import SideCart from "@/components/sidebar/SideCart";
import { listProductsAction } from "@/lib/actions/products";

type Product = {
  id: number;
  nom: string;
  image: string;
  description: string;
  prix: number;
  categorie: string;
  populaire?: boolean;
};

type ApiProduct = {
  id?: string | number | null;
  nom?: string | null;
  image?: string | null;
  description?: string | null;
  prix?: string | number | null;
  categorie_nom?: string | null;
  categorie_id?: string | number | null;
  populaire?: boolean | string | number | null;
};

const fallbackProducts: Product[] = [
  {
    id: 1,
    nom: "Klassischer Espresso",
    image: "/caffee.jpg",
    description: "Ein kräftiger, vollmundiger Espresso",
    prix: 3.5,
    categorie: "Heißgetränke",
    populaire: true,
  },
  {
    id: 2,
    nom: "Latte macchiato",
    image: "/creme.jpg",
    description: "Gedämpfte Milch, Espresso und cremiger Milchschaum",
    prix: 4.5,
    categorie: "Heißgetränke",
    populaire: true,
  },
  {
    id: 3,
    nom: "Tropischer Smoothie",
    image: "/capuccino.jpg",
    description: "Mango, Ananas und Passionsfrucht",
    prix: 5.5,
    categorie: "Alkoholfrei",
    populaire: true,
  },
  {
    id: 4,
    nom: "Cappuccino",
    image: "/capuccino.jpg",
    description: "Espresso, heiße Milch und cremiger Milchschaum",
    prix: 4.2,
    categorie: "Heißgetränke",
    populaire: false,
  },
  {
    id: 5,
    nom: "Heiße Schokolade",
    image: "/creme.jpg",
    description: "Zartschmelzende belgische Schokolade mit Schlagsahne",
    prix: 4.8,
    categorie: "Heißgetränke",
    populaire: false,
  },
  {
    id: 6,
    nom: "Grüner Sencha-Tee",
    image: "/caffee.jpg",
    description: "Feiner und erfrischender japanischer Grüntee",
    prix: 3.9,
    categorie: "Heißgetränke",
    populaire: false,
  },
];

// Pour passer en Fcfa : `${Math.round(n).toLocaleString("fr-FR")} Fcfa`
const formatPrice = (n: number) =>
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(n);

// Recherche insensible aux accents et à la casse
const normalize = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export default function CartePage() {
  const [active, setActive] = useState("Alle");
  const [query, setQuery] = useState("");
  const [produits, setProduits] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    void listProductsAction().then((result) => {
      setLoading(false);
      if (!result.success) {
        setError("Die Produkte konnten nicht geladen werden.");
        setProduits(fallbackProducts);
        return;
      }
      setProduits(
        result.data.map((product: ApiProduct) => ({
          id: Number(product.id ?? 0),
          nom: String(product.nom ?? "Produkt ohne Namen"),
          image: String(product.image ?? "/caffee.jpg"),
          description: String(
            product.description ?? "Mit Sorgfalt in unserem Café zubereitet"
          ),
          prix: Number(product.prix ?? 0),
          categorie: String(product.categorie_nom ?? product.categorie_id ?? "Sonstiges"),
          populaire: Boolean(product.populaire),
        }))
      );
    });
  }, []);

  // Compteurs par catégorie (sur tous les produits)
  const counts = useMemo(() => {
    const map = new Map<string, number>();
    produits.forEach((p) => map.set(p.categorie, (map.get(p.categorie) ?? 0) + 1));
    return map;
  }, [produits]);

  const categories = useMemo(() => ["Alle", ...Array.from(counts.keys())], [counts]);

  // Filtre catégorie + recherche
  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return produits.filter(
      (p) =>
        (active === "Alle" || p.categorie === active) &&
        (q === "" || normalize(`${p.nom} ${p.description}`).includes(q))
    );
  }, [produits, active, query]);

  const grouped = useMemo(() => {
    const map = new Map<string, Product[]>();
    filtered.forEach((p) => map.set(p.categorie, [...(map.get(p.categorie) ?? []), p]));
    return Array.from(map.entries());
  }, [filtered]);

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
    setIsCartOpen(true);
  };

  const resetFilters = () => {
    setActive("Alle");
    setQuery("");
  };

  return (
    <div className="min-h-screen bg-[#FDFBF8] text-[#3C2A21] antialiased selection:bg-[#D4A574]/40">
      {/* Animations & motifs */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .reveal { animation: fadeUp .8s cubic-bezier(.22,1,.36,1) both; }
        .d-1 { animation-delay: .08s } .d-2 { animation-delay: .16s }
        .d-3 { animation-delay: .24s } .d-4 { animation-delay: .32s }
        .dotgrid {
          background-image: radial-gradient(rgba(60,42,33,.13) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal { animation: none; }
        }
      `}</style>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-[#3C2A21]/8 bg-[#F7F2EA]">
        <div className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-[#D4A574]/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-[360px] w-[360px] rounded-full bg-[#B8865B]/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 dotgrid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center md:py-24">
          <div className="reveal flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#B8865B]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8865B]">
              Unsere Speisekarte
            </span>
            <span className="h-px w-10 bg-[#B8865B]" />
          </div>

          <h1 className="reveal d-1 mt-6 font-serif text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Mit Leidenschaft
            <br />
            <span className="italic text-[#B8865B]">zubereitete Köstlichkeiten.</span>
          </h1>

          <p className="reveal d-2 mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#3C2A21]/65">
            Spezialitätenkaffee, feine Tees und süße Köstlichkeiten – entdecken Sie unsere
            Highlights, frisch auf Bestellung zubereitet.
          </p>

          {/* Recherche */}
          <div className="reveal d-3 relative mx-auto mt-10 max-w-lg">
            <FaSearch
              aria-hidden="true"
              className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#3C2A21]/40"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Kaffee, Tee oder Gebäck suchen …"
              aria-label="Produkt suchen"
              className="w-full rounded-full border border-[#3C2A21]/12 bg-white/90 py-4 pl-12 pr-5 text-sm text-[#3C2A21] shadow-[0_10px_30px_-15px_rgba(60,42,33,0.35)] backdrop-blur placeholder:text-[#3C2A21]/40 outline-none transition-all duration-200 focus:border-[#B8865B] focus:bg-white focus:ring-4 focus:ring-[#B8865B]/15"
            />
          </div>

          {/* Stats */}
          <dl className="reveal d-4 mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-x-6 gap-y-5 border-t border-[#3C2A21]/10 pt-8">
            {[
              { label: "Produkte", value: loading ? "—" : String(produits.length) },
              { label: "Kategorien", value: loading ? "—" : String(categories.length - 1) },
              { label: "Kundenbewertung", value: "4,9 / 5" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-[#3C2A21]/45">
                  {s.label}
                </dt>
                <dd className="mt-1 font-serif text-xl font-bold tabular-nums sm:text-2xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ================= FILTRES ================= */}
      <div className="sticky top-0 z-40 border-b border-[#3C2A21]/8 bg-[#FDFBF8]/85 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex justify-start gap-2 overflow-x-auto py-4 [scrollbar-width:none] md:justify-center [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => {
              const isActive = active === cat;
              const count = cat === "Alle" ? produits.length : counts.get(cat) ?? 0;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  aria-pressed={isActive}
                  className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574] ${
                    isActive
                      ? "bg-[#3C2A21] text-white shadow-[0_10px_24px_-12px_rgba(60,42,33,0.75)]"
                      : "bg-white text-[#3C2A21]/70 ring-1 ring-[#3C2A21]/10 hover:-translate-y-0.5 hover:text-[#3C2A21] hover:ring-[#3C2A21]/30"
                  }`}
                >
                  {cat}
                  {!loading && (
                    <span
                      className={`rounded-full px-2 py-0.5 text-[11px] font-semibold tabular-nums ${
                        isActive ? "bg-white/20 text-white" : "bg-[#F0E6D2] text-[#3C2A21]/70"
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= CONTENU ================= */}
      <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        {error && (
          <p
            role="alert"
            className="mb-10 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {error} — Demo-Produkte werden angezeigt.
          </p>
        )}

        {loading ? (
          <SkeletonGrid />
        ) : filtered.length === 0 ? (
          <EmptyState onReset={resetFilters} />
        ) : (
          <>
            {query.trim() !== "" && (
              <p className="mb-10 text-sm text-[#3C2A21]/55" aria-live="polite">
                <span className="font-semibold text-[#3C2A21]">{filtered.length}</span>{" "}
                {filtered.length === 1 ? " Ergebnis für " : " Ergebnisse für "}
                „&nbsp;{query.trim()}&nbsp;“
              </p>
            )}

            <div className="space-y-20 md:space-y-24">
              {grouped.map(([categorie, items]) => (
                <section key={categorie}>
                  {active === "Alle" && (
                    <div className="mb-8 flex items-end justify-between gap-4 border-b border-[#3C2A21]/10 pb-5">
                      <div className="flex items-center gap-4">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F0E6D2]">
                          <span className="font-serif text-lg font-bold text-[#3C2A21]">
                            {categorie.charAt(0).toUpperCase()}
                          </span>
                        </span>
                        <div>
                          <h2 className="font-serif text-2xl font-bold md:text-3xl">
                            {categorie}
                          </h2>
                          <p className="text-xs font-medium uppercase tracking-wider text-[#3C2A21]/45">
                            {items.length} {items.length === 1 ? "Produkt" : "Produkte"}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setActive(categorie);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="group hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-[#B8865B] transition-colors hover:text-[#3C2A21] sm:inline-flex"
                      >
                        Alle ansehen
                        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                          →
                        </span>
                      </button>
                    </div>
                  )}

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {items.map((item) => (
                      <ProductCard key={item.id} item={item} onAdd={() => handleAddToCart(item)} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </>
        )}
      </main>

      <SideCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}

/* ================= PRODUCT CARD ================= */
function ProductCard({ item, onAdd }: { item: Product; onAdd: () => void }) {
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const t = setTimeout(() => setAdded(false), 1600);
    return () => clearTimeout(t);
  }, [added]);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#3C2A21]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A574]/60 hover:shadow-[0_28px_60px_-30px_rgba(60,42,33,0.45)]">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F0E6D2]/40">
        <Image
          src={item.image}
          alt={item.nom}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Dégradé bas */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {item.populaire && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#3C2A21] shadow-[0_6px_18px_-8px_rgba(60,42,33,0.5)] backdrop-blur">
            <FaStar className="h-2.5 w-2.5 text-[#D4A574]" />
            Beliebt
          </span>
        )}
      </div>

      {/* Contenu */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-lg font-bold leading-snug text-[#3C2A21]">{item.nom}</h3>
        <p className="mt-1.5 line-clamp-2 min-h-[2.5rem] text-sm leading-relaxed text-[#3C2A21]/55">
          {item.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <span className="font-serif text-xl font-bold tabular-nums text-[#3C2A21]">
            {formatPrice(item.prix)}
          </span>

          <button
            onClick={() => {
              onAdd();
              setAdded(true);
            }}
            aria-label={`${item.nom} in den Warenkorb legen`}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574] ${
              added
                ? "bg-[#D4A574] text-[#3C2A21]"
                : "bg-[#3C2A21] text-white hover:-translate-y-0.5 hover:bg-[#2A1D16] hover:shadow-[0_12px_24px_-12px_rgba(60,42,33,0.8)]"
            }`}
          >
            {added ? <FaCheck className="h-3 w-3" /> : <FaPlus className="h-3 w-3" />}
            {added ? "Hinzugefügt" : "Hinzufügen"}
          </button>
        </div>
      </div>
    </article>
  );
}

/* ================= EMPTY STATE ================= */
function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="reveal mx-auto max-w-md py-20 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#F0E6D2]">
        <FaSearch className="h-7 w-7 text-[#3C2A21]/50" />
      </div>
      <h2 className="mt-6 font-serif text-2xl font-bold">Keine Produkte gefunden</h2>
      <p className="mt-2 text-[#3C2A21]/55">
        Verwenden Sie einen anderen Suchbegriff oder wählen Sie eine andere Kategorie.
      </p>
      <button
        onClick={onReset}
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#3C2A21] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_-12px_rgba(60,42,33,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2A1D16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574]"
      >
        Gesamte Speisekarte anzeigen
      </button>
    </div>
  );
}

/* ================= SKELETON ================= */
function SkeletonGrid() {
  return (
    <div
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      aria-busy="true"
      aria-label="Speisekarte wird geladen"
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse overflow-hidden rounded-3xl border border-[#3C2A21]/8 bg-white"
        >
          <div className="aspect-[4/3] bg-[#F0E6D2]/50" />
          <div className="space-y-3 p-5">
            <div className="h-4 w-2/3 rounded bg-[#F0E6D2]/60" />
            <div className="h-3 w-full rounded bg-[#F0E6D2]/50" />
            <div className="h-3 w-4/5 rounded bg-[#F0E6D2]/50" />
            <div className="flex items-center justify-between pt-4">
              <div className="h-5 w-16 rounded bg-[#F0E6D2]/60" />
              <div className="h-9 w-24 rounded-full bg-[#F0E6D2]/60" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}