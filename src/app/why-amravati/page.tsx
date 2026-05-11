"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, GraduationCap, MapPin, Building2, Factory, HeartPulse } from "lucide-react";

export default function WhyAmravati() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Amravati-Partners/images/city_aerial.png" 
            alt="Amravati Overview" 
            fill 
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Why <span className="text-gradient-gold">Amravati</span></h1>
            <p className="text-xl md:text-2xl text-white/80 font-light mb-8 max-w-2xl">
              An Emerging Destination for Scalable Growth and Strategic Expansion
            </p>
          </motion.div>
        </div>
      </section>

      {/* STRATEGIC ADVANTAGE */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Strategic <span className="text-teal-light">Advantage</span></h2>
            <p className="text-white/70 text-lg">
              Amravati combines robust infrastructure with unmatched economic benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <MapPin />, title: "Central India Positioning", desc: "Benefits from central-India connectivity, supporting regional operations across Maharashtra and surrounding markets." },
              { icon: <TrendingUp />, title: "Cost Advantage", desc: "Significantly lower land, rental, and operational costs compared to larger metropolitan cities." },
              { icon: <GraduationCap />, title: "Talent Ecosystem", desc: "Strong educational base with engineering, commerce, management, and professional talent availability." },
              { icon: <Building2 />, title: "Scalable Development", desc: "Vast availability of land for commercial, industrial, residential, and institutional projects." }
            ].map((adv, i) => (
              <div key={i} className="glass p-8 rounded-xl flex flex-col hover:-translate-y-2 transition-all">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-6 border border-gold/20">
                  {adv.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{adv.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE GROWTH DRIVERS */}
      <section className="py-24 bg-navy-dark relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Future Growth <span className="text-gradient-gold">Drivers</span></h2>
              
              <div className="space-y-4">
                {[
                  "GCC and ITES expansion",
                  "Logistics and warehousing",
                  "Education and training",
                  "Tourism and hospitality",
                  "Industrial and cluster development",
                  "Healthcare infrastructure"
                ].map((driver, i) => (
                  <div key={i} className="flex items-center gap-4 glass p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-teal shrink-0" />
                    <span className="text-white/90 font-medium text-lg">{driver}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 h-[600px]">
              <div className="flex flex-col gap-4">
                <div className="relative h-2/3 rounded-xl overflow-hidden glass-dark">
                  <Image src="/Amravati-Partners/images/sector_gcc.png" alt="GCC" fill className="object-cover" />
                </div>
                <div className="relative h-1/3 rounded-xl overflow-hidden glass-dark">
                  <Image src="/Amravati-Partners/images/sector_industrial.png" alt="Industrial" fill className="object-cover" />
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-12">
                <div className="relative h-1/3 rounded-xl overflow-hidden glass-dark">
                  <Image src="/Amravati-Partners/images/sector_healthcare.png" alt="Healthcare" fill className="object-cover" />
                </div>
                <div className="relative h-2/3 rounded-xl overflow-hidden glass-dark">
                  <Image src="/Amravati-Partners/images/sector_logistics.png" alt="Logistics" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
