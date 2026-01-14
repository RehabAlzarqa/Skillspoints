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
      fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.values.email,
          password: form.values.password,
          password2: form.values.password,
        }),
      });

      // setTimeout(() => {
      // router.push("/dashboard");
      // });
    },
  });

  return (
    <div className="w-full bg-gradient-to-br from-cyan-100 via-emerald-50 to-pink-100 flex items-center justify-center px-4 min-h-screen">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-10 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-emerald-500 rounded-2xl w-16 h-16 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 20c-4.962 0-9-4.038-9-9s4.038-9 9-9 9 4.038 9 9-4.038 9-9 9zm3.5-9c.828 0 1.5-.672 1.5-1.5S16.328 9 15.5 9 14 9.672 14 10.5s.672 1.5 1.5 1.5zm-7 0c.828 0 1.5-.672 1.5-1.5S9.328 9 8.5 9 7 9.672 7 10.5 7.672 12 8.5 12zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.39c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
          </div>
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
            />

            {form.touched.password && form.errors.password && (
              <p className="text-red-500 text-sm">{form.errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
          >
            {isLoading ? "Connexion en cours..." : "Se connecter"}
          </button>
        </form>
        {/* end of  Form */}

        <div className="m-6 text-center">
          <Link
            href="/forgetpassword"
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
