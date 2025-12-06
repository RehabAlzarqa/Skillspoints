"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { BookOpen } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

export default function Page() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  // useFormik
  const form = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().required("Email requis"),
      password: Yup.string()
        .required("Mot de passe requis")
        //match fun
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Le mot de passe doit être fort (8 caractères, majuscule, minuscule, chiffre et symbole)."
        ),
    }),

    onSubmit: async () => {
      setIsLoading(true);

      setTimeout(() => {
        router.push("/dashboard");
      });
    },
  });

  return (
    <div className="w-full bg-gradient-to-br from-cyan-100 via-emerald-50 to-pink-100 flex items-center justify-center px-4 min-h-screen">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-10 text-center">
        <div className="w-16 h-16 bg-[#4CAF50] rounded-xl flex items-center justify-center mx-auto mb-4">
          <BookOpen className="w-10 h-10 text-white" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Bienvenue sur Skillspoints
        </h1>

        <p className="text-gray-600 mb-8">Connectez-vous pour continuer</p>

        {/* Form */}
        <form className="space-y-6" onSubmit={form.handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.values.email}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="votre@email.com"
              required
            />

            {form.touched.email && form.errors.email && (
              <p className="text-red-500 text-sm">{form.errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
              Mot de passe
            </label>
            {/*  end of Password */}

            <input
              type="password"
              name="password"
              value={form.values.password}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
              required
            />

            {form.touched.password && form.errors.password && (
              <p className="text-red-500 text-sm">{form.errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-500 text-white font-semibold py-3 rounded-lg transition-colors mt-8"
          >
            {isLoading ? "Connexion en cours..." : "Se connecter"}
          </button>
        </form>
        {/* end of  Form */}

        <div className="m-6 text-center">
          <Link
            href="/mpass"
            className="text-sm text-[#4CAF50] hover:underline"
          >
            Mot de passe oublie ?
          </Link>
        </div>

        <Link
          href="/rgpd"
          className="bg-gray-50 px-4 py-2 text-gray-600 rounded-xs cursor-pointer border border-gray-300"
        >
          Politique de confidentialité
        </Link>
      </div>
    </div>
  );
}
