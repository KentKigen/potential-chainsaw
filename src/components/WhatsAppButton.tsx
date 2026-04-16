import { motion } from 'motion/react';

interface WhatsAppButtonProps {
  phone?: string;
  agentName: string;
  listingId?: string;
  listingTitle?: string;
  className?: string;
  onFallback?: () => void;
}

export function WhatsAppButton({
  phone,
  agentName,
  listingId,
  listingTitle,
  className = '',
  onFallback
}: WhatsAppButtonProps) {
  
  const handleClick = (e: React.MouseEvent) => {
    // Analytics tracking
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'contact_whatsapp_click',
        agent: agentName,
        listingId: listingId || 'General'
      });
    }

    if (!phone && onFallback) {
      e.preventDefault();
      onFallback();
      return;
    }
  };

  if (!phone) {
    return (
      <button 
        onClick={handleClick}
        className={`bg-[#C75A3A] hover:bg-[#A6452B] text-white font-medium py-2 px-4 rounded-lg transition-colors inline-flex items-center justify-center gap-2 ${className}`}
        aria-label="Contact Agent"
      >
        <span>Contact Agent</span>
      </button>
    );
  }

  // Normalize phone (replace +254 or 0 with 254)
  let normalized = phone.replace(/[^0-9]/g, '');
  if (normalized.startsWith('0')) {
    normalized = '254' + normalized.slice(1);
  } else if (!normalized.startsWith('254')) {
    // Assuming local 9 digit formats 7... -> 2547...
    if (normalized.length === 9) {
      normalized = '254' + normalized;
    }
  }

  const message = listingTitle && listingId 
    ? `Hi ${agentName}, I'm interested in '${listingTitle}' (ID: ${listingId}). Can we schedule a viewing?`
    : `Hi ${agentName}, I'm interested in scheduling a viewing with Homebase KE.`;

  const waLink = `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`bg-[#25D366] hover:bg-[#1DA851] text-white font-medium py-2 px-4 rounded-lg transition-colors inline-flex items-center justify-center gap-2 ${className}`}
      aria-label="Contact Agent on WhatsApp"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
      <span>WhatsApp</span>
    </motion.a>
  );
}
