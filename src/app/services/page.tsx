"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Briefcase, ShieldCheck, Building2, Users } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Location Advisory",
    desc: "We help organizations evaluate whether Amravati aligns with their operational, commercial, and expansion objectives.",
    points: ["Market feasibility", "Sector suitability", "Cost benchmarking", "Expansion planning"]
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Investment Facilitation",
    desc: "Support with land identification, site visits, stakeholder coordination, and ecosystem mapping.",
    points: ["Land and office identification", "Site visits and coordination", "Stakeholder introductions", "Opportunity mapping"]
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Policy & Incentive Guidance",
    desc: "Assistance with understanding state and central schemes, incentive frameworks, and investment-support systems.",
    points: ["State and central scheme guidance", "Incentive screening", "MAITRI support coordination", "Regulatory understanding"]
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Corporate Expansion Support",
    desc: "Helping companies establish and scale operations through structured local coordination.",
    points: ["Entity incorporation support", "Tax and compliance advisory", "Legal and operational guidance", "Vendor ecosystem support"]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Project Coordination",
    desc: "Connecting developers, institutions, investors, and service providers to improve execution certainty.",
    points: ["Local coordination", "Implementation support", "Developer and partner alignment", "Execution facilitation"]
  }
];

export default function Services() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative h-[50vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Amravati-Partners/images/hero_bg.png" 
            alt="Services" 
            fill 
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/90 via-navy-dark/80 to-navy" />
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Our <span className="text-teal-light">Services</span></h1>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl">
              Strategic advisory and execution support for investors, corporates, developers, and institutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="space-y-12">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="glass p-8 md:p-12 rounded-2xl flex flex-col lg:flex-row gap-12 group hover:border-white/20 transition-all duration-500"
              >
                <div className="lg:w-1/3">
                  <div className="w-16 h-16 bg-navy border border-white/10 rounded-xl flex items-center justify-center text-gold mb-6 group-hover:border-gold/50 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-white/60 leading-relaxed text-lg">{service.desc}</p>
                </div>
                
                <div className="lg:w-2/3 bg-navy-dark/50 rounded-xl p-8 border border-white/5 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.points.map((point, j) => (
                    <div key={j} className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-teal mt-2 shrink-0"></div>
                      <span className="text-white/80 text-lg">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-dark border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Need specialized expansion support?</h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Our team is ready to provide customized advisory based on your specific requirements and operational goals.
          </p>
          <Link href="/contact" className="inline-flex px-8 py-4 bg-gold text-navy font-bold rounded-sm items-center gap-2 hover:bg-white transition-colors">
            Schedule a Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
