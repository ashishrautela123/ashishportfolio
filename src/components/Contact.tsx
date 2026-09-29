import { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Mail, Phone, MapPin, Copy, Check, Send, Linkedin, Github, MessageSquare, ArrowUpRight } from 'lucide-react';

export function Contact() {
  const revealRef = useScrollReveal<HTMLElement>();
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  // Form state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    roleOrCompany: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate real dispatch with quick feedback, plus construct mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus('success');

      // Also trigger mailto so user's client opens if desired
      const subject = encodeURIComponent(`QA Inquiry: ${formState.roleOrCompany || 'Opportunity'} from ${formState.name}`);
      const body = encodeURIComponent(
        `Hi Ashish,\n\nName: ${formState.name}\nEmail: ${formState.email}\nCompany/Role: ${formState.roleOrCompany}\n\nMessage:\n${formState.message}`
      );
      window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section
      id="contact"
      ref={revealRef}
      className="reveal-on-scroll py-20 md:py-28 bg-[#171A20] text-[#F6F3EC] border-b border-[#2D323C] relative overflow-hidden"
    >
      {/* Subtle warm amber radial gradient */}
      <div 
        className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#B07A3A]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Channels & Presence (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#B07A3A] uppercase">
                Initiate Dialogue
              </span>
              <h2
                className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#F6F3EC] tracking-tight leading-tight mt-2"
                style={{ textWrap: 'balance' }}
              >
                Let’s talk quality, test frameworks, and upcoming releases.
              </h2>
              <p className="text-sm md:text-base text-[#B0B7C4] mt-4 leading-relaxed font-normal">
                Currently open to Quality Analyst (Manual or Automation) and SDET. Available for remote, hybrid, or on-site opportunities in India.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-4 border-t border-[#2D323C]">
              {/* Email Item */}
              <div className="p-4 bg-[#20242B] border border-[#2D323C] rounded-lg flex items-center justify-between group hover:border-[#B07A3A]/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[#B07A3A]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#828997] block">Email Address</span>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                      className="text-xs sm:text-sm font-medium text-[#F6F3EC] hover:text-[#B07A3A] transition-colors"
                    >
                      {PORTFOLIO_DATA.profile.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PORTFOLIO_DATA.profile.email, 'email')}
                  className="p-2 text-[#9BA1AC] hover:text-[#F6F3EC] bg-white/5 hover:bg-white/10 rounded transition-colors text-xs flex items-center gap-1"
                  title="Copy email"
                >
                  {copiedType === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[11px] text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px] hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Item */}
              <div className="p-4 bg-[#20242B] border border-[#2D323C] rounded-lg flex items-center justify-between group hover:border-[#B07A3A]/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[#B07A3A]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#828997] block">Phone / WhatsApp</span>
                    <a
                      href={`tel:${PORTFOLIO_DATA.profile.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm font-medium text-[#F6F3EC] hover:text-[#B07A3A] transition-colors"
                    >
                      {PORTFOLIO_DATA.profile.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PORTFOLIO_DATA.profile.phone, 'phone')}
                  className="p-2 text-[#9BA1AC] hover:text-[#F6F3EC] bg-white/5 hover:bg-white/10 rounded transition-colors text-xs flex items-center gap-1"
                  title="Copy phone number"
                >
                  {copiedType === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[11px] text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px] hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location Item */}
              <div className="p-3.5 bg-[#20242B]/70 border border-[#2D323C] rounded-lg flex items-center gap-3 text-xs text-[#B0B7C4]">
                <MapPin className="w-4 h-4 text-[#B07A3A] shrink-0" />
                <span>Based in <strong>Delhi, India</strong> (Open to Relocation / Remote)</span>
              </div>
            </div>

            {/* Social / Professional Profiles */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 p-3 bg-[#20242B] hover:bg-[#2A2F39] border border-[#2D323C] rounded-lg text-xs font-medium text-[#F6F3EC] flex items-center justify-center gap-2 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#B07A3A]" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3 h-3 text-[#7F8694]" />
              </a>

              <a
                href={PORTFOLIO_DATA.profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 p-3 bg-[#20242B] hover:bg-[#2A2F39] border border-[#2D323C] rounded-lg text-xs font-medium text-[#F6F3EC] flex items-center justify-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4 text-[#B07A3A]" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3 h-3 text-[#7F8694]" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Hiring Manager / Recruiter Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#20242B] border border-[#2D323C] rounded-xl p-6 sm:p-8 shadow-xl">
            <div className="pb-4 border-b border-[#2D323C] mb-6">
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#F6F3EC]">
                Send an Inquiry or Interview Invite
              </h3>
              <p className="text-xs text-[#959DAA] mt-1 font-mono">
                Direct message to ashishrautelaua@gmail.com · Response within 24 hours
              </p>
            </div>

            {formStatus === 'success' ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl text-[#F6F3EC]">
                  Thank you for reaching out!
                </h4>
                <p className="text-xs sm:text-sm text-[#959DAA] max-w-md mx-auto">
                  Your message draft has been initiated. You can also reach Ashish directly at <strong className="text-[#F6F3EC]">{PORTFOLIO_DATA.profile.phone}</strong>.
                </p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="mt-4 px-4 py-2 text-xs font-medium text-[#171A20] bg-[#B07A3A] hover:bg-[#C89252] rounded-md transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#C5CAD3] mb-1.5">
                      Your Name <span className="text-[#B07A3A]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-3.5 py-2.5 bg-[#171A20] border border-[#2D323C] focus:border-[#B07A3A] focus:outline-none rounded text-xs text-[#F6F3EC] placeholder-[#575E6D] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#C5CAD3] mb-1.5">
                      Your Email <span className="text-[#B07A3A]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 bg-[#171A20] border border-[#2D323C] focus:border-[#B07A3A] focus:outline-none rounded text-xs text-[#F6F3EC] placeholder-[#575E6D] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#C5CAD3] mb-1.5">
                    Company or Role Discussed
                  </label>
                  <input
                    type="text"
                    value={formState.roleOrCompany}
                    onChange={(e) => setFormState({ ...formState, roleOrCompany: e.target.value })}
                    placeholder="e.g. Senior QA Engineer / Isourse / Shiprocket Logistics"
                    className="w-full px-3.5 py-2.5 bg-[#171A20] border border-[#2D323C] focus:border-[#B07A3A] focus:outline-none rounded text-xs text-[#F6F3EC] placeholder-[#575E6D] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#C5CAD3] mb-1.5">
                    Message or Project Brief <span className="text-[#B07A3A]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Share details on your QA requirements, interview schedule, or project scope..."
                    className="w-full px-3.5 py-2.5 bg-[#171A20] border border-[#2D323C] focus:border-[#B07A3A] focus:outline-none rounded text-xs text-[#F6F3EC] placeholder-[#575E6D] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#6A7282]">
                    Zero spam · Direct engineer inbox
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-5 py-2.5 text-xs font-semibold text-[#171A20] bg-[#B07A3A] hover:bg-[#C89252] disabled:opacity-50 rounded-md transition-colors flex items-center gap-2 shadow-sm"
                  >
                    {isSubmitting ? (
                      <span>Dispatching...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
