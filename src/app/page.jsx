"use client"; // Required because Features uses Framer Motion

import Hero from "../components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Hero />

      {/* About Link */}
      <div className="text-center mt-10">
        <Link
          href="/about"
          className="text-blue-600 font-semibold underline hover:text-blue-800 transition-colors"
        >
         


         
        </Link>
      </div>

      {/* Features Section */}
     
    </main>
  );
}
