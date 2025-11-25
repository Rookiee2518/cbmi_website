import { Link } from 'react-router-dom';
import { Calendar, CreditCard, RefreshCw } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export function RenewalPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-32 px-12">
        <div className="max-w-[1440px] mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-6xl mb-6 tracking-wider">
              License Renewal
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-xl text-gray-500">
              Continue your CrystalBall journey without interruption
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#E9ECEF]" />

      {/* Renewal Options */}
      <section className="py-32 px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-3 gap-8 mb-20">
            <AnimatedSection delay={0}>
              <div className="p-12 bg-white border border-[#E9ECEF] rounded-[6px] hover:shadow-lg transition-all duration-300">
                <Calendar className="w-8 h-8 text-[#0D1B2A] mb-6 stroke-[1px]" />
                <h3 className="text-2xl mb-4">Check Expiration</h3>
                <p className="text-gray-500 mb-6">
                  View your current license status and renewal date
                </p>
                <button className="text-[#0D1B2A] hover:text-[#1B263B] transition-colors duration-300">
                  View Details →
                </button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-12 bg-white border border-[#E9ECEF] rounded-[6px] hover:shadow-lg transition-all duration-300">
                <CreditCard className="w-8 h-8 text-[#0D1B2A] mb-6 stroke-[1px]" />
                <h3 className="text-2xl mb-4">Update Billing</h3>
                <p className="text-gray-500 mb-6">
                  Manage payment methods and billing information
                </p>
                <button className="text-[#0D1B2A] hover:text-[#1B263B] transition-colors duration-300">
                  Edit Payment →
                </button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="p-12 bg-white border border-[#E9ECEF] rounded-[6px] hover:shadow-lg transition-all duration-300">
                <RefreshCw className="w-8 h-8 text-[#0D1B2A] mb-6 stroke-[1px]" />
                <h3 className="text-2xl mb-4">Auto-Renewal</h3>
                <p className="text-gray-500 mb-6">
                  Enable automatic renewal for seamless continuity
                </p>
                <button className="text-[#0D1B2A] hover:text-[#1B263B] transition-colors duration-300">
                  Enable Now →
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#E9ECEF]" />

      {/* Current License Status */}
      <section className="py-32 px-12">
        <div className="max-w-[800px] mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl text-center mb-12 tracking-wide">
              Your License Status
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white border border-[#E9ECEF] rounded-[6px] p-12">
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-6 border-b border-[#E9ECEF]">
                  <div>
                    <div className="text-gray-400 mb-1">Current Plan</div>
                    <div className="text-2xl text-[#0D1B2A]">Professional</div>
                  </div>
                  <div className="px-6 py-2 bg-green-50 text-green-700 rounded-[6px]">
                    Active
                  </div>
                </div>

                <div className="flex justify-between items-center pb-6 border-b border-[#E9ECEF]">
                  <div>
                    <div className="text-gray-400 mb-1">Renewal Date</div>
                    <div className="text-xl text-[#0D1B2A]">December 15, 2025</div>
                  </div>
                  <div className="text-gray-500">
                    38 days remaining
                  </div>
                </div>

                <div className="flex justify-between items-center pb-6 border-b border-[#E9ECEF]">
                  <div>
                    <div className="text-gray-400 mb-1">Monthly Cost</div>
                    <div className="text-xl text-[#0D1B2A]">$6,500</div>
                  </div>
                  <div className="text-gray-500">
                    Billed monthly
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-gray-400 mb-1">Auto-Renewal</div>
                    <div className="text-xl text-[#0D1B2A]">Enabled</div>
                  </div>
                  <button className="text-gray-500 hover:text-[#0D1B2A] transition-colors duration-300">
                    Disable
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#E9ECEF]" />

      {/* Renewal Actions */}
      <section className="py-32 px-12">
        <div className="max-w-[800px] mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white border border-[#E9ECEF] rounded-[6px] p-10 text-center hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl mb-4 text-[#0D1B2A]">Renew Now</h3>
                <p className="text-gray-500 mb-6">
                  Extend your license immediately
                </p>
                <button className="w-full px-6 py-3 rounded-[6px] bg-[#0D1B2A] text-white hover:bg-[#495057] transition-all duration-300">
                  Renew License
                </button>
              </div>

              <div className="bg-white border border-[#E9ECEF] rounded-[6px] p-10 text-center hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl mb-4 text-[#0D1B2A]">Upgrade Plan</h3>
                <p className="text-gray-500 mb-6">
                  Access more features and sites
                </p>
                <Link
                  to="/pricing"
                  className="block w-full px-6 py-3 rounded-[6px] bg-[#495057] text-white hover:bg-[#0D1B2A] transition-all duration-300"
                >
                  View Plans
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#E9ECEF]" />

      {/* Support Section */}
      <section className="py-24 px-12 bg-[#F8F9FA]">
        <div className="max-w-[1440px] mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl mb-6 tracking-wide">
              Need Help with Renewal?
            </h2>
            <p className="text-gray-500 mb-8">
              Our team is here to assist with any questions about your license
            </p>
            <Link
              to="/support"
              className="inline-block px-10 py-4 rounded-[6px] bg-[#0D1B2A] text-white hover:bg-[#495057] transition-all duration-300"
            >
              Contact Support
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}