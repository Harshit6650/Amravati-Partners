"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { motion } from "framer-motion";

const insights = [
  {
    title: "Why Tier-2 Cities Are the Future of GCC Expansion",
    category: "Corporate Strategy",
    date: "Oct 15, 2024",
    author: "Strategy Team",
    image: "/images/sector_gcc.png",
    excerpt: "As metropolitan operational costs rise and talent retention becomes challenging, companies are re-evaluating emerging urban centers for their GCC operations."
  },
  {
    title: "Real Estate Economics: Amravati vs Metro Cities",
    category: "Real Estate",
    date: "Sep 28, 2024",
    author: "Research Desk",
    image: "/images/city_aerial.png",
    excerpt: "A comparative analysis of land acquisition, development, and operational costs showcasing a 60-70% advantage."
  },
  {
    title: "Cluster-Based Development in Emerging Cities",
    category: "Urban Planning",
    date: "Sep 12, 2024",
    author: "Advisory Services",
    image: "/images/sector_industrial.png",
    excerpt: "How co-locating industries, suppliers, and residential infrastructure accelerates economic viability."
  },
  {
    title: "Tourism-Led Growth in Vidarbha",
    category: "Hospitality",
    date: "Aug 30, 2024",
    author: "Sector Experts",
    image: "/images/sector_tourism.png",
    excerpt: "The untapped potential of Chikhaldara and surrounding regions in driving hospitality infrastructure demand."
  }
];

export default function Insights() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative h-[40vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/partnerships_bg.png" 
            alt="Insights" 
            fill 
            className="object-cover opacity-20"
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
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Insights &amp; <span className="text-teal-light">Perspectives</span></h1>
            <p className="text-xl text-white/80 font-light max-w-2xl">
              Research, analysis, and strategic thinking on emerging city dynamics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {insights.map((article, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-72 rounded-2xl overflow-hidden mb-6 border border-white/5 group-hover:border-white/20 transition-colors">
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-60" />
                  <div className="absolute top-4 left-4 bg-teal px-3 py-1 rounded-full text-xs font-bold text-navy">
                    {article.category}
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-white/50 text-sm mb-4">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="flex items-center gap-1"><User className="w-4 h-4" /> {article.author}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors">{article.title}</h3>
                <p className="text-white/60 mb-6 line-clamp-2">{article.excerpt}</p>
                
                <div className="flex items-center gap-2 text-gold font-semibold group-hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
