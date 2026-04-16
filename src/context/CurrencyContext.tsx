import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Currency = 'KES' | 'USD';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  kesToUsd: number | null;
  isLoading: boolean;
  error: boolean;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('KES');
  const [kesToUsd, setKesToUsd] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('/api/rates');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setKesToUsd(data.kesToUsd);
        if (data.fallback) {
          setError(true);
        }
      } catch (err) {
        console.error('Failed to fetch rates:', err);
        setError(true);
        setKesToUsd(0.0075); // Safe fallback
      } finally {
        setIsLoading(false);
      }
    };

    fetchRates();
  }, []);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, kesToUsd, isLoading, error }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
