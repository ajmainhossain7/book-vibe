import React from "react";
import { AlertTriangle, Home, RefreshCcw } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-900 px-4">
      <div className="max-w-xl w-full text-center bg-white rounded-3xl shadow-2xl p-10 border border-gray-200">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-5 rounded-full bg-red-100">
            <AlertTriangle size={50} className="text-red-500" />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-7xl font-extrabold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-3">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => (window.location.href = "/")}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-black text-white font-medium hover:scale-105 transition"
          >
            <Home size={18} /> Go Home
          </button>

          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
          >
            <RefreshCcw size={18} /> Retry
          </button>
        </div>

        {/* Footer */}
        <p className="mt-8 text-sm text-gray-400">
          If you think this is a mistake, please contact support.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;