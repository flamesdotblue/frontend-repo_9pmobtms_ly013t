import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "For Doctors", href: "#for-doctors" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800/60 bg-black/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-black font-bold">
              a
            </div>
            <span className="text-white font-semibold tracking-tight">appoint'd</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-100 transition-colors"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-gray-200 hover:bg-gray-900 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#cta"
                className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black text-center"
                onClick={() => setOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
