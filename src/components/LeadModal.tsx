import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FormField } from './FormField';
import { Button } from './Button';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyTitle?: string;
}

export function LeadModal({ isOpen, onClose, propertyTitle }: LeadModalProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you shortly to schedule your viewing.');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#0B2545]">Book a Viewing</h2>
                  <button
                    onClick={onClose}
                    className="text-[#6B7280] hover:text-[#0B2545] transition-colors p-2 hover:bg-[#F6E9D7] rounded-lg"
                  >
                    <X size={24} />
                  </button>
                </div>

                {propertyTitle && (
                  <div className="bg-[#F6E9D7] rounded-lg p-4 mb-6">
                    <p className="text-sm text-[#6B7280] mb-1">Property:</p>
                    <p className="font-medium text-[#0B2545]">{propertyTitle}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <FormField
                    label="Full Name"
                    type="text"
                    placeholder="John Kamau"
                    required
                  />
                  <FormField
                    label="Phone Number"
                    type="tel"
                    placeholder="+254 712 345 678"
                    required
                  />
                  <FormField
                    label="Email Address"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                  <FormField
                    label="Preferred Viewing Date"
                    type="date"
                    required
                  />
                  <FormField
                    label="Additional Notes"
                    multiline
                    placeholder="Any specific questions or requirements..."
                  />

                  <div className="pt-4">
                    <Button type="submit" variant="primary" className="w-full">
                      Submit Request
                    </Button>
                    <p className="text-xs text-[#6B7280] text-center mt-3">
                      We'll contact you within 24 hours to confirm your viewing appointment.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
