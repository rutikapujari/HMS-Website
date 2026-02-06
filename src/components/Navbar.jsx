"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About HIMS", path: "/about" },
    { name: "Modules", path: "/modules" },
    { name: "Features", path: "/features" },
    { name: "Solutions", path: "/solutions" },
    { name: "Why HIMS", path: "/why-hims" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#023042] z-50 shadow-md">
      {/* MAIN BAR */}
      <div className="max-w-7xl mx-auto px-4 h-[72px] flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/HIMS.png"
            alt="HIMS Logo"
            width={75}
            height={42}
            className="object-contain"
          />
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-semibold text-white">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                className="hover:text-[#9ad1e3] transition-colors duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* CTA */}
          <li>
            <Link
              href="/contact"
              className="ml-2 px-4 py-2 rounded-lg font-bold text-white
              bg-gradient-to-r from-[#9C4436] to-[#C85038]
              hover:scale-105 transition-all duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#023042] border-t border-white/10">
          <ul className="flex flex-col px-6 py-4 gap-4 text-white font-medium">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className="block hover:text-[#9ad1e3] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-4 py-2 rounded-lg font-bold text-white
              bg-gradient-to-r from-[#9C4436] to-[#C85038]"
            >
              Contact
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}
