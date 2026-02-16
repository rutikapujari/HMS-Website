"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, PhoneCall } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const touchStartY = useRef(0);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Modules", path: "/modules" },
    { name: "Features", path: "/features" },
    { name: "Solutions", path: "/solutions" },
    { name: "Why HIMS", path: "/why-hims" },
  ];

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (e.touches[0].clientY - touchStartY.current > 80) {
      setOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* TOP BAR */}
      <div
        className={`h-[72px] transition-all duration-300
        ${open ? "bg-[#023042]/90 backdrop-blur-md" : "bg-[#023042]"}
        shadow-md`}
      >
        <div
          className={`max-w-7xl mx-auto px-4 h-full flex items-center
          ${open ? "justify-center" : "justify-between"} relative`}
        >
          {/* LOGO */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={`${open ? "absolute left-1/2 -translate-x-1/2" : ""}`}
          >
            <Image
              src="/images/HIMS.png"
              alt="HIMS Logo"
              width={open ? 90 : 75}
              height={42}
              className="object-contain"
              priority
            />
          </Link>

          {/* DESKTOP MENU */}
          {!open && (
            <ul className="hidden md:flex items-center gap-6 text-sm font-semibold text-white">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.path} className="hover:text-[#9ad1e3] transition">
                    {item.name}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href="/contact"
                  className="ml-2 px-4 py-2 rounded-lg font-bold text-white
                  bg-gradient-to-r from-[#9C4436] to-[#C85038]
                  hover:scale-105 transition-all"
                >
                  Contact
                </Link>
              </li>
            </ul>
          )}

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-white absolute right-4"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="md:hidden fixed top-[72px] inset-x-0 bottom-0
          bg-gradient-to-b from-[#023042] to-[#01232f] z-40"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {/* Accent */}
          <div className="w-12 h-1 bg-[#9ad1e3] rounded-full mx-auto mt-4 mb-6" />

          <ul className="flex flex-col items-center gap-6 text-white text-lg font-semibold pt-10">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className="hover:text-[#9ad1e3] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* ✨ PREMIUM CONTACT BUTTON */}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="relative mt-8 group"
            >
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-2xl
                bg-gradient-to-r from-[#9C4436] to-[#C85038]
                blur opacity-70 group-hover:opacity-100 animate-pulse" />

              {/* Button */}
              <div className="relative flex items-center gap-3 px-10 py-4
                rounded-2xl bg-[#023042] text-white font-extrabold
                border border-white/10
                group-hover:scale-105 transition-all">
                <PhoneCall size={20} />
                Contact Us
              </div>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}
