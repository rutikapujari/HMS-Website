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
      <section className="bg-gradient-to-br from-[#023042] via-[#053C50] to-[#023042] py-28 text-white">
  <div className="max-w-7xl mx-auto px-6">

    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="text-4xl md:text-5xl font-extrabold text-center mb-32"
    >
      Our <span className="text-[#C85038]">Powerful Capabilities</span>
    </motion.h2>

    {/* SMART AUTOMATION */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
      className="mb-40"
    >
      <h3 className="text-4xl font-extrabold text-center mb-12 text-[#C85038]">
        {smartAutomation.title}
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {smartAutomation.desc.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -8, scale: 1.03 }}
            className="bg-[#053C50]/80 rounded-3xl p-8 text-center
              border border-[#04748B]/40 hover:border-[#C85038]/50 transition"
          >
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center
              rounded-full bg-gradient-to-r from-[#04748B] to-[#053C50] text-xl">
              ⚙️
            </div>
            <p className="text-[#D6E3EA]">{item}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* USER FRIENDLY */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
      className="mb-40"
    >
      <h3 className="text-4xl font-extrabold text-center mb-12 text-[#C85038]">
        {userFriendly.title}
      </h3>

      <div className="grid sm:grid-cols-3 gap-10">
        {userFriendly.desc.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="bg-[#053C50]/80 rounded-3xl p-12 text-center
              border border-[#04748B]/40"
          >
            <div className="text-4xl mb-4 text-[#C85038]">✨</div>
            <h4 className="font-bold text-lg">{item}</h4>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* SECURITY */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="mb-40 grid md:grid-cols-2 gap-16
        bg-[#053C50]/60 p-16 rounded-3xl border border-[#04748B]/40"
    >
      <div>
        <span className="inline-block mb-6 px-6 py-3 rounded-full
          bg-[#053C50] border border-[#04748B]/50 text-[#C85038] font-semibold">
          🔐 Enterprise Security
        </span>

        <div className="grid grid-cols-2 gap-6">
          {[
            ["Encryption", "256-bit"],
            ["Uptime", "99.99%"],
            ["Roles", "Multi-level"],
            ["Compliance", "HIPAA"],
          ].map(([label, value], i) => (
            <div key={i} className="bg-[#023042]/70 p-6 rounded-2xl">
              <p className="text-[#9FB7C3]">{label}</p>
              <p className="text-xl font-bold text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-4xl font-extrabold mb-8 text-[#C85038]">
          {security.title}
        </h3>
        <ul className="space-y-5">
          {security.desc.map((item, i) => (
            <li key={i} className="flex gap-3 text-[#D6E3EA]">
              ✔ <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>

    {/* PLATFORM */}
    <div className="mb-40">
      <h3 className="text-4xl font-extrabold text-center mb-16 text-[#C85038]">
        {platforms.title}
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {["🌐 Web", "🤖 Android", "📱 iPhone", "🖥️ Windows"].map((p, i) => (
          <div
            key={i}
            className="bg-[#053C50]/80 border border-[#04748B]/40
              rounded-3xl p-12 text-center hover:scale-105 transition"
          >
            <h4 className="text-xl font-bold">{p}</h4>
          </div>
        ))}
      </div>
    </div>

    {/* REPORTING */}
    <div className="bg-[#053C50]/60 rounded-3xl p-16 border border-[#04748B]/40">
      <h3 className="text-4xl font-extrabold text-center mb-14 text-[#C85038]">
        {reporting.title}
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {reporting.desc.map((item, i) => (
          <div
            key={i}
            className="bg-[#023042]/70 rounded-3xl p-10 text-center
              border border-[#04748B]/40 hover:-translate-y-2 transition"
          >
            <div className="text-4xl mb-4 text-[#C85038]">📊</div>
            <h4 className="font-bold text-lg">{item}</h4>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

    </>
  );
}
