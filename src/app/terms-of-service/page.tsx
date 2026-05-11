"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <div className="flex flex-col w-full bg-navy min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-teal mb-8 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of <span className="text-gradient-gold">Service</span></h1>
          <p className="text-white/60 mb-12">Last Updated: May 2026</p>

          <div className="space-y-10 text-white/80 leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">1. Agreement to Terms</h2>
              <p>
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Amravati &amp; Partners ("we," "us" or "our"), concerning your access to and use of the amravatiandpartners.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">2. Advisory Disclaimer</h2>
              <p className="mb-4">
                The information provided on the Site does not, and is not intended to, constitute legal, financial, or binding investment advice. All information, content, and materials available on this site are for general informational purposes only.
              </p>
              <p>
                Any strategic decisions, investments, or corporate expansion initiatives executed based on the insights provided on this Site should be done after independent verification and formal consultation with our advisory team under a separate, formal engagement agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">3. Intellectual Property Rights</h2>
              <p className="mb-4">
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
              </p>
              <p>
                You are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">4. User Representations</h2>
              <p className="mb-4">By using the Site, you represent and warrant that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                <li>Your use of the Site will not violate any applicable law or regulation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">5. Limitations of Liability</h2>
              <p>
                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">6. Governing Law</h2>
              <p>
                These Terms shall be governed by and defined following the laws of India. Amravati &amp; Partners and yourself irrevocably consent that the courts of Maharashtra, India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">7. Contact Us</h2>
              <p className="mb-4">In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</p>
              <div className="glass p-6 rounded-xl inline-block border border-white/10">
                <p className="text-white font-bold mb-1">Amravati &amp; Partners</p>
                <p className="mb-1">Amravati, Maharashtra, India</p>
                <p>Email: <a href="mailto:legal@amravatiandpartners.com" className="text-teal hover:underline">legal@amravatiandpartners.com</a></p>
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
