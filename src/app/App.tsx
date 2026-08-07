import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { useEffect, useRef } from 'react';
import prediktLogo from '../assets/predikt-logo-official.png';
import makerrrLogo from '../assets/a43e4904f855e7ec564fd9161424505e0b04623c.png';
import grioLogo from '../assets/096d4fc46974c6f935b21bbacbca7e805f856062.png';
import goitse from '../assets/1991109401c94ed7cf0b3f3064a5c1c6ea670ff4.png';
import phillip from '../assets/cc0b9900d37fc28609838772433a1e58f0663428.png';
import leaAnne from '../assets/22ae7a4b8de1afffe70b6ec1a19f0332a3710d5c.png';
import pali from '../assets/fcdb6b7157f45fb37ab58704980f77b0ae54a4bb.png';
import lwazi from '../assets/82a33862dcddcab8b3e9ac7960dc24d6577d122d.png';
import randall from '../assets/9736a521df3514cbe5baa43be8950201687822f1.png';
import marina from '../assets/e2632e7dfe34966fabf1db2227321ed1111381bd.png';

const platforms = [
  ['Predikt', 'Prediction markets.', 'A regulated platform for forecasting future events through market participation.', prediktLogo],
  ['Makerrr', 'AI-native creation.', 'Helping people create digital products through natural language.', makerrrLogo],
  ['GRIO', 'Intelligent learning.', 'An AI-powered learning platform designed for education and workforce development.', grioLogo],
];

const board = [
  [goitse, 'Goitse Konopi', 'Executive Director', 'Brings product and engineering vision to the board, with a track record in civic-tech, public infrastructure and digital platforms.'],
  [phillip, 'Phillip Chauke', 'Executive Director & Chief Financial Officer', 'Brings extensive financial expertise and supported Suppple through its LUXSE listing.'],
  [pali, 'Pali Lehohla', 'Independent Non-Executive Chairman', 'South Africa’s longest-serving Statistician-General and a global voice in public policy, data and governance.'],
  [lwazi, 'Lwazi Manzi', 'Independent Non-Executive Director', 'Leads public health and strategy at continental scale and is a physician by training.'],
  [randall, 'Randall Carolissen', 'Independent Non-Executive Director', 'Expertise spans public finance, governance and digital transformation.'],
  [marina, 'Marina Short', 'Independent Non-Executive Director', 'Former Chair of South Africa’s Credit Bureau Association and former CEO of the Consumer Profile Bureau.'],
];

function ProductScreen() {
  return <div className="predikt-screen" aria-label="Predikt product interface preview">
    <div className="product-top"><span>Predikt</span><span>Markets &nbsp;&nbsp; Watchlist &nbsp;&nbsp; Portfolio</span><span>Sign in</span></div>
    <div className="product-body">
      <div><p className="product-kicker">FEATURED MARKET</p><h3>Which party will win the South African Presidential Election 2029?</h3><div className="market-rows"><span>ANC <b>42%</b></span><span>Democratic Alliance <b>28%</b></span><span>Economic Freedom Fighters <b>15%</b></span></div></div>
      <div className="chart"><i /><i /><i /><i /><i /><i /><i /><i /></div>
    </div>
  </div>;
}

function IntelligenceNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    let width = 0; let height = 0; let frame = 0;
    const pointer = { x: -1000, y: -1000 };
    type Particle = { x: number; y: number; vx: number; vy: number; size: number; hue: number; depth: number };
    let particles: Particle[] = [];
    const resize = () => { const rect = canvas.getBoundingClientRect(); const scale = Math.min(window.devicePixelRatio, 2); width = rect.width; height = rect.height; canvas.width = width * scale; canvas.height = height * scale; context.setTransform(scale, 0, 0, scale, 0, 0); const count = Math.min(180, Math.max(80, Math.round(width / 8))); particles = Array.from({ length: count }, () => ({ x: Math.random() * width, y: Math.random() * height, vx: (Math.random() - .5) * .18, vy: (Math.random() - .5) * .18, size: Math.random() * 1.8 + .35, hue: Math.random() > .72 ? 270 : 215, depth: Math.random() * .8 + .2 })); };
    const move = (event: PointerEvent) => { const rect = canvas.getBoundingClientRect(); pointer.x = event.clientX - rect.left; pointer.y = event.clientY - rect.top; };
    const leave = () => { pointer.x = -1000; pointer.y = -1000; };
    const draw = () => { context.clearRect(0, 0, width, height); const nebula = context.createRadialGradient(width * .78, height * .47, 20, width * .78, height * .47, Math.max(width, height) * .58); nebula.addColorStop(0, 'rgba(82, 83, 255, .18)'); nebula.addColorStop(.45, 'rgba(59, 55, 184, .07)'); nebula.addColorStop(1, 'rgba(7, 22, 46, 0)'); context.fillStyle = nebula; context.fillRect(0, 0, width, height);
      particles.forEach((p, index) => { const dx = p.x - pointer.x; const dy = p.y - pointer.y; const distance = Math.hypot(dx, dy); if (distance < 180) { const force = (180 - distance) / 180; p.vx += (dx / (distance || 1)) * force * .018; p.vy += (dy / (distance || 1)) * force * .018; } p.x += p.vx * p.depth; p.y += p.vy * p.depth; p.vx *= .994; p.vy *= .994; if (p.x < -10) p.x = width + 10; if (p.x > width + 10) p.x = -10; if (p.y < -10) p.y = height + 10; if (p.y > height + 10) p.y = -10; context.beginPath(); context.fillStyle = `hsla(${p.hue}, 100%, 75%, ${.25 + p.depth * .65})`; context.arc(p.x, p.y, p.size * p.depth, 0, Math.PI * 2); context.fill(); if (index % 3 === 0) { context.beginPath(); context.fillStyle = `hsla(${p.hue}, 100%, 78%, .08)`; context.arc(p.x, p.y, p.size * 6, 0, Math.PI * 2); context.fill(); } });
      for (let i = 0; i < particles.length; i += 3) { const a = particles[i]; for (let j = i + 3; j < particles.length; j += 7) { const b = particles[j]; const distance = Math.hypot(a.x - b.x, a.y - b.y); if (distance < 105) { context.beginPath(); context.strokeStyle = `rgba(102, 116, 255, ${.11 * (1 - distance / 105)})`; context.lineWidth = .55; context.moveTo(a.x, a.y); context.lineTo(b.x, b.y); context.stroke(); } } } frame = requestAnimationFrame(draw); };
    resize(); draw(); window.addEventListener('resize', resize); canvas.addEventListener('pointermove', move); canvas.addEventListener('pointerleave', leave); return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize); canvas.removeEventListener('pointermove', move); canvas.removeEventListener('pointerleave', leave); };
  }, []);
  return <canvas className="intelligence-network" ref={canvasRef} aria-hidden="true" />;
}

function Home() {
  return <>
    <Header />
    <main>
      <section className="hero"><IntelligenceNetwork />
        <div className="shell hero-copy"><h1>Building intelligent platforms.</h1><p className="hero-subtitle">For what’s next.</p><p>Suppple is a public company building and operating a portfolio of intelligent platforms.</p></div>
      </section>

      <section id="platforms" className="feature-section shell">
        <div className="feature-copy"><p className="eyebrow">FEATURED PLATFORM</p><img src={prediktLogo} alt="Predikt" className="feature-logo" /><p className="powered">Predikt, powered by <strong>Ansino</strong></p><h2>Back your insight.</h2><p>Predikt is a regulated prediction market platform that enables participation in structured markets based on future events.</p><p>Developed in partnership with Ansino, a licensed South African gaming operator, Predikt introduces a new way to forecast real-world outcomes through market-based probabilities.</p><a className="text-link" href="mailto:hello@suppple.co.uk?subject=Predikt%20interest">Register interest <span>→</span></a></div>
        <ProductScreen />
      </section>

      <section className="platform-section" aria-labelledby="platform-heading"><div className="shell"><p className="eyebrow">PLATFORMS</p><h2 id="platform-heading">Built to endure.</h2><div className="platform-grid">{platforms.map(([name, title, copy, logo]) => <article className="platform-card" key={name}><img src={logo as string} alt={`${name} logo`} /><h3>{title}</h3><p>{copy}</p><a href="#platforms">Learn more <span>→</span></a></article>)}</div></div></section>

      <section id="about" className="about-section shell"><div className="about-copy"><p className="eyebrow">ABOUT</p><h2>Suppple is a public company building and operating a portfolio of intelligent platforms.</h2><p>Founded in 2022, Suppple is building a portfolio of intelligent platforms spanning prediction markets, AI-native creation and intelligent learning.</p><p>Listed on the Luxembourg Stock Exchange in 2024, Suppple is building long-term technology businesses with disciplined execution, responsible governance and a focus on enduring value.</p></div><div className="fact-grid"><div><span>Founded</span><strong>2022</strong></div><div><span>Listed</span><strong>Luxembourg Stock Exchange<br />2024</strong></div><div><span>Portfolio</span><strong>Predikt<br />Makerrr<br />GRIO</strong></div></div></section>

      <section className="journey-section"><div className="shell"><p className="eyebrow">OUR JOURNEY</p><div className="timeline">{[['2022', 'Suppple founded.'], ['2024', 'Listed on the Luxembourg Stock Exchange.'], ['2025', 'Predikt announced in partnership with Ansino.'], ['2026', 'Predikt launches.'], ['Next', 'Continued expansion of the platform portfolio.']].map(([year, copy]) => <div key={year}><b>{year}</b><span>{copy}</span></div>)}</div></div></section>

      <section className="belief-section shell"><p className="eyebrow">WHAT WE BELIEVE</p><h2>Technology should create lasting value.</h2><div className="belief-copy"><p>We build for the long term, not the next product cycle.</p><p>Trust is earned through responsible governance, disciplined execution and transparency.</p><p>The strongest platforms are those people choose to return to, again and again.</p><p>We believe intelligent platforms will shape the next generation of digital businesses.</p></div></section>

      <section id="leadership" className="leadership-section"><div className="shell"><p className="eyebrow">LEADERSHIP</p><h2>Executive Leadership</h2><div className="leadership-grid">{[[goitse, 'Goitse Konopi', 'Chief Executive Officer', 'Executive Director'], [phillip, 'Phillip Chauke', 'Chief Financial Officer', 'Executive Director'], [leaAnne, 'Lea-Anne Moses', 'Chief Strategy Officer', 'Executive Director']].map(([image, name, role, director]) => <article key={name as string}><img src={image as string} alt={name as string} /><h3>{name}</h3><p>{role}</p><span>{director}</span></article>)}</div><a className="text-link" href="/governance">View Board &amp; Governance <span>→</span></a></div></section>

      <section id="investors" className="investor-band"><div className="shell investor-content"><div><p className="eyebrow">INVESTOR RELATIONS</p><h2>Clear information for long-term shareholders.</h2></div><div className="investor-links"><a href="/investors#reports">Financial Reports <span>→</span></a><a href="/investors#announcements">Announcements <span>→</span></a><a href="/governance">Governance <span>→</span></a><a href="/investors#shareholders">Shareholder Information <span>→</span></a></div><a className="button-link" href="/investors">Visit Investor Relations <span>→</span></a></div></section>
    </main><Footer />
  </>;
}

function InformationPage({ investor = false }: { investor?: boolean }) {
  const reports = [
    ['Prospectus (14 November 2025)', 'Prospectus', '/documents/suppple-prospectus.pdf'],
    ['Quarterly Financial Report (30 September 2024)', 'Quarterly report', '/documents/quarterly-report-2024-09-30.pdf'],
    ['Quarterly Financial Report (30 June 2024)', 'Quarterly report', '/documents/quarterly-report-2024-06-30.pdf'],
    ['Quarterly Financial Report (31 March 2024)', 'Quarterly report', '/documents/quarterly-report-2024-03-31.pdf'],
  ];
  const releases = [
    ['Press Release (10 April 2025)', '/documents/press-release-2025-04-10.pdf'],
    ['Press Release (9 April 2025)', '/documents/press-release-2025-04-09.pdf'],
    ['Press Release (4 June 2024)', '/documents/press-release-2024-06-04.pdf'],
  ];
  if (investor) return <><Header /><main className="information-page"><div className="shell"><p className="eyebrow">SUPPPLE GROUP</p><h1>Investor Relations</h1><p className="page-intro">Information for shareholders, prospective investors and market participants.</p><section id="investment-case" className="info-section"><h2>Investment Case</h2><p>Suppple is focused on building and operating intelligent platforms with a disciplined approach to long-term value creation.</p></section><section id="reports" className="info-section"><h2>Financial Reports</h2><div className="document-grid">{reports.map(([report, type, href]) => <a href={href} target="_blank" rel="noreferrer" key={report}><span>{report}</span><small>{type} · PDF</small><b>Open PDF →</b></a>)}</div></section><section id="announcements" className="info-section"><h2>Announcements</h2><div className="information-list">{releases.map(([item, href]) => <a href={href} target="_blank" rel="noreferrer" key={item}><span>{item}</span><span>Open PDF →</span></a>)}</div></section><section id="shareholders" className="info-section"><h2>Shareholder Information</h2><p>For shareholder records, corporate calendar information, governance materials or other investor enquiries, contact the Investor Relations team.</p><a className="text-link" href="mailto:investors@suppple.co.uk">Contact Investor Relations →</a></section></div></main><Footer /></>;
  return <><Header /><main className="information-page"><div className="shell"><p className="eyebrow">SUPPPLE GROUP</p><h1>Governance</h1><p className="page-intro">A disciplined approach to oversight, accountability and long-term value creation.</p><section id="board-of-directors" className="info-section"><h2>Board of Directors</h2><div className="board-grid">{board.map(([image, name, role, bio]) => <article key={name as string}><img src={image as string} alt={name as string} /><h3>{name}</h3><p>{role}</p><span>{bio}</span></article>)}</div></section><section id="board-committees" className="info-section"><h2>Board Committees</h2><div className="document-grid">{[['Audit Committee', 'Financial reporting, internal controls and audit processes.'], ['Nomination & Governance', 'Board succession and corporate governance practices.'], ['Risk & ESG Committee', 'Enterprise risk and environmental, social and governance matters.'], ['Compensation Committee', 'Executive compensation and incentive programmes.']].map(([name, copy]) => <div key={name}><span>{name}</span><small>{copy}</small></div>)}</div></section><section id="policies" className="info-section"><h2>Corporate Governance &amp; Policies</h2><div className="information-list">{['Corporate Governance Code', 'Board Charter', 'Committee Charters', 'Director Independence Standards', 'Regulatory Compliance Policy', 'Data Protection & Privacy Policy'].map(item => <a href="mailto:compliance@suppple.co.uk" key={item}><span>{item}</span><span>Request →</span></a>)}</div></section></div></main><Footer /></>;
}

function NewsOrCareersPage({ careers = false }: { careers?: boolean }) {
  const news = ['Suppple Group PLC and Ansino Form Strategic Alliance', 'Suppple Group and Ansino Team Up to Launch Prediction Market Platform in South Africa', 'GovChat Founders List Tech Company Suppple on Luxembourg Stock Exchange', 'Launch of GRIO Multimodal AI Model'];
  const roles = ['Senior AI/ML Engineer', 'Head of Product – AI Platforms', 'Senior Full-Stack Engineer (React/Node.js)', 'Data Scientist – Predictive Analytics', 'Senior DevOps Engineer', 'UX/UI Designer – AI Products', 'Compliance Manager – Gaming & Betting', 'Performance Marketing Specialist', 'Senior Security Engineer'];
  const title = careers ? 'Careers' : 'News';
  const items = careers ? roles : news;
  return <><Header /><main className="information-page"><div className="shell"><p className="eyebrow">SUPPPLE GROUP</p><h1>{title}</h1><p className="page-intro">{careers ? 'Join a team building intelligent platforms for what’s next.' : 'Company news, market announcements and product updates.'}</p><section className="info-section"><h2>{careers ? 'Open Positions' : 'Latest News'}</h2><div className="information-list">{items.map((item, index) => <a key={item} href={careers ? `mailto:hr@suppple.co.uk?subject=${encodeURIComponent(`Application for ${item}`)}` : 'mailto:communications@suppple.co.uk'}><span><small>{careers ? ['Technology', 'Product', 'Technology', 'Data & Analytics', 'Technology', 'Product', 'Compliance & Legal', 'Marketing', 'Technology'][index] : ['December 22, 2025', 'December 19, 2025', 'March 15, 2024', 'February 5, 2025'][index]}</small><br />{item}</span><span>{careers ? 'Apply →' : 'Read →'}</span></a>)}</div></section></div></main><Footer /></>;
}

function LegalPage({ privacy = false, cookies = false }: { privacy?: boolean; cookies?: boolean }) {
  const terms = [
    ['Agreement to Terms', 'By accessing or using Suppple services, websites or applications, you agree to these terms. Do not use the services if you do not agree.'],
    ['Services', 'Suppple provides software, AI infrastructure, connectivity, cloud, API and related professional services. Services may be changed, suspended or discontinued.'],
    ['Eligibility and Accounts', 'Users must be at least 18 and legally able to agree to these terms. Account holders must provide accurate information, protect their credentials and report unauthorised access.'],
    ['User Content and Acceptable Use', 'Users retain rights in their content while granting the limited licence needed to operate and improve the services. Services must not be used unlawfully, to infringe rights, distribute harmful code, harvest data or interfere with operations.'],
    ['AI and Intellectual Property', 'AI outputs may be incomplete or inaccurate and must be independently reviewed. The services and their content are protected intellectual property and may be used only as permitted by law and these terms.'],
    ['Payments, Termination and Disclaimers', 'Paid services must be paid for when due. Access may be suspended or terminated where permitted. Services are provided on an as-available basis, subject to applicable law.'],
    ['Liability, Indemnity and Law', 'Liability is limited to the extent permitted by law. Users are responsible for claims arising from breach or misuse. These terms are governed by the laws of the United Kingdom, with disputes handled through LCIA arbitration.'],
    ['Changes and Contact', 'Suppple may update these terms and will communicate material changes. Questions can be sent to info@suppple.co.uk.'],
  ];
  const policy = [
    ['Introduction', 'Suppple is committed to handling personal information lawfully, fairly and transparently, in line with GDPR and POPIA.'],
    ['Information We Collect', 'This may include contact and professional details, account preferences, communications, payment information, device and browser data, usage information, analytics and cookies.'],
    ['How We Use Information', 'Information supports service delivery, billing, security, customer support, communications, product improvement, research, fraud prevention and legal compliance.'],
    ['International Transfers', 'Suppple may use hosted infrastructure and international processors. Appropriate safeguards include contractual protections, encryption, access controls and applicable data-residency measures.'],
    ['Your Rights', 'Subject to applicable law, users may request access, correction, deletion, restriction, portability or objection to processing. Requests may be sent to info@suppple.co.uk.'],
    ['Information Officer and Contact', 'For privacy questions and data-subject requests, contact the Information Officer at info@suppple.co.uk. A response is generally provided within the relevant statutory timeframe.'],
    ['Complaints', 'If a privacy concern is not resolved, a complaint may be made to the relevant supervisory authority, including the UK ICO or the Information Regulator South Africa.'],
  ];
  const cookiePolicy = [
    ['What Are Cookies?', 'Cookies are small data files placed on a device when a website is visited. First-party cookies are set by Suppple; third-party cookies may enable analytics, advertising or interactive features.'],
    ['Essential Cookies', 'Essential cookies support session management, security and consent preferences. They are required for the site to function and cannot be disabled.'],
    ['Performance, Functionality and Advertising Cookies', 'Analytics cookies help understand site use. Functionality cookies remember settings such as language and theme. Targeting cookies may be used to measure advertising and show relevant content.'],
    ['Other Tracking Technologies', 'The policy also covers web beacons, local storage, tracking URLs and software development kits where these are used in services.'],
    ['How Cookies Are Used', 'Cookies may support authentication, security, performance measurement, personalisation, research, diagnostics and advertising effectiveness.'],
    ['Your Choices', 'You can control cookies through browser settings, the consent tool on this site, third-party opt-out tools and industry opt-out sites. Disabling some cookies can limit site functionality.'],
    ['Cross-Border Transfers', 'Cookie data may be processed in countries including the United Kingdom, United States and South Africa, with appropriate safeguards for international transfers.'],
    ['Changes and Contact', 'The policy may be updated as technology, law or operations change. Cookie and privacy questions can be sent to info@suppple.co.uk.'],
  ];
  const sections = cookies ? cookiePolicy : privacy ? policy : terms;
  return <><Header /><main className="information-page legal-page"><div className="shell"><p className="eyebrow">LEGAL</p><h1>{privacy ? 'Privacy & Data Protection' : 'Terms & Conditions'}</h1><p className="page-intro">{privacy ? 'How we collect, use and safeguard personal information.' : 'The terms that govern access to and use of Suppple services.'}</p><p className="legal-updated">{privacy ? 'Current policy basis: 5 January 2026.' : 'Current terms basis: 15 July 2025.'}</p><div className="legal-content">{sections.map(([heading, copy]) => <section key={heading}><h2>{heading}</h2><p>{copy}</p></section>)}</div><p className="legal-review">This locally hosted policy rendition should be reviewed and approved by Suppple&apos;s legal team before publication.</p></div></main><Footer /></>;
}

export default function App() {
  if (window.location.pathname.startsWith('/governance')) return <InformationPage />;
  if (window.location.pathname.startsWith('/investors')) return <InformationPage investor />;
  if (window.location.pathname.startsWith('/news')) return <NewsOrCareersPage />;
  if (window.location.pathname.startsWith('/careers')) return <NewsOrCareersPage careers />;
  if (window.location.pathname.startsWith('/cookies')) return <LegalPage cookies />;
  if (window.location.pathname.startsWith('/privacy')) return <LegalPage privacy />;
  if (window.location.pathname.startsWith('/terms')) return <LegalPage />;
  return <Home />;
}
