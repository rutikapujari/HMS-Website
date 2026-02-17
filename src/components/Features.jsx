"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Receipt,
  CalendarClock,
  FileText,
  BarChart3,
  Layout,
  MousePointerClick,
  GraduationCap,
  Globe,
  Smartphone,
  Monitor,
  ShieldCheck,
  UserCog,
  FileSearch,
} from "lucide-react";
import {
  FaMagic,
  FaRobot,
  FaFileInvoiceDollar,
  FaUserClock,
  FaBell,
} from "react-icons/fa";
import {
  FaUserCheck,
  FaMousePointer,
  FaLayerGroup,
} from "react-icons/fa";
import { FaGlobe, FaAndroid, FaApple, FaWindows } from "react-icons/fa";
import { FaShieldAlt, FaUserShield, FaSearch } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";



/* ===========================
   ANIMATION
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
   SECTION 1 DATA
=========================== */
const smartAutomationFeatures = [
  {
    title: "Automated Billing",
    desc: "Smart invoicing system that automatically generates, tracks, and manages billing with zero manual effort.",
    icon: Receipt,
  },
  {
    title: "Automated Scheduling",
    desc: "Intelligent scheduling that organizes appointments, reminders, and workflows seamlessly.",
    icon: CalendarClock,
  },
  {
    title: "Digital Prescriptions",
    desc: "Paperless prescription management for faster, safer, and more accurate medical records.",
    icon: FileText,
  },
  {
    title: "Automated Reports",
    desc: "Real-time analytics and smart reporting that provide deep insights instantly.",
    icon: BarChart3,
  },
];
const smartAutomationFeature = [
  {
    title: "Automated Billing",
    desc: "Generate invoices automatically and eliminate manual calculation errors.",
    icon: FaFileInvoiceDollar,
  },
  {
    title: "Smart Notifications",
    desc: "Send automatic alerts for appointments, reports and payments.",
    icon: FaBell,
  },
  {
    title: "User Workflow Tracking",
    desc: "Monitor staff tasks and patient movement in real-time.",
    icon: FaUserClock,
  },
  {
    title: "AI Task Automation",
    desc: "Reduce manual work with intelligent automated processes.",
    icon: FaRobot,
  },
];

/* ===========================
   SECTION 2 DATA
=========================== */
const userFriendlyDesignFeatures = [
  {
    title: "Easy Navigation",
    desc: "Simple layout ensures users can move across modules effortlessly.",
    icon: FaMousePointer,
  },
  {
    title: "Minimal Learning Curve",
    desc: "Staff can operate the system without any technical training.",
    icon: FaUserCheck,
  },
  {
    title: "Modular Interface",
    desc: "Cleanly structured design improves visibility and productivity.",
    icon: FaLayerGroup,
  },
];

const userFriendlyFeatures = [
  {
    title: "Easy Navigation",
    desc: "Simple layout ensures users can move across modules effortlessly.",
    icon: FaMousePointer,
  },
  {
    title: "Minimal Learning Curve",
    desc: "Staff can operate the system without any technical training.",
    icon: FaUserCheck,
  },
  {
    title: "Modular Interface",
    desc: "Cleanly structured design improves visibility and productivity.",
    icon: FaLayerGroup,
  },
];

/* ===========================
   PAGE COMPONENT
=========================== */
export default function FeaturesPage() {
  return (
    <main className="bg-white">
      {/* ========================================================= */}
      {/* ======================= HERO SECTION ==================== */}
      {/* ========================================================= */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#023042] via-[#053C50] to-[#04748B] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(4,116,139,0.35),transparent_60%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-28 grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <motion.div initial="hidden" animate="visible" variants={stagger}>
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
              <button className="px-8 py-4 rounded-full font-bold shadow-xl transition bg-gradient-to-r from-[#C85038] to-[#9C4436] hover:scale-105 hover:shadow-2xl">
                Get Free Demo
              </button>

              <button className="px-8 py-4 rounded-full transition border border-[#04748B]/60 text-white hover:bg-[#053C50]">
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
              object-cover rounded-3xl shadow-2xl border border-[#04748B]/50"
            />
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ================= SECTION 1 : SMART AUTOMATION =========== */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-28">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-300/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-300/20 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-5 py-2 rounded-full text-sm font-semibold mb-5">
            <FaMagic className="w-4 h-4" />
            Smart Automation
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
            Intelligent Automation for Faster Operations
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Streamline workflows, reduce manual effort, and boost efficiency
            with powerful automation tools.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {smartAutomationFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div key={i} variants={fadeUp} className="group relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition duration-500" />
                <div className="relative bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-500">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white mb-6 shadow-lg group-hover:scale-110 transition">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>

      {/* ========================================================= */}
      {/* ============ SECTION 2 : USER FRIENDLY DESIGN =========== */}
      {/* ========================================================= */}
      <section className="relative py-28 bg-[#053C50] text-white overflow-hidden">
      <div className="absolute w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-3xl -top-40 -left-40 animate-pulse" />
      <div className="absolute w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-3xl -bottom-40 -right-40 animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            User Friendly Design
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Designed for simplicity and efficiency so anyone can use the
            system easily.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {userFriendlyFeatures.map((feature, i) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 blur-md transition duration-500" />
                <div className="relative h-full rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-10 hover:scale-105 transition duration-500 shadow-2xl">
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl mb-6 bg-gradient-to-br from-cyan-400 to-purple-500 text-white shadow-xl">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>

      {/* ========================================================= */}
      {/* ========== SECTION 3 : MULTI PLATFORM SUPPORT =========== */}
      {/* ========================================================= */}
    <section className="relative py-32 bg-white text-[#023042] overflow-hidden">

  {/* neon grid background */}
  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(4,116,139,0.4)_0,transparent_60%)]" />
  <div className="absolute inset-0 bg-[linear-gradient(rgba(2,48,66,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(2,48,66,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

  <div className="relative max-w-7xl mx-auto px-6">

    {/* heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-24"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#04748B]">
        Multi-Platform Support
      </h2>

      <p className="text-[#9C4436] text-lg max-w-2xl mx-auto">
        Access your system anytime, anywhere across all major devices and
        operating systems with seamless cross-platform performance.
      </p>
    </motion.div>

    {/* platform orbit layout */}
    <div className="relative flex items-center justify-center">

      {/* center glowing core */}
      <div className="absolute w-56 h-56 rounded-full bg-[#04748B]/20 blur-3xl animate-pulse" />
      <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-[#04748B] to-[#023042] flex items-center justify-center shadow-[0_0_80px_rgba(4,116,139,0.7)]">
        <span className="font-bold text-lg tracking-wide text-[#C85038]">All Devices</span>
      </div>

      {/* orbit items */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="absolute w-[520px] h-[520px]"
      >

        {/* WEB */}
        <motion.div
          variants={{ hidden:{opacity:0,scale:0.8}, visible:{opacity:1,scale:1} }}
          className="absolute top-0 left-1/2 -translate-x-1/2 group"
        >
          <div className="w-28 h-28 rounded-3xl bg-white/5 backdrop-blur-xl border border-[#04748B]/30 flex flex-col items-center justify-center shadow-xl hover:scale-110 transition">
            <FaGlobe className="w-8 h-8 text-[#04748B] mb-2" />
            <span className="text-sm font-semibold text-[#023042]">Web</span>
          </div>
        </motion.div>

        {/* ANDROID */}
        <motion.div
          variants={{ hidden:{opacity:0,scale:0.8}, visible:{opacity:1,scale:1} }}
          className="absolute right-0 top-1/2 -translate-y-1/2 group"
        >
          <div className="w-28 h-28 rounded-3xl bg-white/5 backdrop-blur-xl border border-[#C85038]/30 flex flex-col items-center justify-center shadow-xl hover:scale-110 transition">
            <FaAndroid className="w-8 h-8 text-[#C85038] mb-2" />
            <span className="text-sm font-semibold text-[#023042]">Android</span>
          </div>
        </motion.div>

        {/* IPHONE */}
        <motion.div
          variants={{ hidden:{opacity:0,scale:0.8}, visible:{opacity:1,scale:1} }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 group"
        >
          <div className="w-28 h-28 rounded-3xl bg-white/5 backdrop-blur-xl border border-[#9C4436]/30 flex flex-col items-center justify-center shadow-xl hover:scale-110 transition">
            <FaApple className="w-8 h-8 text-[#9C4436] mb-2" />
            <span className="text-sm font-semibold text-[#023042]">iPhone</span>
          </div>
        </motion.div>

        {/* WINDOWS */}
        <motion.div
          variants={{ hidden:{opacity:0,scale:0.8}, visible:{opacity:1,scale:1} }}
          className="absolute left-0 top-1/2 -translate-y-1/2 group"
        >
          <div className="w-28 h-28 rounded-3xl bg-white/5 backdrop-blur-xl border border-[#04748B]/30 flex flex-col items-center justify-center shadow-xl hover:scale-110 transition">
            <FaWindows className="w-8 h-8 text-[#04748B] mb-2" />
            <span className="text-sm font-semibold text-[#023042]">Windows</span>
          </div>
        </motion.div>

      </motion.div>
    </div>
  </div>
</section>

      {/* ========================================================= */}
      {/* ============== SECTION 4 : DATA & SECURITY ============== */}
      {/* ========================================================= */}
     <section className="relative py-32 bg-[#053C50] text-white overflow-hidden">
      {/* cyber grid background */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(#22d3ee_1px,transparent_1px),linear-gradient(90deg,#22d3ee_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* glowing radial light */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-cyan-500/20 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Data & Security
          </h2>

          <p className="text-cyan-300/80 max-w-2xl mx-auto text-lg">
            Enterprise-grade protection to keep your data safe, controlled,
            and fully traceable at all times.
          </p>
        </motion.div>

        {/* security cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="grid md:grid-cols-3 gap-10"
        >
          {/* Secure Data Storage */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-cyan-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl" />

            <div className="relative p-10 rounded-3xl border border-cyan-400/30 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-xl shadow-2xl hover:scale-105 transition">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-cyan-500/20 border border-cyan-400/40 mb-6">
                <FaShieldAlt className="w-8 h-8 text-cyan-400" />
              </div>

              <h3 className="text-xl font-bold mb-3">Secure Data Storage</h3>
              <p className="text-slate-300 leading-relaxed">
                Advanced encryption and protected infrastructure ensure your
                sensitive data remains safe and fully protected.
              </p>
            </div>
          </motion.div>

          {/* Role Based Access */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl" />

            <div className="relative p-10 rounded-3xl border border-purple-400/30 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-xl shadow-2xl hover:scale-105 transition">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-purple-500/20 border border-purple-400/40 mb-6">
                <FaUserShield className="w-8 h-8 text-purple-400" />
              </div>

              <h3 className="text-xl font-bold mb-3">Role-Based Access</h3>
              <p className="text-slate-300 leading-relaxed">
                Control permissions with precision. Grant access only to the
                right people with secure role-based authorization.
              </p>
            </div>
          </motion.div>

          {/* Audit Trails */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-emerald-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl" />

            <div className="relative p-10 rounded-3xl border border-emerald-400/30 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-xl shadow-2xl hover:scale-105 transition">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-400/40 mb-6">
                <FaSearch className="w-8 h-8 text-emerald-400" />
              </div>

              <h3 className="text-xl font-bold mb-3">Audit Trails</h3>
              <p className="text-slate-300 leading-relaxed">
                Track every activity with detailed logs for full transparency,
                accountability, and compliance monitoring.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>

      {/* ========================================================= */}
      {/* ================= SECTION 5 : REPORTING SYSTEM =========== */}
      {/* ========================================================= */}
    <section className="relative py-32 overflow-hidden bg-white text-[#023042]">
  {/* animated grid background */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.15)_1px,transparent_1px)] bg-[size:40px_40px]" />
  </div>

  {/* glowing orb */}
  <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-cyan-500/20 blur-[140px] rounded-full -translate-x-1/2 -translate-y-1/2" />

  <div className="relative max-w-6xl mx-auto px-6 text-center">
    {/* heading */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-20"
    >
      <p className="uppercase tracking-[0.4em] text-[#04748B] text-sm mb-6">
        Reporting System
      </p>

      <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
        Intelligent <span className="text-[#C85038]">MIS Reports</span>
      </h2>

      <p className="text-[#9C4436] max-w-2xl mx-auto text-lg">
        Advanced reporting engine delivering accurate, real-time MIS
        insights to support better decision making and operational
        transparency.
      </p>
    </motion.div>

    {/* main report display card */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative group"
    >
      {/* glow border */}
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 blur-xl opacity-40 group-hover:opacity-70 transition duration-700" />

      {/* glass panel */}
      <div className="relative rounded-[32px] border border-[#04748B]/30 bg-white/5 backdrop-blur-2xl p-14 shadow-[0_0_60px_rgba(34,211,238,0.15)]">
        {/* icon */}
        <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#04748B] to-[#023042] shadow-2xl mb-8">
          <FaChartBar className="w-10 h-10 text-white" />
        </div>

        {/* title */}
        <h3 className="text-3xl font-bold mb-4 text-[#023042]">MIS Reports Dashboard</h3>

        {/* description */}
        <p className="text-[#9C4436] max-w-xl mx-auto leading-relaxed mb-10">
          Generate comprehensive Management Information System reports
          with real-time analytics, performance tracking, and data-driven
          insights — all in one centralized dashboard.
        </p>

        {/* animated data bars */}
        <div className="space-y-5 max-w-md mx-auto text-left">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-[#023042]">
                Operational Performance
              </span>
              <span className="text-[#04748B]">92%</span>
            </div>
            <div className="h-2 rounded-full bg-[#023042]/10 overflow-hidden">
              <div className="h-full w-[92%] bg-gradient-to-r from-[#C85038] to-[#04748B] animate-pulse" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-[#023042]">Financial Accuracy</span>
              <span className="text-[#04748B]">97%</span>
            </div>
            <div className="h-2 rounded-full bg-[#023042]/10 overflow-hidden">
              <div className="h-full w-[97%] bg-gradient-to-r from-[#C85038] to-[#04748B] animate-pulse" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-[#023042]">Data Reliability</span>
              <span className="text-[#04748B]">99%</span>
            </div>
            <div className="h-2 rounded-full bg-[#023042]/10 overflow-hidden">
              <div className="h-full w-[99%] bg-gradient-to-r from-[#C85038] to-[#04748B] animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>


    </main>
  );
}
