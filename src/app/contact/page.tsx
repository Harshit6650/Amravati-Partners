"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, Globe, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative h-[40vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/city_aerial.png" 
            alt="Contact" 
            fill 
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/90 via-navy-dark/80 to-navy" />
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-7xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Let's Start the <span className="text-gradient-gold">Conversation</span></h1>
            <p className="text-xl text-white/80 font-light max-w-2xl mx-auto">
              Connect with us to explore investment, expansion, or development opportunities in Amravati.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM & INFO */}
      <section className="py-24 bg-navy relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-teal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 glass rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-white/60 text-sm mb-1">Email</h4>
                      <a href="mailto:contact@amravatiandpartners.com" className="text-white text-lg hover:text-teal transition-colors">
                        contact@amravatiandpartners.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 glass rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <h4 className="text-white/60 text-sm mb-1">Location</h4>
                      <p className="text-white text-lg">Amravati, Maharashtra, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 glass rounded-full flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-white/60 text-sm mb-1">LinkedIn</h4>
                      <a href="#" className="text-white text-lg hover:text-teal transition-colors">
                        Amravati & Partners
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-dark p-8 rounded-xl border border-white/10">
                <h4 className="text-xl font-bold text-white mb-4">Request an Opportunity Brief</h4>
                <p className="text-white/60 text-sm mb-6">
                  Download our detailed insights on sector-specific growth potential in Amravati.
                </p>
                <button className="flex items-center gap-2 text-gold font-semibold hover:text-white transition-colors">
                  Download Brief <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form className="glass p-8 md:p-12 rounded-2xl border border-white/10" onSubmit={(e) => e.preventDefault()}>
                <h3 className="text-2xl font-bold text-white mb-8">Send Us a Message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-white/60 text-sm">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/60 text-sm">Organization</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal transition-colors" placeholder="Company Name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-white/60 text-sm">Email Address</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal transition-colors" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/60 text-sm">Phone Number</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal transition-colors" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <label className="text-white/60 text-sm">Sector of Interest</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal transition-colors appearance-none">
                    <option value="" className="bg-navy">Select a sector</option>
                    <option value="gcc" className="bg-navy">GCC & ITES</option>
                    <option value="logistics" className="bg-navy">Logistics & Warehousing</option>
                    <option value="industrial" className="bg-navy">Industrial & Manufacturing</option>
                    <option value="education" className="bg-navy">Education & Training</option>
                    <option value="tourism" className="bg-navy">Tourism & Hospitality</option>
                    <option value="healthcare" className="bg-navy">Healthcare & Diagnostics</option>
                    <option value="data-centers" className="bg-navy">Data Centers</option>
                    <option value="townships" className="bg-navy">Integrated Townships</option>
                  </select>
                </div>

                <div className="space-y-2 mb-8">
                  <label className="text-white/60 text-sm">Message</label>
                  <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal transition-colors resize-none" placeholder="Tell us about your expansion objectives..."></textarea>
                </div>

                <button type="submit" className="w-full bg-gold hover:bg-gold-light text-navy font-bold rounded-lg px-8 py-4 transition-colors flex items-center justify-center gap-2">
                  Submit Inquiry <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
