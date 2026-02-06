import React from "react";
import {
  FiHome,
  FiBriefcase,
  FiUserCheck,
  FiActivity,
  FiBook,
  FiUsers,
  FiCloud,
  FiServer,
  FiGlobe,
  FiSmartphone,
  FiTablet,
  FiTrendingUp,
  FiSmile,
  FiFileText,
  FiBarChart2,
  FiDatabase,
  FiClock,
} from "react-icons/fi";

export default function HIMSPage() {
  const whoCanUse = [
    { name: "Multi-Specialty Hospitals", icon: <FiHome /> },
    { name: "Clinics", icon: <FiBriefcase /> },
    { name: "Nursing Homes", icon: <FiUserCheck /> },
    { name: "Diagnostic Centers", icon: <FiActivity /> },
    { name: "Medical Colleges", icon: <FiBook /> },
    { name: "Healthcare Groups", icon: <FiUsers /> },
  ];

  const platformFeatures = [
    { name: "Cloud Based", icon: <FiCloud /> },
    { name: "On-Premise Server", icon: <FiServer /> },
    { name: "Web Application", icon: <FiGlobe /> },
    { name: "Android App", icon: <FiSmartphone /> },
    { name: "iOS App", icon: <FiTablet /> },
    { name: "Multi-User Access", icon: <FiUsers /> },
  ];

  const businessBenefits = [
    { name: "Operational Efficiency", icon: <FiTrendingUp /> },
    { name: "Enhanced Patient Experience", icon: <FiSmile /> },
    { name: "Reduced Paperwork", icon: <FiFileText /> },
    { name: "Accurate Reports", icon: <FiBarChart2 /> },
    { name: "Centralized Data", icon: <FiDatabase /> },
    { name: "Faster Decisions", icon: <FiClock /> },
  ];

  const modules = [
    "Patient Registration & UHID",
    "OPD / IPD Management",
    "Pharmacy & Inventory",
    "Laboratory & Radiology",
    "Billing & Accounts",
    "Appointments & Scheduling",
  ];

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-28 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-300/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-indigo-300/30 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block mb-5 px-5 py-2 text-sm font-semibold text-[#C85038] bg-[#C85038]/10 rounded-full">
              Smart Healthcare Technology
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Hospital <br />
              <span className="text-[#023042]">Information </span>
              <span className="text-[#053C50]">Management</span>
            </h1>

            <p className="text-lg text-[#9c4466] mb-10 max-w-xl">
              A complete digital platform to manage hospital operations, enhance
              patient care, and automate workflows securely.
            </p>

            <div className="flex gap-5 flex-wrap">
              <button className="bg-[#053C50] text-white px-9 py-4 rounded-xl shadow-lg hover:bg-[#042f3f] transition">
                Request Demo
              </button>

              <button className="border-2 border-[#053C50] text-[#053C50] px-9 py-4 rounded-xl hover:bg-[#053C50] hover:text-white transition">
                Free Consultation
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
              alt="Hospital Management"
              className="w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
     <section className="relative py-32 bg-gradient-to-b from-[#023042]/5 via-white to-[#053C50]/5 overflow-hidden">
  <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#053C50]/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-[#023042]/20 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6">
    <div className="text-center max-w-4xl mx-auto">
      <span className="inline-block mb-6 px-5 py-1.5 text-sm font-semibold tracking-wide text-[#023042] bg-[#053C50]/10 rounded-full">
        About Our Healthcare Platform
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold text-[#023042] mb-6 leading-tight">
        Transforming Hospitals with <br />
        <span className="text-[#053C50]">Intelligent HIMS</span>
      </h2>

      <p className="text-lg md:text-xl text-[#023042]/80 leading-relaxed">
        <span className="font-semibold text-[#023042]">
          Hospital Information Management System (HIMS)
        </span>{" "}
        is a secure, scalable, and fully integrated digital healthcare
        solution that unifies clinical, administrative, and financial
        hospital operations into one powerful dashboard — delivering
        efficiency, accuracy, and better patient outcomes.
      </p>
    </div>

    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-[#023042]">
        <h3 className="text-xl font-bold text-[#023042] mb-3">
          Unified Operations
        </h3>
        <p className="text-[#023042]/70 leading-relaxed">
          Manage OPD, IPD, pharmacy, lab, billing, and administration
          seamlessly from a single integrated system.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-[#053C50]">
        <h3 className="text-xl font-bold text-[#023042] mb-3">
          Secure & Compliant
        </h3>
        <p className="text-[#023042]/70 leading-relaxed">
          Enterprise-grade security with role-based access, audit logs,
          and data protection designed for healthcare standards.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-[#023042]">
        <h3 className="text-xl font-bold text-[#023042] mb-3">
          Smart Decision Making
        </h3>
        <p className="text-[#023042]/70 leading-relaxed">
          Real-time dashboards and accurate reports empower hospital
          leadership to make faster, data-driven decisions.
        </p>
      </div>
    </div>

    <div className="mt-24 flex justify-center">
      <span className="w-32 h-1.5 rounded-full bg-gradient-to-r from-[#023042] via-[#053C50] to-[#023042]"></span>
    </div>
  </div>
</section>


      {/* ================= CORE MODULES ================= */}
    <section className="relative py-32 overflow-hidden bg-[#021c28]">
  {/* animated gradient background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0b5c78_0%,transparent_45%),radial-gradient(circle_at_bottom_right,#023042_0%,transparent_40%)] opacity-60"></div>

  {/* floating shapes */}
  <div className="absolute top-20 left-10 w-40 h-40 bg-[#053C50]/30 rounded-3xl rotate-12 blur-2xl animate-pulse"></div>
  <div className="absolute bottom-24 right-16 w-56 h-56 bg-[#0b6b88]/30 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6">
    {/* header */}
    <div className="text-center mb-20">
      <span className="inline-flex items-center gap-2 mb-6 px-6 py-2 text-sm font-semibold tracking-wider uppercase text-cyan-100 bg-white/10 backdrop-blur rounded-full">
        ⚙️ Smart Hospital System
      </span>

      <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
        One Platform. <br />
        <span className="bg-gradient-to-r from-cyan-300 to-teal-400 bg-clip-text text-transparent">
          Every Core Module
        </span>
      </h2>

      <p className="mt-6 text-lg text-cyan-100/80 max-w-3xl mx-auto">
        A next-generation hospital management suite built with modular
        intelligence, real-time workflows, and enterprise-grade security.
      </p>
    </div>

    {/* modules */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {modules.map((item, index) => (
        <div
          key={index}
          className="relative group rounded-3xl p-[1px] bg-gradient-to-br from-cyan-400/60 to-teal-500/60 hover:from-teal-400 hover:to-cyan-500 transition"
        >
          <div className="h-full rounded-3xl bg-white/10 backdrop-blur-xl p-10 flex flex-col justify-between">
            <div>
              <div className="mb-6 w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-cyan-400 to-teal-500 text-white text-2xl shadow-lg">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition">
                {item}
              </h3>

              <p className="mt-3 text-sm text-cyan-100/70">
                Seamlessly optimized to improve operational efficiency and
                patient outcomes across departments.
              </p>
            </div>

            <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 group-hover:text-teal-300 transition">
              Explore Module →
            </span>
          </div>
        </div>
      ))}
    </div>

    {/* bottom divider */}
    <div className="mt-28 flex justify-center">
      <div className="w-40 h-[3px] rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
    </div>
  </div>
</section>



      {/* ================= WHO CAN USE HIMS ================= */}
     <section className="relative py-32 bg-[#f8fcfe] overflow-hidden">
  {/* Background accents */}
  <div className="absolute -top-24 left-0 w-96 h-96 bg-[#053C50]/20 blur-[120px] rounded-full" />
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#023042]/20 blur-[100px] rounded-full" />

  <div className="relative max-w-7xl mx-auto px-6">
    {/* Header */}
    <div className="max-w-3xl mb-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#023042] leading-tight">
        Who Can <span className="text-[#053C50]">Use HIMS</span>
      </h2>
      <p className="mt-5 text-lg text-[#023042]/80">
        Designed to empower every stakeholder in the hospital ecosystem with
        role-based access and intelligent workflows.
      </p>
    </div>

    {/* Stepped Layout */}
    <div className="space-y-8">
      {whoCanUse.map((item, index) => (
        <div
          key={index}
          className={`group flex flex-col md:flex-row items-center gap-8
          p-8 md:p-10 rounded-3xl bg-white/70 backdrop-blur-xl
          border border-[#023042]/10 shadow-md hover:shadow-2xl
          transition-all duration-500 hover:-translate-y-1
          ${index % 2 === 0 ? "md:ml-0" : "md:ml-20"}`}
        >
          {/* Icon */}
          <div
            className="w-20 h-20 flex items-center justify-center rounded-2xl
            bg-gradient-to-br from-[#023042] to-[#053C50]
            text-white text-3xl font-bold shadow-lg"
          >
            {item.icon}
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-[#023042] mb-2 group-hover:text-[#053C50] transition">
              {item.name}
            </h3>
            <p className="text-[#023042]/70 max-w-xl">
              Secure, intuitive access tailored specifically for this role to
              ensure efficiency and accountability across hospital operations.
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ================= TECHNOLOGY PLATFORM ================= */}
     <section className="relative py-28 bg-gradient-to-b from-white via-[#F5FAFC] to-white overflow-hidden">
  {/* decorative background */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#023042]/20 rounded-full blur-[120px]" />
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#053C50]/20 rounded-full blur-[120px]" />

  <div className="relative max-w-7xl mx-auto px-6">
    {/* header */}
    <div className="text-center mb-20">
      <span className="inline-block mb-4 px-5 py-1.5 text-sm font-semibold tracking-wide text-[#053C50] bg-[#053C50]/10 rounded-full">
        Digital Foundation
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold text-[#023042]">
        Technology <span className="text-[#053C50]">Platform</span>
      </h2>

      <p className="mt-5 max-w-2xl mx-auto text-lg text-[#023042]/75">
        A secure, scalable, and intelligent technology stack that powers modern
        hospital operations and enables seamless digital healthcare delivery.
      </p>
    </div>

    {/* feature cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {platformFeatures.map((item, index) => (
        <div
          key={index}
          className="group relative rounded-3xl p-8 bg-white/80 backdrop-blur-xl border border-[#023042]/10
                     shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]
                     hover:shadow-[0_30px_80px_-25px_rgba(0,0,0,0.45)]
                     transition-all duration-500 hover:-translate-y-3 overflow-hidden"
        >
          {/* gradient hover overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
                          bg-gradient-to-br from-[#023042]/10 via-transparent to-[#053C50]/20" />

          {/* top accent */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#023042] to-[#053C50]" />

          {/* icon */}
          <div
            className="relative z-10 w-16 h-16 mb-6 mx-auto flex items-center justify-center rounded-2xl
                       bg-gradient-to-br from-[#023042]/10 to-[#053C50]/10 text-[#023042] text-2xl
                       group-hover:from-[#023042] group-hover:to-[#053C50]
                       group-hover:text-white transition-all duration-500 shadow-inner"
          >
            {item.icon}
          </div>

          {/* title */}
          <h3 className="relative z-10 text-lg font-semibold text-center text-[#023042] group-hover:text-[#053C50] transition-colors">
            {item.name}
          </h3>

          {/* supporting text */}
          <p className="relative z-10 mt-3 text-sm text-center text-[#023042]/70 leading-relaxed">
            Built to ensure performance, reliability, and security while
            supporting real-time hospital workflows and data-driven decisions.
          </p>

          {/* bottom glow */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-20 bg-[#053C50]/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
        </div>
      ))}
    </div>
  </div>
</section>



      {/* ================= BUSINESS BENEFITS ================= */}
   <section className="relative py-32 bg-gradient-to-br from-[#023042] via-[#053C50] to-[#04748B] overflow-hidden text-white">
  {/* Background glow */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px]" />
  <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-black/20 rounded-full blur-[120px]" />

  <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
    
    {/* LEFT CONTENT */}
    <div>
      <span className="inline-block mb-6 px-5 py-2 text-sm font-semibold tracking-wide bg-white/15 rounded-full">
        Business Value
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
        Why Hospitals Choose <br />
        <span className="text-[#FFD6C9]">Our HIMS Platform</span>
      </h2>

      <p className="text-lg text-white/85 max-w-xl mb-10">
        Designed to improve efficiency, reduce operational burden, and
        enhance patient care through intelligent digital healthcare systems.
      </p>

      <button className="bg-white text-[#023042] px-10 py-4 rounded-2xl font-semibold shadow-xl hover:bg-[#FFD6C9] transition">
        Explore Benefits
      </button>
    </div>

    {/* RIGHT BENEFITS STACK */}
    <div className="space-y-8">
      {businessBenefits.map((item, index) => (
        <div
          key={index}
          className="group relative flex gap-6 p-7 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 hover:bg-white/25 transition-all duration-300"
        >
          {/* Number */}
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFD6C9] to-white text-[#023042] font-extrabold flex items-center justify-center">
            {index + 1}
          </div>

          {/* Content */}
          <div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-[#FFD6C9] transition">
              {item.name}
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Hover accent */}
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#FFD6C9] to-transparent opacity-0 group-hover:opacity-100 transition" />
        </div>
      ))}
    </div>
  </div>
</section>



      {/* ================= CTA ================= */}
      <section className="relative py-28 overflow-hidden 
bg-gradient-to-r from-[#023042] via-[#053C50] to-[#04748B] text-white">

  {/* Glow accents */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#C85038]/30 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 -right-32 w-96 h-96 bg-[#9C4436]/20 rounded-full blur-3xl"></div>

  <div className="relative max-w-5xl mx-auto px-6 text-center">
    <span className="inline-block mb-6 px-5 py-2 text-sm font-semibold tracking-wide 
    bg-white/15 backdrop-blur-md rounded-full">
      Healthcare Digital Transformation
    </span>

    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
      Ready to Digitize Your <br />
      <span className="text-[#C85038]">Hospital Operations?</span>
    </h2>

    <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-white/90">
      Trusted by hospitals, clinics, and healthcare networks to deliver
      secure, scalable, and intelligent hospital management solutions.
    </p>

    <div className="flex flex-wrap justify-center gap-6">
      <button className="bg-[#C85038] text-white px-12 py-4 rounded-2xl font-semibold 
      shadow-2xl hover:bg-[#9C4436] hover:scale-105 transition duration-300">
        Book Free Demo
      </button>

      <button className="border-2 border-[#C85038] px-12 py-4 rounded-2xl font-semibold 
      hover:bg-[#C85038] hover:text-white transition duration-300">
        Talk to Expert
      </button>
    </div>

    <p className="mt-10 text-sm text-white/80">
      ✔ Secure • ✔ HIPAA-Ready • ✔ 24/7 Support • ✔ Cloud & On-Premise
    </p>
  </div>
</section>

    </>
  );
}
