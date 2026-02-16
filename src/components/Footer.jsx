"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF] text-[#023042] border-t border-[#023042]/10">

      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 sm:grid-cols-2 md:grid-cols-5">

        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-4">
            <div className="bg-[#053C50] p-1 rounded">
              <Image
                src="/images/HIMS.png"
                alt="HIMS Logo"
                width={60}
                height={35}
                priority
              />
            </div>
            <h2 className="text-4xl font-extrabold text-[#053C50]">
              HIMS
            </h2>
          </div>

          <p className="mt-6 text-sm text-[#023042]/80 max-w-md leading-relaxed">
            Hospital Information Management System by
            <span className="text-[#053C50] font-semibold">
              {" "}Goanny Technologies
            </span>.
            Secure, scalable and intelligent healthcare platform.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-[#053C50]">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-[#023042]/80">
            <li><Link href="/" className="hover:text-[#053C50] transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#053C50] transition">About Us</Link></li>
            <li><Link href="/modules" className="hover:text-[#053C50] transition">Modules</Link></li>
            <li><Link href="/features" className="hover:text-[#053C50] transition">Features</Link></li>
          </ul>
        </div>

        {/* Key Modules */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-[#053C50]">
            Key Modules
          </h3>
          <ul className="space-y-3 text-sm text-[#023042]/80">
            <li>Patient Management</li>
            <li>Doctor Scheduling</li>
            <li>Billing & Invoices</li>
            <li>Reports & Analytics</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-[#053C50]">
            Contact Us
          </h3>
          <div className="space-y-3 text-sm text-[#023042]/80">
            <p>India</p>
            <p>+91 98765 43210</p>
            <p>info@goanny.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#023042]/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#023042]/70 gap-4">
          <p>
            © {new Date().getFullYear()} Goanny Technologies. All rights reserved.
          </p>
          <p className="text-[#053C50] font-semibold">
            Powering Digital Healthcare
          </p>
        </div>
      </div>
    </footer>
  );
}
