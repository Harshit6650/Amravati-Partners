"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const sectors = [
  { id: "gcc-ites", title: "GCC & ITES", image: "/images/sector_gcc.png", desc: "Cost-efficient destination for back-office, analytics, shared services, and mid-scale GCC operations." },
  { id: "logistics", title: "Logistics & Warehousing", image: "/images/sector_logistics.png", desc: "Strategic central India location suitable for distribution, warehousing, and fulfilment operations." },
  { id: "industrial", title: "Industrial & Manufacturing", image: "/images/sector_industrial.png", desc: "Scalable industrial land availability with cluster-development potential." },
  { id: "education", title: "Education & Training", image: "/images/sector_education.png", desc: "Strong ecosystem for residential schools, skill campuses, and training institutions." },
  { id: "tourism", title: "Tourism & Hospitality", image: "/images/sector_tourism.png", desc: "Chikhaldara and surrounding region offer hospitality and tourism-led real estate opportunities." },
  { id: "healthcare", title: "Healthcare & Diagnostics", image: "/images/sector_healthcare.png", desc: "Potential regional healthcare hub for hospitals, diagnostics, and medical infrastructure." },
  { id: "data-centers", title: "Data Centers & Digital", image: "/images/sector_datacenters.png", desc: "Emerging opportunity for future-ready digital infrastructure and high-value commercial assets." },
  { id: "townships", title: "Integrated Townships", image: "/images/sector_townships.png", desc: "Long-term mixed-use development opportunity driven by multi-sector growth." },
];

export default function Sectors() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative h-[50vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero_bg.png" 
            alt="Sectors Hero" 
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
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Opportunity <span className="text-teal-light">Sectors</span></h1>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl">
              Discover the domains driving the next wave of growth in Amravati's ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTORS GRID */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectors.map((sector, i) => (
              <motion.div 
                key={sector.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/sectors/${sector.id}`} className="group relative h-96 rounded-2xl overflow-hidden block">
                  <Image 
                    src={sector.image} 
                    alt={sector.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="transform transition-transform duration-300 group-hover:-translate-y-4">
                      <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-gold transition-colors">{sector.title}</h3>
                      <p className="text-white/70 text-base mb-6 max-w-md">
                        {sector.desc}
                      </p>
                      <div className="flex items-center gap-2 text-teal font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore Sector <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
