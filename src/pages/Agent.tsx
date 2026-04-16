import { Phone, Mail, MapPin, Award, TrendingUp } from 'lucide-react';
import { ListingCard } from '../components/ListingCard';
import { Button } from '../components/Button';

export function AgentProfilePage() {
  const agent = {
    name: 'Grace Wanjiku',
    role: 'Senior Property Consultant',
    image: 'https://images.unsplash.com/photo-1667422234414-3cdcfc2bd883?w=800',
    phone: '+254 712 345 678',
    email: 'grace@homebaseke.com',
    location: 'Ongata Rongai Office',
    bio: 'Grace Wanjiku is a seasoned real estate professional with over 8 years of experience specializing in residential properties across Ongata Rongai, Karen, and greater Nairobi. Her deep understanding of the local market, combined with a client-first approach, has helped hundreds of families find their dream homes. Grace is known for her integrity, market expertise, and commitment to ensuring smooth, transparent transactions.',
    specializations: [
      'Residential Sales',
      'Property Valuation',
      'First-Time Buyers',
      'Investment Properties'
    ],
    stats: [
      { label: 'Properties Sold', value: '150+' },
      { label: 'Happy Clients', value: '200+' },
      { label: 'Years Experience', value: '8' },
      { label: 'Average Rating', value: '4.9/5' }
    ]
  };

  const recentListings = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1658218635253-64728f6234be?w=800',
      title: 'Modern 3BR Villa',
      location: 'Ongata Rongai, Nairobi',
      price: 'KES 12.5M',
      beds: 3,
      baths: 2,
      area: '180 sqm',
      status: 'For Sale' as const
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1658218729615-167c32d70537?w=800',
      title: 'Luxury 4BR Family Home',
      location: 'Karen, Nairobi',
      price: 'KES 25M',
      beds: 4,
      baths: 3,
      area: '280 sqm',
      status: 'For Sale' as const
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1694465990855-e78110c345af?w=800',
      title: 'Contemporary 2BR Apartment',
      location: 'Kilimani, Nairobi',
      price: 'KES 95,000/mo',
      beds: 2,
      baths: 2,
      area: '120 sqm',
      status: 'For Rent' as const
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#0B2545] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <img
                src={agent.image}
                alt={agent.name}
                className="w-64 h-64 rounded-xl object-cover mx-auto shadow-2xl"
              />
            </div>

            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold mb-2">{agent.name}</h1>
              <p className="text-xl text-white/80 mb-6">{agent.role}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {agent.stats.map((stat) => (
                  <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-3xl font-bold mb-1">{stat.value}</p>
                    <p className="text-sm text-white/70">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <a href={`tel:${agent.phone}`} className="flex items-center gap-3 text-white/90 hover:text-white transition-colors">
                  <Phone size={20} />
                  <span className="text-lg">{agent.phone}</span>
                </a>
                <a href={`mailto:${agent.email}`} className="flex items-center gap-3 text-white/90 hover:text-white transition-colors">
                  <Mail size={20} />
                  <span className="text-lg">{agent.email}</span>
                </a>
                <div className="flex items-center gap-3 text-white/90">
                  <MapPin size={20} />
                  <span className="text-lg">{agent.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <div>
              <h2 className="text-3xl font-bold text-[#0B2545] mb-4">About {agent.name.split(' ')[0]}</h2>
              <p className="text-[#6B7280] leading-relaxed">{agent.bio}</p>
            </div>

            {/* Specializations */}
            <div>
              <h2 className="text-3xl font-bold text-[#0B2545] mb-4">Specializations</h2>
              <div className="grid grid-cols-2 gap-4">
                {agent.specializations.map((spec) => (
                  <div key={spec} className="bg-[#F6E9D7] rounded-lg p-4 flex items-center gap-3">
                    <Award size={20} className="text-[#C75A3A]" />
                    <span className="font-medium text-[#0B2545]">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Listings */}
            <div>
              <h2 className="text-3xl font-bold text-[#0B2545] mb-6">Recent Listings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentListings.map((property) => (
                  <ListingCard key={property.id} {...property} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Contact Card */}
              <div className="bg-[#C75A3A] text-white rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
                <p className="mb-6">
                  Let me help you find the perfect property or get the best value for your home.
                </p>
                <Button variant="secondary" className="w-full">
                  Schedule a Call
                </Button>
              </div>

              {/* Performance Highlights */}
              <div className="bg-white border-2 border-[#F6E9D7] rounded-xl p-6">
                <h3 className="font-bold text-[#0B2545] mb-4 flex items-center gap-2">
                  <TrendingUp size={20} className="text-[#C75A3A]" />
                  Performance Highlights
                </h3>
                <ul className="space-y-3 text-sm text-[#6B7280]">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#C75A3A] rounded-full mt-2"></div>
                    <span>Top sales agent 2025</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#C75A3A] rounded-full mt-2"></div>
                    <span>98% client satisfaction rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#C75A3A] rounded-full mt-2"></div>
                    <span>Average property sold in 45 days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#C75A3A] rounded-full mt-2"></div>
                    <span>Certified property valuer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
