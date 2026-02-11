"use client";

import Hero from "../components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT LINK */}
      <div className="text-center my-10">
        <Link
          href="/about"
          className="text-blue-600 font-semibold underline hover:text-blue-800 transition-colors"
        >
         
        </Link>
      </div>


    </>
  );
}
