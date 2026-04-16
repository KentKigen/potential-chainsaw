import { Button } from './Button';

interface FilterPanelProps {
  activeTypeFilter: 'all' | 'property' | 'land';
  setTypeFilter: (type: 'all' | 'property' | 'land') => void;
}

export function FilterPanel({ activeTypeFilter, setTypeFilter }: FilterPanelProps) {
  return (
    <div className="bg-white rounded-xl p-6 sticky top-28">
      <h3 className="text-xl font-bold text-[#0B2545] mb-6">Filters</h3>

      <div className="space-y-6">
        {/* New Segmented Control for Property/Land */}
        <div>
          <label className="block text-[#0B2545] font-medium mb-3">Category</label>
          <div className="flex bg-[#F6E9D7] p-1 rounded-lg">
            <button
              onClick={() => setTypeFilter('all')}
              className={`flex-1 py-1 px-2 text-sm font-medium rounded-md transition-colors ${activeTypeFilter === 'all' ? 'bg-white text-[#0B2545] shadow-sm' : 'text-[#6B7280]'}`}
            >
              All
            </button>
            <button
              onClick={() => setTypeFilter('property')}
              className={`flex-1 py-1 px-2 text-sm font-medium rounded-md transition-colors ${activeTypeFilter === 'property' ? 'bg-white text-[#0B2545] shadow-sm' : 'text-[#6B7280]'}`}
            >
              Properties
            </button>
            <button
              onClick={() => setTypeFilter('land')}
              className={`flex-1 py-1 px-2 text-sm font-medium rounded-md transition-colors ${activeTypeFilter === 'land' ? 'bg-white text-[#0B2545] shadow-sm' : 'text-[#6B7280]'}`}
            >
              Land
            </button>
          </div>
        </div>

        {/* Existing Property Type checkboxes (only if 'all' or 'property') */}
        {activeTypeFilter !== 'land' && (
          <div>
            <label className="block text-[#0B2545] font-medium mb-3">Property Type</label>
            <div className="space-y-2">
              {['House', 'Apartment', 'Townhouse', 'Villa'].map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-[#C75A3A] focus:ring-[#C75A3A]" />
                  <span className="text-[#6B7280]">{type}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Price Range */}
        <div>
          <label className="block text-[#0B2545] font-medium mb-3">Price Range (KES)</label>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              placeholder="Min"
              className="px-3 py-2 bg-[#F6E9D7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C75A3A]"
            />
            <input
              type="number"
              placeholder="Max"
              className="px-3 py-2 bg-[#F6E9D7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C75A3A]"
            />
          </div>
        </div>

        {activeTypeFilter !== 'land' && (
          <>
            {/* Bedrooms */}
            <div>
              <label className="block text-[#0B2545] font-medium mb-3">Bedrooms</label>
              <div className="grid grid-cols-4 gap-2">
                {['1', '2', '3', '4+'].map((num) => (
                  <button
                    key={num}
                    className="px-3 py-2 bg-[#F6E9D7] hover:bg-[#C75A3A] hover:text-white rounded-lg transition-colors text-[#0B2545]"
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Bathrooms */}
            <div>
              <label className="block text-[#0B2545] font-medium mb-3">Bathrooms</label>
              <div className="grid grid-cols-4 gap-2">
                {['1', '2', '3', '4+'].map((num) => (
                  <button
                    key={num}
                    className="px-3 py-2 bg-[#F6E9D7] hover:bg-[#C75A3A] hover:text-white rounded-lg transition-colors text-[#0B2545]"
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        <Button variant="primary" className="w-full">Apply Filters</Button>
      </div>
    </div>
  );
}
