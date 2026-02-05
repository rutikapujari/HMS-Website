"use client";

import React from "react";
import { motion } from "framer-motion";

/* ================= MODULE DATA ================= */
const coreModules = [
  {
    title: "OPD Management",
    desc: "Streamline outpatient registrations, consultations, and follow-ups with real-time doctor availability.",
    img: "https://www.nzcares.com/images/opdImages/opd-bg.webp",
  },
  {
    title: "IPD Management",
    desc: "Manage inpatient admissions, bed allocation, treatment plans, and discharge summaries efficiently.",
    img: "https://d33wubrfki0l68.cloudfront.net/3ebb026bdab3c326931fe74dc3539f3922b266f8/6f4a0/assets/img/photos/ipd-management.webp",
  },
  {
    title: "Pharmacy Management",
    desc: "Handle prescriptions, medicine stock, expiry alerts, and billing seamlessly.",
    img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Inventory Management",
    desc: "Track medical supplies, automate stock alerts, and optimize procurement workflows.",
    img: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Laboratory Management",
    desc: "Digitize lab tests, reports, sample tracking, and doctor integrations.",
    img: "https://img.freepik.com/premium-photo/laboratory-equipment-hd-8k-wallpaper-stock-photographic-image_1030895-34744.jpg",
  },
  {
    title: "Radiology Management",
    desc: "Manage imaging workflows, reports, PACS integration, and diagnostics.",
    img: "https://radiologybusiness.com/sites/default/files/styles/top_stories/public/2024-05/istock-1477482163.jpg.webp?itok=Gr38tuJH",
  },
  {
    title: "Billing & Accounting",
    desc: "Automated billing, insurance processing, tax handling, and financial reports.",
    img: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1600&q=80",
  },
];

/* ================= CORE MODULE ================= */
function CoreModules() {
  return (
    <section id="core-modules" className="py-24">
      {coreModules.map((module, index) => {
        const reverse = index % 2 !== 0;

        return (
          <div
            key={index}
            className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center py-20 ${
              reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: reverse ? 80 : -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#023042]">
                {module.title}
              </h2>

              <p className="mt-6 text-[#053C50] max-w-xl">
                {module.desc}
              </p>

              <span
                className="
                  inline-block mt-8 px-8 py-3 rounded-full font-semibold tracking-wide
                  bg-gradient-to-r from-[#C85038] to-[#9C4436]
                  text-white shadow-xl shadow-[#C85038]/30
                "
              >
                Core Module
              </span>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-[#04748B]/40 to-[#053C50]/40 blur-3xl"></div>

              <img
                src={module.img}
                alt={module.title}
                className="
                  relative w-full h-[420px] object-cover rounded-3xl
                  border border-[#04748B]/40 shadow-2xl
                "
              />
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}


/* ================= PATIENT MANAGEMENT ================= */
function PatientManagement() {
  const items = [
    { title: "Patient Registration", icon: "📝" },
    { title: "UHID Assignment", icon: "🆔" },
    { title: "Online Appointment", icon: "📅" },
    { title: "Insurance Management", icon: "💳" },
    { title: "Referral Management", icon: "🔗" },
    { title: "Queue Management", icon: "⏱️" },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Soft floating glows */}
      <div className="absolute -top-40 -left-40 w-[480px] h-[480px] bg-[#04748B]/15 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-[480px] h-[480px] bg-[#C85038]/15 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-extrabold text-center mb-20 text-[#023042]">
          Patient Management
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08, y: -10 }}
              className="
                relative flex flex-col items-center justify-center
                rounded-full p-14 text-center
                border border-[#04748B]/30
                bg-white
                shadow-xl hover:shadow-2xl transition
              "
            >
              {/* Icon */}
              <div
                className="
                  flex items-center justify-center w-20 h-20 rounded-full
                  bg-gradient-to-r from-[#04748B]/20 to-[#053C50]/20
                  text-[#04748B] text-3xl mb-6
                "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-[#023042]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#053C50] text-sm max-w-xs">
                Efficient handling of{" "}
                <span className="text-[#C85038] font-semibold">
                  {item.title.toLowerCase()}
                </span>{" "}
                for smooth hospital operations.
              </p>

              {/* Glow */}
              <div
                className="
                  absolute -inset-2 rounded-full
                  bg-gradient-to-r from-[#04748B]/25 to-[#C85038]/25
                  blur-3xl opacity-60
                "
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



/* ================= CLINICAL MODULE ================= */
function ClinicalModules() {
  const items = [
    { title: "Doctor Scheduling", icon: "📅" },
    { title: "Prescription Management", icon: "💊" },
    { title: "Health Records", icon: "📋" },
    { title: "ICD Code Diagnosis", icon: "🧾" },
    { title: "Report Attachments", icon: "📎" },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-center text-[#023042]">
          Clinical Modules
        </h2>

        {/* Horizontal Scroll */}
        <div className="flex gap-8 overflow-x-auto py-6 scrollbar-hide">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, y: -10 }}
              className="
                min-w-[260px] flex-shrink-0 relative rounded-3xl
                bg-gradient-to-br from-[#04748B] to-[#053C50]
                text-white p-10 text-center
                border border-[#023042]/40
                shadow-2xl cursor-pointer
              "
            >
              {/* Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#04748B]/40 to-[#C85038]/30 blur-3xl"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-6xl mb-5">{item.icon}</div>

                <h3 className="text-xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-200">
                  Efficient{" "}
                  <span className="text-[#C85038] font-semibold">
                    {item.title.toLowerCase()}
                  </span>{" "}
                  management for smooth clinical operations.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



/* ================= ADMINISTRATIVE MODULE ================= */
function AdministrativeModules() {
  const items = [
    { title: "Ward & Bed Management", icon: "🛏️" },
    { title: "Room Transfer", icon: "🔄" },
    { title: "OT Management", icon: "🏥" },
    { title: "Surgery Counseling", icon: "🩺" },
    { title: "MIS Reporting", icon: "📊" },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-center text-[#023042]">
          Administrative Modules
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08, y: -8 }}
              className="
                relative p-10 rounded-3xl
                bg-gradient-to-br from-[#04748B] to-[#053C50]
                text-white shadow-2xl
                border border-[#023042]/40
                flex flex-col items-center justify-center
                overflow-hidden cursor-pointer
              "
            >
              {/* Glow Accent */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#04748B]/40 to-[#C85038]/30 blur-3xl rounded-3xl"></div>

              {/* Decorative Orbs */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#C85038]/20"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#9C4436]/20"></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="text-5xl mb-5">{item.icon}</div>

                <h3 className="font-bold text-xl mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-200">
                  Manage{" "}
                  <span className="text-[#C85038] font-semibold">
                    {item.title.toLowerCase()}
                  </span>{" "}
                  efficiently.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= ADD-ON MODULE ================= */
function AddOnModules() {
  const items = [
    { title: "Queue Management System", icon: "⏱️" },
    { title: "SMS Integration", icon: "📱" },
    { title: "Cloud Hosting", icon: "☁️" },
    { title: "Multi-User System", icon: "👥" },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-[#023042]">
          Add-On Modules
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08, y: -8 }}
              className="
                relative p-10 rounded-3xl
                bg-gradient-to-br from-[#04748B] to-[#053C50]
                text-white shadow-2xl
                border border-[#023042]/40
                flex flex-col items-center justify-center
                overflow-hidden cursor-pointer
              "
            >
              {/* Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#04748B]/40 to-[#C85038]/30 blur-3xl rounded-3xl"></div>

              {/* Accent dots */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#C85038]/20"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#9C4436]/20"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-5">{item.icon}</div>

                <h3 className="font-bold text-xl mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-200">
                  Enhance efficiency with{" "}
                  <span className="text-[#C85038] font-semibold">
                    {item.title.toLowerCase()}
                  </span>
                  .
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ================= MAIN PAGE ================= */
export default function ModulesPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#023042]/90 via-[#053C50]/85 to-[#04748B]/80"></div>

        {/* Accent glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,80,56,0.25),transparent_60%)]"></div>

        <div className="relative z-10 max-w-4xl">
          <span className="inline-block mb-6 px-6 py-3 rounded-full border border-[#C85038]/40 text-[#C85038] bg-[#023042]/40">
            ⚙️ Hospital Information Management System
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6">
            HIMS Modules
          </h1>

          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto">
            A complete Hospital Information Management System designed for
            automation, efficiency, and smart healthcare operations.
          </p>

          <div className="mt-12 flex justify-center gap-6">
            <a
              href="#core-modules"
              className="
                px-10 py-4 rounded-full font-bold text-white
                bg-gradient-to-r from-[#C85038] to-[#9C4436]
                shadow-xl hover:scale-105 transition
              "
            >
              Explore Modules
            </a>

            <a
              href="#contact"
              className="
                px-10 py-4 rounded-full font-semibold
                border border-white/30 text-white
                hover:bg-white hover:text-[#023042] transition
              "
            >
              Request Demo
            </a>
          </div>
        </div>
      </section>

      {/* Sections */}
      <CoreModules />
      <PatientManagement />
      <ClinicalModules />
      <AdministrativeModules />
      <AddOnModules />
    </div>
  );
}

