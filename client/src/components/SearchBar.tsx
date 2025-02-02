import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { filterOptions } from '../components/filterOptions';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState(""); // Stores the current text entered
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); 
  const [filters, setFilters] = useState<Record<string, string>>({}); 
  const navigate = useNavigate();

  const toggleDropdown = (filter: string) => {
    setActiveDropdown(activeDropdown === filter ? null : filter);
  }; // Keeps track of which filter dropdown is currently open (if any)

  const selectOption = (filter: string, option: string) => {
    setFilters((prev) => ({ ...prev, [filter]: option }));
    setActiveDropdown(null);
  }; // Stores currently selected filter values

  const handleSearch = () => {
    if (!searchQuery.trim()) return;

    const queryParams = new URLSearchParams({ q: searchQuery, ...filters }).toString(); // creates the URL with the search query and filters 
    navigate(`/search?${queryParams}`);
  };

  return (
    <div className="flex flex-col gap-4 p-6 bg-white shadow rounded-lg max-w-xl mx-auto">
      <div className="relative flex items-center border rounded-lg p-2 bg-gray-100 shadow-md">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow border-none bg-transparent outline-none px-2 text-[#0e5ebd]"
        />
        <button
          onClick={handleSearch}
          className="p-2 hover:scale-110 transition duration-150"
          title="search"
        >
          <Search size={20} color="#0e5ebd" />
        </button>
      </div>

      <div className="flex gap-4 text-[#0e5ebd]">
        {Object.keys(filterOptions).map((filter) => (
          <div key={filter} className="relative">
            <button
              onClick={() => toggleDropdown(filter)}
              className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-150"
            >
              {filters[filter] || filter} <ChevronDown size={16} />
            </button>
            {activeDropdown === filter && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg z-10"
              >
                {filterOptions[filter as keyof typeof filterOptions].map((option) => (
                  <button
                    key={option}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    onClick={() => selectOption(filter, option)}
                  >
                    {option}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}