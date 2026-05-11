"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy <span className="text-gradient-gold">Policy</span></h1>
          <p className="text-white/60 mb-12">Last Updated: May 2026</p>

          <div className="space-y-10 text-white/80 leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">1. Introduction</h2>
              <p className="mb-4">
                At Amravati &amp; Partners ("we," "our," or "us"), your privacy is of paramount importance to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (amravatiandpartners.com) or engage with our corporate expansion and location advisory services.
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">2. Information We Collect</h2>
              <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Personal Data:</strong> Personally identifiable information, such as your name, corporate email address, telephone number, and organization name, that you voluntarily give to us when you fill out our contact forms or request an opportunity brief.</li>
                <li><strong className="text-white">Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">3. Use of Your Information</h2>
              <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries regarding investment facilitation and corporate expansion.</li>
                <li>Send you requested opportunity briefs, market insights, and strategic research.</li>
                <li>Compile anonymous statistical data and analysis for use internally to improve our platform.</li>
                <li>Deliver targeted communications relevant to your specified sector of interest (e.g., GCC, Logistics, Data Centers).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">4. Disclosure of Your Information</h2>
              <p className="mb-4">We do not sell, trade, or rent your personal identification information to others. We may share your information in the following situations:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
                <li><strong className="text-white">Third-Party Service Providers:</strong> We may share your information with trusted third parties that perform services for us or on our behalf, such as email delivery, hosting services, and customer service.</li>
                <li><strong className="text-white">Business Partners:</strong> With your explicit consent, we may share your information with our institutional and local execution partners to facilitate your expansion requirements.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">5. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">6. Contact Us</h2>
              <p className="mb-4">If you have questions or comments about this Privacy Policy, please contact us at:</p>
              <div className="glass p-6 rounded-xl inline-block border border-white/10">
                <p className="text-white font-bold mb-1">Amravati &amp; Partners</p>
                <p className="mb-1">Amravati, Maharashtra, India</p>
                <p>Email: <a href="mailto:privacy@amravatiandpartners.com" className="text-teal hover:underline">privacy@amravatiandpartners.com</a></p>
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
