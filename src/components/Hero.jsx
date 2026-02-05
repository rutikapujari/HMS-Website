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
     <section className="relative py-28 bg-gradient-to-b from-[#023042]/5 to-white overflow-hidden">
  <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#053C50]/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 -right-24 w-96 h-96 bg-[#023042]/20 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <span className="inline-block mb-5 px-5 py-1.5 text-sm font-semibold tracking-wide text-[#023042] bg-[#053C50]/10 rounded-full">
        Hospital Operations
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold text-[#023042]">
        Core <span className="text-[#053C50]">Modules</span>
      </h2>

      <p className="mt-4 text-lg text-[#023042]/80 max-w-2xl mx-auto">
        Powerful modules designed to streamline every department of your
        hospital with accuracy, security, and speed.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {modules.map((item, index) => (
        <div
          key={index}
          className="group bg-white p-9 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-[#023042]/10"
        >
          <div className="h-1.5 w-16 mb-6 rounded-full bg-gradient-to-r from-[#023042] to-[#053C50]"></div>
          <p className="text-lg font-semibold text-[#023042] group-hover:text-[#053C50] transition">
            {item}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-24 flex justify-center">
      <span className="w-28 h-1.5 rounded-full bg-gradient-to-r from-[#023042] via-[#053C50] to-[#023042]"></span>
    </div>
  </div>
</section>


      {/* ================= WHO CAN USE HIMS ================= */}
      <section className="py-24 bg-gradient-to-b from-[#023042]/5 to-[#053C50]/5">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-[#023042]">
      Who Can <span className="text-[#053C50]">Use HIMS</span>
    </h2>

    <div className="grid md:grid-cols-3 gap-10">
      {whoCanUse.map((item, index) => (
        <div
          key={index}
          className="p-10 rounded-3xl border border-[#023042]/30 bg-white shadow-md hover:shadow-2xl hover:scale-105 hover:border-[#053C50] transition-all duration-300"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-14 h-14 flex items-center justify-center bg-[#023042]/10 rounded-full text-[#023042] text-2xl font-bold group-hover:bg-gradient-to-r group-hover:from-[#023042] group-hover:to-[#053C50] group-hover:text-white transition">
              {item.icon}
            </div>
          </div>
          <p className="text-lg md:text-xl font-semibold text-[#023042] group-hover:text-[#053C50] transition">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ================= TECHNOLOGY PLATFORM ================= */}
     <section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-14 text-[#023042]">
      Technology <span className="text-[#053C50]">Platform</span>
    </h2>

    <div className="grid md:grid-cols-3 gap-10">
      {platformFeatures.map((item, index) => (
        <div
          key={index}
          className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#023042] via-[#053C50] to-[#023042] rounded-t-3xl"></div>

          <div className="w-16 h-16 flex items-center justify-center bg-[#023042]/10 text-[#023042] rounded-full text-2xl mb-6 mx-auto group-hover:bg-gradient-to-r group-hover:from-[#023042] group-hover:to-[#053C50] group-hover:text-white transition">
            {item.icon}
          </div>

          <p className="text-lg font-semibold text-[#023042] text-center group-hover:text-[#053C50] transition">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ================= BUSINESS BENEFITS ================= */}
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-white via-[#F5FAFC] to-white">
  {/* Decorative blobs */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#023042]/20 rounded-full blur-[120px]"></div>
  <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#053C50]/20 rounded-full blur-[120px]"></div>
  <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-[#0A5F78]/10 rounded-full blur-[120px]"></div>

  <div className="relative max-w-7xl mx-auto px-6">
    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#023042] tracking-tight">
        Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#023042] to-[#053C50]">Benefits</span>
      </h2>
      <p className="mt-5 max-w-2xl mx-auto text-[#053C50]/80 text-lg">
        Delivering measurable value through transparency, efficiency, and intelligent digital governance.
      </p>
    </div>

    {/* Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {businessBenefits.map((item, index) => (
        <div
          key={index}
          className="group relative rounded-3xl p-8 bg-white/70 backdrop-blur-xl border border-[#053C50]/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_70px_-20px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-3 overflow-hidden"
        >
          {/* Hover gradient overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#023042]/10 via-transparent to-[#053C50]/20"></div>

          {/* Top accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#023042] to-[#053C50]"></div>

          {/* Icon */}
          <div className="relative z-10 w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#023042]/10 to-[#053C50]/10 text-[#023042] text-2xl
            group-hover:from-[#023042] group-hover:to-[#053C50] group-hover:text-white transition-all duration-500 shadow-inner">
            {item.icon}
          </div>

          {/* Title */}
          <h3 className="relative z-10 text-center text-lg font-semibold text-[#023042] group-hover:text-[#053C50] transition-colors duration-300">
            {item.name}
          </h3>

          {/* Bottom glow */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-20 bg-[#053C50]/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
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
