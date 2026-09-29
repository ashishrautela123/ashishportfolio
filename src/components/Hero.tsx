import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowDown, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { renderFormattedText } from '../utils/formatText';
import portraitImg from '../assets/images/ashish_rautela.png';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative bg-[#171A20] text-[#F6F3EC] pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden border-b border-[#2D323C]">
      {/* Subtle warm amber radial gradient glow */}
      <div 
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#B07A3A]/10 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Editorial & Info (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Kicker */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 text-xs md:text-sm text-[#B07A3A] font-medium tracking-wide uppercase">
              <span>{PORTFOLIO_DATA.profile.role}</span>
              <span aria-hidden="true" className="text-[#646A76]">·</span>
              <span className="text-[#C5CAD3]">{PORTFOLIO_DATA.profile.subtitle}</span>
              <span aria-hidden="true" className="text-[#646A76]">·</span>
              <span className="text-[#9BA1AC] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 inline text-[#B07A3A]" />
                Delhi, India
              </span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium text-[#F6F3EC] tracking-tight leading-[1.12] mt-4"
              style={{ textWrap: 'balance' }}
            >
              Defending quality at every boundary, from UI flows to REST APIs.
            </motion.h1>

            {/* Sub-paragraph / positioning */}
            <motion.p
              variants={itemVariants}
              className="text-[#B9BFCB] text-base md:text-lg leading-relaxed mt-5 max-w-2xl font-normal"
            >
              {renderFormattedText(PORTFOLIO_DATA.profile.positioning, "text-[#F6F3EC] font-semibold")}
            </motion.p>

            {/* Credibility Stats Bar */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 mt-7 border-y border-[#2D323C]"
            >
              {PORTFOLIO_DATA.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <div className="font-serif text-2xl md:text-3xl font-semibold text-[#F6F3EC] font-mono-tabular">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-[#C5CAD3] mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-[#7F8694] mt-0.5 leading-tight">
                    {stat.description}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTAs and quick contact */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3.5 mt-8"
            >
              <a
                href="#projects"
                className="px-5 py-3 text-sm font-semibold text-[#171A20] bg-[#B07A3A] hover:bg-[#C89252] rounded-md transition-colors shadow-sm inline-flex items-center gap-2"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-4 py-3 text-sm font-medium text-[#F6F3EC] bg-white/5 hover:bg-white/10 border border-[#2D323C] rounded-md transition-colors inline-flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#B07A3A]" />
                <span>View Full CV</span>
              </button>

              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="px-4 py-3 text-sm font-medium text-[#C5CAD3] hover:text-[#F6F3EC] hover:bg-white/5 rounded-md transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#B07A3A]" />
                <span>{PORTFOLIO_DATA.profile.email}</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Portrait Photo & Trust Card (5 cols on desktop) */}
          <motion.div
            variants={photoVariants}
            className="lg:col-span-5 flex flex-col items-center lg:items-end"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              {/* Image Frame with Warm Amber Accent Border */}
              <div className="relative rounded-xl overflow-hidden bg-[#20242B] border border-[#2D323C] shadow-2xl p-1.5 group">
                <div className="overflow-hidden rounded-lg aspect-square relative bg-[#1E232B]">
                  <img
                    src={portraitImg}
                    alt="Ashish Rautela — Quality Analyst"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback in case of media loading anomaly
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171A20]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-[#F6F3EC] bg-[#171A20]/85 backdrop-blur-md px-3 py-2 rounded border border-white/10">
                    <span className="font-serif font-medium">{PORTFOLIO_DATA.profile.name}</span>
                    <span className="text-[#B07A3A] font-mono text-[11px]">QA · Manual & Automation</span>
                  </div>
                </div>
              </div>

              {/* Status and quick contact strip underneath */}
              <div className="mt-4 p-3 bg-[#20242B]/80 backdrop-blur border border-[#2D323C] rounded-lg flex items-center justify-between text-xs text-[#C5CAD3]">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Active in Agile Sprints</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${PORTFOLIO_DATA.profile.phone.replace(/\s+/g, '')}`}
                    className="text-[#9BA1AC] hover:text-[#B07A3A] transition-colors flex items-center gap-1"
                    title="Call Ashish"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{PORTFOLIO_DATA.profile.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
