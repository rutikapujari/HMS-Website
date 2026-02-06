"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Hospital,
  Lightbulb,
  Rocket,
} from "lucide-react";

export default function AboutHIMS() {

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const aboutItems = [
    {
      icon: "🏢",
      title: "Goanny Technologies",
      desc:
        "A technology-driven company focused on building digital products that simplify operations and improve customer experience.",
      color: "#04748B",
    },
    {
      icon: "🏥",
      title: "What is HIMS?",
      desc:
        "A unified platform managing OPD, IPD, Pharmacy, Lab, Billing, Accounting, and Administration seamlessly.",
      color: "#053C50",
    },
    {
      icon: "💡",
      title: "Our Vision",
      desc:
        "To redefine healthcare through innovation, automation, and intelligent systems.",
      color: "#9C4436",
    },
    {
      icon: "🚀",
      title: "Our Mission",
      desc:
        "Empowering hospitals with smart digital tools to enhance care quality and operational efficiency.",
      color: "#C85038",
    },
  ];

  return (
    <div className="overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-screen w-screen bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576765607924-3f7b8410a787?auto=format&fit=crop&w=1600&q=80')",
        }}
      >

        <div className="absolute inset-0 bg-gradient-to-br from-[#023042]/90 via-[#053C50]/85 to-[#023042]/90"></div>

        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#04748B]/25 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#C85038]/25 blur-3xl rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#04748B] to-[#C85038]">
              Goanny HIMS
            </span>
          </h1>

          <p className="text-lg md:text-2xl max-w-3xl mb-12 text-[#E0E0E0]">
            Empowering hospitals and clinics with smart digital systems that
            improve patient care and streamline operations.
          </p>

          <div className="flex gap-6 flex-wrap justify-center">
            <a
              href="#about"
              className="px-8 py-4 rounded-full font-bold text-white
              bg-gradient-to-r from-[#C85038] to-[#9C4436]
              shadow-xl hover:scale-105 transition"
            >
              Our Mission
            </a>

            <a
              href="/contact"
              className="px-8 py-4 rounded-full font-semibold
              border border-[#04748B] text-[#04748B]
              hover:bg-[#04748B] hover:text-white transition"
            >
              Contact Us
            </a>
          </div>

          <p className="mt-8 text-sm text-[#E0E0E0]">
            ✔ Trusted Partner • ✔ Secure Systems • ✔ Scalable Solutions
          </p>
        </motion.div>
      </section>


      {/* ================= ABOUT SECTION ================= */}
<section
  id="about"
  className="relative py-32 overflow-hidden bg-gradient-to-br from-[#021c28] via-[#023042] to-[#021c28]"
>
  {/* background effects */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#04748B]/30 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 -right-32 w-96 h-96 bg-[#C85038]/30 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6">
    {/* heading */}
    <div className="text-center mb-24">
      <span className="inline-flex items-center gap-2 mb-6 px-6 py-2 text-sm font-semibold tracking-widest uppercase text-cyan-200 bg-white/10 backdrop-blur rounded-full">
        About Our Platform
      </span>

      <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
        Goanny{" "}
        <span className="bg-gradient-to-r from-cyan-300 to-orange-400 bg-clip-text text-transparent">
          & HIMS
        </span>
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-lg text-cyan-100/80">
        A modern digital healthcare ecosystem built to transform hospital
        operations and elevate patient care experiences.
      </p>
    </div>

    {/* timeline layout */}
    <div className="relative grid md:grid-cols-2 gap-x-24 gap-y-20">
      {/* center line */}
      <div className="hidden md:block absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-cyan-400/0 via-cyan-400/60 to-cyan-400/0 -translate-x-1/2"></div>

      {[
        {
          icon: "🏢",
          title: "Goanny Technologies",
          desc: "A product-driven technology company crafting intelligent digital solutions that streamline workflows and enhance user experience.",
          color: "from-cyan-400 to-cyan-600",
        },
        {
          icon: "🏥",
          title: "What is HIMS?",
          desc: "An all-in-one hospital management system covering OPD, IPD, Pharmacy, Lab, Billing, Accounting, and Admin operations.",
          color: "from-teal-400 to-teal-600",
        },
        {
          icon: "💡",
          title: "Our Vision",
          desc: "To revolutionize healthcare through automation, interoperability, and smart decision-making systems.",
          color: "from-orange-400 to-orange-600",
        },
        {
          icon: "🚀",
          title: "Our Mission",
          desc: "To empower hospitals with secure, scalable, and intelligent digital tools that improve outcomes and efficiency.",
          color: "from-rose-400 to-rose-600",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.15 }}
          viewport={{ once: true }}
          className={`relative ${
            index % 2 === 0 ? "md:pr-16" : "md:pl-16"
          }`}
        >
          {/* dot */}
          <div className="hidden md:flex absolute top-6 left-1/2 -translate-x-1/2 z-20">
            <div
              className={`w-5 h-5 rounded-full bg-gradient-to-br ${item.color} shadow-lg`}
            ></div>
          </div>

          {/* card */}
          <div className="group relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:bg-white/15 transition-all duration-500">
            {/* glow */}
            <div
              className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition bg-gradient-to-br ${item.color}`}
            ></div>

            <div className="relative z-10">
              <div className="text-5xl mb-6">{item.icon}</div>

              <h3 className="text-2xl font-bold mb-4 text-white">
                {item.title}
              </h3>

              <p className="text-cyan-100/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* bottom accent */}
    <div className="mt-32 flex justify-center">
      <span className="w-44 h-[3px] rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></span>
    </div>
  </div>
</section>





      {/* ================= STATS SECTION ================= */}
     <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#023042] via-[#053C50] to-[#023042] text-white border-t border-white/10">
  {/* Soft accent glows */}
  <div className="absolute -top-24 -left-24 w-[380px] h-[380px] bg-[#04748B]/30 blur-3xl rounded-full"></div>
  <div className="absolute -bottom-24 -right-24 w-[380px] h-[380px] bg-[#C85038]/30 blur-3xl rounded-full"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
      {[
        { value: "10+", label: "Years Experience", color: "#04748B" },
        { value: "100+", label: "Hospitals & Clinics", color: "#C85038" },
        { value: "1M+", label: "Patient Records", color: "#9C4436" },
        { value: "99.9%", label: "System Uptime", color: "#04748B" },
      ].map((stat, index) => (
        <div key={index}>
          <p className="text-4xl font-extrabold mb-2">
            {stat.value}
          </p>
          <p
            className="font-medium"
            style={{ color: stat.color }}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ================= CTA SECTION ================= */}
       <section className="py-24 bg-gradient-to-br from-[#023042] via-[#053C50] to-[#023042] text-white text-center relative overflow-hidden">
  {/* Accent glows */}
  <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-[#04748B]/30 blur-3xl rounded-full"></div>
  <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-[#C85038]/30 blur-3xl rounded-full"></div>

  <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
    Ready to Digitize Your Hospital?
  </h2>

  <p className="text-[#E0E0E0] max-w-2xl mx-auto mb-10">
    Let’s build a smarter, faster, and more efficient healthcare system together.
  </p>

  <div className="flex gap-6 justify-center flex-wrap">
    <a
      href="/contact"
      className="
        px-8 py-4 rounded-full font-bold text-white
        bg-gradient-to-r from-[#C85038] to-[#9C4436]
        shadow-xl shadow-[#C85038]/40
        hover:scale-105 transition
      "
    >
      Contact Us
    </a>

    <a
      href="/features"
      className="
        px-8 py-4 rounded-full font-semibold
        border border-[#04748B]
        text-[#04748B]
        hover:bg-[#04748B] hover:text-white transition
      "
    >
      View Features
    </a>
  </div>
</section>



    </div>
  );
}
