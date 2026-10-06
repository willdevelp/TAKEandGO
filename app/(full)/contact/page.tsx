"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Send,
  Coffee,
  Users,
  CreditCard,
  Wifi,
  Music,
  ParkingCircle,
  ChevronRight,
  ChevronDown,
  Navigation,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

/* ---------- Coordonnées : à adapter ---------- */
const INFO = {
  adresse: "123 Rue de l'Exemple",
  ville: "Douala, Kamerun",
  telephone: "+237 699 12 34 56",
  telephoneBrut: "+237699123456",
  telephoneNote: "Montag – Freitag: 08:00 – 18:00 Uhr",
  email: "contact@lecafeparisien.com",
};

const mapQuery = encodeURIComponent(`${INFO.adresse}, ${INFO.ville}`);

const horaires = [
  { jour: "Montag – Donnerstag", heures: "07:30 – 20:00" },
  { jour: "Freitag", heures: "07:30 – 22:00" },
  { jour: "Samstag", heures: "08:30 – 22:00" },
  { jour: "Sonntag", heures: "09:00 – 19:00" },
];

const services = [
  { icon: Wifi, label: "Kostenloses High-Speed-WLAN" },
  { icon: Coffee, label: "Kaffee zum Mitnehmen" },
  { icon: Users, label: "Separater Raum für Anlässe" },
  { icon: CreditCard, label: "Kartenzahlung möglich" },
  { icon: Music, label: "Live-Musik am Freitag" },
  { icon: ParkingCircle, label: "Gesicherter Parkplatz" },
];

const faqs = [
  {
    q: "Bieten Sie glutenfreie Optionen an?",
    a: "Ja, wir führen mehrere glutenfreie Backwaren sowie pflanzliche Milchalternativen (Mandel, Hafer, Soja).",
  },
  {
    q: "Muss ich für den Brunch am Wochenende reservieren?",
    a: "Wir empfehlen, den Brunch am Samstag und Sonntag mindestens 48 Stunden im Voraus zu reservieren.",
  },
  {
    q: "Sind Haustiere erlaubt?",
    a: "Gut erzogene Tiere sind auf unserer Terrasse und in einem eigens dafür vorgesehenen Bereich willkommen.",
  },
  {
    q: "Bieten Sie WLAN an?",
    a: "Ja, unser WLAN ist kostenlos und steht allen Gästen zur Verfügung.",
  },
];

const contactCards = [
  {
    icon: MapPin,
    title: "Adresse",
    lines: [INFO.adresse, INFO.ville],
    action: "Route anzeigen",
    href: `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`,
    external: true,
  },
  {
    icon: Phone,
    title: "Telefon",
    lines: [INFO.telephone, INFO.telephoneNote],
    action: "Jetzt anrufen",
    href: `tel:${INFO.telephoneBrut}`,
    external: false,
  },
  {
    icon: Mail,
    title: "E-Mail",
    lines: [INFO.email, "Antwort innert 24 Stunden (Werktage)"],
    action: "E-Mail senden",
    href: `mailto:${INFO.email}`,
    external: false,
  },
];

const inputClass =
  "w-full rounded-2xl border border-[#3C2A21]/15 bg-[#FBF9F6] px-4 py-3.5 text-[#3C2A21] placeholder:text-[#3C2A21]/35 outline-none transition-all duration-200 focus:border-[#B8865B] focus:bg-white focus:ring-4 focus:ring-[#B8865B]/15";
const labelClass =
  "mb-2 block text-[13px] font-semibold uppercase tracking-wide text-[#3C2A21]/70";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    newsletter: false,
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    // TODO : remplacer cette simulation par un vrai envoi (route API ou server action)
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "", newsletter: false });
      setTimeout(() => setFormStatus("idle"), 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
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

      {/* ================= EN-TÊTE ================= */}
      <section className="relative overflow-hidden border-b border-[#3C2A21]/8 bg-[#F7F2EA]">
        {/* halos décoratifs */}
        <div className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-[#D4A574]/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-[360px] w-[360px] rounded-full bg-[#B8865B]/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 dotgrid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            {/* Texte */}
            <div className="lg:col-span-7">
              <div className="reveal flex items-center gap-3">
                <span className="h-px w-10 bg-[#B8865B]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8865B]">
                  Kontakt
                </span>
              </div>

              <h1 className="reveal d-1 mt-6 font-serif text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                Eine Frage?
                <br />
                <span className="italic text-[#B8865B]">Reden wir über Kaffee.</span>
              </h1>

              <p className="reveal d-2 mt-6 max-w-xl text-lg leading-relaxed text-[#3C2A21]/65">
                Reservation, Bestellung, privater Anlass oder einfach eine Informationsanfrage:
                Unser Team antwortet Ihnen innert 24 Stunden.
              </p>

              <div className="reveal d-3 mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#formulaire"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#3C2A21] px-7 py-4 text-sm font-semibold text-white shadow-[0_14px_30px_-12px_rgba(60,42,33,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2A1D16] hover:shadow-[0_20px_40px_-14px_rgba(60,42,33,0.8)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574]"
                >
                  Nachricht schreiben
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={`tel:${INFO.telephoneBrut}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#3C2A21]/25 bg-white/60 px-7 py-4 text-sm font-semibold backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3C2A21] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574]"
                >
                  <Phone className="h-4 w-4" />
                  {INFO.telephone}
                </a>
              </div>

              {/* mini-infos */}
              <dl className="reveal d-4 mt-12 grid max-w-lg grid-cols-1 gap-x-8 gap-y-5 border-t border-[#3C2A21]/10 pt-8 sm:grid-cols-3">
                {[
                  { label: "Antwort", value: "Innert 24 h" },
                  { label: "Montag bis Samstag", value: "07:30 – 22:00" },
                  { label: "Kundenbewertung", value: "4,9 / 5" },
                ].map((s) => (
                  <div key={s.label}>
                    <dt className="text-[11px] font-semibold uppercase tracking-wider text-[#3C2A21]/45">
                      {s.label}
                    </dt>
                    <dd className="mt-1 font-serif text-lg font-bold">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Carte flottante */}
            <div className="reveal d-3 relative lg:col-span-5">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#D4A574]/30 to-transparent blur-2xl" />
              <div className="relative rounded-3xl border border-white/70 bg-white/85 p-7 shadow-[0_30px_70px_-35px_rgba(60,42,33,0.5)] backdrop-blur-xl">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B8865B]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Heute
                </div>

                <p className="mt-4 font-serif text-3xl font-bold">07:30 — 20:00 Uhr</p>
                <p className="mt-1 text-sm text-[#3C2A21]/55">Durchgehender Service · Küche geöffnet</p>

                <div className="my-6 h-px bg-[#3C2A21]/10" />

                <ul className="space-y-3.5">
                  {[
                    { icon: MapPin, text: `${INFO.adresse}, ${INFO.ville}` },
                    { icon: Phone, text: INFO.telephone },
                    { icon: Mail, text: INFO.email },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F0E6D2]">
                        <Icon className="h-4 w-4 text-[#3C2A21]" />
                      </span>
                      <span className="pt-1.5 text-[#3C2A21]/75">{text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-2 rounded-xl bg-[#F0E6D2]/70 px-4 py-3 text-xs font-semibold text-[#3C2A21]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500/70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600" />
                  </span>
                  Happy Hour von 16 bis 19 Uhr — −20 % auf Getränke
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        {/* ================= CARTES D'INFORMATION ================= */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {contactCards.map(({ icon: Icon, title, lines, action, href, external }, i) => (
            <div
              key={title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#3C2A21]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A574]/60 hover:shadow-[0_28px_60px_-30px_rgba(60,42,33,0.45)]"
            >
              {/* lueur au survol */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D4A574]/0 blur-2xl transition-all duration-500 group-hover:bg-[#D4A574]/25" />

              <div className="relative flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F0E6D2] to-[#E5D5BA] transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-5.5 w-5.5 text-[#3C2A21]" strokeWidth={1.8} />
                </div>
                <span className="font-serif text-sm font-bold text-[#3C2A21]/20">
                  0{i + 1}
                </span>
              </div>

              <h2 className="relative mt-6 font-serif text-xl font-bold">{title}</h2>
              <p className="relative mt-3 font-semibold leading-snug">{lines[0]}</p>
              <p className="relative mt-0.5 text-sm text-[#3C2A21]/50">{lines[1]}</p>

              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="relative mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8865B] transition-colors hover:text-[#3C2A21] md:mt-auto"
              >
                {action}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          ))}
        </div>

        {/* ================= FORMULAIRE + INFOS ================= */}
        <div className="mt-24 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Formulaire */}
          <section id="formulaire" className="scroll-mt-24 lg:col-span-7">
            <div className="rounded-3xl border border-[#3C2A21]/10 bg-white p-7 shadow-[0_30px_70px_-45px_rgba(60,42,33,0.5)] sm:p-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#B8865B]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B8865B]">
                  Formular
                </span>
              </div>

              <h2 className="mt-4 font-serif text-3xl font-bold">Schreiben Sie uns</h2>
              <p className="mt-2 text-[#3C2A21]/60">
                Füllen Sie das Formular aus, wir antworten Ihnen so rasch wie möglich.
              </p>

              <div role="status" aria-live="polite" className="mt-8">
                {formStatus === "success" && (
                  <div className="flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-800">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                    <p className="text-sm font-medium">
                      Nachricht gesendet! Wir melden uns schnellstmöglich bei Ihnen.
                    </p>
                  </div>
                )}
                {formStatus === "error" && (
                  <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-800">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                    <p className="text-sm font-medium">
                      Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns
                      direkt an.
                    </p>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Vollständiger Name <span className="text-[#B8865B]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="Max Muster"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      E-Mail <span className="text-[#B8865B]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="max@beispiel.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Telefon
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="+237 6 99 12 34 56"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className={labelClass}>
                      Betreff <span className="text-[#B8865B]">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`${inputClass} cursor-pointer appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 stroke=%22%233C2A21%22 stroke-width=%222%22 viewBox=%220 0 24 24%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-[length:18px] bg-[right_1rem_center] bg-no-repeat pr-11`}
                    >
                      <option value="">Betreff auswählen</option>
                      <option value="reservation">Reservation</option>
                      <option value="commande">Bestellung</option>
                      <option value="info">Informationsanfrage</option>
                      <option value="evenement">Privater Anlass</option>
                      <option value="reclamation">Reklamation</option>
                      <option value="autre">Sonstiges</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Nachricht <span className="text-[#B8865B]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`${inputClass} resize-none`}
                    placeholder="Guten Tag, ich möchte gerne…"
                  />
                </div>

                <label
                  htmlFor="newsletter"
                  className="flex cursor-pointer items-start gap-3 rounded-2xl bg-[#FBF9F6] p-4 transition-colors hover:bg-[#F7F2EA]"
                >
                  <input
                    type="checkbox"
                    name="newsletter"
                    id="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="mt-0.5 h-4.5 w-4.5 shrink-0 cursor-pointer rounded border-[#3C2A21]/30 accent-[#3C2A21]"
                  />
                  <span className="text-sm leading-snug text-[#3C2A21]/70">
                    Ich möchte den Newsletter und exklusive Angebote erhalten
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#3C2A21] px-6 py-4 font-semibold text-white shadow-[0_16px_34px_-16px_rgba(60,42,33,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2A1D16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                >
                  {formStatus === "sending" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Wird gesendet…
                    </>
                  ) : (
                    <>
                      Nachricht senden
                      <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs leading-relaxed text-[#3C2A21]/45">
                  * Pflichtfelder. Ihre Angaben werden gemäss unserer{" "}
                  <Link
                    href="/politique-confidentialite"
                    className="underline underline-offset-2 transition-colors hover:text-[#3C2A21]"
                  >
                    Datenschutzerklärung
                  </Link>{" "}
                  bearbeitet.
                </p>
              </form>
            </div>
          </section>

          {/* Colonne d'informations */}
          <aside className="space-y-6 lg:col-span-5">
            <div className="lg:sticky lg:top-10 lg:space-y-6">
              {/* Horaires */}
              <div
                id="horaires"
                className="scroll-mt-24 rounded-3xl border border-[#3C2A21]/10 bg-white p-7"
              >
                <h3 className="flex items-center gap-2.5 font-serif text-xl font-bold">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F0E6D2]">
                    <Clock className="h-4.5 w-4.5 text-[#3C2A21]" strokeWidth={1.8} />
                  </span>
                  Öffnungszeiten
                </h3>

                <dl className="mt-6 divide-y divide-[#3C2A21]/8">
                  {horaires.map((h) => (
                    <div key={h.jour} className="flex justify-between gap-4 py-3 first:pt-0">
                      <dt className="text-sm text-[#3C2A21]/60">{h.jour}</dt>
                      <dd className="text-sm font-semibold tabular-nums">{h.heures}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-5 rounded-2xl bg-[#F0E6D2]/60 p-4">
                  <p className="text-sm font-bold">Happy Hour · 16 – 19 Uhr</p>
                  <p className="mt-0.5 text-sm text-[#3C2A21]/60">
                    −20 % auf alle Getränke
                  </p>
                </div>
              </div>

              {/* Services */}
              <div className="rounded-3xl border border-[#3C2A21]/10 bg-white p-7">
                <h3 className="font-serif text-xl font-bold">Unsere Services</h3>
                <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {services.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-center gap-3 text-sm text-[#3C2A21]/75">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F0E6D2]">
                        <Icon className="h-4 w-4 text-[#3C2A21]" strokeWidth={1.8} />
                      </span>
                      {label}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Réseaux sociaux */}
              <div className="relative overflow-hidden rounded-3xl bg-[#3C2A21] p-7 text-white">
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#D4A574]/25 blur-3xl" />
                <h3 className="relative font-serif text-xl font-bold">Folgen Sie uns</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/60">
                  Unsere Neuigkeiten, Anlässe und Einblicke hinter die Kulissen des Cafés.
                </p>
                <div className="relative mt-6 flex gap-3">
                  {[
                    { icon: Instagram, label: "Instagram" },
                    { icon: Facebook, label: "Facebook" },
                    { icon: Twitter, label: "Twitter" },
                  ].map(({ icon: Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4A574] hover:bg-[#D4A574] hover:text-[#3C2A21] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* ================= CARTE ================= */}
        <section className="mt-24">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#B8865B]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B8865B]">
                  Standort
                </span>
              </div>
              <h2 className="mt-4 font-serif text-3xl font-bold md:text-4xl">
                So finden Sie uns
              </h2>
            </div>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-[#3C2A21]/25 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:border-[#3C2A21] hover:bg-[#3C2A21] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574]"
            >
              <Navigation className="h-4 w-4" />
              Route
            </a>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#3C2A21]/10 shadow-[0_30px_70px_-45px_rgba(60,42,33,0.55)]">
            <div className="relative h-[420px]">
              <iframe
                title="Standort des Cafés"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                loading="lazy"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0 grayscale-[15%] transition-all duration-700 hover:grayscale-0"
              />

              {/* Carte flottante */}
              <div className="pointer-events-none absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-sm">
                <div className="pointer-events-auto flex items-start gap-4 rounded-2xl border border-white/70 bg-white/90 p-5 shadow-[0_20px_45px_-20px_rgba(60,42,33,0.55)] backdrop-blur-xl">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F0E6D2]">
                    <MapPin className="h-5 w-5 text-[#3C2A21]" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="font-semibold leading-snug">{INFO.adresse}</p>
                    <p className="mt-0.5 text-sm text-[#3C2A21]/55">{INFO.ville}</p>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8865B] transition-colors hover:text-[#3C2A21]"
                    >
                      Route anzeigen
                      <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="mt-24 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#B8865B]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B8865B]">
                  FAQ
                </span>
              </div>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight md:text-4xl">
                Häufig gestellte
                <br />
                Fragen
              </h2>
              <p className="mt-4 text-[#3C2A21]/60">
                Sie finden Ihre Antwort nicht? Schreiben Sie uns, wir helfen Ihnen gerne weiter.
              </p>
              <a
                href="#formulaire"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#B8865B] transition-colors hover:text-[#3C2A21]"
              >
                Frage stellen
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-[#3C2A21]/10 border-y border-[#3C2A21]/10">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-serif text-lg font-bold transition-colors hover:text-[#B8865B] [&::-webkit-details-marker]:hidden">
                    {q}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#3C2A21]/15 transition-all duration-300 group-open:rotate-180 group-open:border-[#B8865B] group-open:bg-[#B8865B] group-open:text-white">
                      <ChevronDown className="h-4 w-4" strokeWidth={2} />
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-6 leading-relaxed text-[#3C2A21]/65">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ================= BANDEAU FINAL ================= */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-[#3C2A21] px-8 py-14 text-center text-white md:px-16 md:py-16">
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#D4A574]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-[#B8865B]/20 blur-3xl" />

          <h2 className="relative mx-auto max-w-2xl font-serif text-3xl font-bold leading-tight md:text-4xl">
            Sollen wir Ihnen einen Platz an der Theke freihalten?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/65">
            Reservieren Sie in wenigen Sekunden oder kommen Sie einfach vorbei und sagen Sie Hallo.
          </p>

          <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${INFO.telephoneBrut}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A574] px-7 py-4 text-sm font-semibold text-[#3C2A21] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Phone className="h-4 w-4" />
              Telefonisch reservieren
            </a>
            <a
              href="#formulaire"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Mail className="h-4 w-4" />
              Nachricht schreiben
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}