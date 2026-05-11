import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Globe, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="group flex items-center gap-3 mb-2">
              <Image 
                src="/images/logo.svg" 
                alt="Amravati & Partners Logo" 
                width={180} 
                height={36} 
                className="opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Enabling Growth. Creating Possibilities. We build the future of emerging cities through strategic expansion and local execution support.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {["Location Advisory", "Investment Facilitation", "Corporate Expansion Support", "Policy Guidance"].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-white/60 hover:text-gold transition-colors text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold/50" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Why Amravati", "Sectors", "Insights", "About Us"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(" ", "-")}`} className="text-white/60 hover:text-gold transition-colors text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold/50" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <span>Amravati, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a href="mailto:contact@amravatiandpartners.com" className="hover:text-gold transition-colors">
                  contact@amravatiandpartners.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gold shrink-0" />
                <a href="#" className="hover:text-gold transition-colors">
                  Amravati & Partners
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Amravati & Partners. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
