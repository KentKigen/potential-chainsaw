import { motion } from 'motion/react';
import { Bed, Bath, Maximize, MapPin } from 'lucide-react';
import { Badge } from './Badge';
import { useCurrency } from '../context/CurrencyContext';
import { formatPriceText } from '../utils/formatPrice';
import { WhatsAppButton } from './WhatsAppButton';

interface Agent {
  name: string;
  phone?: string;
  image?: string;
}

interface ListingCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  price: number | string;
  beds?: number;
  baths?: number;
  area: number | string;
  status?: string;
  type?: string;
  agents?: Agent[];
  onClick?: () => void;
  onOpenLeadModal?: () => void;
}

export function ListingCard({
  id,
  image,
  title,
  location,
  price,
  beds,
  baths,
  area,
  status = 'For Sale',
  type = 'property',
  agents = [],
  onClick,
  onOpenLeadModal
}: ListingCardProps) {
  const { currency, kesToUsd } = useCurrency();

  const isContactForPrice = !price || price === 'Contact for price' || price === 0;
  
  let primaryPrice = 'Contact for price';
  let secondaryPrice = '';

  if (!isContactForPrice && typeof price === 'number') {
    const formatted = formatPriceText(price, currency, kesToUsd);
    primaryPrice = formatted.primary;
    secondaryPrice = formatted.secondary;
  } else if (!isContactForPrice && typeof price === 'string') {
    primaryPrice = price;
  }

  // Handle display agent data from array or legacy props if needed
  const displayAgents = agents.length > 0 ? agents : [{ name: 'Agent', phone: undefined }];

  return (
    <motion.div
      className="group relative"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
    >
      <div className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:border-[#C75A3A]/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(11,37,69,0.12)]">
        {/* Image Container */}
        <div className="relative h-72 overflow-hidden cursor-pointer" onClick={onClick}>
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute top-5 left-5 flex gap-2">
            <Badge variant="accent" className="px-3 py-1.5 shadow-sm uppercase tracking-wider text-[10px] font-bold">
              {status.replace('_', ' ')}
            </Badge>
            {type === 'land' && (
              <Badge variant="default" className="px-3 py-1.5 shadow-sm uppercase tracking-wider text-[10px] font-bold bg-[#0B2545]/80 backdrop-blur-sm">
                Land
              </Badge>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-7">
          <div className="flex items-start justify-between mb-2">
            <h3 
              className="text-2xl font-bold text-[#0B2545] leading-tight group-hover:text-[#C75A3A] transition-colors cursor-pointer line-clamp-2"
              onClick={onClick}
            >
              {title}
            </h3>
          </div>

          <div className="flex items-center gap-1.5 text-[#64748B] mb-5">
            <MapPin size={15} className="text-[#C75A3A]" />
            <span className="text-sm font-medium">{location}</span>
          </div>

          <div className="flex items-center gap-6 mb-6 py-4 border-y border-[#F1F5F9]">
            {type !== 'land' && beds !== undefined && (
              <div className="flex items-center gap-2">
                <Bed size={18} className="text-[#0B2545]" />
                <span className="text-sm font-semibold text-[#0B2545]">{beds}<span className="text-[#64748B] font-normal ml-1">Beds</span></span>
              </div>
            )}
            {type !== 'land' && baths !== undefined && (
              <div className="flex items-center gap-2">
                <Bath size={18} className="text-[#0B2545]" />
                <span className="text-sm font-semibold text-[#0B2545]">{baths}<span className="text-[#64748B] font-normal ml-1">Baths</span></span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Maximize size={18} className="text-[#0B2545]" />
              <span className="text-sm font-semibold text-[#0B2545]">{area}<span className="text-[#64748B] font-normal ml-1">{type === 'land' ? 'Acres' : 'Sqm'}</span></span>
            </div>
          </div>

          {/* Pricing & Agents Row */}
          <div className="flex items-end justify-between gap-4">
            <div className="flex-1">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#64748B] mb-1">Price</div>
              <div className="text-2xl font-black text-[#C75A3A] tracking-tight">
                {primaryPrice}
              </div>
              {secondaryPrice && (
                <div className="text-[11px] font-medium text-[#64748B] mt-0.5">
                  {secondaryPrice}
                </div>
              )}
            </div>

            {/* Agent Stack */}
            <div className="flex flex-col items-end gap-3">
              <div className="flex -space-x-3 overflow-hidden">
                {displayAgents.map((agent, i) => (
                  <div 
                    key={i} 
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-[#F1F5F9] overflow-hidden"
                    title={agent.name}
                  >
                    {agent.image ? (
                      <img src={agent.image} alt={agent.name} className="h-full w-full object-cover" />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-[10px] font-bold text-[#0B2545]">
                        {agent.name.charAt(0)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <WhatsAppButton 
                phone={displayAgents[0]?.phone} 
                agentName={displayAgents.length > 1 ? 'Our Team' : displayAgents[0]?.name}
                listingId={id}
                listingTitle={title}
                onFallback={onOpenLeadModal}
                className="scale-110 origin-right"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
