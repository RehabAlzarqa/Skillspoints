"use client";

import { useFormik, validateYupSchema } from "formik";
// next navigation always
import { useRouter } from "next/navigation";

import * as yup from "yup";

export default function SignupPage() {
  const router = useRouter();
  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string(),
      password: yup.string(),
    }),
    onSubmit: () => {
      router.push("/login");
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-blue-50 to-purple-100 flex items-center justify-center p-4">
      {/* Signup Form Card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Logo Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-500 rounded-lg p-3 w-16 h-16 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm2 4v10h2V7H6zm4 0v10h2V7h-2zm4 0v10h2V7h-2zm4 0v10h2V7h-2z" />
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
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nom complet
            </label>
            <input
              id="name"
              type="text"
              placeholder="Jean Dupont"
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
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirmer le mot de passe
            </label>
            <input
              id="confirm-password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 mt-6"
          >
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
