import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="border-b border-[#E9ECEF] bg-white sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-12 py-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-[#0D1B2A] tracking-wide">
            CrystalBall
          </Link>
          
          <div className="flex items-center gap-12">
            <Link 
              to="/" 
              className={`relative pb-1 transition-colors duration-300 ${
                isActive('/') ? 'text-[#0D1B2A]' : 'text-gray-500'
              }`}
            >
              Home
              {isActive('/') && (
                <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#0D1B2A]" />
              )}
            </Link>
            
            <Link 
              to="/analytics" 
              className={`relative pb-1 transition-colors duration-300 ${
                isActive('/analytics') ? 'text-[#0D1B2A]' : 'text-gray-500'
              }`}
            >
              Data Analytics
              {isActive('/analytics') && (
                <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#0D1B2A]" />
              )}
            </Link>
            
            <Link 
              to="/pricing" 
              className={`relative pb-1 transition-colors duration-300 ${
                isActive('/pricing') ? 'text-[#0D1B2A]' : 'text-gray-500'
              }`}
            >
              Pricing
              {isActive('/pricing') && (
                <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#0D1B2A]" />
              )}
            </Link>
            
            <Link 
              to="/support" 
              className={`relative pb-1 transition-colors duration-300 ${
                isActive('/support') ? 'text-[#0D1B2A]' : 'text-gray-500'
              }`}
            >
              Support
              {isActive('/support') && (
                <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#0D1B2A]" />
              )}
            </Link>
            
            {/* Prominent CTAs */}
            <div className="flex items-center gap-3 ml-6">
              <Link 
                to="/support"
                className="px-6 py-2 rounded-[6px] bg-[#495057] text-white hover:bg-[#0D1B2A] transition-all duration-300 uppercase tracking-wider text-xs"
              >
                Contact Us
              </Link>
              
              <Link 
                to="/pricing"
                className="px-6 py-2 rounded-[6px] bg-[#007AFF] text-white hover:bg-[#0066DD] hover:shadow-lg hover:shadow-[#007AFF]/30 transition-all duration-300 uppercase tracking-wider text-xs"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}