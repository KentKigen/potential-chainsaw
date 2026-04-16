import { useState } from 'react';
import { Bed, Bath, Maximize, MapPin, Download, ChevronLeft, ChevronRight, Calendar, Share2, Heart } from 'lucide-react';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { AgentCard } from '../components/AgentCard';
import { LeadModal } from '../components/LeadModal';
import { CurrencyToggle } from '../components/CurrencyToggle';
import { useCurrency } from '../context/CurrencyContext';
import { formatPriceText } from '../utils/formatPrice';

export function ListingDetailPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const { currency, kesToUsd } = useCurrency();

  const images = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1694465990855-e78110c345af?w=1200',
    'https://images.unsplash.com/photo-1639220814863-7f1408750b57?w=1200'
  ];

  const property = {
    title: 'Modern 3BR Villa with Garden',
    location: 'Ongata Rongai, Nairobi',
    price: 12500000,
    status: 'For Sale',
    beds: 3,
    baths: 2,
    area: '180 sqm',
    description: 'This stunning modern villa offers contemporary living in the heart of Ongata Rongai. Featuring an open-plan layout with abundant natural light, high-end finishes throughout, and a private garden perfect for family gatherings. The property includes a spacious master suite with walk-in closet, modern kitchen with premium appliances, and secure parking for two vehicles.',
    features: [
      'Master en-suite with walk-in closet',
      'Modern fitted kitchen',
      'Spacious living and dining area',
      'Private garden',
      'Secure parking for 2 cars',
      'Backup water supply',
      'Solar water heating',
      'CCTV security system',
      'Perimeter wall with electric fence'
    ],
    propertyDetails: {
      'Property Type': 'Villa',
      'Year Built': '2023',
      'Plot Size': '1/4 Acre',
      'Title Deed': 'Ready',
      'Occupancy': 'Immediate',
      'Parking': '2 Spaces'
    }
  };

  const formattedPrice = formatPriceText(property.price, currency, kesToUsd);

  const agents = [
    {
      name: 'Grace Wanjiku',
      role: 'Senior Property Consultant',
      image: 'https://images.unsplash.com/photo-1667422234414-3cdcfc2bd883?w=400',
      phone: '+254 712 345 678',
      email: 'grace@homebaseke.com',
      bio: 'Over 8 years of experience in residential properties.'
    },
    {
      name: 'David Omondi',
      role: 'Area Specialist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      phone: '+254722999000',
      email: 'david@homebaseke.com',
      bio: 'Local market expert for Ongata Rongai area.'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="pt-24 min-h-screen bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Navigation Breadcrumb Placeholder */}
        <div className="flex items-center gap-2 text-sm font-medium text-[#64748B] mb-8">
          <span className="hover:text-[#0B2545] cursor-pointer">Listings</span>
          <span>/</span>
          <span className="hover:text-[#0B2545] cursor-pointer">Ongata Rongai</span>
          <span>/</span>
          <span className="text-[#0B2545] font-bold truncate">{property.title}</span>
        </div>

        {/* Gallery Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-4 h-[600px]">
            <div className="lg:col-span-3 lg:row-span-2 relative rounded-3xl overflow-hidden group">
              <img 
                src={images[currentImageIndex]} 
                alt="Main" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              <div className="absolute top-6 left-6 flex gap-3">
                <Badge variant="accent" className="px-4 py-2 text-xs font-bold uppercase tracking-widest">{property.status}</Badge>
                <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-[#0B2545] shadow-lg">
                  {currentImageIndex + 1} / {images.length}
                </div>
              </div>

              <div className="absolute bottom-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-3 bg-white/90 backdrop-blur-md rounded-full text-[#0B2545] hover:bg-white shadow-xl transition-all"><Share2 size={20}/></button>
                <button className="p-3 bg-white/90 backdrop-blur-md rounded-full text-[#C75A3A] hover:bg-white shadow-xl transition-all"><Heart size={20}/></button>
              </div>

              <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/90 hover:text-[#0B2545] text-white rounded-full backdrop-blur-md transition-all">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/90 hover:text-[#0B2545] text-white rounded-full backdrop-blur-md transition-all">
                <ChevronRight size={24} />
              </button>
            </div>
            
            {images.slice(1, 4).map((img, idx) => (
              <div key={idx} className="hidden lg:block relative rounded-3xl overflow-hidden cursor-pointer group" onClick={() => setCurrentImageIndex(idx + 1)}>
                <img src={img} alt="Gallery" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-colors" />
                {idx === 2 && images.length > 4 && (
                  <div className="absolute inset-0 bg-[#0B2545]/60 flex items-center justify-center text-white text-xl font-bold">
                    +{images.length - 4} More
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white rounded-3xl p-8 shadow-sm border border-[#E2E8F0]">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div>
                  <h1 className="text-5xl font-extrabold text-[#0B2545] mb-4 tracking-tighter leading-tight">{property.title}</h1>
                  <div className="flex items-center gap-2 text-[#64748B] font-medium text-lg">
                    <MapPin size={22} className="text-[#C75A3A]" />
                    <span>{property.location}</span>
                  </div>
                </div>
                
                <div className="bg-[#FAF4EB] rounded-2xl p-6 border border-[#C75A3A]/10 min-w-[280px]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#64748B]">Full Price</span>
                    <CurrencyToggle />
                  </div>
                  <div className="text-4xl font-black text-[#C75A3A] tracking-tight mb-1">
                    {formattedPrice.primary}
                  </div>
                  {formattedPrice.secondary && (
                    <div className="text-sm font-semibold text-[#64748B]">
                      {formattedPrice.secondary}
                    </div>
                  )}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-8 py-8 border-y border-[#F1F5F9]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#F1F5F9] rounded-2xl flex items-center justify-center text-[#0B2545]"><Bed size={28}/></div>
                  <div>
                    <p className="text-xs font-bold text-[#64748B] uppercase tracking-widest">Beds</p>
                    <p className="text-xl font-black text-[#0B2545]">{property.beds}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#F1F5F9] rounded-2xl flex items-center justify-center text-[#0B2545]"><Bath size={28}/></div>
                  <div>
                    <p className="text-xs font-bold text-[#64748B] uppercase tracking-widest">Baths</p>
                    <p className="text-xl font-black text-[#0B2545]">{property.baths}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#F1F5F9] rounded-2xl flex items-center justify-center text-[#0B2545]"><Maximize size={28}/></div>
                  <div>
                    <p className="text-xs font-bold text-[#64748B] uppercase tracking-widest">Area</p>
                    <p className="text-xl font-black text-[#0B2545]">{property.area}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="pt-10">
                <h2 className="text-2xl font-black text-[#0B2545] mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-[#C75A3A] rounded-full" />
                  Description
                </h2>
                <p className="text-lg text-[#475569] leading-relaxed font-medium">
                  {property.description}
                </p>
              </div>
            </section>

            {/* Amenities Section */}
            <section className="bg-white rounded-3xl p-8 shadow-sm border border-[#E2E8F0]">
              <h2 className="text-2xl font-black text-[#0B2545] mb-8">Features & Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-[#F8FAFC] rounded-2xl text-[#0B2545] font-semibold border border-transparent hover:border-[#C75A3A]/20 transition-all">
                    <div className="w-2 h-2 bg-[#C75A3A] rounded-full shadow-[0_0_8px_rgba(199,90,58,0.4)]" />
                    {feature}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="sticky top-28 space-y-8">
              {/* Direct Actions */}
              <div className="bg-[#0B2545] rounded-3xl p-8 shadow-2xl shadow-navy/20 text-white overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700" />
                <h3 className="text-2xl font-black mb-6 relative">Interested?</h3>
                <div className="space-y-4 relative">
                  <Button variant="secondary" className="w-full h-14 text-lg font-bold shadow-xl" onClick={() => setIsLeadFormOpen(true)}>
                    <Calendar className="mr-3" size={22} />
                    Schedule Viewing
                  </Button>
                  <Button variant="outline" className="w-full h-14 text-lg font-bold border-white/20 text-white hover:bg-white hover:text-[#0B2545]">
                    <Download className="mr-3" size={22} />
                    Get Brochure
                  </Button>
                </div>
              </div>

              {/* Multi-Agent Panel */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#E2E8F0]">
                <h3 className="text-xl font-black text-[#0B2545] mb-6 tracking-tight">Assigned Agents</h3>
                <div className="space-y-6">
                  {agents.map((agt, i) => (
                    <div key={i} className={i !== 0 ? 'pt-6 border-t border-[#F1F5F9]' : ''}>
                      <AgentCard {...agt} compact />
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Badge */}
              <div className="bg-[#FAF4EB] rounded-3xl p-6 border border-[#C75A3A]/10 flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <Badge className="p-0 bg-transparent text-[#C75A3A]"><Calendar size={24}/></Badge>
                </div>
                <p className="text-sm font-bold text-[#64748B]">Verified correctly by Homebase Compliance Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LeadModal
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
        propertyTitle={property.title}
      />
    </div>
  );
}
