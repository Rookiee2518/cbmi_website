import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$2,500',
      period: 'per month',
      description: 'For single-site operations',
      features: [
        'Single site access',
        'Basic surveying & stockpile',
        '2D/3D viewer',
        'Standard export formats',
        'Email support',
        '5 user seats'
      ]
    },
    {
      name: 'Professional',
      price: '$6,500',
      period: 'per month',
      description: 'For growing operations',
      features: [
        'Up to 5 sites',
        'All surveying modules',
        'AI-powered analysis',
        'Advanced measurement tools',
        'Priority support',
        '15 user seats',
        'Custom integrations',
        'Compliance reporting'
      ],
      recommended: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact sales',
      description: 'For multi-site enterprises',
      features: [
        'Unlimited sites',
        'Full platform access',
        'Dedicated AI training',
        'White-label options',
        '24/7 premium support',
        'Unlimited users',
        'Custom development',
        'SLA guarantee',
        'On-premise deployment'
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-32 px-12">
        <div className="max-w-[1440px] mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-6xl mb-6 tracking-wider">
              Transparent Pricing for Every Scale
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-xl text-gray-500">
              From single sites to enterprise fleets — pay for what you need
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <div className="inline-flex items-center gap-2 bg-[#0D1B2A]/5 border border-[#0D1B2A]/20 text-[#0D1B2A] px-6 py-3 rounded-[6px] mt-6">
              <span className="text-sm uppercase tracking-wider">7-Day Free Trial Available</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#E9ECEF]" />

      {/* Pricing Cards */}
      <section className="py-32 px-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div 
                  className={`p-12 bg-white border rounded-[8px] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative ${
                    plan.recommended 
                      ? 'border-[#0D1B2A] shadow-xl scale-105' 
                      : 'border-[#E9ECEF]'
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0D1B2A] text-white px-6 py-1 rounded-[6px]">
                      Recommended
                    </div>
                  )}

                  <h3 className="text-2xl mb-4 text-[#0D1B2A]">{plan.name}</h3>
                  <p className="text-gray-500 mb-8">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-5xl text-[#0D1B2A]">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/ {plan.period}</span>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#0D1B2A] stroke-[1px] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/demo"
                    className={`block w-full text-center px-6 py-3 rounded-[6px] transition-all duration-300 ${
                      plan.recommended
                        ? 'bg-[#0D1B2A] text-white hover:bg-[#495057]'
                        : 'bg-[#495057] text-white hover:bg-[#0D1B2A]'
                    }`}
                  >
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Start Trial'}
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#E9ECEF]" />

      {/* Additional Info */}
      <section className="py-24 px-12">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-3 gap-12">
              <div className="text-center">
                <h3 className="text-xl mb-4 text-[#0D1B2A]">No Setup Fees</h3>
                <p className="text-gray-500">
                  Get started immediately with zero upfront costs
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl mb-4 text-[#0D1B2A]">Flexible Contracts</h3>
                <p className="text-gray-500">
                  Monthly or annual billing with easy scaling
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl mb-4 text-[#0D1B2A]">14-Day Trial</h3>
                <p className="text-gray-500">
                  Test the full platform before committing
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#E9ECEF]" />

      {/* CTA Section */}
      <section className="py-24 px-12 bg-[#0D1B2A]">
        <div className="max-w-[1440px] mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl text-white mb-4 tracking-wide">
              Need a Custom Solution?
            </h2>
            <p className="text-white/80 mb-8">
              Talk to our team about enterprise pricing and custom deployments
            </p>
            <Link
              to="/demo"
              className="inline-block px-10 py-4 rounded-[6px] bg-white text-[#0D1B2A] hover:bg-[#E9ECEF] transition-all duration-300"
            >
              Contact Sales
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}