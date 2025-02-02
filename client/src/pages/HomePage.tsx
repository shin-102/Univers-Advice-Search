import { motion } from "framer-motion";
import SearchBar from "../components/SearchBar";
import Logo from '/UniversAdvice_logo.jpg'; // Direct import, no need for Avatar if just displaying image

export default function HomePage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#0e5ebd] to-[#0c3199] text-white p-4">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <img src={Logo} alt="Univers Advice" className="w-24 h-24 rounded-full shadow-lg" /> {/* Simplified */}
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-2xl"
      >
        <SearchBar />
      </motion.div>

      {/* Featured Resources Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-10 w-full max-w-3xl bg-white text-black p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-xl font-semibold mb-4 text-[#0e5ebd]">Featured Resources</h2>
        <ul className="space-y-3">
          <li className="p-3 border-b hover:bg-gray-100 transition cursor-pointer">Understanding Digital Marketing</li>
          <li className="p-3 border-b hover:bg-gray-100 transition cursor-pointer">The Future of AI in Business</li>
          <li className="p-3 border-b hover:bg-gray-100 transition cursor-pointer">How to Optimize Your SEO</li>
          <li className="p-3 hover:bg-gray-100 transition cursor-pointer">Mastering Social Media Engagement</li>
        </ul>
      </motion.div>
    </div>
  );
}