"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, TrendingUp, Handshake, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const regions = [
  { name: "UAE", desc: "Strategic investments in logistics, warehousing, and infrastructure development." },
  { name: "Singapore", desc: "Collaborations focusing on integrated townships and smart city technology." },
  { name: "South Korea", desc: "Industrial and manufacturing cluster development and electronics." },
  { name: "United Kingdom", desc: "Education, healthcare infrastructure, and professional services." }
];

const focusAreas = [
  "GCC and ITES expansion",
  "Logistics and warehousing",
  "Education and training",
  "Tourism and hospitality",
  "Industrial and cluster development"
];

export default function Partnerships() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Amravati-Partners/images/partnerships_bg.png" 
            alt="Global Partnerships" 
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
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Global <span className="text-gradient-gold">Partnerships</span></h1>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl">
              Building international investment bridges for emerging cities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STRATEGIC COLLABORATION */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">A Platform for <span className="text-teal-light">International Collaboration</span></h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Amravati is rapidly positioning itself as an emerging destination for foreign direct investment and global corporate expansion. We work closely with international delegations, institutional investors, and global corporations to facilitate their entry into central India.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="glass p-6 rounded-xl border-l-4 border-l-gold">
                  <Handshake className="w-8 h-8 text-gold mb-4" />
                  <h4 className="text-white font-bold mb-2">Institutional Support</h4>
                  <p className="text-white/60 text-sm">Aligning international funds with local scalable projects.</p>
                </div>
                <div className="glass p-6 rounded-xl border-l-4 border-l-teal">
                  <Globe className="w-8 h-8 text-teal mb-4" />
                  <h4 className="text-white font-bold mb-2">Cross-Border Advisory</h4>
                  <p className="text-white/60 text-sm">Navigating compliance and local ecosystem integration.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {regions.map((region, i) => (
                <div key={i} className="glass-dark p-6 rounded-xl border border-white/5 hover:border-white/20 transition-all group">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold"></span> {region.name}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">{region.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="py-24 bg-navy-dark relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Investment <span className="text-gradient-gold">Focus Areas</span></h2>
            <p className="text-white/70 text-lg">
              We guide international capital and expertise into high-growth sectors with significant scalability and demographic support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {focusAreas.map((area, i) => (
              <div key={i} className="bg-navy border border-white/10 p-6 rounded-xl flex items-center gap-4 hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-teal" />
                </div>
                <span className="text-white font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <ShieldCheck className="w-16 h-16 text-gold mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Explore Cross-Border Opportunities</h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Whether you represent a sovereign wealth fund, a multinational corporation, or an international developer, our team is ready to assist your expansion into Amravati.
          </p>
          <Link href="/contact" className="inline-flex px-8 py-4 bg-white text-navy font-bold rounded-sm items-center gap-2 hover:bg-gold transition-colors">
            Connect With Our Team <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
