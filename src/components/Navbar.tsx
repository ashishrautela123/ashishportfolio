import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Sun, Moon } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#171A20]/95 backdrop-blur-md border-b border-[#2D323C] shadow-lg shadow-black/10 py-3.5'
          : 'bg-[#171A20]/80 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element Brand Zone */}
        <a
          href="#"
          className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-[#F6F3EC] hover:text-[#B07A3A] transition-colors whitespace-nowrap"
        >
          {PORTFOLIO_DATA.profile.name}
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#C5CAD3]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 hover:text-[#F6F3EC] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B07A3A] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions + theme toggle */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to warm ivory light theme' : 'Switch to high-contrast dark theme'}
            title={isDark ? 'Switch to warm ivory light theme' : 'Switch to high-contrast dark theme'}
            className="p-2 text-[#C5CAD3] hover:text-[#F6F3EC] bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition-colors flex items-center justify-center cursor-pointer"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-[#C89252]" />
            ) : (
              <Moon className="w-4 h-4 text-[#B07A3A]" />
            )}
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#F6F3EC] bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition-colors whitespace-nowrap cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#B07A3A]" />
            <span>CV View</span>
          </button>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#171A20] bg-[#B07A3A] hover:bg-[#C89252] rounded-md transition-colors whitespace-nowrap shadow-sm"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-1.5">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to warm ivory light theme' : 'Switch to high-contrast dark theme'}
            className="p-1.5 text-[#C5CAD3] hover:text-[#F6F3EC] bg-white/5 border border-white/10 rounded"
            title={isDark ? 'Warm Ivory' : 'Dark Mode'}
          >
            {isDark ? <Sun className="w-3.5 h-3.5 text-[#C89252]" /> : <Moon className="w-3.5 h-3.5 text-[#B07A3A]" />}
          </button>

          <button
            onClick={onOpenResume}
            className="px-2.5 py-1.5 text-xs text-[#F6F3EC] bg-white/5 border border-white/10 rounded"
            aria-label="View Resume"
          >
            CV
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#C5CAD3] hover:text-[#F6F3EC] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#171A20] border-b border-[#2D323C] px-6 py-5 shadow-2xl">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#C5CAD3]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#B07A3A] transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Theme Switch Button Row */}
            <div className="pt-2 flex items-center justify-between text-xs text-[#B0B7C4] border-t border-[#2D323C]">
              <span>Theme: {isDark ? 'High-Contrast Dark' : 'Warm Ivory Light'}</span>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-[#F6F3EC]"
              >
                {isDark ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-[#C89252]" />
                    <span>Switch to Light</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-[#B07A3A]" />
                    <span>Switch to Dark</span>
                  </>
                )}
              </button>
            </div>

            <div className="pt-3 border-t border-[#2D323C] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-[#F6F3EC] bg-white/5 border border-white/10 rounded-md"
              >
                <FileText className="w-4 h-4 text-[#B07A3A]" />
                <span>View Full CV</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-[#171A20] bg-[#B07A3A] hover:bg-[#C89252] rounded-md transition-colors"
              >
                <span>Contact Ashish</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
