import logo from '../../assets/suppple-logo-official.svg';
import { useEffect, useState } from 'react';

export function Header() {
  const lightHeader = window.location.pathname !== '/';
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 12);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  const links = [['Products', '/#platforms'], ['Investor Centre', '/investors'], ['Company', '/our-story'], ['Newsroom', '/news'], ['Careers', '/careers']];
  const irEmail = 'mailto:investors@suppple.co.uk?subject=Investor%20Relations%20Enquiry';
  return <header className={`site-header ${lightHeader ? 'site-header-light' : ''} ${lightHeader || isScrolled ? 'is-frosted' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}><a href="/" className="brand" aria-label="Suppple home"><img src={logo} alt="Suppple" /><span>GROUP PLC <small>LuxSE: SUPPA</small></span></a><nav aria-label="Main navigation">{links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</nav><div className="nav-market"><i />SUPPA <b>£ —</b></div><a className="header-contact" href={irEmail}>Contact IR <span>→</span></a><button className="mobile-toggle" type="button" aria-label="Toggle navigation" aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen(open => !open)}>{mobileMenuOpen ? 'Close' : 'Menu'}</button>{mobileMenuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href]) => <a href={href} key={label} onClick={() => setMobileMenuOpen(false)}>{label}</a>)}<a href={irEmail}>Contact IR</a></nav>}</header>;
}
