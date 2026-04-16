import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', value: '' },
    { label: 'Listings', value: 'listings' },
    { label: 'Agents', value: 'agents' },
    { label: 'About', value: 'about' },
    { label: 'Blog', value: 'blog' },
    { label: 'Contact', value: 'contact' }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-3' 
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo - Elite Typography */}
          <Link
            to="/"
            className={`text-3xl font-black tracking-tighter transition-colors duration-300 ${isScrolled ? 'text-[#0B2545]' : 'text-white'}`}
          >
            HOMEBASE<span className="text-[#C75A3A]">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-10">
            {navItems.map((item) => {
              const active = location.pathname === `/${item.value}` || (location.pathname === '/' && item.value === '');
              return (
                <Link
                  key={item.value}
                  to={`/${item.value}`}
                  className={`relative text-sm font-black uppercase tracking-widest transition-all duration-300 group
                    ${active 
                      ? (isScrolled ? 'text-[#C75A3A]' : 'text-[#C75A3A]') 
                      : (isScrolled ? 'text-[#0B2545]/70 hover:text-[#0B2545]' : 'text-white/70 hover:text-white')
                    }
                  `}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C75A3A] transition-all duration-300 group-hover:w-full ${active ? 'w-full' : ''}`} />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="tel:+254712345678" className={`flex items-center gap-3 font-black text-xs uppercase tracking-widest transition-colors duration-300 ${isScrolled ? 'text-[#0B2545]' : 'text-white hover:text-[#C75A3A]'}`}>
              <div className={`p-2 rounded-xl transition-colors ${isScrolled ? 'bg-[#FAF4EB] text-[#C75A3A]' : 'bg-white/10 text-white'}`}>
                <Phone size={16} />
              </div>
              <span className="hidden xl:inline">+254 712 345 678</span>
            </a>
            <Button variant={isScrolled ? "primary" : "secondary"} className="h-12 px-8 text-xs font-black uppercase tracking-widest shadow-2xl shadow-navy/20">
              Book Viewing
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-3 rounded-2xl transition-all border ${
                isScrolled 
                  ? 'bg-white border-[#E2E8F0] text-[#0B2545]' 
                  : 'bg-white/10 border-white/20 text-white'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - High End Overlay */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-6 overflow-hidden"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl space-y-6 border border-[#F1F5F9]">
              <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.value}
                    to={`/${item.value}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-black text-[#0B2545] hover:text-[#C75A3A] transition-colors tracking-tighter"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="pt-8 border-t border-[#F1F5F9] space-y-6">
                <a href="tel:+254712345678" className="flex items-center gap-4 text-[#0B2545] font-black text-xl tracking-tight">
                  <div className="p-3 bg-[#FAF4EB] rounded-2xl text-[#C75A3A]">
                    <Phone size={24} />
                  </div>
                  <span>+254 712 345 678</span>
                </a>
                <Button variant="primary" className="w-full h-16 text-lg font-black rounded-2xl">Book Contact</Button>
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
