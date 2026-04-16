import { useCurrency } from '../context/CurrencyContext';

import { AlertCircle } from 'lucide-react';

interface CurrencyToggleProps {
  className?: string;
  disabled?: boolean;
}

export function CurrencyToggle({ className = '', disabled = false }: CurrencyToggleProps) {
  const { currency, setCurrency, error, isLoading } = useCurrency();

  if (isLoading) {
    return <div className={`flex items-center space-x-1 p-1 bg-[#F6E9D7] rounded-lg h-9 w-24 animate-pulse ${className}`} />;
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={`relative flex items-center p-1 bg-[#F6E9D7] rounded-lg ${disabled ? 'opacity-50 pointer-events-none' : ''}`}>
        <div
          className="absolute inset-y-1 w-1/2 bg-white rounded-md shadow-sm transition-transform duration-200 ease-in-out"
          style={{ transform: `translateX(${currency === 'USD' ? '100%' : '0'})`, left: 0 }}
        />
        <button
          className={`relative z-10 px-3 py-1 text-sm font-medium transition-colors ${currency === 'KES' ? 'text-[#0B2545]' : 'text-[#6B7280]'}`}
          onClick={() => setCurrency('KES')}
          disabled={disabled}
          aria-label="Set currency to KES"
        >
          KES
        </button>
        <button
          className={`relative z-10 px-3 py-1 text-sm font-medium transition-colors ${currency === 'USD' ? 'text-[#0B2545]' : 'text-[#6B7280]'}`}
          onClick={() => setCurrency('USD')}
          disabled={disabled || error}
          aria-label="Set currency to USD"
        >
          USD
        </button>
      </div>
      {error && (
        <div className="group relative flex items-center">
          <AlertCircle size={16} className="text-[#C75A3A]" />
          <div className="absolute top-full lg:left-1/2 left-auto right-0 lg:-translate-x-1/2 mt-2 w-48 p-2 bg-[#0B2545] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
            Conversion unavailable — showing KES
          </div>
        </div>
      )}
    </div>
  );
}
