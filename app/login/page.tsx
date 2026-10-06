// app/connexion/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Coffee,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { loginUserAction } from "@/lib/actions/users";

const inputClass =
  "w-full rounded-2xl border border-[#3C2A21]/15 bg-[#FBF9F6] py-3.5 pl-11 pr-4 text-sm text-[#3C2A21] placeholder:text-[#3C2A21]/35 outline-none transition-all duration-200 focus:border-[#B8865B] focus:bg-white focus:ring-4 focus:ring-[#B8865B]/15";

const labelClass =
  "mb-2 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#3C2A21]/60";

const perks = [
  "Mit einem Klick bestellen",
  "Bestellungen live verfolgen",
  "Exklusive Angebote für Mitglieder",
];

export default function ConnexionPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const result = await loginUserAction({
      email: formData.email,
      mot_de_passe: formData.password,
    });

    setIsLoading(false);
    if (!result.success) {
      setError(
        typeof result.error === "string" ? result.error : "Bitte überprüfen Sie Ihre Anmeldedaten"
      );
      return;
    }
    window.location.href = "/dashboard";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-[#FDFBF8] text-[#3C2A21] antialiased selection:bg-[#D4A574]/40">
      {/* Animations & motifs */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatY {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-10px); }
        }
        .reveal { animation: fadeUp .8s cubic-bezier(.22,1,.36,1) both; }
        .d-1{animation-delay:.08s} .d-2{animation-delay:.16s}
        .d-3{animation-delay:.24s} .d-4{animation-delay:.32s}
        .dotgrid {
          background-image: radial-gradient(rgba(240,230,210,.18) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .floaty { animation: floatY 6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .reveal, .floaty { animation: none; }
        }
      `}</style>

      <div className="flex min-h-screen items-center justify-center px-4 py-10 md:px-6 md:py-14">
        <div className="w-full max-w-5xl">
          {/* Carte principale */}
          <div className="reveal grid overflow-hidden rounded-[2rem] border border-[#3C2A21]/10 bg-white shadow-[0_40px_90px_-45px_rgba(60,42,33,0.55)] lg:grid-cols-2">
            {/* ================= CÔTÉ GAUCHE (VISUEL) ================= */}
            <aside className="relative hidden overflow-hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070"
                alt="Atmosphäre des Cafés"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 0px, 50vw"
                priority
              />

              {/* Voiles */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2A1D16]/95 via-[#3C2A21]/85 to-[#3C2A21]/60" />
              <div className="absolute inset-0 dotgrid opacity-40" />
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#D4A574]/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#B8865B]/20 blur-3xl" />

              {/* Contenu */}
              <div className="relative flex h-full flex-col justify-between p-10 text-white">
                {/* Logo */}
                <Link href="/" className="group inline-flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src="/take.jpg"
                      alt="Take and Go"
                      width={44}
                      height={44}
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <span className="flex flex-col leading-none">
                    <span className="font-serif text-base font-bold tracking-tight">
                      TAKE <span className="text-[#D4A574]">&</span> GO
                    </span>
                    <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                      Schweizer Kaffee
                    </span>
                  </span>
                </Link>

                {/* Bloc central */}
                <div className="mt-12">
                  <div className="floaty inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur">
                    <Coffee className="h-7 w-7 text-[#D4A574]" strokeWidth={1.6} />
                  </div>

                  <h2 className="mt-8 font-serif text-4xl font-bold leading-[1.05] tracking-tight">
                    Willkommen bei
                    <br />
                    <span className="italic text-[#D4A574]">Take & Go.</span>
                  </h2>

                  <p className="mt-5 max-w-sm leading-relaxed text-white/70">
                    Melden Sie sich an, um Ihre Lieblingsgetränke zu bestellen und von
                    unseren exklusiven Angeboten zu profitieren.
                  </p>

                  <ul className="mt-8 space-y-3">
                    {perks.map((perk) => (
                      <li
                        key={perk}
                        className="flex items-center gap-3 text-sm text-white/80"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D4A574]/20">
                          <CheckCircle2
                            className="h-3.5 w-3.5 text-[#D4A574]"
                            strokeWidth={2}
                          />
                        </span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Citation bas */}
                <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="font-serif text-sm italic leading-relaxed text-white/85">
                    „Jede Tasse erzählt eine Geschichte – Ihre beginnt hier.“
                  </p>
                </div>
              </div>
            </aside>

            {/* ================= CÔTÉ DROIT (FORMULAIRE) ================= */}
            <section className="relative p-8 sm:p-12 lg:p-14">
              {/* Logo mobile */}
              <div className="mb-8 flex items-center justify-center lg:hidden">
                <Link href="/" className="group inline-flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full ring-1 ring-[#3C2A21]/10">
                    <Image
                      src="/take.jpg"
                      alt="Take and Go"
                      width={44}
                      height={44}
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <span className="flex flex-col leading-none">
                    <span className="font-serif text-base font-bold tracking-tight">
                      TAKE <span className="text-[#B8865B]">&</span> GO
                    </span>
                        <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#3C2A21]/45">
                          Schweizer Kaffee
                    </span>
                  </span>
                </Link>
              </div>

              {/* En-tête */}
              <div className="reveal d-1">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#B8865B]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8865B]">
                    Anmeldung
                  </span>
                </div>

                <h1 className="mt-5 font-serif text-3xl font-bold leading-tight sm:text-4xl">
                  Schön, Sie
                  <br />
                  <span className="italic text-[#B8865B]">wiederzusehen.</span>
                </h1>

                <p className="mt-4 text-[#3C2A21]/60">
                  Geben Sie Ihre Anmeldedaten ein, um auf Ihr Konto zuzugreifen.
                </p>
              </div>

              {/* Erreur */}
              {error && (
                <div
                  role="alert"
                  className="reveal mt-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <p className="font-medium">{error}</p>
                </div>
              )}

              {/* Formulaire */}
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelClass}>
                    E-Mail-Adresse
                  </label>
                  <div className="relative">
                    <Mail
                      className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#3C2A21]/35"
                      strokeWidth={1.8}
                    />
                    <input
                      id="email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="max@beispiel.de"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Mot de passe */}
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className={labelClass}>
                      Passwort
                    </label>
                    <Link
                      href="/mot-de-passe-oublie"
                      className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#B8865B] transition-colors hover:text-[#3C2A21]"
                    >
                      Passwort vergessen?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock
                      className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#3C2A21]/35"
                      strokeWidth={1.8}
                    />
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      autoComplete="current-password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      placeholder="••••••••"
                      className={`${inputClass} pr-12`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={
                        showPassword ? "Passwort verbergen" : "Passwort anzeigen"
                      }
                      className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-[#3C2A21]/40 transition-colors hover:bg-[#F0E6D2]/60 hover:text-[#3C2A21]"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember me */}
                <label
                  htmlFor="rememberMe"
                  className="flex cursor-pointer items-center gap-3 rounded-2xl bg-[#FBF9F6] p-3.5 transition-colors hover:bg-[#F7F2EA]"
                >
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 shrink-0 cursor-pointer rounded border-[#3C2A21]/30 accent-[#3C2A21]"
                  />
                  <span className="text-sm text-[#3C2A21]/70">
                    Auf diesem Gerät angemeldet bleiben
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#3C2A21] px-6 py-4 font-semibold text-white shadow-[0_16px_34px_-16px_rgba(60,42,33,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2A1D16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                >
                  {isLoading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Anmeldung läuft …
                    </>
                  ) : (
                    <>
                      Anmelden
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </form>

              {/* Trennlinie */}
              <div className="mt-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-[#3C2A21]/10" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#3C2A21]/40">
                  oder fortfahren mit
                </span>
                <div className="h-px flex-1 bg-[#3C2A21]/10" />
              </div>

              {/* OAuth */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="group flex items-center justify-center gap-2.5 rounded-2xl border border-[#3C2A21]/15 bg-white px-4 py-3.5 text-sm font-semibold text-[#3C2A21] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3C2A21] hover:bg-[#FBF9F6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574]"
                >
                  {/* Google-Logo (Inline-SVG) */}
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </button>

                <button
                  type="button"
                  className="group flex items-center justify-center gap-2.5 rounded-2xl border border-[#3C2A21]/15 bg-white px-4 py-3.5 text-sm font-semibold text-[#3C2A21] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3C2A21] hover:bg-[#FBF9F6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A574]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  Apple
                </button>
              </div>

              {/* Registrierung */}
              <p className="mt-8 text-center text-sm text-[#3C2A21]/60">
                Noch kein Konto?{" "}
                <Link
                  href="/inscription"
                  className="font-semibold text-[#B8865B] underline-offset-4 transition-colors hover:text-[#3C2A21] hover:underline"
                >
                  Konto erstellen
                </Link>
              </p>

              {/* Sicherheitshinweise */}
              <div className="mt-6 flex items-center justify-center gap-3 text-[11px] text-[#3C2A21]/45">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3" />
                  Sichere Anmeldung
                </span>
                <span className="h-3 w-px bg-[#3C2A21]/15" />
                <span className="flex items-center gap-1">
                  <Sparkles className="h-3 w-3 text-[#B8865B]" />
                  Geschützte Daten
                </span>
              </div>
            </section>
          </div>

          {/* Zurück-Link */}
          <p className="mt-8 text-center text-sm text-[#3C2A21]/50">
            <Link
              href="/"
              className="transition-colors hover:text-[#3C2A21]"
            >
              ← Zurück zur Startseite
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}