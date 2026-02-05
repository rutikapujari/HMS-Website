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
    <section className="py-28 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#04748B]/20 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#C85038]/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <p className="text-[#04748B] font-semibold mb-3 tracking-wide">
          Challenges Hospitals Face
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-[#023042]">
          Common <span className="text-[#C85038]">Pain Points</span>
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
          {painCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -6 }}
              className="bg-white/80 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl 
                         flex flex-col items-center text-center gap-4 
                         border border-black/10 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-tr ${card.gradient}
                flex items-center justify-center text-4xl text-white shadow-xl mb-4`}
              >
                {card.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-[#023042] mb-2">
                {card.title}
              </h3>

              <p className="text-gray-600">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= WHY HIMS ================= */

function WhyHims() {
  return (
    <section className="py-28 relative overflow-hidden bg-[#F8FBFC]">
      {/* Decorative soft glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#04748B]/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#C85038]/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <p className="text-[#04748B] font-semibold mb-3 tracking-wide">
            One platform. Total control.
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#053C50]">
            How <span className="text-[#C85038]">HIMS</span> Solves This
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          <WhyCard
            icon="💻"
            title="Complete Digitization"
            desc="End-to-end hospital workflows with zero paperwork."
            color="from-[#053C50] to-[#04748B]"
          />
          <WhyCard
            icon="📊"
            title="Smart Analytics"
            desc="Live dashboards for management decisions."
            color="from-[#04748B] to-[#053C50]"
          />
          <WhyCard
            icon="🔐"
            title="Secure & Compliant"
            desc="ABHA ready, role-based access & encrypted data."
            color="from-[#023042] to-[#053C50]"
          />
          <WhyCard
            icon="⚡"
            title="Faster Operations"
            desc="Reduce patient waiting time drastically."
            color="from-[#C85038] to-[#9C4436]"
          />
          <WhyCard
            icon="🚀"
            title="Scalable Growth"
            desc="Works for clinics to hospital chains."
            color="from-[#053C50] to-[#023042]"
          />
        </div>
      </div>
    </section>
  );
}

function WhyCard({ icon, title, desc, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="bg-white rounded-3xl p-8 shadow-xl 
                 flex flex-col items-center text-center gap-4 
                 cursor-pointer transition-all duration-300 
                 border border-[#053C50]/10"
    >
      {/* Icon */}
      <div
        className={`w-20 h-20 rounded-full bg-gradient-to-tr ${color}
        flex items-center justify-center text-4xl text-white shadow-lg mb-4`}
      >
        {icon}
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-[#053C50] mb-2">
        {title}
      </h3>

      <p className="text-[#023042]/80">{desc}</p>
    </motion.div>
  );
}

/* ================= AI SECTION ================= */

function AISection() {
  const cards = [
    {
      icon: "🤖",
      title: "Smart Automation",
      desc: "Automated billing, discharge summaries and alerts.",
      color: "from-[#04748B] to-[#053C50]",
    },
    {
      icon: "🧠",
      title: "Predictive Insights",
      desc: "Identify trends, revenue leaks and patient behavior.",
      color: "from-[#053C50] to-[#023042]",
    },
    {
      icon: "⚙️",
      title: "Decision Support",
      desc: "AI dashboards for faster management decisions.",
      color: "from-[#C85038] to-[#9C4436]",
    },
  ];

  return (
    <section className="py-28 relative overflow-hidden bg-[#F8FBFC]">
      {/* Soft futuristic glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#04748B]/15 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#C85038]/15 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <p className="text-[#04748B] font-semibold mb-3 tracking-wide">
            Built for the Future
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#053C50]">
            AI-Powered{" "}
            <span className="text-[#C85038]">Hospital Intelligence</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="bg-white rounded-3xl p-8 shadow-xl
                         flex flex-col items-center text-center gap-4
                         cursor-pointer transition-all duration-300
                         border border-[#053C50]/10"
            >
              {/* Icon */}
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-tr ${card.color}
                flex items-center justify-center text-4xl text-white shadow-lg mb-4`}
              >
                {card.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-[#053C50] mb-2">
                {card.title}
              </h3>

              <p className="text-[#023042]/80">{card.desc}</p>
            </motion.div>
          ))}
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
    <section className="relative py-28 bg-[#023042] overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#04748B]/30 blur-[140px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[32rem] h-[32rem] bg-[#053C50]/40 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-20">
          How <span className="text-[#C85038]">HIMS</span> Works
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="bg-white/10 backdrop-blur-xl border border-white/10
              rounded-3xl p-8 shadow-2xl flex flex-col items-center gap-4
              cursor-pointer hover:border-[#C85038]/40"
            >
              {/* Step Number */}
              <div
                className="w-16 h-16 rounded-full bg-gradient-to-tr
                from-[#C85038] to-[#9C4436]
                flex items-center justify-center
                text-white text-xl font-black shadow-lg"
              >
                {step.number}
              </div>

              {/* Icon */}
              <div className="text-4xl mt-2">{step.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white">{step.title}</h3>

              {/* Text */}
              <p className="text-white/70 text-center leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          ))}
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
    <section className="relative py-28 overflow-hidden">
      {/* Soft glow decorations (no base bg) */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#04748B]/25 blur-[140px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-[#053C50]/25 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-16">
          Built For <span className="text-[#C85038]">Every</span> Healthcare
          Provider
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.06 }}
              transition={{ duration: 0.4 }}
              className="bg-white/70 backdrop-blur-xl
              border border-gray-200
              rounded-3xl p-10 shadow-2xl
              flex flex-col items-center gap-5
              cursor-pointer hover:border-[#C85038]/40"
            >
              {/* Icon Circle */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-4xl
                bg-gradient-to-tr from-[#04748B] to-[#053C50]
                shadow-lg"
              >
                {item.icon}
              </div>

              {/* Text */}
              <p className="font-bold text-lg text-gray-800 tracking-wide">
                {item.text}
              </p>
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
