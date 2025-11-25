import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
  };
  
  return (
    <header className="border-b border-[#E9ECEF] bg-white sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-12 py-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-[#0D1B2A] tracking-wide">
            CrystalBall
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
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
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0D1B2A]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 border-t border-[#E9ECEF] pt-4">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleNavClick('/')}
                className={`text-left py-2 transition-colors duration-300 ${
                  isActive('/') ? 'text-[#0D1B2A] font-medium' : 'text-gray-500'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('/analytics')}
                className={`text-left py-2 transition-colors duration-300 ${
                  isActive('/analytics') ? 'text-[#0D1B2A] font-medium' : 'text-gray-500'
                }`}
              >
                Data Analytics
              </button>
              <button
                onClick={() => handleNavClick('/pricing')}
                className={`text-left py-2 transition-colors duration-300 ${
                  isActive('/pricing') ? 'text-[#0D1B2A] font-medium' : 'text-gray-500'
                }`}
              >
                Pricing
              </button>
              <button
                onClick={() => handleNavClick('/support')}
                className={`text-left py-2 transition-colors duration-300 ${
                  isActive('/support') ? 'text-[#0D1B2A] font-medium' : 'text-gray-500'
                }`}
              >
                Support
              </button>
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[#E9ECEF]">
                <button
                  onClick={() => handleNavClick('/support')}
                  className="w-full px-6 py-3 rounded-[6px] bg-[#495057] text-white hover:bg-[#0D1B2A] transition-all duration-300 uppercase tracking-wider text-xs text-center"
                >
                  Contact Us
                </button>
                <button
                  onClick={() => handleNavClick('/pricing')}
                  className="w-full px-6 py-3 rounded-[6px] bg-[#007AFF] text-white hover:bg-[#0066DD] transition-all duration-300 uppercase tracking-wider text-xs text-center"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}