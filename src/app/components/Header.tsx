import logo from '../../assets/suppple-logo-official.svg';
import { useEffect, useState } from 'react';

export function Header() {
  const lightHeader = false;
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 12);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  const links = [['Leadership', '/leadership'], ['Governance', '/governance'], ['Investors', '/investors'], ['News', '/news']];
  const productLinks = [['Predikt', '/platforms'], ['How it works', '/platforms#how-it-works'], ['Markets', '/platforms#markets'], ['Features', '/platforms#features'], ['Predikt Institutional', '/institutional']];
  const companyLinks = [['Our Story', '/our-story'], ['Overview', '/company-overview'], ['Leadership', '/leadership'], ['Board of Directors', '/board-of-directors'], ['Timeline', '/timeline'], ['History', '/history']];
  const irEmail = 'mailto:investors@suppple.co.uk?subject=Investor%20Relations%20Enquiry';
  return <header className={`site-header ${lightHeader ? 'site-header-light' : ''} ${lightHeader || isScrolled ? 'is-frosted' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}><a href="/" className="brand" aria-label="Suppple home"><img src={logo} alt="Suppple" /></a><nav aria-label="Main navigation"><div className="products-menu"><button type="button" aria-expanded={productsOpen} onClick={() => { setProductsOpen(open => !open); setCompanyOpen(false); }}>Products <span aria-hidden="true">⌄</span></button>{productsOpen && <div className="products-dropdown">{productLinks.map(([label, href], index) => <a href={href} key={label} className={index > 0 && index < 4 ? 'product-sub-link' : ''} onClick={() => setProductsOpen(false)}>{label}</a>)}</div>}</div><div className="products-menu company-menu"><button type="button" aria-expanded={companyOpen} onClick={() => { setCompanyOpen(open => !open); setProductsOpen(false); }}>Company <span aria-hidden="true">⌄</span></button>{companyOpen && <div className="products-dropdown">{companyLinks.map(([label, href]) => <a href={href} key={label} onClick={() => setCompanyOpen(false)}>{label}</a>)}</div>}</div>{links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</nav><a className="header-contact" href={irEmail}>Contact IR</a><button className="mobile-toggle" type="button" aria-label="Toggle navigation" aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen(open => !open)}>{mobileMenuOpen ? 'Close' : 'Menu'}</button>{mobileMenuOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><span className="mobile-products-label">Products</span>{productLinks.map(([label, href]) => <a href={href} key={label} onClick={() => setMobileMenuOpen(false)}>{label}</a>)}<span className="mobile-products-label">Company</span>{companyLinks.map(([label, href]) => <a href={href} key={label} onClick={() => setMobileMenuOpen(false)}>{label}</a>)}{links.map(([label, href]) => <a href={href} key={label} onClick={() => setMobileMenuOpen(false)}>{label}</a>)}<a href={irEmail}>Contact IR</a></nav>}</header>;
}
