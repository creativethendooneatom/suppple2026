import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import logo from 'figma:asset/18353b9c0bd96a0dd59eeee798755a09f417174f.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Platforms', href: '#brands' },
      { label: 'Leadership', href: '#leadership' },
      { label: 'News & Media', href: '#news' },
      { label: 'Help Center', href: '#help' },
    ],
    investors: [
      { label: 'Investor Relations', href: '#investors' },
      { label: 'Financial Reports', href: '#financials' },
      { label: 'Stock Information', href: '#stock' },
      { label: 'Corporate Governance', href: '#governance' },
      { label: 'Exchange Filings', href: '#sec' },
    ],
    responsibility: [
      { label: 'Responsible Gaming', href: '#responsible' },
      { label: 'Safer Gambling', href: '#safer' },
      { label: 'Age Verification', href: '#verification' },
      { label: 'Support Resources', href: '#support' },
      { label: 'Sustainability', href: '#sustainability' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms & Conditions', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' },
      { label: 'Regulatory Information', href: '#regulatory' },
      { label: 'Licenses', href: '#licenses' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img 
                src={logo} 
                alt="Suppple Group" 
                className="h-8 w-auto object-contain brightness-0 invert max-w-[150px]" 
              />
            </div>
            <p className="text-gray-400 text-sm mb-6">
              A LUXSE listed technology company powering popular global Sports and iGaming brands.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Investors Links */}
          <div>
            <h3 className="font-bold mb-4">Investors</h3>
            <ul className="space-y-2">
              {footerLinks.investors.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsibility Links */}
          <div>
            <h3 className="font-bold mb-4">Responsibility</h3>
            <ul className="space-y-2">
              {footerLinks.responsibility.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Regulatory Information Banner */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="font-bold mb-3">Regulatory Information</h4>
            <p className="text-sm text-gray-400 mb-3">
              Suppple Group operates through multiple licensed entities across various jurisdictions. Our partners are licensed and regulated by reputable authorities including:
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>Multiple Provincial Gaming Authorities</span>
              <span>•</span>
              <span>Other International Regulators</span>
            </div>
          </div>
        </div>

        {/* Responsible Gaming Notice */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">18+</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-sm">Play Responsibly</div>
                <div className="text-xs text-gray-400">For help visit BeGambleAware.org</div>
              </div>
            </div>
            <div className="h-px md:h-8 w-full md:w-px bg-gray-800" />
            <div className="text-sm text-gray-400">
              Gambling can be addictive. Please play responsibly and only bet what you can afford to lose.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} Suppple Group. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <span>LUXSE: SUPPA</span>
              <span>•</span>
              <span>Registered in United Kingdom</span>
              <span>•</span>
              <span>Company No: 15876274</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}