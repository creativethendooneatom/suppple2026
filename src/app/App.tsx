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
import timelineBanner from '../assets/timeline-banner.jpg';
import historyBanner from '../assets/history-banner.jpg';

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
    const context = canvas.getContext('2d'); if (!context) return;
    type Node = { x: number; y: number; vx: number; vy: number; r: number; phase: number; color: string; speed?: number };
    type Pulse = { a: Node; b: Node; progress: number; duration: number };
    let width = 0; let height = 0; let frame = 0; let time = 0;
    const pointer = { x: -9999, y: -9999, active: false }; let hubs: Node[] = []; let nodes: Node[] = []; let pulses: Pulse[] = [];
    const palette = ['36,124,255', '124,92,255', '18,209,142', '34,211,238'];
    const seed = () => { hubs = Array.from({ length: 14 }, (_, i) => ({ x: .1 + Math.random() * .8, y: .1 + Math.random() * .8, vx: (Math.random() - .5) * .0006, vy: (Math.random() - .5) * .0006, r: 6 + Math.random() * 5, phase: Math.random() * Math.PI * 2, color: palette[i % palette.length] })); nodes = Array.from({ length: 200 }, (_, i) => ({ x: Math.random(), y: Math.random(), vx: (Math.random() - .5) * .0004, vy: (Math.random() - .5) * .0004, r: 1 + Math.random() * 2.2, phase: Math.random() * Math.PI * 2, speed: .3 + Math.random() * 1.2, color: palette[i % palette.length] })); };
    const resize = () => { const rect = canvas.getBoundingClientRect(); const scale = Math.min(window.devicePixelRatio, 2); width = rect.width; height = rect.height; canvas.width = width * scale; canvas.height = height * scale; context.setTransform(scale, 0, 0, scale, 0, 0); seed(); };
    const move = (event: PointerEvent) => { const rect = canvas.getBoundingClientRect(); pointer.x = event.clientX - rect.left; pointer.y = event.clientY - rect.top; pointer.active = true; };
    const leave = () => { pointer.active = false; };
    const draw = () => { context.clearRect(0, 0, width, height); time += .016; const all = [...nodes, ...hubs];
      all.forEach(n => { n.x += n.vx + Math.sin(time * .5 + n.phase) * .00008; n.y += n.vy + Math.cos(time * .4 + n.phase) * .00008; if (n.x < 0 || n.x > 1) { n.vx *= -1; n.x = Math.max(0, Math.min(1, n.x)); } if (n.y < 0 || n.y > 1) { n.vy *= -1; n.y = Math.max(0, Math.min(1, n.y)); } if (pointer.active) { const dx = pointer.x / width - n.x; const dy = pointer.y / height - n.y; const d = Math.hypot(dx, dy); if (d < .25 && d > .01) { n.vx += dx * .00003 / d; n.vy += dy * .00003 / d; } } n.vx *= .999; n.vy *= .999; });
      const line = (a: Node, b: Node, alpha: number, wide = false) => { context.beginPath(); context.moveTo(a.x * width, a.y * height); context.lineTo(b.x * width, b.y * height); const gradient = context.createLinearGradient(a.x * width, a.y * height, b.x * width, b.y * height); gradient.addColorStop(0, `rgba(${a.color},${alpha})`); gradient.addColorStop(1, `rgba(${b.color},${alpha})`); context.strokeStyle = gradient; context.lineWidth = wide ? 1.2 : .5; context.stroke(); };
      hubs.forEach((a, i) => hubs.slice(i + 1).forEach(b => { const d = Math.hypot((a.x - b.x) * width, (a.y - b.y) * height); if (d < width * .4) { line(a, b, Math.max(0, 1 - d / (width * .4)) * .18 * (.5 + Math.sin(time * 2 + i) * .5), true); if (Math.random() < .008) pulses.push({ a, b, progress: 0, duration: 1.5 + Math.random() }); } }));
      nodes.forEach((a, i) => nodes.slice(i + 1).forEach(b => { const d = Math.hypot((a.x - b.x) * width, (a.y - b.y) * height); if (d < width * .18) line(a, b, Math.max(0, 1 - d / (width * .18)) * .08, false); }));
      pulses = pulses.filter(p => { p.progress += .016 / p.duration; if (p.progress >= 1) return false; const x = (p.a.x + (p.b.x - p.a.x) * p.progress) * width; const y = (p.a.y + (p.b.y - p.a.y) * p.progress) * height; const alpha = Math.sin(p.progress * Math.PI) * .8; context.beginPath(); context.arc(x, y, 4, 0, Math.PI * 2); context.fillStyle = `rgba(${p.a.color},${alpha})`; context.fill(); return true; });
      all.forEach(n => { const x = n.x * width; const y = n.y * height; const pulse = .5 + Math.sin(time * 2 + n.phase) * .5; const radius = n.r + pulse * .8; context.beginPath(); context.arc(x, y, radius * 3, 0, Math.PI * 2); context.fillStyle = `rgba(${n.color},.06)`; context.fill(); context.beginPath(); context.arc(x, y, radius, 0, Math.PI * 2); context.fillStyle = `rgba(${n.color},.72)`; context.fill(); context.beginPath(); context.arc(x, y, Math.max(.6, radius * .3), 0, Math.PI * 2); context.fillStyle = 'rgba(255,255,255,.8)'; context.fill(); });
      frame = requestAnimationFrame(draw); };
    resize(); draw(); window.addEventListener('resize', resize); canvas.addEventListener('pointermove', move); canvas.addEventListener('pointerleave', leave); return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize); canvas.removeEventListener('pointermove', move); canvas.removeEventListener('pointerleave', leave); };
  }, []);
  return <canvas className="intelligence-network" ref={canvasRef} aria-hidden="true" />;
}

function MarketTape() {
  const markets = [['CPI — Q3', '— YES', 'up'], ['BTC > $200K', '— YES', 'down'], ['Fed Rate Sep', '— YES', 'up'], ['Oil > $90', '— YES', 'down'], ['World Cup 2026', '— YES', 'up']];
  return <div className="market-tape" aria-label="Illustrative market ticker"><div>{[...markets, ...markets].map(([name, price, direction], i) => <span key={`${name}-${i}`}><i className={direction} />{name}<b>{price}</b></span>)}</div></div>;
}

function Home() {
  return <>
    <Header />
    <main>
      <section className="hero"><IntelligenceNetwork />
        <div className="shell hero-copy"><p className="eyebrow hero-eyebrow">SUPPPLE GROUP PLC <span>·</span> LUXSE: SUPPA</p><h1>The future of global <em>prediction markets</em> starts here.</h1><p className="hero-subtitle">Intelligence. Markets. Infrastructure.</p><p>Suppple is building regulated technology and market infrastructure for what happens next.</p><div className="hero-actions"><a className="button-link" href="#platforms">Explore Predikt <span>→</span></a><a className="text-link hero-secondary" href="/investors">Investor Centre <span>→</span></a></div></div>
        <MarketTape />
      </section>

      <section className="signal-band"><div className="shell signal-grid"><div><b>1</b><span>Regulated market</span></div><div><b>13.5M+</b><span>GovChat active users</span></div><div><b>R66bn+</b><span>Annual SRD grants enabled</span></div><div><b>LuxSE</b><span>Listed · SUPPA</span></div></div></section>

      <section className="infrastructure-section"><div className="shell"><p className="eyebrow">THE INTELLIGENT INFRASTRUCTURE LAYER</p><h2>Built for markets that matter.</h2><div className="infra-grid">{[['◆', 'Prediction Markets', 'Regulated, transparent and market-integrity-first event contracts.'], ['✦', 'AI-Powered Pricing', 'Intelligence and data systems that help markets become more useful.'], ['⚖', 'Regulated & Compliant', 'Compliance and governance designed into the infrastructure from the start.'], ['⬡', 'Mobile-First Reach', 'Data-light participation designed for the devices people already use.']].map(([icon, title, copy]) => <article key={title}><i>{icon}</i><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

      <section id="platforms" className="feature-section shell">
        <div className="feature-copy"><p className="eyebrow">FEATURED PLATFORM</p><img src={prediktLogo} alt="Predikt" className="feature-logo" /><p className="powered">Predikt, powered by <strong>Ansino</strong></p><h2>Back your insight.</h2><p>Predikt is a regulated prediction market platform that enables participation in structured markets based on future events.</p><p>Developed in partnership with Ansino, a licensed South African gaming operator, Predikt introduces a new way to forecast real-world outcomes through market-based probabilities.</p><a className="text-link" href="mailto:hello@suppple.co.uk?subject=Predikt%20interest">Register interest <span>→</span></a></div>
        <ProductScreen />
      </section>

      <section className="platform-section" aria-labelledby="platform-heading"><div className="shell"><p className="eyebrow">PLATFORMS</p><h2 id="platform-heading">Built to endure.</h2><div className="platform-grid">{platforms.map(([name, title, copy, logo]) => <article className="platform-card" key={name}><img src={logo as string} alt={`${name} logo`} /><h3>{title}</h3><p>{copy}</p><a href="#platforms">Learn more <span>→</span></a></article>)}</div></div></section>

      <section id="about" className="about-section shell"><div className="about-copy"><p className="eyebrow">ABOUT</p><h2>Suppple is a public company building and operating a portfolio of intelligent platforms.</h2><p>Founded in 2024, Suppple is building technology infrastructure for the next generation of Africa&apos;s digital economy.</p><p>Listed on the Luxembourg Stock Exchange, Suppple is building long-term technology businesses with disciplined execution, responsible governance and a focus on enduring value.</p><a className="text-link" href="/our-story">Read our story <span>→</span></a></div><div className="fact-grid"><div><span>Founded</span><strong>2024</strong></div><div><span>Listed</span><strong>Luxembourg Stock Exchange<br />SUPPA</strong></div><div><span>Headquarters</span><strong>Cape Town<br />South Africa</strong></div></div></section>

      <section className="journey-section"><div className="shell"><p className="eyebrow">OUR JOURNEY</p><div className="timeline">{[['2016', 'GovChat founded', 'Founding team launches South Africa’s official citizen-engagement platform.'], ['2021', '13.5M+ active users', 'Recognised by the African Union and the United Nations.'], ['2022', 'COVID-19 SRD grants', 'Facilitates R66bn+ in annual Social Relief of Distress grants via WhatsApp.'], ['2024', 'Suppple Group Plc formed', 'Futuragate Africa and Silverstone Capital established.'], ['2025', 'Predikt launch & LuxSE listing', 'Predikt alpha goes live; Suppple Group lists under ticker SUPPA.'], ['2026+', 'Pan-African expansion', 'Planned expansion with AI-generated event contracts across new markets.']].map(([year, title, copy]) => <div key={year}><b>{year}</b><strong>{title}</strong><span>{copy}</span></div>)}</div><a className="text-link" href="/timeline">View full timeline <span>→</span></a></div></section>

      <section className="belief-section shell"><p className="eyebrow">WHAT WE BELIEVE</p><h2>Technology should create lasting value.</h2><div className="belief-copy"><p>We build for the long term, not the next product cycle.</p><p>Trust is earned through responsible governance, disciplined execution and transparency.</p><p>The strongest platforms are those people choose to return to, again and again.</p><p>We believe intelligent platforms will shape the next generation of digital businesses.</p></div></section>

      <section id="leadership" className="leadership-section"><div className="shell"><p className="eyebrow">LEADERSHIP</p><h2>Executive Leadership</h2><div className="leadership-grid">{[[goitse, 'Goitse Konopi', 'Chief Executive Officer', 'Executive Director'], [phillip, 'Phillip Chauke', 'Chief Financial Officer', 'Co-Founder'], [leaAnne, 'Lea-Anne Moses', 'Chief Operating Officer', 'Executive Leadership']].map(([image, name, role, director]) => <article key={name as string}><img src={image as string} alt={name as string} /><h3>{name}</h3><p>{role}</p><span>{director}</span></article>)}</div><a className="text-link" href="/leadership">Meet the leadership team <span>→</span></a></div></section>

      <section id="investors" className="investor-band"><div className="shell investor-content"><div><p className="eyebrow">INVESTOR RELATIONS</p><h2>Clear information for long-term shareholders.</h2></div><div className="investor-links"><a href="/investors#reports">Financial Reports <span>→</span></a><a href="/investors#announcements">Announcements <span>→</span></a><a href="/governance">Governance <span>→</span></a><a href="/investors#shareholders">Shareholder Information <span>→</span></a></div><a className="button-link" href="/investors">Visit Investor Relations <span>→</span></a></div></section>
    </main><Footer />
  </>;
}

const storyTimeline = [
  ['2016', 'GovChat founded', 'Founding team launches GovChat, South Africa’s official citizen-engagement platform.'],
  ['2021', '13.5M+ active users', 'GovChat reaches 13.5 million users; recognised by the African Union and the United Nations.'],
  ['2022', 'COVID-19 SRD grants', 'Facilitates R66bn+ in annual Social Relief of Distress grants via WhatsApp with government.'],
  ['2024', 'Suppple Group Plc formed', 'Company incorporated; Futuragate Africa and Silverstone Capital established.'],
  ['2025', 'Predikt launch & LuxSE listing', 'Predikt alpha goes live; Suppple Group lists on LuxSE under ticker SUPPA.'],
  ['2026+', 'Pan-African expansion', 'Planned expansion with AI-generated event contracts across new markets.'],
];

const leadershipProfiles = [
  [goitse, 'Goitse Konopi', 'Founder, Chief Executive Officer & Executive Director', 'Goitse Konopi is the Founder and Chief Executive Officer of Suppple Group Plc. He co-founded Suppple alongside Phillip Chauke, Lea-Anne Moses and Onalenna Mokwena, helping establish the Group’s mission of building the technology infrastructure powering Africa’s digital economy.', 'Prior to founding Suppple, Konopi co-founded GovChat, one of Africa’s largest citizen engagement platforms, connecting millions of South Africans with government services through digital channels. Earlier in his career, he worked in South Africa’s Presidency and National Planning Commission and served as a consultant to the World Bank on public sector and economic development initiatives.'],
  [phillip, 'Phillip Chauke', 'Co-Founder & Chief Financial Officer', 'Phillip Chauke is Co-Founder and Chief Financial Officer of Suppple Group Plc. He oversees the Group’s financial strategy, corporate finance, treasury, governance, financial reporting and capital management.', 'Prior to co-founding Suppple, Chauke worked in private banking at First National Bank and later led a family office, gaining experience in investment management, corporate finance and wealth advisory.'],
  [leaAnne, 'Lea-Anne Moses', 'Chief Operating Officer', 'Lea-Anne Moses is the Chief Operating Officer of Suppple Group Plc, where she oversees operational execution, organisational performance and delivery of strategic initiatives across the Group’s businesses. She was appointed Chief Operating Officer in December 2024.', 'Before joining Suppple, Moses served as Chief Executive Officer of FunDza and held senior leadership positions with Maersk, Media24 and Capitec, building extensive experience in operational leadership, organisational transformation and business growth.'],
  [undefined, 'Onalenna Mokwena', 'Co-Founder', 'Onalenna Mokwena is a Co-Founder of Suppple Group Plc and leads the Group’s technology strategy, software engineering, product development and digital infrastructure. He leads the design, development and scalability of the Company’s technology platforms.', 'Prior to joining Suppple, he served as Chief Technology Officer of Mgiba Technologies, where he led enterprise software development for the healthcare sector. He is also a founding director of The BrainChild Foundation, a non-profit focused on education and youth development.'],
];

function StoryPage({ page }: { page: 'story' | 'overview' | 'leadership' | 'board' | 'timeline' | 'history' }) {
  const pageDetails = {
    story: ['Our Story', 'Building technology that powers the world’s future markets.'],
    overview: ['Company Overview', 'A British-South African technology company building the next generation of digital infrastructure.'],
    leadership: ['Leadership', 'The team building trusted technology infrastructure for Africa’s digital economy.'],
    board: ['Board of Directors', 'Experienced oversight for durable, responsibly governed technology businesses.'],
    timeline: ['Our Timeline', 'From civic technology platform to publicly listed prediction markets infrastructure.'],
    history: ['History', 'The intellectual and market history behind Predikt.'],
  } as const;
  const [title, intro] = pageDetails[page];
  const historySections = [
    ['The Intellectual Heritage: Hayek, DARPA, Hanson, and the Birth of Idea Futures', 'Predikt did not emerge from a whiteboard exercise. It draws on seventy years of economic theory, a cancelled Pentagon research programme, and the founding team’s own experience building policy and mobile technology in Africa.'],
    ['The Knowledge Problem and the Price Solution', 'Friedrich Hayek’s central question was how society can coordinate action when knowledge is dispersed, fragmentary and often tacit. His answer was the price system: a price is the weighted sum of countless private decisions backed by action. A prediction market contract applies that insight to future events, creating a signal that no poll, panel or single statistical model can duplicate.'],
    ['DARPA and the Policy Analysis Market', 'In the early 2000s, DARPA proposed the Policy Analysis Market to aggregate difficult-to-access intelligence about geopolitical and economic events. The programme was cancelled after political controversy, but its legacy endured: markets can serve as powerful information-aggregation engines where a single institution cannot know enough.'],
    ['Robin Hanson and the Futarchy Vision', 'Economist Robin Hanson developed the ideas of “idea futures” and Futarchy: representatives set broad welfare metrics while markets reveal which policies are expected to achieve them. The architecture informs the institutional and data ambitions behind Predikt — a public utility for collective knowledge, not merely a venue for speculation.'],
    ['From Policy to Prediction', 'The founding team encountered the limits of traditional forecasting while working alongside South Africa’s National Planning Commission. Official statistics are lagged, expert elicitation can be susceptible to groupthink, and surveys carry no cost to being wrong. The problem was not a lack of data, but the absence of an incentive-aligned mechanism for surfacing what people actually believe.'],
    ['The Mobile-First Epiphany', 'Building African mobile products at scale established three enduring lessons: a phone is often the only computer a user owns; data-light products remain accessible on constrained networks; and embedded distribution beats standalone acquisition. Predikt’s messaging-native, progressive-web-app-first approach descends directly from this discipline.'],
    ['GovChat and the Limits of Non-Monetary Crowdsourcing', 'GovChat achieved scale in public feedback, but revealed predictable signal distortions: vocal minorities can dominate and users have little incentive to report accurately. The wisdom of the crowd is reliable only when the crowd has something to lose. Monetary conviction separates durable signal from noise.'],
    ['New Financial Infrastructure', 'Financial markets evolved by making qualitative uncertainty quantitative and tradeable: commodities priced seasonality, equities priced future earnings, credit priced time and default risk, and derivatives priced volatility. Event contracts extend that history to real-world outcomes — elections, policy decisions, court rulings and scientific breakthroughs — creating a continuously priced signal for uncertainty beyond financial assets.'],
  ];
  const banner = page === 'timeline' ? timelineBanner : page === 'history' ? historyBanner : undefined;
  return <><Header /><main className="information-page story-page"><div className="shell"><p className="eyebrow">SUPPPLE GROUP</p><h1>{title}</h1><p className="page-intro">{intro}</p>{banner && <div className="story-hero-image"><img src={banner} alt="" /></div>}{page === 'story' && <><section className="story-principles"><div><h2>Mission</h2><p>To build the regulated infrastructure that lets markets price real-world uncertainty as accurately and continuously as they already price financial risk — starting in Africa, and expanding wherever that infrastructure is needed.</p></div><div><h2>Vision</h2><p>A world in which the price of an event contract is treated as seriously as the price of a bond or a share — a trusted, liquid signal that governments, institutions and individuals can act on.</p></div><div><h2>Approach</h2><p>Mobile-first, data-light, and regulation-first by design — built by a team that has already shipped civic technology at national scale.</p></div></section><section className="story-copy"><h2>Where We Started</h2><p>Suppple Group’s roots sit outside financial services. Before Predikt and the LuxSE listing, the founding team spent years building and operating GovChat — South Africa’s official citizen-engagement platform — and working alongside South Africa’s National Planning Commission on long-term developmental planning.</p><h2>What We Believe</h2><p>Skin in the game reveals truth. Infrastructure should meet people where they are. Regulation is a feature, not friction. And the model should not depend on being right: Predikt earns fees on matched volume and settlement, not on taking a side.</p><h2>Where We Are Going</h2><p>The near-term roadmap is deliberately narrow: deepen liquidity and market breadth in South Africa, extend Predikt Institutional to asset managers, brokers and data partners, and progress regulatory applications into new markets.</p></section></>}{page === 'overview' && <section className="story-copy"><p>Suppple Group Plc is a British-South African technology company co-founded by Goitseone Konopi, Phillip Chauke, Onalenna Mokwena and Lea-Anne Moses — some of the team behind GovChat, one of Africa’s most consequential civic technology platforms.</p><p>GovChat, founded in 2016, secured an agreement with the South African government to serve as its official citizen-engagement and communications platform. Under the founders’ leadership, GovChat grew to over 13.5 million active users, earning endorsements from both the African Union and the United Nations.</p><p>At the height of the COVID-19 pandemic, GovChat enabled millions of South Africans to digitally apply for Social Relief of Distress grants and receive medical test results via WhatsApp. In aggregate, the platform facilitated more than R66 billion in annual SRD grants with the South African government and supported traceability of over 500 billion products through APIs developed for GS1 South Africa.</p><p>Drawing on this foundation in large-scale, mission-critical technology deployment, the founders established Suppple Group Plc in 2024. The Company holds 100% of Futuragate Africa (Pty) Ltd and Silverstone Capital (Pty) Ltd, through which all its operations are conducted. Its registered office is in the United Kingdom, operational headquarters in Cape Town, South Africa, and it is listed on the Luxembourg Stock Exchange under ticker SUPPA.</p></section>}{page === 'leadership' && <section className="profile-list">{leadershipProfiles.map(([image, name, role, summary, background]) => <article key={name}><div className="profile-heading">{image ? <img src={image as string} alt={name as string} /> : <div className="profile-placeholder" aria-hidden="true">OM</div>}<div><h2>{name}</h2><p>{role}</p></div></div><div><p>{summary}</p><p>{background}</p></div></article>)}</section>}{page === 'board' && <section className="board-grid story-board">{board.map(([image, name, role, bio]) => <article key={name as string}><img src={image as string} alt={name as string} /><h3>{name}</h3><p>{role}</p><span>{bio}</span></article>)}</section>}{page === 'timeline' && <section className="full-timeline">{storyTimeline.map(([year, heading, copy]) => <article key={year}><b>{year}</b><div><h2>{heading}</h2><p>{copy}</p></div></article>)}</section>}{page === 'history' && <section className="story-copy history-copy">{historySections.map(([heading, copy]) => <article key={heading}><h2>{heading}</h2><p>{copy}</p></article>)}</section>}</div></main><Footer /></>;
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
  if (investor) return <><Header /><main className="information-page investor-page"><div className="shell"><p className="eyebrow">SUPPPLE GROUP</p><h1>Investor Relations</h1><p className="page-intro">Information for shareholders, prospective investors and market participants.</p><section id="investment-case" className="info-section"><h2>Investment Case</h2><p>Suppple is focused on building and operating intelligent platforms with a disciplined approach to long-term value creation.</p></section><section id="reports" className="info-section"><h2>Financial Reports</h2><div className="document-grid">{reports.map(([report, type, href]) => <a href={href} target="_blank" rel="noreferrer" key={report}><span>{report}</span><small>{type} · PDF</small><b>Open PDF →</b></a>)}</div></section><section id="announcements" className="info-section"><h2>Announcements</h2><div className="information-list">{releases.map(([item, href]) => <a href={href} target="_blank" rel="noreferrer" key={item}><span>{item}</span><span>Open PDF →</span></a>)}</div></section><section id="shareholders" className="info-section"><h2>Shareholder Information</h2><p>For shareholder records, corporate calendar information, governance materials or other investor enquiries, contact the Investor Relations team.</p><a className="text-link" href="mailto:investors@suppple.co.uk">Contact Investor Relations →</a></section></div></main><Footer /></>;
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
  if (window.location.pathname.startsWith('/our-story')) return <StoryPage page="story" />;
  if (window.location.pathname.startsWith('/company-overview')) return <StoryPage page="overview" />;
  if (window.location.pathname.startsWith('/leadership')) return <StoryPage page="leadership" />;
  if (window.location.pathname.startsWith('/board-of-directors')) return <StoryPage page="board" />;
  if (window.location.pathname.startsWith('/timeline')) return <StoryPage page="timeline" />;
  if (window.location.pathname.startsWith('/history')) return <StoryPage page="history" />;
  if (window.location.pathname.startsWith('/governance')) return <InformationPage />;
  if (window.location.pathname.startsWith('/investors')) return <InformationPage investor />;
  if (window.location.pathname.startsWith('/news')) return <NewsOrCareersPage />;
  if (window.location.pathname.startsWith('/careers')) return <NewsOrCareersPage careers />;
  if (window.location.pathname.startsWith('/cookies')) return <LegalPage cookies />;
  if (window.location.pathname.startsWith('/privacy')) return <LegalPage privacy />;
  if (window.location.pathname.startsWith('/terms')) return <LegalPage />;
  return <Home />;
}
