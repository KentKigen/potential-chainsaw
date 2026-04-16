import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export type ListingType = 'property' | 'land';

export interface Listing {
  id: string;
  image: string;
  title: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  area: number | string;
  status: 'For Sale' | 'For Rent' | 'for_sale' | 'for_rent';
  type: ListingType | string;
  agents?: { name: string; phone?: string; image?: string; }[];
  agentId?: string;
}

export function useFilteredListings() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const activeTypeFilter = (searchParams.get('type') || 'all') as 'all' | 'property' | 'land';

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch('/data/listings.json');
        if (!res.ok) throw new Error('Failed to load listings');
        let data = await res.json();
        
        // Normalize properties based on sample data
        data = data.map((item: any) => ({
          ...item,
          // map older mock data matching to 'property' or 'land'
          type: item.type === 'land' ? 'land' : 'property',
          priceText: `KES ${item.price}`
        }));
        setListings(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchListings();
  }, []);

  const filteredListings = useMemo(() => {
    if (activeTypeFilter === 'all') return listings;
    return listings.filter(l => l.type === activeTypeFilter);
  }, [listings, activeTypeFilter]);

  const setTypeFilter = (type: 'all' | 'property' | 'land') => {
    const newParams = new URLSearchParams(searchParams);
    if (type === 'all') {
      newParams.delete('type');
    } else {
      newParams.set('type', type);
    }
    setSearchParams(newParams);
    
    // Analytics
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'filter_change',
        filter_type: 'property_category',
        filter_value: type
      });
    }
  };

  return {
    listings: filteredListings,
    isLoading,
    activeTypeFilter,
    setTypeFilter
  };
}
