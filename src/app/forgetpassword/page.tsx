"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const form = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: yup.object({
      email: yup
        .string()
        .email("Format email invalide")
        .required("Email requis"),
    }),

    onSubmit: async () => {
      setSubmitted(true);

      setTimeout(() => {
        router.push("/");
      }, 1000);
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-emerald-50 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 md:p-12">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
          Password forget
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Entrez votre email pour recevoir les instructions
        </p>
        <div>
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
              className="w-full px-4 py-2 data-[error=false]:border-red-500 data-[error=false]:border-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
            />
            <div className="text-red-500 text-xs text-right">
              {form.errors.email}
            </div>
          </div>{" "}
          {/* Submit Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200 mt-4"
          >
            {submitted ? "S'inscrire en cours..." : "S'inscrire"}
          </button>
          <div className="text-center mt-8">
            <Link
              href="/login"
              className="text-green-500 hover:text-green-600 font-medium transition"
            >
              Retour à la connexion
            </Link>
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
}
