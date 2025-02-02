import { useEffect, useState } from "react";
import { Search, Loader2, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import searchData from "../assets/data.json";
import Logo from '/UniversAdvice_logo.jpg';
import { filterOptions } from '../components/filterOptions';
import { motion } from 'framer-motion';

interface Result {
  id: string;
  title: string;
  description: string;
  filetype: string;
  language: string;
  thumbnail: string;
}

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [displayedResults, setDisplayedResults] = useState<Result[]>([]);
  const [resultsPerPage, setResultsPerPage] = useState(6);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("q");
    if (query) {
      setSearchQuery(query);
      search(query, filters);
    }
  }, [location.search, filters]); 

  useEffect(() => {
    updateDisplayedResults();
  }, [results, resultsPerPage]);

  const updateDisplayedResults = () => {
    setDisplayedResults(results.slice(0, resultsPerPage));
  };

  const handleLoadMore = () => {
    setResultsPerPage((prev) => prev + 6);
  };

  const search = (query: string, activeFilters: Record<string, string>) => {
    setLoading(true);

    setTimeout(() => {
      const filteredResults = searchData.filter((result: Result) => {
        const titleMatch = result.title.toLowerCase().includes(query.toLowerCase());
        const fileTypeMatch = activeFilters.FileType ? result.filetype === activeFilters.FileType : true;
        const languageMatch = activeFilters.Language ? result.language === activeFilters.Language : true;
        return titleMatch && fileTypeMatch && languageMatch;
      });
      setResults(filteredResults);
      setLoading(false);
    }, 500);
  };

  const handleSearch = () => {
    navigate(`/search?q=${searchQuery}`);
    search(searchQuery, filters);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const toggleDropdown = (filter: string) => {
    setActiveDropdown(activeDropdown === filter ? null : filter);
  };

  const selectOption = (filter: string, option: string) => {
    setFilters((prev) => ({ ...prev, [filter]: option }));
    setActiveDropdown(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0e5ebd] to-[#0c3199] text-white flex flex-col items-center p-6">
      <img
        src={Logo}
        alt="Univers Advice"
        className="w-24 h-24 mb-6 bg-white rounded-full shadow-lg cursor-pointer"
        onClick={handleLogoClick}
      />

      <div className="w-full max-w-2xl mx-auto bg-white shadow rounded-lg p-6 flex flex-col gap-4">
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
            className="p-2 bg-[#0e5ebd] text-white rounded hover:scale-110 transition duration-150"
            title="Search"
          >
            <Search size={20} />
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

      <div className="w-full max-w-3xl mt-6 space-y-4">
        {loading ? (
          <div className="flex justify-center">
            <Loader2 className="animate-spin" size={30} />
          </div>
        ) : displayedResults.length === 0 ? ( // Check displayedResults here
          <p className="text-center text-gray-300">No results found.</p>
        ) : (
          displayedResults.map((result) => ( // Map over displayedResults
            <div
              key={result.id}
              className="flex items-center bg-white text-black p-4 rounded-lg shadow-lg gap-4 animate-fade-in"
            >
              <div className="w-16 h-16 bg-gray-300 rounded-lg"></div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{result.title}</h3>
                <p className="text-sm text-gray-600">{result.description}</p>
              </div>
              <button className="p-2 bg-gray-400 rounded" title="View">
                🔗
              </button>
            </div>
          ))
        )}
      </div>

      {displayedResults.length < results.length && ( // Check displayedResults.length
        <button
          onClick={handleLoadMore}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow"
        >
          Load More
        </button>
      )}
    </div>
  );
}