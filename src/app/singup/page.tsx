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
      name: "",
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
        .required("Le mot de passe doit être fort"),

      confirmpassword: yup
        .string()
        //not understande
        .oneOf([yup.ref("password")], "Les mots de passe ne correspondent pas")
        .required("Veuillez confirmer le mot de passe"),
    }),

    onSubmit: async () => {
      setIsLoading(true);
      fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form.values),
      });
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-emerald-50 to-pink-100 flex items-center justify-center p-4">
      {/* Signup Form Card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Logo Icon */}
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

        {/* Heading */}
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
          Rejoignez Skillspoints
        </h1>
        <p className="text-center text-gray-600 text-sm mb-6">
          Créez votre compte pour commencer
        </p>

        {/* Form */}
        <form className="space-y-4">
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
              value={form.values.name}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              placeholder="Nom"
              data-error={true}
              className="w-full px-4 py-2 data-[error=false]:border-red-500 data-[error=false]:border-gray-500  border border-gray-300    rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
            />

            <div className="text-red-500 text-xs text-right">
              {form.errors.name}
            </div>
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
              data-error={true}
              className="w-full px-4 py-2 data-[error=false]:border-red-500 data-[error=false]:border-gray-500  border border-gray-300  rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
            />
            <div className="text-red-500 text-xs text-right">
              {form.errors.email}
            </div>
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
              data-error={true}
              className="w-full px-4 py-2   data-[error=false]:border-red-500 data-[error=false]:border-gray-500   border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
            />
            <div className="text-red-500 text-xs text-right">
              {form.errors.password}
            </div>
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
              data-error={true}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
            />
            <div className="text-red-500 text-xs text-right">
              {form.errors.confirmpassword}
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
          >
            {isLoading ? "S'inscrire en cours..." : "S'inscrire"}
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


