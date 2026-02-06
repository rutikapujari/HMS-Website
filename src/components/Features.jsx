"use client";

import { motion } from "framer-motion";

/* ===========================
   ANIMATION VARIANTS
=========================== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* ===========================
   FEATURES DATA
=========================== */
const featuresData = [
  {
    title: "Smart Automation",
    desc: [
      "Automated billing",
      "Automated scheduling",
      "Digital prescriptions",
      "Automated reports",
    ],
  },
  {
    title: "User Friendly Design",
    desc: [
      "Simple interface",
      "Easy navigation",
      "Minimal training required",
    ],
  },
  {
    title: "Data & Security",
    desc: [
      "256-bit encrypted patient data",
      "Role-based access control",
      "Complete audit logs",
      "Secure cloud backups",
    ],
  },
  {
    title: "Multi-Platform Support",
    desc: ["Web", "Android", "iPhone", "Windows"],
  },
  {
    title: "Reporting System",
    desc: [
      "MIS Reports",
      "Daily Collection Reports",
      "Insurance Reports",
      "Patient Reports",
    ],
  },
];

/* ===========================
   FEATURES COMPONENT
=========================== */
export default function Features() {
  const smartAutomation = featuresData.find(f => f.title === "Smart Automation");
  const userFriendly = featuresData.find(f => f.title === "User Friendly Design");
  const security = featuresData.find(f => f.title === "Data & Security");
  const platforms = featuresData.find(f => f.title === "Multi-Platform Support");
  const reporting = featuresData.find(f => f.title === "Reporting System");

  return (
    <>
      {/* ================= HERO ================= */}
    <section className="relative min-h-screen bg-gradient-to-br from-[#023042] via-[#053C50] to-[#04748B] text-white overflow-hidden">
  
  {/* Radial Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(4,116,139,0.35),transparent_60%)]"></div>

  <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-28 grid lg:grid-cols-2 gap-20 items-center">
    
    {/* LEFT */}
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      <motion.span
        variants={fadeUp}
        className="inline-block mb-6 px-6 py-3 rounded-full
        bg-[#053C50]/80 border border-[#04748B]/60 text-[#C85038] font-semibold"
      >
        🏥 Hospital Management System
      </motion.span>

      <motion.h1
        variants={fadeUp}
        className="text-5xl md:text-6xl font-extrabold leading-tight mb-8"
      >
        Smart, Secure & <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C85038] to-[#9C4436]">
          Intelligent Healthcare Software
        </span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="text-[#D6E3EA] text-lg max-w-xl mb-10"
      >
        One unified platform to automate hospital operations, manage
        patients, billing, security, and reports with absolute ease.
      </motion.p>

      <motion.div variants={fadeUp} className="flex gap-6">
        <button className="px-8 py-4 rounded-full font-bold shadow-xl transition
          bg-gradient-to-r from-[#C85038] to-[#9C4436]
          hover:scale-105 hover:shadow-2xl"
        >
          Get Free Demo
        </button>

        <button className="px-8 py-4 rounded-full transition
          border border-[#04748B]/60 text-white
          hover:bg-[#053C50]"
        >
          Explore Features
        </button>
      </motion.div>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative flex justify-center"
    >
      <div className="absolute -inset-8 bg-gradient-to-r from-[#04748B]/40 to-[#053C50]/40 blur-3xl rounded-full"></div>

      <img
        src="https://tse4.mm.bing.net/th/id/OIP.DzF2CUAUb9LATUHtUFz67AHaEK?pid=Api&P=0&h=180"
        alt="HIMS Dashboard"
        className="relative w-full max-w-[560px] h-[320px] md:h-[380px]
        object-cover rounded-3xl shadow-2xl
        border border-[#04748B]/50"
      />
    </motion.div>

  </div>
</section>


      {/* ================= FEATURES ================= */}
      <section className="relative py-40 bg-[radial-gradient(ellipse_at_top,#041826_0%,#020b12_45%,#01070b_100%)] text-white overflow-hidden">

  {/* ambient orbs */}
  <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-500/15 blur-[220px] rounded-full" />
  <div className="pointer-events-none absolute bottom-0 right-0 w-[700px] h-[700px] bg-orange-500/15 blur-[200px] rounded-full" />

  <div className="relative max-w-7xl mx-auto px-6">

    {/* SECTION HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-44"
    >
      <p className="uppercase tracking-[0.3em] text-cyan-300/70 mb-6">
        What makes us different
      </p>
      <h2 className="text-5xl md:text-7xl font-black leading-tight">
        Our{" "}
        <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-orange-400 bg-clip-text text-transparent">
          Powerful Capabilities
        </span>
      </h2>
    </motion.div>

    {/* SMART AUTOMATION – timeline cards */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
      className="mb-52"
    >
      <h3 className="text-4xl font-extrabold mb-24 text-cyan-300">
        {smartAutomation.title}
      </h3>

      <div className="relative border-l border-white/10 pl-12 space-y-16">
        {smartAutomation.desc.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ x: 10 }}
            className="relative"
          >
            <span className="absolute -left-[33px] top-2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400" />

            <div className="bg-[#031c28]/80 p-10 rounded-[28px] border border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-cyan-400/20 text-2xl">
                  ⚙️
                </div>
                <p className="text-slate-200 text-lg leading-relaxed">
                  {item}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* USER FRIENDLY – glass feature tiles */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
      className="mb-56"
    >
      <h3 className="text-4xl font-extrabold text-center mb-28 text-orange-300">
        {userFriendly.title}
      </h3>

      <div className="grid md:grid-cols-3 gap-20">
        {userFriendly.desc.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -20 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-cyan-400/30 blur-2xl opacity-40 group-hover:opacity-80 transition" />
            <div className="relative bg-[#020f16]/80 rounded-[36px] p-16 border border-white/10 backdrop-blur-xl text-center">
              <div className="text-6xl mb-8">✨</div>
              <h4 className="text-2xl font-bold">{item}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* SECURITY – dashboard style */}
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-56 grid lg:grid-cols-3 gap-20 bg-[#031c28]/80 p-24 rounded-[56px] border border-white/10 backdrop-blur-xl"
    >
      <div className="lg:col-span-1">
        <span className="inline-block mb-10 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400/20 to-orange-400/20 border border-white/20 text-orange-300 font-semibold">
          🔐 Enterprise Security
        </span>

        <div className="grid grid-cols-2 gap-10">
          {[
            ["Encryption", "256-bit"],
            ["Uptime", "99.99%"],
            ["Roles", "Multi-level"],
            ["Compliance", "HIPAA"],
          ].map(([label, value], i) => (
            <div
              key={i}
              className="bg-[#020f16]/70 p-8 rounded-3xl border border-white/10"
            >
              <p className="text-slate-400">{label}</p>
              <p className="text-3xl font-black">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-2 flex flex-col justify-center">
        <h3 className="text-5xl font-extrabold mb-14 text-orange-300">
          {security.title}
        </h3>

        <ul className="grid sm:grid-cols-2 gap-8">
          {security.desc.map((item, i) => (
            <li key={i} className="flex gap-4 text-lg">
              <span className="text-cyan-300 text-2xl">✔</span>
              <span className="text-slate-200">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>

    {/* PLATFORM – neon pills */}
    <div className="mb-56">
      <h3 className="text-4xl font-extrabold text-center mb-28 text-cyan-300">
        {platforms.title}
      </h3>

      <div className="flex flex-wrap justify-center gap-10">
        {["🌐 Web", "🤖 Android", "📱 iPhone", "🖥️ Windows"].map((p, i) => (
          <div
            key={i}
            className="relative px-14 py-10 rounded-full bg-[#020f16]/80 border border-white/10 backdrop-blur-xl text-2xl font-bold hover:scale-110 transition"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-orange-400/20 blur-xl opacity-60" />
            <span className="relative">{p}</span>
          </div>
        ))}
      </div>
    </div>

    {/* REPORTING – stacked analytics cards */}
    <div className="relative bg-[#031c28]/80 rounded-[56px] p-24 border border-white/10 backdrop-blur-xl">
      <h3 className="text-4xl font-extrabold text-center mb-32 text-orange-300">
        {reporting.title}
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20">
        {reporting.desc.map((item, i) => (
          <div
            key={i}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-cyan-400/30 blur-2xl opacity-30 group-hover:opacity-70 transition" />
            <div className="relative bg-[#020f16]/80 rounded-[36px] p-16 border border-white/10 text-center hover:-translate-y-6 transition">
              <div className="text-6xl mb-8">📊</div>
              <h4 className="text-xl font-bold">{item}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>


    </>
  );
}
