// app/a-propos/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaCoffee,
  FaHeart,
  FaAward,
  FaUsers,
  FaLeaf,
  FaArrowRight,
  FaQuoteLeft,
  FaCheckCircle,
  FaSeedling,
  FaMugHot,
} from "react-icons/fa";

const valeurs = [
  {
    icon: FaLeaf,
    title: "Nachhaltigkeit",
    description:
      "Wir verpflichten uns, in allen unseren Zubereitungen lokale und nachhaltige Produkte zu verwenden.",
  },
  {
    icon: FaAward,
    title: "Exzellenz",
    description:
      "Das Streben nach Perfektion in jedem Detail, von der Auswahl der Bohnen bis zur Präsentation.",
  },
  {
    icon: FaHeart,
    title: "Leidenschaft",
    description:
      "Unsere Liebe zum Kaffee spürt man in jedem Getränk, das wir mit Sorgfalt zubereiten.",
  },
  {
    icon: FaUsers,
    title: "Gemeinschaft",
    description:
      "Einen herzlichen Ort schaffen, an dem sich jeder wie zu Hause fühlt.",
  },
];

const equipe = [
  {
    nom: "Sophie Martin",
    role: "Gründerin & Chef-Baristin",
    initiales: "SM",
    description: "15 Jahre Erfahrung in der Kunst des Kaffees",
  },
  {
    nom: "Thomas Lefebvre",
    role: "Röstmeister",
    initiales: "TL",
    description: "Spezialist für unsere Hausmischungen",
  },
  {
    nom: "Camille Dubois",
    role: "Mixologin",
    initiales: "CD",
    description: "Schöpferin unserer Signature-Cocktails",
  },
  {
    nom: "Lucas Moreau",
    role: "Serviceleiter",
    initiales: "LM",
    description: "Garant für Ihr einzigartiges Erlebnis",
  },
];

const chiffres = [
  { valeur: "50+", label: "Einzigartige Getränke" },
  { valeur: "15", label: "Jahre Erfahrung" },
  { valeur: "10 000+", label: "Zufriedene Kunden" },
  { valeur: "15", label: "Lieferländer" },
];

const jalons = [
  {
    annee: "2010",
    titre: "Eine Idee, geboren aus Leidenschaft",
    texte:
      "Sophie Martin eröffnet eine kleine Kaffeebar mit nur einer Überzeugung: den besten Espresso der Stadt zu servieren.",
  },
  {
    annee: "2015",
    titre: "Die hauseigene Rösterei",
    texte:
      "Installation unserer ersten handwerklichen Röstmaschine. Seitdem werden unsere Bohnen jede Woche vor Ort geröstet.",
  },
  {
    annee: "2020",
    titre: "Eine wachsende Gemeinschaft",
    texte:
      "Ein neu gestalteter, herzlicherer Raum zum Arbeiten, Treffen und Teilen eines besonderen Moments.",
  },
  {
    annee: "Heute",
    titre: "Immer neugierig",
    texte:
      "Neue Kreationen, Live-Events und lokale Kooperationen – das Abenteuer geht weiter.",
  },
];

const engagements = [
  "100 % Arabica-Bohnen, vor Ort geröstet",
  "Lokale Produzenten und fairer Handel",
  "Kein Einwegplastik im Lokal",
  "Laufende Weiterbildung unserer Baristas",
];

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF8] text-[#3C2A21] antialiased selection:bg-[#D4A574]/40">
      {/* Animations & motifs */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatY {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-10px); }
        }
        .reveal { animation: fadeUp .9s cubic-bezier(.22,1,.36,1) both; }
        .d-1{animation-delay:.1s} .d-2{animation-delay:.2s}
        .d-3{animation-delay:.3s} .d-4{animation-delay:.4s}
        .dotgrid {
          background-image: radial-gradient(rgba(60,42,33,.13) 1px, transparent 1px);
          background-size: 26px 26px;
        }
        .floaty { animation: floatY 6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .reveal, .floaty { animation: none; }
        }
      `}</style>

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[78vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-hero.jpg"
            alt="Atmosphäre im Café"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2A1D16]/92 via-[#3C2A21]/75 to-[#3C2A21]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F140E]/70 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <div className="reveal flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4A574]" />
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#D4A574]">
                Unsere Geschichte
              </span>
            </div>

            <h1 className="reveal d-1 mt-6 font-serif text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl">
              Seit 2010,
              <br />
              <span className="italic text-[#D4A574]">die Kunst des Kaffees neu erfunden.</span>
            </h1>

            <p className="reveal d-2 mt-6 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
              Ein Ort, geboren aus einer tiefen Leidenschaft für das Kaffeehandwerk, an dem
              Tradition und Innovation in jeder Tasse aufeinandertreffen.
            </p>

            <div className="reveal d-3 mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/carte"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A574] px-8 py-4 text-sm font-semibold text-[#3C2A21] shadow-[0_20px_40px_-15px_rgba(212,165,116,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Karte entdecken
                <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#histoire"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Unser Weg
              </a>
            </div>
          </div>
        </div>

        {/* Badge flottant */}
        <div className="pointer-events-none absolute bottom-10 right-6 z-10 hidden lg:block">
          <div className="floaty rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
            <FaCoffee className="h-5 w-5 text-[#D4A574]" />
            <p className="mt-3 font-serif text-2xl font-bold text-white">15 Jahre</p>
            <p className="mt-0.5 text-xs uppercase tracking-wider text-white/60">
              Know-how
            </p>
          </div>
        </div>
      </section>

      {/* ================= BANDEAU CHIFFRES ================= */}
      <section className="border-b border-[#3C2A21]/8 bg-[#F7F2EA]">
        <div className="mx-auto max-w-6xl px-6">
          <dl className="grid grid-cols-2 divide-[#3C2A21]/8 md:grid-cols-4 md:divide-x">
            {chiffres.map((c, i) => (
              <div
                key={c.label}
                className={`px-4 py-10 text-center ${
                  i < 2 ? "border-b border-[#3C2A21]/8 md:border-b-0" : ""
                }`}
              >
                <dd className="font-serif text-4xl font-bold tabular-nums text-[#3C2A21] md:text-5xl">
                  {c.valeur}
                </dd>
                <dt className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#3C2A21]/50">
                  {c.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ================= HISTOIRE ================= */}
      <section id="histoire" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Texte */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#B8865B]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8865B]">
                  Unsere Philosophie
                </span>
              </div>

              <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
                Die Kunst des Kaffees,
                <br />
                <span className="italic text-[#B8865B]">neu erfunden.</span>
              </h2>

              <div className="mt-7 space-y-5 text-lg leading-relaxed text-[#3C2A21]/65">
                <p>
                  TAKE & GO wurde 2010 von Sophie Martin gegründet – aus einer tiefen Leidenschaft
                  für das Kaffeehandwerk und dem Wunsch, einen einzigartigen Ort zu schaffen, an
                  dem Tradition und Innovation aufeinandertreffen.
                </p>
                <p>
                  Unser Haus hat sich schnell als feste Adresse etabliert, dank unseres Anspruchs
                  an Qualität, Nachhaltigkeit und ein außergewöhnliches Kundenerlebnis.
                </p>
                <p>
                  Heute sind wir stolz darauf, zu den renommiertesten Cafés zu gehören – bekannt
                  für unsere Expertise und unseren innovativen Umgang mit koffeinhaltigen
                  Getränken.
                </p>
              </div>
            </div>

            {/* Carte citation */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#D4A574]/30 to-transparent blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl bg-[#3C2A21] p-8 text-white shadow-[0_30px_70px_-35px_rgba(60,42,33,0.6)] md:p-10">
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#D4A574]/20 blur-3xl" />

                <FaQuoteLeft className="relative text-3xl text-[#D4A574]" />

                <p className="relative mt-6 font-serif text-xl leading-relaxed text-white/90 md:text-2xl">
                  Bei TAKE & GO glauben wir, dass jede Tasse Kaffee eine Geschichte erzählt. Von
                  der Plantage bis in Ihre Tasse achten wir darauf, dass jeder Schritt höchsten
                  Qualitäts- und Ethikstandards entspricht.
                </p>

                <div className="relative mt-8 flex items-center gap-4 border-t border-white/15 pt-6">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#D4A574] font-serif text-lg font-bold text-[#3C2A21]">
                    SM
                  </span>
                  <div>
                    <p className="font-serif text-base font-bold">Sophie Martin</p>
                    <p className="text-sm text-[#D4A574]">Gründerin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALEURS ================= */}
      <section className="relative overflow-hidden bg-[#F7F2EA] py-24">
        <div className="pointer-events-none absolute inset-0 dotgrid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#B8865B]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8865B]">
                Unsere Werte
              </span>
              <span className="h-px w-8 bg-[#B8865B]" />
            </div>
            <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
              Die Prinzipien, die
              <br />
              <span className="italic text-[#B8865B]">jedes unserer Handeln leiten.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valeurs.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-[#3C2A21]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A574]/60 hover:shadow-[0_28px_60px_-30px_rgba(60,42,33,0.45)]"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D4A574]/0 blur-2xl transition-all duration-500 group-hover:bg-[#D4A574]/25" />

                <div className="relative flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F0E6D2] to-[#E5D5BA] transition-transform duration-300 group-hover:scale-105">
                    <Icon className="text-xl text-[#3C2A21]" />
                  </span>
                  <span className="font-serif text-sm font-bold text-[#3C2A21]/20">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="relative mt-6 font-serif text-lg font-bold">{title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-[#3C2A21]/60">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PARCOURS / JALONS ================= */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#B8865B]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8865B]">
                Unser Weg
              </span>
              <span className="h-px w-8 bg-[#B8865B]" />
            </div>
            <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
              Fünfzehn Jahre
              <br />
              <span className="italic text-[#B8865B]">geteilter Leidenschaft.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Ligne verticale */}
            <div className="pointer-events-none absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-[#3C2A21]/15 via-[#3C2A21]/10 to-transparent md:left-1/2 md:block md:-translate-x-1/2" />

            <ol className="space-y-10">
              {jalons.map(({ annee, titre, texte }, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <li key={annee} className="relative md:grid md:grid-cols-2 md:gap-12">
                    {/* Point central */}
                    <span className="pointer-events-none absolute left-4 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-[#3C2A21] ring-4 ring-[#FDFBF8] md:left-1/2 md:block" />

                    {/* Contenu */}
                    <div
                      className={`relative md:col-span-1 ${
                        isLeft ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                      }`}
                    >
                      <div className="group rounded-3xl border border-[#3C2A21]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A574]/60 hover:shadow-[0_28px_60px_-30px_rgba(60,42,33,0.45)]">
                        <span className="inline-block rounded-full bg-[#F0E6D2] px-3 py-1 font-serif text-xs font-bold uppercase tracking-wider text-[#3C2A21]">
                          {annee}
                        </span>
                        <h3 className="mt-4 font-serif text-xl font-bold">{titre}</h3>
                        <p className="mt-2 leading-relaxed text-[#3C2A21]/60">{texte}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ================= ÉQUIPE ================= */}
      <section className="relative overflow-hidden bg-[#F7F2EA] py-24">
        <div className="pointer-events-none absolute inset-0 dotgrid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#B8865B]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8865B]">
                Das Team
              </span>
              <span className="h-px w-8 bg-[#B8865B]" />
            </div>
            <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
              Leidenschaftliche Menschen
              <br />
              <span className="italic text-[#B8865B]">für Sie im Einsatz.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {equipe.map((membre) => (
              <article
                key={membre.nom}
                className="group relative overflow-hidden rounded-3xl border border-[#3C2A21]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A574]/60 hover:shadow-[0_28px_60px_-30px_rgba(60,42,33,0.45)]"
              >
                {/* "Photo" stylisée */}
                <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#3C2A21] to-[#5A4738]">
                  <div className="absolute inset-0 opacity-[0.09] [background-image:radial-gradient(#F0E6D2_1px,transparent_1px)] [background-size:22px_22px]" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-6xl font-bold text-[#F0E6D2]/90 transition-transform duration-500 group-hover:scale-105">
                      {membre.initiales}
                    </span>
                  </div>

                  {/* Voile doré au survol */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#D4A574]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Icône décorative en haut */}
                  <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                    <FaMugHot className="h-3.5 w-3.5 text-[#D4A574]" />
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="font-serif text-lg font-bold leading-snug">{membre.nom}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#B8865B]">{membre.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#3C2A21]/55">
                    {membre.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ENGAGEMENTS ================= */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Visuel */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#D4A574]/30 to-transparent blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/70 shadow-[0_30px_70px_-35px_rgba(60,42,33,0.5)]">
                <Image src="/caffe.jpg" alt="Unser Engagement" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A1D16]/60 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/25 bg-white/15 p-5 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4A574]">
                      <FaSeedling className="h-4 w-4 text-[#3C2A21]" />
                    </span>
                    <div>
                      <p className="font-serif text-base font-bold text-white">
                        Nachhaltiges Engagement
                      </p>
                      <p className="text-xs text-white/70">
                        Lokal, fair und verantwortungsvoll
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Liste */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#B8865B]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8865B]">
                  Unsere Verpflichtungen
                </span>
              </div>

              <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
                Guter Geschmack,
                <br />
                <span className="italic text-[#B8865B]">ohne Kompromisse.</span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-[#3C2A21]/65">
                Weil ein großartiger Kaffee mit verantwortungsvollen Entscheidungen beginnt,
                wählen wir jeden Partner sorgfältig aus.
              </p>

              <ul className="mt-8 space-y-3">
                {engagements.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[#3C2A21]/75">
                    <FaCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#B8865B]" />
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#3C2A21] px-7 py-4 text-sm font-semibold text-white shadow-[0_16px_34px_-16px_rgba(60,42,33,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2A1D16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574]"
              >
                Besuchen Sie uns
                <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-[#3C2A21] px-8 py-16 text-center text-white md:px-16 md:py-20">
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#D4A574]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-[#B8865B]/20 blur-3xl" />

          <div className="relative">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#D4A574]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#D4A574]">
                Werden Sie Teil von uns
              </span>
              <span className="h-px w-8 bg-[#D4A574]" />
            </div>

            <h2 className="mx-auto max-w-2xl font-serif text-4xl font-bold leading-tight md:text-5xl">
              Ein Tisch wartet
              <br />
              <span className="italic text-[#D4A574]">bei uns auf Sie.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-lg text-white/65">
              Entdecken Sie unsere Karte, treten Sie ein und lassen Sie sich vom Erlebnis
              mitreißen.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/carte"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A574] px-7 py-4 text-sm font-semibold text-[#3C2A21] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Karte ansehen
                <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}