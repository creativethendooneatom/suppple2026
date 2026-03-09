import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/18353b9c0bd96a0dd59eeee798755a09f417174f.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Platforms', href: '#brands' },
    { label: 'Technology', href: '#technology' },
    { label: 'Partnerships', href: '#partnerships' },
    { label: 'Investor Relations', href: '#investors' },
    { label: 'News & Media Center', href: '#news' },
    { label: 'Careers', href: '#careers' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white backdrop-blur-sm border-b border-gray-200 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center py-2">
              <img 
                src={logo} 
                alt="Suppple Group" 
                className="h-28 w-auto object-contain max-w-[450px]" 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors py-2 flex items-center justify-between"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}