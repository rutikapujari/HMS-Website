import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="relative mt-20 text-white
      bg-gradient-to-br from-[#023042] via-[#053C50] to-[#04748B]"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Main Content */}
      <div
        className="relative max-w-7xl mx-auto px-6 py-20
        grid gap-12 sm:grid-cols-2 md:grid-cols-5"
      >
        {/* ================= BRAND ================= */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-4">
            <Image
              src="/images/HIMS.png"
              alt="HIMS Logo"
              width={90}
              height={50}
              className="object-contain drop-shadow-xl"
              priority
            />

            <h2
              className="text-4xl font-extrabold tracking-wide
              bg-gradient-to-r from-[#C85038] via-[#F2A07B] to-[#FFD6C9]
              bg-clip-text text-transparent"
            >
              HIMS
            </h2>
          </div>

          <p className="mt-4 text-sm md:text-base text-blue-100 leading-relaxed max-w-md">
            Hospital Information Management System by{" "}
            <b className="text-white">Goanny Technologies</b>.  
            A secure, scalable, and smart digital platform for modern healthcare.
          </p>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#C85038]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm md:text-base">
            {["Home", "About Us", "Modules", "Features"].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="text-blue-100 hover:text-[#C85038]
                  transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= KEY MODULES ================= */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#C85038]">
            Key Modules
          </h3>
          <ul className="space-y-2 text-sm md:text-base text-blue-100">
            <li className="hover:text-[#9C4436] transition">
              Patient Management
            </li>
            <li className="hover:text-[#9C4436] transition">
              Doctor Scheduling
            </li>
            <li className="hover:text-[#9C4436] transition">
              Billing & Invoices
            </li>
            <li className="hover:text-[#9C4436] transition">
              Reports & Analytics
            </li>
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#C85038]">
            Contact Us
          </h3>
          <p className="text-sm md:text-base text-blue-100">📍 India</p>
          <p className="text-sm md:text-base text-blue-100">
            📞 +91 98765 43210
          </p>
          <p className="text-sm md:text-base text-blue-100">
            ✉️ info@goanny.com
          </p>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="relative border-t border-white/10">
        <div
          className="max-w-7xl mx-auto px-6 py-6
          flex flex-col md:flex-row gap-2 justify-between items-center
          text-sm md:text-base text-blue-200"
        >
          <p>
            © {new Date().getFullYear()} Goanny Technologies. All rights reserved.
          </p>

          <p className="italic text-[#C85038]">
            Powering Digital Healthcare 🚑
          </p>
        </div>
      </div>
    </footer>
  );
}
