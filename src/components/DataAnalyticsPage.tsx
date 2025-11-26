import { Link } from 'react-router-dom';
import { Sparkles, Eye, Ruler, Upload, Download, Lock } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function DataAnalyticsPage() {
  const features = [
    {
      icon: Sparkles,
      title: 'AI Mode',
      description: 'Intelligent automation for rapid analysis and pattern recognition'
    },
    {
      icon: Eye,
      title: '2D/3D Viewer',
      description: 'Seamless visualization switching with real-time rendering'
    },
    {
      icon: Ruler,
      title: 'Measurement Tools',
      description: 'Precision distance, area, and volume calculations'
    },
    {
      icon: Upload,
      title: 'Inputs',
      description: 'Import drone data, point clouds, and survey files instantly'
    },
    {
      icon: Download,
      title: 'Export',
      description: 'Flexible output formats for CAD, GIS, and reporting tools'
    },
    {
      icon: Lock,
      title: 'Permissions',
      description: 'Granular access control for teams and stakeholders'
    }
  ];

  const testimonials = [
    {
      quote: "CrystalBall reduced our survey processing time from days to hours. The precision is exceptional.",
      author: "Sarah Chen",
      role: "Chief Surveyor, Alpine Mining"
    },
    {
      quote: "Finally, a platform that understands mining operations. The AI suggestions are remarkably accurate.",
      author: "Marcus Rodriguez",
      role: "Operations Director, Peak Resources"
    },
    {
      quote: "We've achieved 40% efficiency gains across compliance reporting alone. Game-changing.",
      author: "Elena Volkov",
      role: "Head of Engineering, Northern Minerals"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 lg:mb-6 tracking-wider">
              The Platform That Turns Drone Data Into Decisions
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-base sm:text-lg lg:text-xl text-gray-500 max-w-3xl mx-auto mb-12 lg:mb-16">
              Unified analytics for surveying, volumetrics, and compliance — powered by AI, controlled by you
            </p>
          </AnimatedSection>
          
          {/* Hero Interface Screenshot */}
          <AnimatedSection delay={0.4}>
            <div className="rounded-[8px] overflow-hidden border border-[#E9ECEF] shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1678653091742-e3c0e8ea3657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHRlcnJhaW4lMjBtb2RlbHxlbnwxfHx8fDE3NjI1MDMzMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="3D Terrain Model Analytics"
                className="w-full h-auto"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#E9ECEF]" />

      {/* Features Grid */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mb-12 lg:mb-20 tracking-wide">
              Built for Precision at Scale
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="p-8 lg:p-10 bg-white border border-[#E9ECEF] rounded-[6px] hover:shadow-lg hover:border-[#0D1B2A]/20 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-[#0D1B2A] mb-4 lg:mb-6 stroke-[1px]" />
                  <h3 className="text-xl lg:text-2xl mb-3 lg:mb-4">{feature.title}</h3>
                  <p className="text-sm lg:text-base text-gray-500">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#E9ECEF]" />

      {/* Visual Cards Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mb-12 lg:mb-20 tracking-wide">
              Intelligence You Can See
            </h2>
          </AnimatedSection>

          <div className="space-y-8 lg:space-y-12">
            <AnimatedSection>
              <div className="bg-white border border-[#E9ECEF] rounded-[8px] overflow-hidden hover:shadow-xl hover:border-[#0D1B2A]/20 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
                    <h3 className="text-2xl lg:text-3xl mb-4 lg:mb-6">Real-Time 3D Visualization</h3>
                    <p className="text-sm lg:text-base text-gray-500 mb-6">
                      Navigate complex terrain models with instant load times and smooth interaction. Switch between orthographic and perspective views seamlessly.
                    </p>
                    <div className="text-sm lg:text-base text-[#0D1B2A]">
                      Point clouds · Meshes · Contours
                    </div>
                  </div>
                  <div className="bg-gray-50 relative overflow-hidden group order-1 lg:order-2">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1676238560626-45d35b63b38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHZpc3VhbGl6YXRpb24lMjBzb2Z0d2FyZXxlbnwxfHx8fDE3NjI1MTY3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="3D Visualization"
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white border border-[#E9ECEF] rounded-[8px] overflow-hidden hover:shadow-xl hover:border-[#0D1B2A]/20 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="bg-gray-50 relative overflow-hidden group order-1">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2hhcnRzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjUxNjc1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="AI Analytics"
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 lg:p-16 flex flex-col justify-center order-2">
                    <h3 className="text-2xl lg:text-3xl mb-4 lg:mb-6">AI-Powered Analysis</h3>
                    <p className="text-sm lg:text-base text-gray-500 mb-6">
                      Let machine learning detect anomalies, suggest boundaries, and calculate volumes automatically. Review, adjust, or accept in seconds.
                    </p>
                    <div className="text-sm lg:text-base text-[#0D1B2A]">
                      Auto-detection · Smart suggestions · Version control
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-white border border-[#E9ECEF] rounded-[8px] overflow-hidden hover:shadow-xl hover:border-[#0D1B2A]/20 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
                    <h3 className="text-2xl lg:text-3xl mb-4 lg:mb-6">Enterprise Collaboration</h3>
                    <p className="text-sm lg:text-base text-gray-500 mb-6">
                      Share projects with granular permissions. Track changes, leave comments, and maintain a complete audit trail for compliance and reporting.
                    </p>
                    <div className="text-sm lg:text-base text-[#0D1B2A]">
                      Team workspaces · Activity logs · Secure sharing
                    </div>
                  </div>
                  <div className="bg-gray-50 relative overflow-hidden group order-1 lg:order-2">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRhc2hib2FyZCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjI0NjM3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Collaboration tools"
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#E9ECEF]" />

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mb-12 lg:mb-20 tracking-wide">
              Trusted by Mining Leaders
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="p-8 lg:p-10 bg-white border border-[#E9ECEF] rounded-[6px] hover:shadow-lg hover:border-[#0D1B2A]/20 transition-all duration-300">
                  <p className="text-sm lg:text-base text-gray-600 mb-6 lg:mb-8 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="text-sm lg:text-base text-[#0D1B2A] mb-1">{testimonial.author}</div>
                    <div className="text-xs lg:text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#E9ECEF]" />

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-[#0D1B2A]">
        <div className="max-w-[1440px] mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4 tracking-wide">
              Ready to Transform Your Mining Operations?
            </h2>
            <p className="text-sm lg:text-base text-white/80 mb-8">
              Start your free trial or schedule a personalized demo
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/demo"
                className="w-full sm:w-auto inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-[6px] border-2 border-white text-white hover:bg-white hover:text-[#0D1B2A] transition-all duration-300 text-center"
              >
                Start 7-Day Free Trial
              </Link>
              <Link
                to="/demo"
                className="w-full sm:w-auto inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-[6px] bg-white text-[#0D1B2A] hover:bg-[#E9ECEF] transition-all duration-300 text-center"
              >
                Request Demo
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}