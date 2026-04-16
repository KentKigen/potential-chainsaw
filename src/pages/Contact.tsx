import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { FormField } from '../components/FormField';
import { Button } from '../components/Button';

export function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 24 hours.');
  };

  const offices = [
    {
      name: 'Magadi Road Hub',
      address: 'Magadi Road, Suite 201',
      city: 'Ongata Rongai, Kajiado',
      phone: '+254 712 345 678',
      email: 'rongai@homebaseke.com',
      hours: 'Mon-Sat: 8:00 AM - 6:00 PM'
    },
    {
      name: 'Nairobi Nexus',
      address: 'Kimathi Street, 4th Floor',
      city: 'Nairobi CBD, Kenya',
      phone: '+254 722 456 789',
      email: 'cbd@homebaseke.com',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white text-[#0F172A]">
      {/* Hero Section - Bold Editorial */}
      <section className="bg-[#0B2545] text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.03] rounded-full blur-3xl -mr-64 -mt-64" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-white/80 text-xs font-black uppercase tracking-widest mb-8 border border-white/10">
            Support Excellence
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
            Let's Start <br />the <span className="text-[#C75A3A]">Conversation</span>.
          </h1>
          <p className="text-xl text-white/60 max-w-xl font-medium leading-relaxed italic border-l-4 border-[#C75A3A] pl-6">
            "Whether you're acquiring your first home or expanding a portfolio, our senior consultants are ready to advise."
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Form - Pro Layout */}
          <div>
            <div className="mb-12">
              <h2 className="text-4xl font-black text-[#0B2545] mb-4 tracking-tight leading-none">Reach Out</h2>
              <div className="h-1 w-20 bg-[#C75A3A] rounded-full" />
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <FormField
                  label="First Name"
                  type="text"
                  placeholder="John"
                  required
                />
                <FormField
                  label="Last Name"
                  type="text"
                  placeholder="Kamau"
                  required
                />
              </div>

              <FormField
                label="Corporate or Personal Email"
                type="email"
                placeholder="john@example.com"
                required
              />

              <FormField
                label="Direct Line"
                type="tel"
                placeholder="+254 712 345 678"
                required
              />

              <div className="space-y-4">
                <label className="block text-xs font-black uppercase tracking-widest text-[#64748B]">
                  Subject of Interest
                </label>
                <select className="w-full px-6 py-4 bg-[#FAF4EB] border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C75A3A] text-[#0B2545] font-bold appearance-none transition-all">
                  <option>Strategic Property Acquisition</option>
                  <option>Portfolio Divestiture</option>
                  <option>Premium Residential Leasing</option>
                  <option>Asset Valuation & Advisory</option>
                  <option>General Consultancy</option>
                </select>
              </div>

              <FormField
                label="Brief Description"
                multiline
                placeholder="Describe your requirements or specific property IDs..."
                required
              />

              <Button type="submit" variant="primary" className="w-full h-16 text-xl font-black rounded-3xl shadow-2xl shadow-navy/20">
                Submit Inquiry <Send className="ml-2" size={20} />
              </Button>

              <p className="text-sm font-bold text-[#64748B] text-center italic">
                Our engagement team typically responds within 4 business hours.
              </p>
            </form>
          </div>

          {/* Office Information - Styled Cards */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-black text-[#0B2545] mb-4 tracking-tight leading-none">Physical Presence</h2>
              <p className="text-lg font-medium text-[#64748B] mb-12">For face-to-face consultations at our regional hubs.</p>
            </div>

            <div className="space-y-8">
              {offices.map((office, i) => (
                <div key={i} className="bg-[#FAF4EB] rounded-[2.5rem] p-10 border border-[#C75A3A]/5 hover:shadow-2xl transition-all duration-300 group">
                  <h3 className="text-2xl font-black text-[#0B2545] mb-8 flex items-center gap-4">
                    <div className="w-2 h-6 bg-[#C75A3A] rounded-full" />
                    {office.name}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#C75A3A] shadow-sm"><MapPin size={20} /></div>
                        <div>
                          <p className="text-sm font-bold text-[#0B2545]">{office.address}</p>
                          <p className="text-sm font-medium text-[#64748B]">{office.city}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#C75A3A] shadow-sm"><Clock size={20} /></div>
                        <p className="text-sm font-bold text-[#0B2545] line-clamp-2">{office.hours}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <a href={`tel:${office.phone}`} className="flex items-center gap-4 group/link">
                         <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#C75A3A] shadow-sm group-hover/link:bg-[#C75A3A] group-hover/link:text-white transition-colors duration-500"><Phone size={20} /></div>
                         <span className="text-sm font-bold text-[#0B2545] group-hover/link:text-[#C75A3A] transition-colors">{office.phone}</span>
                      </a>

                      <a href={`mailto:${office.email}`} className="flex items-center gap-4 group/link">
                         <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#C75A3A] shadow-sm group-hover/link:bg-[#C75A3A] group-hover/link:text-white transition-colors duration-500"><Mail size={20} /></div>
                         <span className="text-sm font-bold text-[#0B2545] group-hover/link:text-[#C75A3A] transition-colors">{office.email}</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Support - High end card */}
            <div className="bg-[#0B2545] rounded-[2.5rem] p-10 text-white relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700" />
              <h3 className="text-2xl font-black mb-4 relative z-10">High-Priority Concierge</h3>
              <p className="text-white/60 font-medium mb-8 relative z-10">Dedicated line for institutional investors and high-value single transactions.</p>
              <a href="tel:+254712345678" className="inline-flex items-center gap-4 text-3xl font-black hover:text-[#C75A3A] transition-colors relative z-10">
                +254 712 345 678
              </a>
            </div>
          </div>
        </div>

        {/* Dynamic Map Area */}
        <div className="mt-32">
           <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-[#0B2545] tracking-tight">Locate Us</h2>
           </div>
           <div className="relative h-[600px] rounded-[4rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl border border-[#F1F5F9]">
              <img 
                src="https://images.unsplash.com/photo-1741991110666-88115e724741?w=1920" 
                alt="Map Background" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0B2545]/20 backdrop-blur-[2px] transition-all duration-1000 group-hover:backdrop-blur-none" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white/90 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl text-center max-w-sm border border-white/20">
                    <MapPin size={48} className="text-[#C75A3A] mx-auto mb-6 animate-bounce" />
                    <h4 className="text-2xl font-black text-[#0B2545] mb-2">GPS Active</h4>
                    <p className="text-[#64748B] font-medium">Magadi Road, Suite 201 <br /> Ongata Rongai</p>
                    <Button variant="primary" className="mt-6 w-full h-12 rounded-2xl text-xs font-black tracking-widest uppercase">Open Directions</Button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
