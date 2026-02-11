"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  CheckCircle2,
  ArrowRight,
  Building2,
  User,
  Smartphone,
  ShieldCheck,
  Zap,
  Globe,
} from "lucide-react";

/* ================= ANIMATIONS ================= */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
  }),
};

const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 0 rgba(200,80,56,0)",
      "0 0 40px rgba(200,80,56,0.35)",
      "0 0 0 rgba(200,80,56,0)",
    ],
    transition: { duration: 3, repeat: Infinity },
  },
};

/* ================= COMPONENTS ================= */

const FloatingBadge = ({ icon: Icon, text, className }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [0, -14, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{ scale: 1.08 }}
    className={`absolute hidden lg:flex items-center gap-2 px-5 py-2
      bg-white/10 backdrop-blur-xl
      border border-[#04748B]/40
      rounded-full text-white text-sm font-semibold
      shadow-lg shadow-[#04748B]/30 ${className}`}
  >
    <Icon size={16} className="text-[#C85038]" />
    {text}
  </motion.div>
);

const InputField = ({ label, icon: Icon, ...props }) => (
  <div className="group">
    <label className="block text-sm font-semibold text-gray-600 mb-2 ml-1">
      {label}
    </label>
    <div className="relative">
      <Icon
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#C85038] transition"
      />
      <input
        {...props}
        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl
        focus:outline-none focus:ring-4 focus:ring-[#04748B]/20
        focus:border-[#04748B] focus:bg-white
        transition-all placeholder:text-gray-400"
      />
    </div>
  </div>
);

/* ================= PAGE ================= */

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#023042] overflow-hidden">

        {/* Glow Background */}
        <div className="absolute inset-0">
          <div className="absolute -top-32 -left-32 w-[45%] h-[45%] bg-[#04748B]/40 blur-[160px] rounded-full" />
          <div className="absolute -bottom-32 -right-32 w-[45%] h-[45%] bg-[#053C50]/60 blur-[160px] rounded-full" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        

        {/* Glass Panel */}
        <div className="relative z-10 max-w-6xl px-6 text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-[3rem] py-20 shadow-[0_60px_120px_rgba(0,0,0,0.35)]">

          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <span className="inline-flex items-center gap-2 px-5 py-2 mb-10 text-xs font-bold tracking-[0.25em] uppercase
              text-[#C85038] bg-[#C85038]/15 border border-[#C85038]/40 rounded-full">
              <Zap size={14} /> READY TO SCALE
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tight"
          >
            Empower Your <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#C85038] via-[#04748B] to-[#053C50] animate-gradient">
              Digital Hospital
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-2xl text-white/75 max-w-3xl mx-auto leading-relaxed"
          >
            From single clinics to enterprise hospital chains,
            GoAnny HIMS delivers control, compliance, and clarity.
          </motion.p>

          <FloatingBadge icon={ShieldCheck} text="HIPAA Compliant" className="top-16 left-10" />
          <FloatingBadge icon={Globe} text="Cloud Based" className="bottom-24 left-16" />
          <FloatingBadge icon={CheckCircle2} text="ABHA Ready" className="top-32 right-12" />
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="relative py-28 -mt-28 z-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-14">

          {/* LEFT */}
          <div className="lg:col-span-5 space-y-12">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Book your <br />
              <span className="text-[#04748B] underline decoration-[#04748B]/20 underline-offset-8">
                VIP Demo
              </span>
            </h2>

            {[
              "Live system walkthrough with experts",
              "Free migration & onboarding guidance",
              "ROI & pricing clarity before you commit",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 6 }}
                className="flex items-center gap-5 p-5 bg-[#04748B]/5 border border-[#04748B]/10 rounded-2xl"
              >
                <div className="w-9 h-9 rounded-full bg-[#04748B] text-white flex items-center justify-center shadow-lg">
                  <CheckCircle2 size={18} />
                </div>
                <span className="font-semibold text-lg">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* FORM */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="bg-white rounded-[3rem] p-12 shadow-[0_50px_120px_rgba(0,0,0,0.12)]"
            >
              <form className="grid md:grid-cols-2 gap-10">
                <InputField label="Hospital / Clinic Name" icon={Building2} />
                <InputField label="Your Full Name" icon={User} />
                <InputField label="Mobile Number" icon={Smartphone} />
                <InputField label="Work Email" icon={Mail} />

                <motion.button
                  variants={glowPulse}
                  animate="animate"
                  whileHover={{ scale: 1.05 }}
                  className="md:col-span-2 py-6 bg-gradient-to-r from-[#C85038] to-[#9C4436]
                  text-white rounded-2xl font-black text-xl tracking-wide
                  shadow-2xl"
                >
                  Claim My Free Demo <ArrowRight className="inline ml-3" />
                </motion.button>
                
              </form>
            </motion.div>
          </div>

        </div>
      </section>
    </main>
  );
}
