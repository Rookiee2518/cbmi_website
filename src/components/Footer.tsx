import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-[#E9ECEF] bg-white">
      <div className="max-w-[1440px] mx-auto px-12 py-12">
        <div className="flex justify-center items-center gap-8 text-gray-400">
          <Link to="/" className="hover:text-[#0D1B2A] transition-colors duration-300">
            CrystalBall
          </Link>
          <span className="text-[#E9ECEF]">|</span>
          <Link to="/pricing" className="hover:text-[#0D1B2A] transition-colors duration-300">
            Pricing
          </Link>
          <span className="text-[#E9ECEF]">|</span>
          <Link to="/support" className="hover:text-[#0D1B2A] transition-colors duration-300">
            Support
          </Link>
          <span className="text-[#E9ECEF]">|</span>
          <Link to="/renewal" className="hover:text-[#0D1B2A] transition-colors duration-300">
            Renewal
          </Link>
        </div>
        <div className="text-center text-gray-400 mt-6">
          © 2025 CrystalBall. Mining Intelligence Reimagined.
        </div>
      </div>
    </footer>
  );
}
