"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Crosshair, Shield, Target } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero_bg.png" 
            alt="About Us" 
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
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">About <span className="text-gradient-gold">Us</span></h1>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl">
              Building a strategic platform for investment, expansion, and ecosystem-led growth in Amravati.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Our <span className="text-teal-light">Vision</span></h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Amravati &amp; Partners was established with the vision of positioning Amravati as a scalable destination for investment, institutional development, and corporate expansion.
              </p>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                We are not brokers or generic consultants. We combine strategic advisory, policy understanding, local ecosystem access, and execution-focused coordination to reduce expansion risk for our clients.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 glass rounded-lg">
                  <Target className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Strategic Objective</h4>
                    <p className="text-white/60 text-sm">To create long-term value by helping organizations identify practical opportunities while supporting ecosystem-driven development.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 glass rounded-lg">
                  <Crosshair className="w-6 h-6 text-teal shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Our Focus</h4>
                    <p className="text-white/60 text-sm">Working at the intersection of real estate, investment facilitation, strategic advisory, and local execution.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[600px] rounded-2xl overflow-hidden glass-dark p-2 border border-white/10">
              <Image 
                src="/images/partnerships_bg.png" 
                alt="Vision" 
                fill 
                className="object-cover rounded-xl opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="glass p-6 rounded-xl border-l-4 border-l-teal">
                  <h3 className="text-xl font-bold text-white mb-2">Connecting Opportunity with Execution</h3>
                  <p className="text-white/70 text-sm">
                    We bridge the gap between high-level investment strategy and on-ground practical realities in emerging ecosystems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
