
"use client";

import Link from "next/link";
import Image from "next/image";


export default function CTAAndFooter() {
  return (
    // Wrap everything in a div with the background color to hide any potential gaps
    <div className="bg-[#023042] w-full overflow-hidden flex flex-col">
      
    

      {/* ================= FOOTER ================= */}
      {/* Added mt-0 and block to ensure no gaps */}
      <footer className="relative bg-gradient-to-br from-[#023042] via-[#053C50] to-[#04748B] text-white m-0 p-0 block">
        {/* Subtle overlay to match your design */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid gap-12 sm:grid-cols-2 md:grid-cols-5 border-t border-white/5">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4">
              <div className="bg-white p-1 rounded">
                <Image
                  src="/images/HIMS.png"
                  alt="HIMS Logo"
                  width={60}
                  height={35}
                  priority
                />
              </div>
              <h2 className="text-4xl font-extrabold text-[#F2A07B]">
                HIMS
              </h2>
            </div>

            <p className="mt-6 text-sm text-blue-100 max-w-md leading-relaxed">
              Hospital Information Management System by{" "}
              <span className="text-white font-semibold">
                Goanny Technologies
              </span>.
              Secure, scalable & intelligent healthcare platform.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#F2A07B]">Quick Links</h3>
            <ul className="space-y-3 text-sm text-blue-100">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/modules" className="hover:text-white transition-colors">Modules</Link></li>
              <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
            </ul>
          </div>

          {/* Modules */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#F2A07B]">Key Modules</h3>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="hover:text-white cursor-default">Patient Management</li>
              <li className="hover:text-white cursor-default">Doctor Scheduling</li>
              <li className="hover:text-white cursor-default">Billing & Invoices</li>
              <li className="hover:text-white cursor-default">Reports & Analytics</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#F2A07B]">Contact Us</h3>
            <div className="space-y-4 text-sm text-blue-100">
              <p className="flex items-center gap-2">📍 <span>India</span></p>
              <p className="flex items-center gap-2">📞 <span>+91 98765 43210</span></p>
              <p className="flex items-center gap-2">✉️ <span>info@goanny.com</span></p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative border-t border-white/10 bg-black/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200 gap-4">
            <p>© {new Date().getFullYear()} Goanny Technologies. All rights reserved.</p>
            <p className="italic text-[#F2A07B] flex items-center gap-2">
              Powering Digital Healthcare 🚑
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
