"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Building2, TrendingUp, Users, ShieldCheck, Globe, Activity, Cpu, Briefcase, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* SECTION 1 — HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero_bg.png" 
            alt="Futuristic Amravati Smart City" 
            fill 
            className="object-cover object-center opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/80 to-navy" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-teal-light font-medium tracking-widest text-sm mb-6 uppercase">Amravati &amp; Partners</h2>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                Expand to Amravati with <span className="text-gradient-gold">Confidence</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 font-light mb-8 max-w-2xl">
                Location Advisory | Investment Facilitation | Corporate Expansion Support
              </p>
              <p className="text-base md:text-lg text-white/60 mb-12 max-w-2xl leading-relaxed">
                We help corporates, institutions, investors, and developers evaluate, enter, and expand in Amravati through strategic advisory, local execution support, and ecosystem-driven development.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="group relative px-8 py-4 bg-gold text-navy font-bold rounded-sm overflow-hidden flex items-center justify-center gap-2 transition-all">
                  <span className="relative z-10">Schedule a Discussion</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full"></div>
                </Link>
                <Link href="/opportunity-brief" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-medium rounded-sm flex items-center justify-center gap-2 transition-all backdrop-blur-sm">
                  Download Opportunity Brief
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Floating Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24"
          >
            {[
              { label: "Lower Operating Cost", icon: <TrendingUp className="w-6 h-6 text-teal" /> },
              { label: "Scalable Land Availability", icon: <MapPin className="w-6 h-6 text-gold" /> },
              { label: "Strategic Central Location", icon: <Globe className="w-6 h-6 text-teal" /> },
              { label: "Emerging Ecosystem", icon: <Activity className="w-6 h-6 text-gold" /> },
            ].map((stat, i) => (
              <div key={i} className="glass p-6 rounded-lg flex flex-col gap-4 border-t-2 border-t-white/10 hover:border-t-gold transition-colors duration-500 group">
                <div className="p-3 bg-white/5 rounded-full w-fit group-hover:scale-110 transition-transform">{stat.icon}</div>
                <span className="text-white/90 font-medium text-sm md:text-base">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — WHY AMRAVATI */}
      <section className="py-24 relative bg-navy-dark">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Amravati, <span className="text-teal-light">Why Now</span></h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Amravati is emerging as one of India's most underpriced and scalable growth destinations. With strategic central-India positioning, lower operational costs, growing infrastructure, and strong educational foundations, the region offers significant long-term potential.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Central India Connectivity", desc: "Strategic advantage for logistics" },
                  { title: "Strong Talent Ecosystem", desc: "Abundant educated workforce" },
                  { title: "Lower Cost Advantage", desc: "60-70% lower real estate cost" },
                  { title: "Scalable Growth", desc: "Available land parcels" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="p-2 rounded-md bg-navy border border-white/10 group-hover:border-teal/50 transition-colors">
                      <ShieldCheck className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{item.title}</h4>
                      <p className="text-white/50 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-1/2 relative h-[500px]">
              <div className="absolute inset-0 glass-dark rounded-2xl overflow-hidden border border-white/10 p-2">
                <Image 
                  src="/images/city_aerial.png" 
                  alt="Amravati Map Visual" 
                  fill 
                  className="object-cover rounded-xl opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/90 to-transparent" />
                
                {/* Map Pin Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="relative flex h-12 w-12">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-12 w-12 bg-teal flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </span>
                  </div>
                  <span className="mt-4 px-4 py-2 bg-navy/80 backdrop-blur border border-white/20 rounded-full font-bold tracking-widest text-sm">AMRAVATI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT WE DO */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">End-to-End <span className="text-gradient-gold">Expansion Support</span></h2>
            <p className="text-white/70 text-lg">
              We help organizations reduce expansion risk and improve execution certainty through strategic guidance and local ecosystem support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Location Advisory", icon: <MapPin />, desc: "Market feasibility, sector suitability, cost benchmarking, and expansion planning." },
              { title: "Investment Facilitation", icon: <Briefcase />, desc: "Land identification, site visits, stakeholder introductions, and opportunity mapping." },
              { title: "Policy & Incentive Advisory", icon: <ShieldCheck />, desc: "State schemes, incentive screening, and regulatory understanding." },
              { title: "Setup & Structuring", icon: <Building2 />, desc: "Entity incorporation, tax advisory, legal guidance, and vendor ecosystem." },
              { title: "Project Execution", icon: <Users />, desc: "Local coordination, implementation support, and developer alignment." }
            ].map((service, i) => (
              <div key={i} className="glass p-8 rounded-xl group hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 bg-navy-dark rounded-lg flex items-center justify-center mb-6 text-gold border border-white/5 group-hover:border-gold/30 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{service.desc}</p>
                <Link href="/services" className="text-teal text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore Service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — OPPORTUNITY SECTORS */}
      <section className="py-24 bg-navy-dark relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Opportunity <span className="text-teal-light">Sectors</span></h2>
              <p className="text-white/70 text-lg">
                Explore sectors where Amravati has strong potential for scalable and long-term growth.
              </p>
            </div>
            <Link href="/sectors" className="px-6 py-3 border border-white/20 hover:border-gold rounded-full text-sm font-medium transition-colors flex items-center gap-2">
              View All Sectors <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "GCC & ITES", image: "/images/sector_gcc.png", desc: "Cost-efficient destination for analytics and shared services." },
              { title: "Logistics & Warehousing", image: "/images/sector_logistics.png", desc: "Central India location for distribution and fulfillment." },
              { title: "Industrial & Manufacturing", image: "/images/sector_industrial.png", desc: "Scalable land availability for cluster-development." },
              { title: "Data Centers", image: "/images/sector_datacenters.png", desc: "Emerging opportunity for digital infrastructure." }
            ].map((sector, i) => (
              <Link href="/sectors" key={i} className="group relative h-80 rounded-xl overflow-hidden block">
                <Image 
                  src={sector.image} 
                  alt={sector.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{sector.title}</h3>
                  <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    {sector.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW WE WORK & SECTION 6 — GLOBAL PARTNERSHIPS */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <Image src="/images/partnerships_bg.png" alt="Global Network" fill className="object-cover" />
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* How We Work Timeline */}
            <div>
              <h2 className="text-3xl font-bold mb-12">From Evaluation to <span className="text-gradient-gold">Execution</span></h2>
              <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[15px] before:w-px before:bg-white/10">
                {[
                  "Understand Expansion Objectives",
                  "Evaluate Opportunities & Fit",
                  "Identify Suitable Locations",
                  "Site Visits & Feasibility",
                  "Facilitate Setup & Execution"
                ].map((step, i) => (
                  <div key={i} className="relative pl-10 flex items-center group">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-navy border-2 border-white/20 flex items-center justify-center group-hover:border-gold group-hover:shadow-[0_0_10px_rgba(212,175,55,0.5)] transition-all z-10">
                      <span className="w-2 h-2 rounded-full bg-white/50 group-hover:bg-gold transition-colors"></span>
                    </div>
                    <div className="glass p-5 rounded-lg w-full">
                      <h4 className="text-white font-medium text-lg">0{i+1}. {step}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Global Partnerships */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Building Global <br/> <span className="text-teal-light">Partnerships</span></h2>
              <p className="text-white/70 mb-10 text-lg">
                We are actively working to position Amravati as an emerging destination for international collaboration and investment.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {["UAE", "Singapore", "South Korea", "United Kingdom"].map((country, i) => (
                  <div key={i} className="glass-dark p-6 rounded-xl flex items-center gap-4 group cursor-default">
                    <Globe className="w-6 h-6 text-white/40 group-hover:text-teal transition-colors" />
                    <span className="text-white font-medium">{country}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 relative flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/city_aerial.png" 
            alt="Amravati City" 
            fill 
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/90 to-navy/80" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Start Your <span className="text-gradient-gold">Amravati Journey</span></h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you are exploring expansion, investment, or development opportunities, we are here to support your journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-teal hover:bg-teal-light text-navy font-bold rounded-sm flex items-center justify-center gap-2 transition-colors">
              Schedule Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="px-8 py-4 glass text-white font-medium hover:bg-white/10 rounded-sm transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
