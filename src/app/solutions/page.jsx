"use client";

import { motion } from "framer-motion";

/* ================= ANIMATION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

/* ================= SOLUTIONS DATA ================= */
const solutions = [
  {
    title: "OPD Management",
    subtitle: "Smart Outpatient Workflow",
    desc: "Streamline registrations, consultations, queue management and follow-ups with real-time doctor availability.",
    icon: "🩺",
    color: "from-teal-400 to-sky-500",
  },
  {
    title: "IPD Management",
    subtitle: "Complete Inpatient Care",
    desc: "Manage beds, nursing, treatments, discharge summaries and patient history seamlessly.",
    icon: "🏥",
    color: "from-indigo-400 to-purple-500",
  },
  {
    title: "Billing & Insurance",
    subtitle: "Fast & Error-Free Billing",
    desc: "Automated billing, insurance claims, GST-compliant invoices and payment tracking.",
    icon: "💳",
    color: "from-orange-400 to-red-500",
  },
  {
    title: "Reports & Analytics",
    subtitle: "Data-Driven Decisions",
    desc: "Real-time dashboards and detailed analytics for hospital performance and growth.",
    icon: "📊",
    color: "from-pink-400 to-rose-500",
  },
];

/* ================= PAGE ================= */
export default function SolutionsPage() {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 text-white">

      {/* ================= HERO ================= */}
     <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden
  bg-gradient-to-b from-[#023042] via-[#053C50] to-[#04748B]">

  {/* Radial Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(4,116,139,0.35),transparent_65%)]"></div>

  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeUp}
    className="relative z-10 max-w-4xl"
  >
    <span className="inline-block mb-6 px-6 py-3 rounded-full
      bg-[#053C50]/70 border border-[#04748B]/60 text-[#C85038] font-semibold">
      Our Solutions
    </span>

    <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-white">
      Smart Healthcare
      <span className="block text-transparent bg-clip-text
        bg-gradient-to-r from-[#C85038] to-[#9C4436]">
        Digital Solutions
      </span>
    </h1>

    <p className="text-blue-100 text-lg max-w-3xl mx-auto mb-10">
      Tailored healthcare technology solutions designed for hospitals,
      clinics, diagnostic centers, pharmacies, and healthcare chains.
    </p>

    <div className="flex justify-center gap-6">
      <a
        href="#solutions"
        className="px-8 py-4 rounded-full font-bold shadow-xl transition
        bg-gradient-to-r from-[#C85038] to-[#9C4436]
        hover:scale-105 hover:shadow-2xl"
      >
        Explore Solutions
      </a>

      <a
        href="/contact"
        className="px-8 py-4 rounded-full transition
        border border-[#04748B]/60 text-white
        hover:bg-[#053C50]"
      >
        Request Demo
      </a>
    </div>
  </motion.div>
</section>


      {/* ================= SOLUTIONS ================= */}
     <section
  id="solutions"
  className="py-32 bg-gradient-to-b from-[#023042] via-[#053C50] to-[#023042]"
>
  <div className="max-w-7xl mx-auto px-6 space-y-40">

    {solutions.map((item, index) => {
      const reverse = index % 2 !== 0;

      return (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid md:grid-cols-2 gap-20 items-center"
        >
          {/* TEXT */}
          <div className={reverse ? "md:order-2" : ""}>
            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full
              bg-gradient-to-r from-[#04748B] to-[#053C50]
              text-white font-semibold mb-6"
            >
              <span className="text-xl">{item.icon}</span>
              {item.title}
            </div>

            <h2 className="text-4xl font-extrabold mb-4 text-white">
              {item.subtitle}
            </h2>

            <p className="text-[#C9D6DC] max-w-xl mb-8">
              {item.desc}
            </p>

            <a
              href="/contact"
              className="inline-block px-8 py-4 rounded-full font-semibold transition
              bg-gradient-to-r from-[#C85038] to-[#9C4436]
              hover:scale-105 shadow-xl"
            >
              Learn More →
            </a>
          </div>

          {/* CARD */}
          <div
            className={`relative rounded-3xl p-12 backdrop-blur-xl border
            bg-[#053C50]/60 border-[#04748B]/40
            ${reverse ? "md:order-1" : ""}`}
          >
            <div
              className="absolute -inset-6 rounded-3xl blur-3xl opacity-30
              bg-gradient-to-r from-[#04748B] to-[#053C50]"
            ></div>

            <div className="relative text-white">
              <div className="text-6xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-[#C9D6DC]">{item.subtitle}</p>
            </div>
          </div>
        </motion.div>
      );
    })}
  </div>
</section>

    </div>
  );
}
