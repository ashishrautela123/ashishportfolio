import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenResume?: () => void;
}

export function Footer({ onOpenResume: _onOpenResume }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171A20] text-[#9BA1AC] py-8 border-t border-[#2D323C]">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C93A0]">
        <p>© {new Date().getFullYear()} Ashish Rautela. All rights reserved.</p>

        <button
          onClick={scrollToTop}
          className="p-2 px-3 rounded bg-white/5 hover:bg-white/10 text-[#C5CAD3] hover:text-[#F6F3EC] transition-colors text-xs flex items-center gap-1.5 cursor-pointer"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
