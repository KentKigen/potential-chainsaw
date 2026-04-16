import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Award, Shield, Users, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { ListingCard } from '../components/ListingCard';
import { Button } from '../components/Button';
import { LeadModal } from '../components/LeadModal';
import { CurrencyToggle } from '../components/CurrencyToggle';

interface HomePageProps {
  onNavigate?: (page: string) => void;
  onPropertyClick?: (id: string) => void;
}

export function HomePage({ onNavigate, onPropertyClick }: HomePageProps) {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProperties = [
    {
      id: 'lis_001',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
      title: 'Modern 3BR Villa with Garden',
      location: 'Ongata Rongai, Kajiado',
      price: 12500000,
      beds: 3,
      baths: 2,
      area: 180,
      status: 'For Sale' as const,
      agents: [
        { name: 'Grace Wanjiku', image: 'https://images.unsplash.com/photo-1667422234414-3cdcfc2bd883?w=400' }
      ]
    },
    {
      id: 'lis_002',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
      title: 'Luxury Apartment in Kilimani',
      location: 'Kilimani, Nairobi',
      price: 18000000,
      beds: 2,
      baths: 2,
      area: 120,
      status: 'For Sale' as const,
      agents: [
        { name: 'David Omondi', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' }
      ]
    },
    {
      id: 'lis_005',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
      title: '5BR Mansion with Pool',
      location: 'Runda, Nairobi',
      price: 65000000,
      beds: 5,
      baths: 6,
      area: 500,
      status: 'For Sale' as const,
      agents: [
        { name: 'Sarah Mwangi', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400' }
      ]
    }
  ];

  const neighborhoods = [
    {
      name: 'Ongata Rongai',
      image: 'https://images.unsplash.com/photo-1741991110666-88115e724741?w=600',
      properties: '150+ Properties'
    },
    {
      name: 'Karen',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600',
      properties: '80+ Properties'
    },
    {
      name: 'Kilimani',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600',
      properties: '120+ Properties'
    }
  ];

  const testimonials = [
    {
      quote: "HomeBase made finding our dream home effortless. Professional service and verified listings gave us complete confidence.",
      author: "Sarah & James Mwangi",
      location: "Ongata Rongai"
    },
    {
      quote: "Transparent pricing, no hidden fees, and expert knowledge of the Nairobi market. Highly recommend!",
      author: "David Omondi",
      location: "Karen"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#0F172A]">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image with Parallax-like feel */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1741991110666-88115e724741?w=1920"
            alt="Nairobi Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0B2545]/95 via-[#0B2545]/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <div className="w-1.5 h-1.5 bg-[#C75A3A] rounded-full animate-pulse" />
              Trusted by 5,000+ Kenyan Homeowners
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter"
            >
              The Standard <br />
              of <span className="text-[#C75A3A]">Living</span> in <br />
              Nairobi
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/80 mb-12 max-w-xl font-medium leading-relaxed"
            >
              Elite property verification, local market insights, and zero hidden fees. Experience the next generation of Kenyan real estate.
            </motion.p>

            {/* Search Bar - Dev-team style (Glassmorphism + high-end shadow) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-xl p-2 rounded-2xl border border-white/20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] flex flex-col md:flex-row gap-2 max-w-2xl"
            >
              <div className="flex-1 flex items-center gap-4 px-6 py-4 bg-white rounded-xl">
                <Search size={22} className="text-[#C75A3A]" />
                <input
                  type="text"
                  placeholder="Search by neighborhood..."
                  className="flex-1 bg-transparent outline-none text-[#0B2545] font-semibold placeholder:text-[#64748B]"
                />
              </div>
              <Button
                variant="primary"
                onClick={() => onNavigate?.('listings')}
                className="md:w-auto h-auto py-4 px-8 text-lg font-bold rounded-xl"
              >
                Search Now
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Listings - Relocated Toggle */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-2">
            <div>
              <h2 className="text-5xl font-black text-[#0B2545] mb-4 tracking-tighter">Handpicked Homes</h2>
              <p className="text-xl text-[#64748B] font-medium">Verified properties from Nairobi's most resilient markets.</p>
            </div>
            <div className="flex items-center gap-4 bg-[#FAF4EB] p-4 rounded-2xl border border-[#C75A3A]/5">
              <span className="text-xs font-black uppercase tracking-widest text-[#0B2545]">Currency</span>
              <CurrencyToggle />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProperties.map((property) => (
              <ListingCard
                key={property.id}
                {...property}
                onClick={() => onPropertyClick?.(property.id)}
              />
            ))}
          </div>

          <div className="text-center mt-20">
            <Button variant="outline" onClick={() => onNavigate?.('listings')} className="h-14 px-12 text-lg font-bold border-[#0B2545] text-[#0B2545] hover:bg-[#0B2545] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-navy/5">
              Explore All Listings <ArrowRight className="ml-2 inline" size={20}/>
            </Button>
          </div>
        </div>
      </section>

      {/* Neighborhoods - Pro Layout */}
      <section className="py-32 bg-[#FAF4EB] border-y border-[#C75A3A]/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto mb-20 text-center">
             <h2 className="text-5xl font-black text-[#0B2545] mb-6 tracking-tighter">Curated Communities</h2>
             <p className="text-xl text-[#64748B] font-medium leading-relaxed">Beyond a house, we find the ecosystem where you belong.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {neighborhoods.map((neighborhood) => (
              <motion.div
                key={neighborhood.name}
                whileHover={{ y: -12 }}
                className="relative h-[480px] rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-2xl transition-all duration-500"
              >
                <img
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-transparent to-transparent flex flex-col justify-end p-10 text-left" />
                <div className="absolute bottom-10 left-10 text-left">
                  <h3 className="text-3xl font-black text-white mb-2 leading-none">{neighborhood.name}</h3>
                  <p className="text-white/80 font-bold uppercase tracking-widest text-xs mb-4">{neighborhood.properties}</p>
                  <div className="h-1 w-0 bg-[#C75A3A] group-hover:w-full transition-all duration-500 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar - Editorial Style */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-[#C75A3A] rounded-2xl flex items-center justify-center shadow-lg shadow-accent/20">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-black text-[#0B2545] tracking-tight">Triple-Verified <br />Authentication</h3>
              <p className="text-lg text-[#64748B] font-medium leading-relaxed italic border-l-4 border-[#FAF4EB] pl-4">
                "Every plot and structure is cross-referenced with local land registries to ensure 100% legal integrity."
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-14 h-14 bg-[#0B2545] rounded-2xl flex items-center justify-center shadow-lg shadow-navy/20">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-black text-[#0B2545] tracking-tight">Market-Leading <br />Valuation Data</h3>
              <p className="text-lg text-[#64748B] font-medium leading-relaxed italic border-l-4 border-[#FAF4EB] pl-4">
                "We provide historical price trends so you never overpay for your dream investments in Nairobi."
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-14 h-14 bg-[#C75A3A] rounded-2xl flex items-center justify-center shadow-lg shadow-accent/20">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-black text-[#0B2545] tracking-tight">Bespoke <br />Guided Tours</h3>
              <p className="text-lg text-[#64748B] font-medium leading-relaxed italic border-l-4 border-[#FAF4EB] pl-4">
                "Private viewings with local neighborhood experts who actually know where the best schools and shops are."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Pro Slider Style */}
      <section className="py-40 bg-[#0B2545] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-[0.02] rounded-full -mr-96 -mt-96" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-20">
            <div className="md:w-1/2">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">Words from <br />Our <span className="text-[#C75A3A]">Circle</span></h2>
              <div className="flex gap-4">
                 <button
                    onClick={() => setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                    className="p-4 bg-white/10 hover:bg-white text-white hover:text-[#0B2545] rounded-2xl transition-all shadow-xl"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                    className="p-4 bg-white/10 hover:bg-white text-white hover:text-[#0B2545] rounded-2xl transition-all shadow-xl"
                  >
                    <ChevronRight size={24} />
                  </button>
              </div>
            </div>

            <div className="md:w-1/2 relative">
               <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 relative overflow-hidden group shadow-2xl"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-[#C75A3A]" />
                <p className="text-2xl md:text-3xl text-white font-medium mb-12 leading-snug tracking-tight">
                  "{testimonials[currentSlide].quote}"
                </p>
                <div className="text-white">
                  <p className="text-xl font-black tracking-tight">{testimonials[currentSlide].author}</p>
                  <p className="text-[#C75A3A] font-bold text-sm uppercase tracking-widest">{testimonials[currentSlide].location}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Professional Impact */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#FAF4EB] rounded-[4rem] p-16 md:p-24 text-center border border-[#C75A3A]/10 relative">
             <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#C75A3A]/5 rounded-full blur-3xl" />
             <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#0B2545]/5 rounded-full blur-3xl" />
             
             <h2 className="text-5xl md:text-6xl font-black text-[#0B2545] mb-8 tracking-tighter">Ready for the Next Chapter?</h2>
             <p className="text-xl text-[#64748B] mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
               Allow our senior property consultants to curate a portfolio of Nairobi's finest listings for you. 
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button
                  variant="primary"
                  onClick={() => setIsLeadFormOpen(true)}
                  className="h-16 px-16 text-xl font-black rounded-3xl shadow-2xl shadow-navy/20"
                >
                  Book a Consult
                </Button>
                <Button variant="outline" onClick={() => onNavigate?.('listings')} className="h-16 px-16 text-xl font-black rounded-3xl border-[#0B2545] text-[#0B2545] hover:bg-[#0B2545] hover:text-white transition-all">
                  Browse Properties
                </Button>
             </div>
          </div>
        </div>
      </section>

      <LeadModal
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
      />
    </div>
  );
}
