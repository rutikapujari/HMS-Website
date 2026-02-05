import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#023042] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/HIMS.png"
            alt="HIMS Logo"
            width={90}
            height={50}
          />
        </div>
        {/* BRAND NAME */}
        <h1 className="text-3xl font-extrabold leading-tight">
          <span className="text-white">HIMS</span>
          <span className="block text-sm text-[#9ad1e3]">
            Hospital Information Management System
          </span>
        </h1>
        {/* MENU */}
        <ul className="hidden md:flex items-center space-x-8 font-semibold text-white">
          {[
            { name: "Home", path: "/" },
            { name: "About HIMS", path: "/about" },
            { name: "Modules", path: "/modules" },
            { name: "Features", path: "/features" },
            { name: "Solutions", path: "/solutions" },
            { name: "Why HIMS", path: "/why-hims" },
          ].map((item, index) => (
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
              className="ml-4 px-6 py-2.5 rounded-xl font-bold text-white
    bg-gradient-to-r from-[#9C4436] to-[#C85038]
    shadow-lg shadow-black/30
    hover:scale-105 hover:shadow-xl
    hover:from-[#C85038] hover:to-[#9C4436]
    transition-all duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
