// app/inscription/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, Mail, Lock, User, CheckCircle } from "lucide-react";
import { registerUserAction } from "@/lib/actions/users";

export default function InscriptionPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      setIsLoading(false);
      return;
    }

    const [prenom, ...nomParts] = formData.nom.trim().split(/\s+/);
    const result = await registerUserAction({
      prenom,
      nom: nomParts.join(" ") || prenom,
      email: formData.email,
      telephone: "0000000000",
      mot_de_passe: formData.password,
    });
    setIsLoading(false);
    if (!result.success) {
      setError(typeof result.error === "string" ? result.error : "Vérifiez vos informations");
      return;
    }
    setIsSuccess(true);

    // Redirection après 2 secondes
    setTimeout(() => {
      window.location.href = "/connexion";
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50/30 px-4">
        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-[#3C2A21] mb-3">
            Inscription réussie !
          </h2>
          <p className="text-gray-600 mb-6">
            Bienvenue chez Také & Go. Vous allez être redirigé vers la page de connexion.
          </p>
          <Link
            href="/connexion"
            className="inline-block bg-[#3C2A21] hover:bg-[#5C3B2A] text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            Se connecter
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50/30 px-4 py-12">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-5xl w-full flex flex-col md:flex-row">
        {/* Image / côté gauche */}
        <div className="md:w-1/2 relative hidden md:block">
          <div className="absolute inset-0 bg-[#3C2A21]/80 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070"
            alt="Café"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-8 text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <span className="text-4xl">☕</span>
            </div>
            <h2 className="text-3xl font-serif font-bold mb-4">
              Rejoignez notre communauté
            </h2>
            <p className="text-white/80">
              Créez votre compte et profitez d&apos;offres exclusives, de la fidélité et de commandes rapides.
            </p>
            <div className="mt-8 flex gap-4 text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-amber-400" />
                Offres exclusives
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-amber-400" />
                Programme fidélité
              </span>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div className="md:w-1/2 p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-[#3C2A21]">
              Créer un compte
            </h1>
            <p className="text-gray-500 mt-2">
              Remplissez vos informations pour vous inscrire
            </p>
          </div>
          {error && <p className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom complet
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  placeholder="Jean Dupont"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#3C2A21] focus:ring-1 focus:ring-[#3C2A21] outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="jean@exemple.fr"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#3C2A21] focus:ring-1 focus:ring-[#3C2A21] outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 focus:border-[#3C2A21] focus:ring-1 focus:ring-[#3C2A21] outline-none transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirmer le mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 focus:border-[#3C2A21] focus:ring-1 focus:ring-[#3C2A21] outline-none transition"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#3C2A21] hover:bg-[#5C3B2A] text-white font-semibold py-3 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Inscription en cours..." : "S'inscrire"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Déjà un compte ?{" "}
              <Link href="/connexion" className="text-[#D4A574] hover:underline font-semibold">
                Se connecter
              </Link>
            </p>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-400">ou</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <div className="flex gap-3 mt-6">
            <button className="flex-1 border border-gray-200 hover:bg-gray-50 py-3 rounded-xl flex items-center justify-center gap-2 transition">
              <span className="text-xl">🔵</span>
              Google
            </button>
            <button className="flex-1 border border-gray-200 hover:bg-gray-50 py-3 rounded-xl flex items-center justify-center gap-2 transition">
              <span className="text-xl">⚫</span>
              Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}