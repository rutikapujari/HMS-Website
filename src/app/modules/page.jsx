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
    <section className="relative py-28 bg-gradient-to-b from-[#F5FAFC] to-white overflow-hidden">
      {/* background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#04748B]/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C85038]/20 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* header */}
        <div className="text-center mb-24">
          <span className="inline-block mb-4 px-5 py-1.5 text-sm font-semibold tracking-wide text-[#04748B] bg-[#04748B]/10 rounded-full">
            Patient Lifecycle
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#023042]">
            Intelligent <span className="text-[#04748B]">Patient Management</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-lg text-[#023042]/75">
            A unified system to manage patient journeys seamlessly from
            registration to discharge with speed, accuracy, and transparency.
          </p>
        </div>

        {/* zig-zag cards */}
        <div className="relative space-y-16">
          {items.map((item, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row items-center gap-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* icon block */}
              <div className="flex-shrink-0 w-24 h-24 rounded-3xl bg-gradient-to-br from-[#04748B] to-[#053C50] text-white text-4xl flex items-center justify-center shadow-xl">
                {item.icon}
              </div>

              {/* content card */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-lg border border-[#04748B]/10 max-w-xl hover:shadow-2xl transition">
                <h3 className="text-xl font-bold text-[#023042] group-hover:text-[#04748B] transition">
                  {item.title}
                </h3>

                <p className="mt-3 text-[#053C50]/80 leading-relaxed">
                  Enables efficient handling of{" "}
                  <span className="font-semibold text-[#C85038]">
                    {item.title.toLowerCase()}
                  </span>
                  , reducing wait times, improving patient satisfaction, and
                  ensuring smooth hospital workflows.
                </p>

                {/* underline accent */}
                <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#04748B] to-[#C85038]" />
              </div>

              {/* connector line */}
              {i !== items.length - 1 && (
                <div className="hidden md:block absolute left-1/2 -bottom-16 w-[2px] h-16 bg-[#04748B]/30" />
              )}
            </div>
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
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#020f16] to-[#021c28]">
      {/* ambient background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-6 py-2 text-xs font-semibold tracking-widest uppercase text-cyan-200 bg-white/10 backdrop-blur rounded-full mb-6">
            Clinical Intelligence
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            Advanced{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-orange-400 bg-clip-text text-transparent">
              Clinical Modules
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-cyan-100/70">
            Smart tools designed to support doctors, streamline clinical
            workflows, and improve patient outcomes.
          </p>
        </div>

        {/* stacked cards carousel */}
        <div className="relative">
          <div className="flex gap-10 overflow-x-auto pb-16 snap-x snap-mandatory scrollbar-hide">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ y: -14, rotate: -1 }}
                className="relative min-w-[300px] md:min-w-[360px] snap-center group"
              >
                {/* gradient shell */}
                <div className="absolute -inset-[2px] rounded-[32px] bg-gradient-to-br from-cyan-400 via-teal-400 to-orange-400 opacity-40 group-hover:opacity-90 transition"></div>

                {/* glass card */}
                <div className="relative h-full rounded-[32px] bg-white/10 backdrop-blur-2xl border border-white/10 p-12 text-center">
                  {/* floating icon */}
                  <motion.div
                    whileHover={{ scale: 1.25, rotate: 6 }}
                    className="mx-auto mb-8 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl bg-gradient-to-br from-cyan-400 to-teal-500 shadow-2xl"
                  >
                    {item.icon}
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-sm text-cyan-100/75 leading-relaxed">
                    Intelligent{" "}
                    <span className="font-semibold text-orange-400">
                      {item.title.toLowerCase()}
                    </span>{" "}
                    designed to accelerate clinical decision-making and improve
                    care delivery.
                  </p>

                  {/* hover accent */}
                  <div className="mt-8 mx-auto h-[2px] w-0 group-hover:w-20 transition-all duration-500 bg-gradient-to-r from-cyan-400 to-orange-400"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* edge fade */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#020f16] to-transparent"></div>
          <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#020f16] to-transparent"></div>
        </div>

        {/* scroll cue */}
        <div className="mt-20 flex flex-col items-center gap-2 text-cyan-300/70 text-xs tracking-widest uppercase">
          <span>Scroll</span>
          <div className="w-1 h-8 rounded-full bg-gradient-to-b from-cyan-400 to-orange-400"></div>
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
    <section className="relative py-28 bg-white overflow-hidden">
      {/* architectural background */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(4,116,139,0.06),transparent,rgba(200,80,56,0.06))]" />
      <div className="absolute -top-40 left-1/3 w-[520px] h-[520px] bg-[#04748B]/20 rounded-full blur-[140px]" />
      <div className="absolute -bottom-40 right-1/3 w-[520px] h-[520px] bg-[#C85038]/20 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* header */}
        <div className="text-center mb-24">
          <span className="inline-block mb-4 px-5 py-1.5 text-sm font-semibold tracking-wide text-[#04748B] bg-[#04748B]/10 rounded-full">
            Hospital Administration
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#023042]">
            Administrative <span className="text-[#04748B]">Modules</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-lg text-[#023042]/75">
            Control and optimize hospital infrastructure, operations, and
            reporting through smart administrative workflows.
          </p>
        </div>

        {/* timeline style layout */}
        <div className="relative grid md:grid-cols-5 gap-10">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl p-8 shadow-xl border border-[#04748B]/10
                         hover:shadow-2xl transition duration-500"
            >
              {/* step badge */}
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-xl bg-gradient-to-br from-[#04748B] to-[#053C50]
                              text-white text-sm font-bold flex items-center justify-center shadow-lg">
                {i + 1}
              </div>

              {/* icon */}
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#04748B]/15 to-[#053C50]/15
                              text-[#04748B] text-3xl flex items-center justify-center
                              group-hover:from-[#04748B] group-hover:to-[#053C50]
                              group-hover:text-white transition-all duration-500 shadow-inner">
                {item.icon}
              </div>

              {/* title */}
              <h3 className="text-lg font-semibold text-[#023042] group-hover:text-[#04748B] transition">
                {item.title}
              </h3>

              {/* description */}
              <p className="mt-3 text-sm text-[#023042]/70 leading-relaxed">
                Provides centralized control over{" "}
                <span className="font-semibold text-[#C85038]">
                  {item.title.toLowerCase()}
                </span>
                , improving utilization, compliance, and operational efficiency.
              </p>

              {/* underline */}
              <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-[#04748B] to-[#C85038]" />
            </div>
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
    <section className="relative py-32 overflow-hidden bg-[#020f16]">
      {/* animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* ambient glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* header */}
        <div className="text-center mb-24">
          <span className="inline-flex items-center gap-2 px-6 py-2 text-xs font-semibold tracking-[0.35em] uppercase text-cyan-300 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mb-6">
            Optional Enhancements
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            Powerful{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-orange-400 bg-clip-text text-transparent">
              Add-On Modules
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-cyan-100/70">
            Extend your hospital platform with smart add-ons that improve
            scalability, communication, and system performance.
          </p>
        </div>

        {/* hex cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-14">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -16 }}
              className="relative group"
            >
              {/* gradient border */}
              <div className="absolute -inset-[2px] bg-gradient-to-br from-cyan-400 to-orange-400 opacity-40 group-hover:opacity-90 transition clip-hex"></div>

              {/* card */}
              <div className="relative clip-hex bg-white/10 backdrop-blur-2xl border border-white/10 p-12 text-center">
                {/* floating icon */}
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.25 }}
                  className="mx-auto mb-7 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl bg-gradient-to-br from-cyan-400 to-teal-500 shadow-xl"
                >
                  {item.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-cyan-100/75 leading-relaxed">
                  Enhance operations with{" "}
                  <span className="text-orange-400 font-semibold">
                    {item.title.toLowerCase()}
                  </span>
                  .
                </p>

                {/* hover underline */}
                <div className="mt-6 mx-auto h-[2px] w-0 group-hover:w-16 transition-all duration-500 bg-gradient-to-r from-cyan-400 to-orange-400"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* hex clip style */}
      <style jsx>{`
        .clip-hex {
          clip-path: polygon(
            25% 0%,
            75% 0%,
            100% 50%,
            75% 100%,
            25% 100%,
            0% 50%
          );
        }
      `}</style>
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

