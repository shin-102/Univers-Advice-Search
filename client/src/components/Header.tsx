import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full mb-20">
      <nav className="relative flex items-center justify-end lg:justify-between bg-gray-100 border-b border-gray-200 h-16 lg:h-20 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="hidden lg:flex lg:items-center lg:space-x-10">
          <a href="#" className="text-base font-medium text-black">Home</a>
          <a href="#" className="text-base font-medium text-black">Space</a>
          <a href="#" className="text-base font-medium text-black">Services</a>
          <a href="#" className="text-base font-medium text-black">Contact</a>
        </div>

        <div className="lg:hidden flex items-center right-2"> {/* Container for mobile buttons */}
          <button
            type="button"
            className="flex p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100 "
            onClick={toggleMobileMenu} // Toggle menu on click
            aria-label="Open mobile menu"  // Add aria-label for accessibility
          >
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:space-x-10">
          <a href="#" className="text-base font-medium text-black">Sign up</a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 border rounded-lg text-[#0e5ebd] bg-gray-100 hover:bg-gray-200 transition duration-150">
            Sign in
          </a>
        </div>
      </nav>

      {/* Mobile Menu (Conditionally Rendered) */}
      {isMobileMenuOpen && ( // Show only if isMobileMenuOpen is true
        <nav className="py-4 px-4 mx-auto sm:px-6 lg:px-8 bg-white">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Menu</p>
            <button
              type="button"
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100"
              onClick={toggleMobileMenu} // Close menu on close button click
              aria-label="Close mobile menu"  // Add aria-label for accessibility
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mt-6">
            <div className="flex flex-col space-y-2">
              <a href="#" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600">Home</a>
              <a href="#" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600">Space</a>
              <a href="#" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600">Services</a>
              <a href="#" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600">Contact</a>
            </div>

            <hr className="my-4 border-gray-200" />

            <div className="flex flex-col space-y-2">
              <a href="#" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600">Sign up</a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 border rounded-lg text-[#0e5ebd] bg-gray-100 hover:bg-gray-200 transition duration-150">
                Sign in
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}