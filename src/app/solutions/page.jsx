"use client";

import { motion } from "framer-motion";
import {
  FaUserInjured,
  FaFileInvoiceDollar,
  FaProcedures,
  FaFlask,
  FaPills,
  FaHospital
} from "react-icons/fa";


/* ================= ANIMATION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const solutions = [
  {
    title: "Patient Management",
    subtitle: "Complete Patient Lifecycle Tracking",
    desc: "Digitally manage patient registration, appointments, and medical history with ease.",
    icon: <FaUserInjured className="text-white" />,
    color: "from-[#04748B] to-[#023042]",
  },
  {
    title: "Billing System",
    subtitle: "Automated Financial Workflow",
    desc: "Smart billing with insurance integration, invoice generation, and real-time reporting.",
    icon: <FaFileInvoiceDollar className="text-white" />,
    color: "from-[#C85038] to-[#9C4436]",
  },
  {
    title: "Ward Management",
    subtitle: "Bed & Room Allocation",
    desc: "Efficient ward planning with real-time bed tracking and patient allocation.",
    icon: <FaProcedures className="text-white" />,
    color: "from-[#04748B] to-[#C85038]",
  },
  {
    title: "Laboratory",
    subtitle: "Diagnostic Integration",
    desc: "Manage test reports, diagnostics workflows, and lab inventory seamlessly.",
    icon: <FaFlask className="text-white" />,
    color: "from-[#9C4436] to-[#04748B]",
  },
  {
    title: "Pharmacy",
    subtitle: "Inventory & Dispensing",
    desc: "Track medicine inventory and automate dispensing workflows securely.",
    icon: <FaPills className="text-white" />,
    color: "from-[#C85038] to-[#04748B]",
  },
  {
    title: "Hospital Dashboard",
    subtitle: "Centralized Overview",
    desc: "Monitor operations, performance, and analytics in one unified interface.",
    icon: <FaHospital className="text-white" />,
    color: "from-[#04748B] to-[#9C4436]",
  },
];


/* ================= SOLUTIONS DATA ================= */
const hospitalSolutions = [
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
    <div className="bg-[#020f16] text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 bg-gradient-to-b from-[#023042] via-[#053C50] to-[#04748B]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(4,116,139,0.35),transparent_65%)]"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 max-w-4xl"
        >
          <span className="inline-block mb-6 px-6 py-3 rounded-full bg-[#053C50]/70 border border-[#04748B]/60 text-[#C85038] font-semibold">
            Our Solutions
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-8">
            Smart Healthcare
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C85038] to-[#9C4436]">
              Digital Solutions
            </span>
          </h1>

          <p className="text-blue-100 text-lg max-w-3xl mx-auto mb-10">
            Tailored healthcare technology solutions designed for hospitals,
            clinics, diagnostic centers, and healthcare chains.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="#solutions"
              className="px-8 py-4 rounded-full font-bold bg-gradient-to-r from-[#C85038] to-[#9C4436] hover:scale-105 transition shadow-xl"
            >
              Explore Solutions
            </a>

            <a
              href="/contact"
              className="px-8 py-4 rounded-full border border-[#04748B]/60 hover:bg-[#053C50] transition"
            >
              Request Demo
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section id="solutions" className="relative py-36 bg-white">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#04748b33,transparent_45%),radial-gradient(circle_at_80%_70%,#c8503833,transparent_45%)]"></div>

  <div className="relative max-w-7xl mx-auto px-6">
    <div className="text-center mb-32">
      <span className="inline-flex px-7 py-2 text-xs font-semibold tracking-[0.35em] uppercase text-[#04748B] bg-white/5 backdrop-blur-xl rounded-full border border-[#023042]/20 mb-6">
        What We Offer
      </span>

      <h2 className="text-4xl md:text-7xl font-extrabold text-[#023042]">
        Smart Hospital{" "}
        <span className="bg-gradient-to-r from-[#C85038] to-[#9C4436] bg-clip-text text-transparent">
          Solutions
        </span>
      </h2>

      <p className="mt-7 max-w-3xl mx-auto text-lg text-[#04748B]/80">
        Purpose-built healthcare modules designed to simplify workflows,
        improve efficiency, and enhance patient outcomes.
      </p>
    </div>

    <div className="space-y-28">
      {solutions.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="grid lg:grid-cols-3 gap-16 items-center"
        >
          {/* ICON */}
          <div className="hidden lg:flex justify-center">
            <div
              className={`w-32 h-32 rounded-full flex items-center justify-center text-6xl bg-gradient-to-br ${item.color} shadow-2xl`}
            >
              {item.icon}
            </div>
          </div>

          {/* CONTENT */}
          <div className="lg:col-span-2 relative group">
            <div
              className={`absolute -inset-[2px] rounded-3xl bg-gradient-to-r ${item.color} opacity-30 group-hover:opacity-80 transition`}
            ></div>

            <div className="relative rounded-3xl bg-white/5 backdrop-blur-2xl border border-[#023042]/10 p-12">
              <span
                className={`inline-block mb-5 px-6 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${item.color} text-[#023042]`}
              >
                {item.title}
              </span>

              <h3 className="text-3xl font-bold mb-4 text-[#9C4436]">
                {item.subtitle}
              </h3>

              <p className="text-[#04748B]/80 mb-8">{item.desc}</p>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 font-semibold text-[#04748B] hover:text-[#C85038] transition"
              >
                Explore Module →
              </a>

              <div className="mt-8 h-[2px] w-0 group-hover:w-32 transition-all duration-500 bg-[#053C50]"></div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
}
