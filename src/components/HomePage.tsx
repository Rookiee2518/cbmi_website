import { Link } from 'react-router-dom';
import { Layers, Brain, Shield, ScanLine, Package, Activity, FileCheck } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 lg:mb-6 tracking-wider">
              Mining Intelligence — Reimagined for Precision
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-base sm:text-lg lg:text-xl text-gray-500 mb-8 lg:mb-12">
              From drone data to decision in minutes
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/demo"
                className="w-full sm:w-auto inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-[6px] border-2 border-[#0D1B2A] text-[#0D1B2A] hover:bg-[#0D1B2A] hover:text-white transition-all duration-300 text-center"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="w-full sm:w-auto inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-[6px] bg-[#0D1B2A] text-white hover:bg-[#495057] transition-all duration-300 text-center"
              >
                Request Demo
              </Link>
            </div>
          </AnimatedSection>
          
          {/* Hero Image */}
          <AnimatedSection delay={0.6}>
            <div className="mt-12 sm:mt-16 lg:mt-20 rounded-[8px] overflow-hidden border border-[#E9ECEF] shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600266455941-4255e53bc308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBhZXJpYWwlMjBkcm9uZXxlbnwxfHx8fDE3NjI1MzE5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Aerial drone view of mining operations"
                className="w-full h-auto"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#E9ECEF]" />

      {/* Three Cards Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatedSection delay={0}>
              <div className="p-8 lg:p-12 bg-white border border-[#E9ECEF] rounded-[6px] hover:shadow-lg hover:border-[#0D1B2A]/20 transition-all duration-300 group">
                <Layers className="w-8 h-8 text-[#0D1B2A] mb-4 lg:mb-6 stroke-[1px]" />
                <h3 className="text-xl lg:text-2xl mb-3 lg:mb-4">Unified Platform</h3>
                <p className="text-sm lg:text-base text-gray-500">
                  All surveying, monitoring, and compliance tools in one intelligent workspace
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-8 lg:p-12 bg-white border border-[#E9ECEF] rounded-[6px] hover:shadow-lg hover:border-[#0D1B2A]/20 transition-all duration-300 group">
                <Brain className="w-8 h-8 text-[#0D1B2A] mb-4 lg:mb-6 stroke-[1px]" />
                <h3 className="text-xl lg:text-2xl mb-3 lg:mb-4">AI + Manual</h3>
                <p className="text-sm lg:text-base text-gray-500">
                  Let AI handle the heavy lifting, retain full control when precision matters
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="p-8 lg:p-12 bg-white border border-[#E9ECEF] rounded-[6px] hover:shadow-lg hover:border-[#0D1B2A]/20 transition-all duration-300 group">
                <Shield className="w-8 h-8 text-[#0D1B2A] mb-4 lg:mb-6 stroke-[1px]" />
                <h3 className="text-xl lg:text-2xl mb-3 lg:mb-4">Enterprise Ready</h3>
                <p className="text-sm lg:text-base text-gray-500">
                  Secure, scalable, and built for teams that demand reliability
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#E9ECEF]" />

      {/* Modules Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mb-12 lg:mb-20 tracking-wide">
              Four Modules. One Intelligence.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            <AnimatedSection delay={0}>
              <div className="bg-white border border-[#E9ECEF] rounded-[8px] overflow-hidden hover:shadow-xl hover:border-[#0D1B2A]/20 transition-all duration-300 group">
                <div className="p-6 lg:p-10">
                  <ScanLine className="w-8 h-8 text-[#0D1B2A] mb-4 stroke-[1px]" />
                  <h3 className="text-xl lg:text-2xl mb-3">Surveying</h3>
                  <p className="text-sm lg:text-base text-gray-500 mb-6">
                    Turn aerial data into precise terrain models with millimeter accuracy
                  </p>
                </div>
                <div className="relative overflow-hidden group">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1709489662983-3674d790b224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwcGl0JTIwbWluZXxlbnwxfHx8fDE3NjI1MzE5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Surveying open pit mine"
                    className="w-full h-48 sm:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white border border-[#E9ECEF] rounded-[8px] overflow-hidden hover:shadow-xl hover:border-[#0D1B2A]/20 transition-all duration-300 group">
                <div className="p-6 lg:p-10">
                  <Package className="w-8 h-8 text-[#0D1B2A] mb-4 stroke-[1px]" />
                  <h3 className="text-xl lg:text-2xl mb-3">Stockpile</h3>
                  <p className="text-sm lg:text-base text-gray-500 mb-6">
                    Automated volume calculations with audit trails and version control
                  </p>
                </div>
                <div className="relative overflow-hidden group">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1686081590531-b32bf668fbd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBzdG9ja3BpbGUlMjB0ZXJyYWlufGVufDF8fHx8MTc2MjUzMTkyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Mining stockpile terrain"
                    className="w-full h-48 sm:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-white border border-[#E9ECEF] rounded-[8px] overflow-hidden hover:shadow-xl hover:border-[#0D1B2A]/20 transition-all duration-300 group">
                <div className="p-6 lg:p-10">
                  <Activity className="w-8 h-8 text-[#0D1B2A] mb-4 stroke-[1px]" />
                  <h3 className="text-xl lg:text-2xl mb-3">Monitoring</h3>
                  <p className="text-sm lg:text-base text-gray-500 mb-6">
                    Track changes over time with intelligent diff detection
                  </p>
                </div>
                <div className="relative overflow-hidden group">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1670875329379-de986110c8ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjUzMTkyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Industrial monitoring dashboard"
                    className="w-full h-48 sm:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="bg-white border border-[#E9ECEF] rounded-[8px] overflow-hidden hover:shadow-xl hover:border-[#0D1B2A]/20 transition-all duration-300 group">
                <div className="p-6 lg:p-10">
                  <FileCheck className="w-8 h-8 text-[#0D1B2A] mb-4 stroke-[1px]" />
                  <h3 className="text-xl lg:text-2xl mb-3">Compliance</h3>
                  <p className="text-sm lg:text-base text-gray-500 mb-6">
                    Automated reporting for environmental and regulatory requirements
                  </p>
                </div>
                <div className="relative overflow-hidden group">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1655036387197-566206c80980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjB0ZWNobm9sb2d5JTIwZGF0YXxlbnwxfHx8fDE3NjI1MzE5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Mining technology data analysis"
                    className="w-full h-48 sm:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#E9ECEF]" />

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-[#0D1B2A]">
        <div className="max-w-[1440px] mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-6 lg:mb-8 tracking-wide">
              See It in Action
            </h2>
            <Link
              to="/demo"
              className="inline-block w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-[6px] bg-white text-[#0D1B2A] hover:bg-[#E9ECEF] transition-all duration-300 text-center"
            >
              Request Demo
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}