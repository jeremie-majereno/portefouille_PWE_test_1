interface FilterBarProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export default function FilterBar({ activeFilter, setActiveFilter }: FilterBarProps) {
  const filters = ['Tous', 'UI/UX', 'Web', 'Mobile', 'Branding'];

  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === filter
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
