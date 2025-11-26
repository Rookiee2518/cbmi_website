import { useState } from 'react';
import { Mail, MessageSquare, BookOpen, FileText } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export function SupportPage() {
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [ticketData, setTicketData] = useState({
    subject: '',
    category: 'technical',
    priority: 'medium',
    description: ''
  });

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketSubmitted(true);
    setTimeout(() => {
      setTicketSubmitted(false);
      setTicketData({ subject: '', category: 'technical', priority: 'medium', description: '' });
    }, 5000);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 lg:mb-6 tracking-wider">
              We're Here to Help
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-base sm:text-lg lg:text-xl text-gray-500">
              Expert support when you need it most
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#E9ECEF]" />

      {/* Support Options */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-20">
            <AnimatedSection delay={0}>
              <div className="p-12 bg-white border border-[#E9ECEF] rounded-[6px] hover:shadow-lg transition-all duration-300">
                <Mail className="w-8 h-8 text-[#0D1B2A] mb-6 stroke-[1px]" />
                <h3 className="text-2xl mb-4">Email Support</h3>
                <p className="text-gray-500 mb-6">
                  Get detailed responses within 24 hours
                </p>
                <a 
                  href="mailto:support@crystalball.com"
                  className="text-[#0D1B2A] hover:text-[#1B263B] transition-colors duration-300"
                >
                  support@crystalball.com
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-12 bg-white border border-[#E9ECEF] rounded-[6px] hover:shadow-lg transition-all duration-300">
                <MessageSquare className="w-8 h-8 text-[#0D1B2A] mb-6 stroke-[1px]" />
                <h3 className="text-2xl mb-4">Live Chat</h3>
                <p className="text-gray-500 mb-6">
                  Instant help for quick questions
                </p>
                <button className="text-[#0D1B2A] hover:text-[#1B263B] transition-colors duration-300">
                  Start Chat →
                </button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="p-12 bg-white border border-[#E9ECEF] rounded-[6px] hover:shadow-lg transition-all duration-300">
                <BookOpen className="w-8 h-8 text-[#0D1B2A] mb-6 stroke-[1px]" />
                <h3 className="text-2xl mb-4">Documentation</h3>
                <p className="text-gray-500 mb-6">
                  Comprehensive guides and tutorials
                </p>
                <button className="text-[#0D1B2A] hover:text-[#1B263B] transition-colors duration-300">
                  Browse Docs →
                </button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="p-12 bg-white border border-[#E9ECEF] rounded-[6px] hover:shadow-lg transition-all duration-300">
                <FileText className="w-8 h-8 text-[#0D1B2A] mb-6 stroke-[1px]" />
                <h3 className="text-2xl mb-4">Knowledge Base</h3>
                <p className="text-gray-500 mb-6">
                  Common issues and solutions
                </p>
                <button className="text-[#0D1B2A] hover:text-[#1B263B] transition-colors duration-300">
                  Search Articles →
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#E9ECEF]" />

      {/* Ticket Form */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[800px] mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mb-8 lg:mb-12 tracking-wide">
              Raise a Support Ticket
            </h2>
          </AnimatedSection>

          {!ticketSubmitted ? (
            <AnimatedSection delay={0.2}>
              <form onSubmit={handleSubmitTicket} className="bg-white border border-[#E9ECEF] rounded-[6px] p-12">
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-600 mb-2">Subject</label>
                    <input
                      type="text"
                      required
                      value={ticketData.subject}
                      onChange={(e) => setTicketData({ ...ticketData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-[#E9ECEF] rounded-[6px] focus:outline-none focus:border-[#0D1B2A] transition-colors duration-300"
                      placeholder="Brief description of your issue"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-600 mb-2">Category</label>
                      <select
                        value={ticketData.category}
                        onChange={(e) => setTicketData({ ...ticketData, category: e.target.value })}
                        className="w-full px-4 py-3 border border-[#E9ECEF] rounded-[6px] focus:outline-none focus:border-[#0D1B2A] transition-colors duration-300"
                      >
                        <option value="technical">Technical Issue</option>
                        <option value="billing">Billing Question</option>
                        <option value="feature">Feature Request</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-600 mb-2">Priority</label>
                      <select
                        value={ticketData.priority}
                        onChange={(e) => setTicketData({ ...ticketData, priority: e.target.value })}
                        className="w-full px-4 py-3 border border-[#E9ECEF] rounded-[6px] focus:outline-none focus:border-[#0D1B2A] transition-colors duration-300"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-600 mb-2">Description</label>
                    <textarea
                      required
                      rows={6}
                      value={ticketData.description}
                      onChange={(e) => setTicketData({ ...ticketData, description: e.target.value })}
                      className="w-full px-4 py-3 border border-[#E9ECEF] rounded-[6px] focus:outline-none focus:border-[#0D1B2A] transition-colors duration-300 resize-none"
                      placeholder="Please provide as much detail as possible..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-10 py-4 rounded-[6px] bg-[#0D1B2A] text-white hover:bg-[#495057] transition-all duration-300"
                  >
                    Submit Ticket
                  </button>
                </div>
              </form>
            </AnimatedSection>
          ) : (
            <AnimatedSection>
              <div className="bg-white border border-[#0D1B2A] rounded-[6px] p-12 text-center">
                <div className="w-16 h-16 bg-[#0D1B2A] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white stroke-[1px]" />
                </div>
                <h3 className="text-2xl mb-4 text-[#0D1B2A]">Ticket Submitted</h3>
                <p className="text-gray-500 mb-6">
                  We've received your request and will respond within 24 hours.
                </p>
                <p className="text-gray-400">
                  Ticket ID: #CB-{Math.floor(Math.random() * 10000)}
                </p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#E9ECEF]" />

      {/* Support Hours */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <div className="bg-white border border-[#E9ECEF] rounded-[6px] p-8 lg:p-12 text-center">
              <h3 className="text-xl lg:text-2xl mb-6 text-[#0D1B2A]">Support Hours</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div>
                  <div className="text-gray-400 mb-2">Email & Tickets</div>
                  <div className="text-[#0D1B2A]">24/7 Response</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-2">Live Chat</div>
                  <div className="text-[#0D1B2A]">Mon-Fri, 8am-6pm EST</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-2">Phone Support</div>
                  <div className="text-[#0D1B2A]">Enterprise Only</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}