"use client";

import { useFormik, validateYupSchema } from "formik";
// next navigation always
import { useRouter } from "next/navigation";
import { useState } from "react";

import * as yup from "yup";

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const form = useFormik({
    initialValues: {
      nome: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: yup.object({
      nome: yup.string().required("Nome requis"),
      email: yup
        .string()
        .email("Format email invalide")
        .required("Email requis"),
      password: yup
        .string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Le mot de passe doit être fort (8 caractères, majuscule, minuscule, chiffre et symbole)."
        )
        .required("Password requis"),

      confirmpassword: yup
        .string()
        //not understande
        .oneOf([yup.ref("password")], "Les mots de passe ne correspondent pas")
        .required("Veuillez confirmer le mot de passe"),
    }),
    onSubmit: async () => {
      setIsLoading(true);

      setTimeout(() => {
        router.push("/login");
      }, 1000);
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-blue-50 to-purple-100 flex items-center justify-center p-4">
      {/* Signup Form Card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Logo Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-500 rounded-lg p-3 w-16 h-16 flex items-center justify-center">
            put you logo
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
          Rejoignez Skillspoints
        </h1>
        <p className="text-center text-gray-600 text-sm mb-6">
          Créez votre compte pour commencer
        </p>

        {/* Form */}
        <form className="space-y-4" onSubmit={form.handleSubmit}>
          {/* Full Name Field */}
          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nom complet
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              value={form.values.nome}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              placeholder="Nom"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.values.email}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              placeholder="votre@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={form.values.password}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirmpassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirmer le mot de passe
            </label>
            <input
              id="confirmpassword"
              type="password"
              name="confirmpassword"
              value={form.values.confirmpassword}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 mt-6"
          >
            {isLoading ? "Sinscrire en cours..." : "Sinscrire"}
            Sinscrire
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            Vous avez déjà un compte?{" "}
            <a
              href="/login"
              className="text-green-500 hover:text-green-600 font-medium"
            >
              Se connecter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}


