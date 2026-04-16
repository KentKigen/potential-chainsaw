import { MapPin, Phone, Mail, Globe, Share2, Send } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0B2545] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              HomeBase <span className="text-[#C75A3A]">KE</span>
            </h3>
            <p className="text-white/70 mb-6">
              Your trusted partner for premium real estate in Ongata Rongai and greater Nairobi.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#C75A3A] transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="hover:text-[#C75A3A] transition-colors">
                <Share2 size={20} />
              </a>
              <a href="#" className="hover:text-[#C75A3A] transition-colors">
                <Send size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Listings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Buy Property</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sell Property</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rent Property</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Property Valuation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>Magadi Road, Ongata Rongai, Nairobi</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0" />
                <span>+254 712 345 678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0" />
                <span>info@homebaseke.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60 text-sm">
          <p>&copy; 2026 HomeBase KE. All rights reserved. | Verified listings | No hidden fees | Local market expertise</p>
        </div>
      </div>
    </footer>
  );
}
