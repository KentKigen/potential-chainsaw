import { Phone, Mail } from 'lucide-react';
import { Button } from './Button';

interface AgentCardProps {
  name: string;
  role: string;
  image: string;
  phone: string;
  email: string;
  bio?: string;
  compact?: boolean;
}

export function AgentCard({ name, role, image, phone, email, bio, compact = false }: AgentCardProps) {
  if (compact) {
    return (
      <div className="bg-[#FAF4EB] rounded-2xl p-6 border border-[#C75A3A]/5">
        <div className="flex items-center gap-4 mb-5">
          <div className="relative">
            <img
              src={image}
              alt={name}
              className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
            />
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div>
            <h4 className="font-extrabold text-[#0B2545] tracking-tight leading-tight">{name}</h4>
            <p className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">{role}</p>
          </div>
        </div>
        <div className="space-y-3 mb-5">
          <a href={`tel:${phone}`} className="flex items-center gap-3 text-[#0B2545] hover:text-[#C75A3A] transition-colors group">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform"><Phone size={14} /></div>
            <span className="text-xs font-bold leading-none">{phone}</span>
          </a>
          <a href={`mailto:${email}`} className="flex items-center gap-3 text-[#0B2545] hover:text-[#C75A3A] transition-colors group">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform"><Mail size={14} /></div>
            <span className="text-xs font-bold leading-none">{email}</span>
          </a>
        </div>
        <Button variant="primary" className="w-full text-xs py-2 shadow-lg shadow-navy/10">Contact {name.split(' ')[0]}</Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:border-[#C75A3A]/20 hover:shadow-2xl transition-all duration-300 group">
      <div className="h-72 overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-7">
        <div className="mb-4">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C75A3A] mb-1">{role}</p>
          <h3 className="text-2xl font-black text-[#0B2545] leading-none mb-3">{name}</h3>
        </div>
        {bio && <p className="text-sm text-[#64748B] mb-6 leading-relaxed font-medium line-clamp-2">{bio}</p>}
        <div className="space-y-3 mb-8">
          <a href={`tel:${phone}`} className="flex items-center gap-4 text-[#0B2545] hover:text-[#C75A3A] transition-colors group">
            <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] flex items-center justify-center text-[#0B2545] group-hover:bg-[#FAF4EB] transition-colors"><Phone size={18} /></div>
            <span className="text-sm font-bold">{phone}</span>
          </a>
          <a href={`mailto:${email}`} className="flex items-center gap-4 text-[#0B2545] hover:text-[#C75A3A] transition-colors group">
            <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] flex items-center justify-center text-[#0B2545] group-hover:bg-[#FAF4EB] transition-colors"><Mail size={18} /></div>
            <span className="text-sm font-bold">{email}</span>
          </a>
        </div>
        <Button variant="primary" className="w-full h-12 text-sm font-bold shadow-xl shadow-navy/10">Message {name.split(' ')[0]}</Button>
      </div>
    </div>
  );
}
