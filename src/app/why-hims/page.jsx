"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ================= PAGE ================= */

export default function WhyHIMSPage() {
  return (
    <main className="bg-white text-gray-800 overflow-x-hidden">
      {/* ================= SCROLL PROGRESS ================= */}
      <ScrollProgress />

      {/* ================= HERO ================= */}
      <HeroSection />

      {/* ================= PAIN POINTS ================= */}
      <PainPoints />

      {/* ================= WHY HIMS ================= */}
      <WhyHims />

      {/* ================= AI SECTION ================= */}
      <AISection />

      {/* ================= PROCESS ================= */}
      <ProcessSection />

      {/* ================= WHO IT'S FOR ================= */}
      <WhoItsFor />

      {/* ================= FINAL CTA ================= */}
      <FinalCTA />
    </main>
  );
}

/* ================= SCROLL PROGRESS ================= */

function ScrollProgress() {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50 origin-left"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1 }}
    />
  );
}

/* ================= HERO SECTION ================= */

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#023042] text-white">
      {/* ===== BACKGROUND GLOWS ===== */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[45%] h-[45%] bg-[#04748B]/40 blur-[160px] rounded-full" />
        <div className="absolute -bottom-32 -right-32 w-[45%] h-[45%] bg-[#053C50]/50 blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff14,transparent_60%)]" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full 
          bg-[#C85038]/15 border border-[#C85038]/40 
          text-[#C85038] text-sm font-bold tracking-wide"
        >
          India’s Smart Hospital Platform
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-7xl font-extrabold leading-tight"
        >
          Why Modern Hospitals <br />
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r 
            from-[#C85038] via-[#04748B] to-[#053C50]
            drop-shadow-[0_0_20px_rgba(200,80,56,0.35)]"
          >
            Choose HIMS
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-white/75"
        >
          A single platform to manage patients, doctors, billing, compliance and
          growth — securely and effortlessly.
        </motion.p>

        {/* Buttons */}
        <div className="mt-14 flex flex-wrap justify-center gap-6">
          <button
            className="px-10 py-5 rounded-2xl font-black text-lg
            bg-gradient-to-r from-[#C85038] to-[#9C4436]
            hover:from-[#9C4436] hover:to-[#C85038]
            shadow-2xl shadow-[#C85038]/40 transition"
          >
            Book Free Demo
          </button>

          <button
            className="px-10 py-5 rounded-2xl font-bold text-lg
            border-2 border-[#04748B] text-[#04748B]
            hover:bg-[#04748B] hover:text-white transition"
          >
            Talk to Expert
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { value: "500+", label: "Hospitals" },
            { value: "99.9%", label: "Uptime" },
            { value: "40%", label: "Efficiency Boost" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md border border-white/15 
              rounded-2xl py-8 px-6"
            >
              <div className="text-4xl font-black text-[#C85038]">
                {stat.value}
              </div>
              <div className="mt-2 text-white/70 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= PAIN POINTS ================= */

function PainPoints() {
  const painCards = [
    {
      title: "Manual Processes",
      text: "Paper files, human errors & delayed reports.",
      icon: "📄",
      gradient: "from-[#053C50] to-[#04748B]",
    },
    {
      title: "Revenue Leakage",
      text: "Billing gaps, missed charges & inefficiencies.",
      icon: "💸",
      gradient: "from-[#9C4436] to-[#C85038]",
    },
    {
      title: "Compliance Pressure",
      text: "ABHA, audits & data security challenges.",
      icon: "🔒",
      gradient: "from-[#023042] to-[#053C50]",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-white">
      {/* Background texture + glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#ffffff,transparent_40%,#ffffff)]"></div>
      <div className="absolute top-0 left-1/2 w-[50rem] h-[50rem] -translate-x-1/2 bg-[#04748B]/15 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-[#C85038]/15 blur-[160px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <p className="text-[#04748B] font-semibold tracking-widest uppercase mb-4">
            Where Hospitals Struggle
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#023042]">
            Real-World <span className="text-[#C85038]">Operational Pain</span>
          </h2>
        </motion.div>

        {/* Step style layout */}
        <div className="relative flex flex-col gap-20">
          {painCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-12`}
            >
              {/* Number rail */}
              <div className="absolute left-1/2 -top-12 -translate-x-1/2 md:hidden text-6xl font-black text-black/5">
                {index + 1}
              </div>

              {/* Icon block */}
              <div
                className={`shrink-0 w-36 h-36 rounded-[2.5rem]
                bg-gradient-to-br ${card.gradient}
                flex items-center justify-center text-6xl text-white
                shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)]
                relative`}
              >
                {card.icon}
                <span className="absolute inset-0 rounded-[2.5rem] ring-2 ring-white/30"></span>
              </div>

              {/* Content */}
              <div className="relative bg-white/80 backdrop-blur-2xl border border-black/10 rounded-[2.5rem] p-10 shadow-2xl max-w-xl">
                <span className="absolute -top-6 -left-6 hidden md:flex w-14 h-14 rounded-full bg-[#023042] text-white items-center justify-center font-bold text-xl shadow-xl">
                  {index + 1}
                </span>

                <h3 className="text-2xl md:text-3xl font-extrabold text-[#023042] mb-4">
                  {card.title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= WHY HIMS ================= */

function WhyHims() {
  const items = [
    {
      icon: "💻",
      title: "Complete Digitization",
      desc: "End-to-end hospital workflows with zero paperwork.",
      color: "from-[#053C50] to-[#04748B]",
      side: "left",
    },
    {
      icon: "📊",
      title: "Smart Analytics",
      desc: "Live dashboards for faster, confident management decisions.",
      color: "from-[#04748B] to-[#053C50]",
      side: "right",
    },
    {
      icon: "🔐",
      title: "Secure & Compliant",
      desc: "ABHA ready, role-based access & encrypted data.",
      color: "from-[#023042] to-[#053C50]",
      side: "left",
    },
    {
      icon: "⚡",
      title: "Faster Operations",
      desc: "Drastically reduce patient waiting time.",
      color: "from-[#C85038] to-[#9C4436]",
      side: "right",
    },
    {
      icon: "🚀",
      title: "Scalable Growth",
      desc: "Works seamlessly from clinics to hospital chains.",
      color: "from-[#053C50] to-[#023042]",
      side: "left",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-[#053C50]">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#04748B14_1px,transparent_1px),linear-gradient(to_bottom,#04748B14_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Ambient glows */}
      <div className="absolute top-1/3 left-0 w-[30rem] h-[30rem] bg-[#04748B]/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-0 w-[30rem] h-[30rem] bg-[#C85038]/20 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="inline-block px-5 py-1.5 rounded-full bg-[#04748B]/10 text-[#04748B] font-semibold tracking-wide mb-5">
            One Platform. Total Control.
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Why Hospitals Choose <span className="text-[#C85038]">HIMS</span>
          </h2>

          <p className="mt-6 text-lg text-white/80">
            Designed to eliminate complexity, improve efficiency, and scale
            healthcare operations intelligently.
          </p>
        </div>

        {/* Vertical journey layout */}
        <div className="relative mt-24">
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-[#04748B]/30 via-[#053C50]/30 to-[#C85038]/30 hidden md:block"></div>

          <div className="flex flex-col gap-20">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  item.side === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Icon node */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  className={`relative w-28 h-28 rounded-full bg-gradient-to-tr ${item.color}
                              flex items-center justify-center text-5xl text-white shadow-2xl`}
                >
                  {item.icon}
                  <div className="absolute inset-0 rounded-full bg-white/20 blur-xl"></div>
                </motion.div>

                {/* Content card */}
                <div
                  className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 
                             shadow-xl border border-[#053C50]/10 max-w-xl"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-[#053C50] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-[#023042]/80 text-lg leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-6 h-[3px] w-24 bg-gradient-to-r from-[#04748B] to-[#C85038] rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= AI SECTION ================= */

function AISection() {
  const cards = [
    {
      icon: "🤖",
      title: "Smart Automation",
      desc: "Automated billing, discharge summaries and alerts.",
      glow: "bg-[#04748B]",
    },
    {
      icon: "🧠",
      title: "Predictive Insights",
      desc: "Identify trends, revenue leaks and patient behavior.",
      glow: "bg-[#053C50]",
    },
    {
      icon: "⚙️",
      title: "Decision Support",
      desc: "AI dashboards for faster management decisions.",
      glow: "bg-[#C85038]",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#F8FBFC] via-white to-[#F1F7F9]">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#04748B1A_1px,transparent_0)] bg-[size:28px_28px] opacity-40"></div>

      {/* Floating gradients */}
      <div className="absolute top-1/4 left-1/3 w-[28rem] h-[28rem] bg-[#04748B]/20 rounded-full blur-[140px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[26rem] h-[26rem] bg-[#C85038]/20 rounded-full blur-[140px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="inline-block px-4 py-1 rounded-full bg-[#04748B]/10 text-[#04748B] font-semibold tracking-wide mb-4">
            AI That Works for You
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#053C50] leading-tight">
            Intelligence That <br />
            <span className="text-[#C85038]">Runs Your Hospital</span>
          </h2>

          <p className="mt-6 text-lg text-[#023042]/80">
            Move beyond software. Leverage AI that automates operations,
            predicts outcomes, and empowers leadership.
          </p>
        </div>

        {/* Timeline-style cards */}
        <div className="relative mt-24">
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-[#04748B]/40 via-[#053C50]/40 to-[#C85038]/40 hidden md:block"></div>

          <div className="flex flex-col gap-20">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Icon bubble */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  className={`relative w-28 h-28 rounded-full ${card.glow}
                              flex items-center justify-center text-5xl text-white shadow-2xl`}
                >
                  {card.icon}
                  <div className="absolute inset-0 rounded-full blur-xl opacity-60 bg-white/20"></div>
                </motion.div>

                {/* Content */}
                <div
                  className="bg-white/80 backdrop-blur-xl border border-[#053C50]/10 
                                rounded-3xl p-8 md:p-10 shadow-xl max-w-xl"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-[#053C50] mb-4">
                    {card.title}
                  </h3>

                  <p className="text-[#023042]/80 text-lg leading-relaxed">
                    {card.desc}
                  </p>

                  <div className="mt-6 h-[3px] w-20 bg-gradient-to-r from-[#04748B] to-[#C85038] rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= PROCESS SECTION ================= */
function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Setup",
      text: "Quick onboarding & configuration",
      icon: "🛠️",
    },
    {
      number: "02",
      title: "Training",
      text: "Staff training & data migration",
      icon: "📚",
    },
    {
      number: "03",
      title: "Go Live",
      text: "Start operations digitally",
      icon: "🚀",
    },
    {
      number: "04",
      title: "Scale",
      text: "Grow with advanced modules",
      icon: "📈",
    },
  ];

  return (
    <section className="relative py-36 bg-[#053C50] overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute w-[700px] h-[700px] bg-cyan-400/20 blur-[180px] -top-40 -left-40 rounded-full" />
      <div className="absolute w-[700px] h-[700px] bg-orange-400/20 blur-[180px] -bottom-40 -right-40 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-28 text-center">
          How{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-orange-400 bg-clip-text text-transparent">
            HIMS
          </span>{" "}
          Works
        </h2>

        {/* Timeline Line */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 w-[3px] h-full bg-gradient-to-b from-cyan-400 via-orange-400 to-cyan-400 opacity-40 -translate-x-1/2"></div>

          <div className="flex flex-col gap-28">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-center gap-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Center Dot */}
                <div
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-20 h-20 rounded-full 
                  bg-gradient-to-tr from-cyan-400 to-orange-400 items-center justify-center
                  text-black font-black text-xl shadow-2xl z-10"
                >
                  {step.number}
                </div>

                {/* Card */}
                <div
                  className="group relative md:w-[45%] bg-[#031c28]/80 backdrop-blur-xl
                  border border-white/10 rounded-[40px] p-14 shadow-2xl
                  hover:-translate-y-4 transition-all duration-700 overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400/20 to-orange-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

                  <div className="relative z-10 text-center md:text-left">
                    {/* Mobile number */}
                    <div
                      className="md:hidden w-16 h-16 mx-auto mb-6 rounded-full
                      bg-gradient-to-tr from-cyan-400 to-orange-400
                      flex items-center justify-center text-black font-black text-xl shadow-lg"
                    >
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="text-6xl mb-6">{step.icon}</div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {step.title}
                    </h3>

                    {/* Text */}
                    <p className="text-slate-300 leading-relaxed text-lg">
                      {step.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= WHO IT'S FOR ================= */

function WhoItsFor() {
  const items = [
    { icon: "🏥", text: "Hospitals" },
    { icon: "🏨", text: "Clinics" },
    { icon: "🧪", text: "Diagnostics" },
    { icon: "🌐", text: "Healthcare Chains" },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background mesh glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#04748B20,transparent_40%),radial-gradient(circle_at_bottom_right,#C8503820,transparent_45%)]" />
      <div className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] -translate-x-1/2 -translate-y-1/2 bg-[#053C50]/10 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900">
            Designed For{" "}
            <span className="bg-gradient-to-r from-[#04748B] to-[#C85038] bg-clip-text text-transparent">
              Every Care Ecosystem
            </span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
            Scalable healthcare technology built to adapt across organizations,
            sizes, and specialties.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-16">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.04 }}
              className="relative group"
            >
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-[#04748B] via-[#C85038] to-[#053C50] opacity-0 group-hover:opacity-100 transition duration-500 blur-sm" />

              {/* Card */}
              <div
                className="relative rounded-[2.5rem] p-12 bg-white/80 backdrop-blur-xl
                border border-gray-200 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)]
                flex items-center gap-8"
              >
                {/* Icon */}
                <div
                  className="relative w-24 h-24 flex items-center justify-center rounded-full text-5xl
                  bg-gradient-to-br from-[#04748B] to-[#053C50] text-white shadow-2xl"
                >
                  {item.icon}
                  <span className="absolute inset-0 rounded-full ring-2 ring-white/30 animate-pulse" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.text}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Smart workflows, compliance-ready infrastructure, and
                    real-time insights tailored for {item.text.toLowerCase()}.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= FINAL CTA ================= */

function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden py-28 text-white text-center
      bg-gradient-to-r from-[#023042] via-[#04748B] to-[#053C50]"
    >
      {/* Decorative glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#04748B]/30 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#053C50]/40 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Ready to Modernize Your Hospital?
        </h2>

        <p className="text-lg md:text-xl text-white/80 mb-12">
          Discover how HIMS can transform your hospital operations in just 30
          minutes.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* Primary CTA */}
          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contact">
              <button
                className="px-12 py-4 rounded-2xl
                bg-gradient-to-r from-[#C85038] to-[#9C4436]
                text-white font-bold text-lg shadow-xl
                hover:shadow-2xl transition-all duration-300"
              >
                Schedule Free Demo
              </button>
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contact">
              <button
                className="px-12 py-4 rounded-2xl
                border-2 border-white/70 text-white font-bold text-lg
                hover:bg-white hover:text-[#023042]
                transition-all duration-300"
              >
                Talk to Expert
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320">
        <path
          fill="#023042"
          fillOpacity="0.5"
          d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,197.3C960,213,1056,203,1152,192C1248,181,1344,171,1392,165.3L1440,160L1440,320L0,320Z"
        />
      </svg>
    </section>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center">
      <p className="text-blue-600 font-semibold mb-3">{subtitle}</p>
      <h2 className="text-4xl font-extrabold">{title}</h2>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="bg-white/15 backdrop-blur rounded-2xl p-6">
      <p className="text-4xl font-extrabold">{value}</p>
      <p className="mt-2 text-blue-100">{label}</p>
    </div>
  );
}

function PrimaryBtn({ text }) {
  return (
    <Link href="/contact">
      <button className="px-10 py-4 rounded-xl bg-white text-blue-700 font-bold text-lg hover:scale-105 transition">
        {text}
      </button>
    </Link>
  );
}

function OutlineBtn({ text }) {
  return (
    <Link href="/contact">
      <button className="px-10 py-4 rounded-xl border border-white font-bold hover:bg-white hover:text-blue-700 transition">
        {text}
      </button>
    </Link>
  );
}
