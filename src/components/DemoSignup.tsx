import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

type Step = 'form' | 'confirmation' | 'trial' | 'thankyou';

export function DemoSignup() {
  const [step, setStep] = useState<Step>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirmation');
  };

  const handleConfirm = () => {
    setStep('trial');
  };

  const handleStartTrial = () => {
    setStep('thankyou');
  };

  return (
    <div className="bg-white min-h-[80vh] py-32 px-12">
      <div className="max-w-[600px] mx-auto">
        <AnimatePresence mode="wait">
          {step === 'form' && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-5xl text-center mb-8 tracking-wider">
                Request a Demo
              </h1>
              <p className="text-center text-gray-500 mb-12">
                Experience CrystalBall's intelligence firsthand
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-600 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-[#E9ECEF] rounded-[6px] focus:outline-none focus:border-[#0D1B2A] transition-colors duration-300"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label className="block text-gray-600 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-[#E9ECEF] rounded-[6px] focus:outline-none focus:border-[#0D1B2A] transition-colors duration-300"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-600 mb-2">Company Name</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-[#E9ECEF] rounded-[6px] focus:outline-none focus:border-[#0D1B2A] transition-colors duration-300"
                    placeholder="Mining Corp"
                  />
                </div>

                <div>
                  <label className="block text-gray-600 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-[#E9ECEF] rounded-[6px] focus:outline-none focus:border-[#0D1B2A] transition-colors duration-300"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-10 py-4 rounded-[6px] bg-[#0D1B2A] text-white hover:bg-[#495057] transition-all duration-300 mt-8"
                >
                  Continue
                </button>
              </form>
            </motion.div>
          )}

          {step === 'confirmation' && (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <h1 className="text-5xl mb-8 tracking-wider">
                Confirm Your Details
              </h1>
              <p className="text-gray-500 mb-12">
                Please review your information before proceeding
              </p>

              <div className="bg-white border border-[#E9ECEF] rounded-[6px] p-10 mb-12 text-left">
                <div className="space-y-4">
                  <div>
                    <div className="text-gray-400 mb-1">Name</div>
                    <div className="text-[#0D1B2A]">{formData.name}</div>
                  </div>
                  <div className="border-t border-[#E9ECEF] pt-4">
                    <div className="text-gray-400 mb-1">Email</div>
                    <div className="text-[#0D1B2A]">{formData.email}</div>
                  </div>
                  <div className="border-t border-[#E9ECEF] pt-4">
                    <div className="text-gray-400 mb-1">Company</div>
                    <div className="text-[#0D1B2A]">{formData.company}</div>
                  </div>
                  <div className="border-t border-[#E9ECEF] pt-4">
                    <div className="text-gray-400 mb-1">Phone</div>
                    <div className="text-[#0D1B2A]">{formData.phone}</div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleConfirm}
                className="w-full px-10 py-4 rounded-[6px] bg-[#0D1B2A] text-white hover:bg-[#495057] transition-all duration-300"
              >
                Confirm & Continue
              </button>
            </motion.div>
          )}

          {step === 'trial' && (
            <motion.div
              key="trial"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <h1 className="text-5xl mb-8 tracking-wider">
                Start Your Trial
              </h1>
              <p className="text-gray-500 mb-12">
                Get instant access to CrystalBall for 14 days
              </p>

              <div className="bg-white border border-[#E9ECEF] rounded-[6px] p-12 mb-12">
                <h3 className="text-2xl mb-8 text-[#0D1B2A]">Trial Includes:</h3>
                <div className="space-y-6 text-left">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#0D1B2A] stroke-[1px] flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-[#0D1B2A] mb-1">Full Platform Access</div>
                      <div className="text-gray-500">All modules and features unlocked</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#0D1B2A] stroke-[1px] flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-[#0D1B2A] mb-1">Dedicated Support</div>
                      <div className="text-gray-500">Direct line to our technical team</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#0D1B2A] stroke-[1px] flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-[#0D1B2A] mb-1">Training Session</div>
                      <div className="text-gray-500">One-on-one onboarding with specialist</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#0D1B2A] stroke-[1px] flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-[#0D1B2A] mb-1">No Credit Card Required</div>
                      <div className="text-gray-500">Free trial, no strings attached</div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleStartTrial}
                className="w-full px-10 py-4 rounded-[6px] bg-[#0D1B2A] text-white hover:bg-[#495057] transition-all duration-300"
              >
                Start Trial Now
              </button>
            </motion.div>
          )}

          {step === 'thankyou' && (
            <motion.div
              key="thankyou"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mb-8"
              >
                <CheckCircle2 className="w-20 h-20 text-[#0D1B2A] stroke-[1px] mx-auto" />
              </motion.div>

              <h1 className="text-5xl mb-6 tracking-wider">
                You're All Set
              </h1>
              <p className="text-xl text-gray-500 mb-12 max-w-md mx-auto">
                Check your email for login credentials and next steps. Our team will reach out within 24 hours.
              </p>

              <div className="bg-white border border-[#E9ECEF] rounded-[6px] p-10 mb-12">
                <h3 className="text-xl mb-4 text-[#0D1B2A]">What Happens Next?</h3>
                <div className="space-y-4 text-gray-500">
                  <p>1. You'll receive an email with your trial credentials</p>
                  <p>2. Our team will schedule your onboarding session</p>
                  <p>3. Start exploring CrystalBall immediately</p>
                </div>
              </div>

              <a
                href="/"
                className="inline-block px-10 py-4 rounded-[6px] bg-[#0D1B2A] text-white hover:bg-[#495057] transition-all duration-300"
              >
                Return to Home
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}