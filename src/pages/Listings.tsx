import { useState } from 'react';
import { SlidersHorizontal, Grid, Map } from 'lucide-react';
import { ListingCard } from '../components/ListingCard';
import { useFilteredListings } from '../hooks/useFilteredListings';
import { FilterPanel } from '../components/FilterPanel';
import { CurrencyToggle } from '../components/CurrencyToggle';
import { LeadModal } from '../components/LeadModal';

interface ListingsPageProps {
  onPropertyClick?: (id: string) => void;
}

export function ListingsPage({ onPropertyClick }: ListingsPageProps) {
  const [showFilters, setShowFilters] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  
  const { listings, isLoading, activeTypeFilter, setTypeFilter } = useFilteredListings();

  if (isLoading) {
    return <div className="pt-32 pb-24 min-h-screen text-center text-[#6B7280]">Loading listings...</div>;
  }

  return (
    <div className="pt-24 min-h-screen bg-[#F6E9D7]/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-5xl font-bold text-[#0B2545] mb-3 tracking-tight">Property Listings</h1>
            <div className="flex items-center gap-4">
              <p className="text-lg text-[#64748B]">Showing <span className="font-bold text-[#0B2545]">{listings.length}</span> verified results</p>
              <div className="h-4 w-px bg-[#E2E8F0] hidden md:block" />
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-[#64748B] hidden sm:inline">Currency:</span>
                <CurrencyToggle />
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-[#F6E9D7] transition-colors text-[#0B2545]"
          >
            <SlidersHorizontal size={20} />
            <span className="font-medium">{showFilters ? 'Hide' : 'Show'} Filters</span>
          </button>

          <div className="flex items-center gap-2 bg-white rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-[#C75A3A] text-white' : 'text-[#6B7280] hover:bg-[#F6E9D7]'
              }`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                viewMode === 'map' ? 'bg-[#C75A3A] text-white' : 'text-[#6B7280] hover:bg-[#F6E9D7]'
              }`}
            >
              <Map size={20} />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Panel */}
          {showFilters && (
            <aside className="w-full lg:w-80 flex-shrink-0">
              <FilterPanel 
                activeTypeFilter={activeTypeFilter}
                setTypeFilter={setTypeFilter}
              />
            </aside>
          )}

          {/* Property Grid */}
          <div className="flex-1">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {listings.map((property) => (
                  <ListingCard
                    key={property.id}
                    {...property}
                    onClick={() => onPropertyClick?.(property.id)}
                    onOpenLeadModal={() => setLeadModalOpen(true)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-8 h-[600px] flex items-center justify-center">
                <div className="text-center">
                  <Map size={48} className="text-[#6B7280] mx-auto mb-4" />
                  <p className="text-[#6B7280]">Map view would be integrated here</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <LeadModal isOpen={leadModalOpen} onClose={() => setLeadModalOpen(false)} />
    </div>
  );
}
