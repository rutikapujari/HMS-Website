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
  <section id="about" className="py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-6 text-[#023042]">
      About{" "}
      <span className="bg-gradient-to-r from-[#04748B] to-[#C85038] bg-clip-text text-transparent">
        Goanny & HIMS
      </span>
    </h2>

    {/* Sub text */}
    <p className="max-w-3xl mx-auto text-center text-[#053C50] text-lg mb-20">
      Smart digital healthcare solutions designed to simplify operations and enhance patient care.
    </p>

    {/* Cards */}
    <div className="grid md:grid-cols-2 gap-12">
      {[
        {
          icon: "🏢",
          title: "Goanny Technologies",
          desc: "A technology-driven company focused on building digital products that simplify operations and improve customer experience.",
          color: "#04748B",
        },
        {
          icon: "🏥",
          title: "What is HIMS?",
          desc: "A unified platform managing OPD, IPD, Pharmacy, Lab, Billing, Accounting, and Administration seamlessly.",
          color: "#053C50",
        },
        {
          icon: "💡",
          title: "Our Vision",
          desc: "To redefine healthcare through innovation, automation, and intelligent systems.",
          color: "#9C4436",
        },
        {
          icon: "🚀",
          title: "Our Mission",
          desc: "Empowering hospitals with smart digital tools to enhance care quality and operational efficiency.",
          color: "#C85038",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="
            relative p-10 rounded-3xl border
            shadow-md hover:shadow-2xl hover:-translate-y-2
            transition-all duration-500 group bg-transparent
          "
          style={{ borderColor: item.color }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition"
            style={{
              background: `radial-gradient(circle at top, ${item.color}40, transparent 70%)`,
            }}
          />

          <div className="relative z-10">
            <div className="text-5xl mb-5" style={{ color: item.color }}>
              {item.icon}
            </div>

            <h3
              className="text-2xl font-bold mb-3"
              style={{ color: item.color }}
            >
              {item.title}
            </h3>

            <p className="text-[#053C50] leading-relaxed">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
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
