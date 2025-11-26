import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-[#E9ECEF] bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 text-gray-400">
          <Link to="/" className="hover:text-[#0D1B2A] transition-colors duration-300 text-sm lg:text-base">
            CrystalBall
          </Link>
          <span className="hidden lg:inline text-[#E9ECEF]">|</span>
          <Link to="/pricing" className="hover:text-[#0D1B2A] transition-colors duration-300 text-sm lg:text-base">
            Pricing
          </Link>
          <span className="hidden lg:inline text-[#E9ECEF]">|</span>
          <Link to="/support" className="hover:text-[#0D1B2A] transition-colors duration-300 text-sm lg:text-base">
            Support
          </Link>
          <span className="hidden lg:inline text-[#E9ECEF]">|</span>
          <Link to="/renewal" className="hover:text-[#0D1B2A] transition-colors duration-300 text-sm lg:text-base">
            Renewal
          </Link>
        </div>
        <div className="text-center text-gray-400 mt-6 text-xs sm:text-sm lg:text-base">
          © 2025 CrystalBall. Mining Intelligence Reimagined.
        </div>
      </div>
    </footer>
  );
}
