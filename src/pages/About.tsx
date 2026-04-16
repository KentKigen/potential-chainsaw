import { Award, Shield, Target, Heart, ArrowRight } from 'lucide-react';
import { AgentCard } from '../components/AgentCard';
import { Button } from '../components/Button';

export function AboutPage() {
  const team = [
    {
      name: 'Grace Wanjiku',
      role: 'Senior Property Consultant',
      image: 'https://images.unsplash.com/photo-1667422234414-3cdcfc2bd883?w=400',
      phone: '+254 712 345 678',
      email: 'grace@homebaseke.com',
      bio: 'Leading residential consultant with 8+ years of expertise in the Kajiado and Nairobi regions.'
    },
    {
      name: 'David Omondi',
      role: 'Property Consultant',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      phone: '+254 722 456 789',
      email: 'david@homebaseke.com',
      bio: 'Market specialist focused on strategic commercial investment and high-yield property portfolios.'
    },
    {
      name: 'Sarah Mwangi',
      role: 'Rental Specialist',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      phone: '+254 733 567 890',
      email: 'sarah@homebaseke.com',
      bio: 'Expert in managed residential leasing and premium tenant relationship management.'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Integrity First',
      description: 'Transparent dealings rooted in absolute legal and ethical verifyability.'
    },
    {
      icon: Heart,
      title: 'Human Centric',
      description: 'We prioritize the living experience of our clients over transactional speed.'
    },
    {
      icon: Award,
      title: 'Certified Expertise',
      description: 'Industry-recognized excellence in Kenyan real estate advisory.'
    },
    {
      icon: Target,
      title: 'Absolute Clarity',
      description: 'Full disclosure on pricing, utility states, and neighborhood conditions.'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white text-[#0F172A]">
      {/* Hero Section - Editorial Style */}
      <section className="relative px-6 py-24 md:py-32 overflow-hidden border-b border-[#F1F5F9]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF4EB] border border-[#C75A3A]/10 rounded-full text-[#C75A3A] text-xs font-black uppercase tracking-widest mb-8">
               Our Heritage
             </div>
             <h1 className="text-6xl md:text-7xl font-black text-[#0B2545] mb-8 tracking-tighter leading-[0.9]">
               Crafting the <br />Future of <br /><span className="text-[#C75A3A]">Kenyan</span> Living
             </h1>
             <p className="text-xl text-[#64748B] font-medium leading-relaxed max-w-xl italic">
               "Since 2015, we've set the baseline for what happens when deep local knowledge meets modern digital transparency."
             </p>
          </div>
          <div className="md:w-1/2 relative">
             <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
               <img
                 src="https://images.unsplash.com/photo-1741991110666-88115e724741?w=1200"
                 alt="HomeBase Office"
                 className="w-full h-[600px] object-cover"
               />
               <div className="absolute inset-0 bg-[#0B2545]/10" />
             </div>
             {/* Float badge */}
             <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-[#F1F5F9]">
                <p className="text-5xl font-black text-[#C75A3A] mb-1 leading-none">500+</p>
                <p className="text-sm font-bold text-[#64748B] uppercase tracking-widest">Properties Verified</p>
             </div>
          </div>
        </div>
      </section>

      {/* Our Story - Pro Typography */}
      <section className="py-24 bg-[#FAF4EB]/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
             <div>
               <h2 className="text-4xl font-black text-[#0B2545] mb-6 tracking-tight">The Vision</h2>
               <div className="w-16 h-1 bg-[#C75A3A] rounded-full mb-8" />
               <p className="text-xl text-[#0B2545] font-bold leading-snug">
                 We started with a single realization: Nairobi didn't need more listings; it needed more truth.
               </p>
             </div>
             <div className="space-y-6 text-lg text-[#64748B] leading-relaxed font-medium">
                <p>
                  Found in 2015, HomeBase KE was born from a friction point. We saw a market filled with "hidden" terms, agents who didn't live in the communities they served, and unverified data.
                </p>
                <p>
                  We decided to build a platform where every listing is inspected by our compliance team, every price is final, and every agent is a neighbor first. Today, that vision serves thousands of happy homeowners from Ongata Rongai to Runda.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Key Numbers - Bold Minimalism */}
      <section className="py-24 bg-[#0B2545] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { val: '98%', label: 'Retention Rate' },
              { val: '10+', label: 'Years of Market Presence' },
              { val: '150+', label: 'Monthly Private Tours' },
              { val: '24/7', label: 'Support Continuity' }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-5xl font-black text-[#C75A3A] mb-3 group-hover:scale-110 transition-transform tabular-nums">{stat.val}</div>
                <div className="text-sm font-bold text-white/60 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-20">
              <h2 className="text-5xl font-black text-[#0B2545] tracking-tight mb-4">Our Core Philosophy</h2>
              <p className="text-xl font-medium text-[#64748B]">Non-negotiable standards for every interaction.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="p-10 rounded-[2rem] bg-[#FAF4EB] border border-[#C75A3A]/5 hover:shadow-2xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#C75A3A] mb-8 shadow-sm group-hover:bg-[#C75A3A] group-hover:text-white transition-colors duration-500">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-[#0B2545] mb-4">{v.title}</h3>
                  <p className="text-[#64748B] font-medium leading-relaxed">{v.description}</p>
                </div>
              );
            })}
           </div>
        </div>
      </section>

      {/* The Collective - Team Section */}
      <section className="py-32 bg-[#FAF4EB]/20 border-t border-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row items-end justify-between gap-10 mb-20 text-left">
              <div>
                <h2 className="text-5xl font-black text-[#0B2545] tracking-tight mb-4 leading-none">The Collective</h2>
                <p className="text-xl font-medium text-[#64748B]">Senior consultants at your disposal.</p>
              </div>
              <Button variant="outline" className="h-14 px-10 rounded-2xl border-[#0B2545] text-[#0B2545] font-black hover:bg-[#0B2545] hover:text-white transition-all">
                Work With Us <ArrowRight className="ml-2" size={18}/>
              </Button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <AgentCard key={i} {...member} />
            ))}
           </div>
        </div>
      </section>

      {/* High-End CTA */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0B2545] rounded-[4rem] p-16 md:p-24 relative overflow-hidden text-center text-white">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-[0.02] rounded-full blur-3xl -mr-64 -mt-64" />
             <div className="relative z-10">
                <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter">Ready for Your Next Move?</h2>
                <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-medium">
                  Experience a viewing that changes everything. Professional, guided, and pressure-free.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                   <Button variant="secondary" className="h-16 px-16 text-xl font-black rounded-[2rem] shadow-2xl">
                     Book Observation
                   </Button>
                   <Button variant="outline" className="h-16 px-16 text-xl font-black rounded-[2rem] border-white/20 hover:bg-white hover:text-[#0B2545] transition-all">
                     View Portfolio
                   </Button>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
