import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { portfolio, prediktPlatformPath, type ProductId } from '../portfolio';
import { productContent } from './product-content';

function DetailsSection({ id, title, items }: {
  id: string;
  title: string;
  items: [title: string, description: string][];
}) {
  return (
    <section className="portfolio-detail" id={id} aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`}>{title}</h2>
      <dl className="portfolio-detail-grid">
        {items.map(([name, description]) => (
          <div key={name}>
            <dt>{name}</dt>
            <dd>{description}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function PortfolioDiagram({ current }: { current: ProductId }) {
  return (
    <figure className="portfolio-diagram">
      <figcaption>
        <strong>Suppple Group Plc</strong>
        <span>Parent technology group</span>
        <small>Strategy · Shared technology and infrastructure · Governance</small>
      </figcaption>
      <ul>
        {Object.values(portfolio).map(product => (
          <li key={product.path}>
            <a href={product.path} aria-current={product.path === portfolio[current].path ? 'page' : undefined}>
              <strong>{product.name}</strong>
              <span>{product.category}</span>
            </a>
          </li>
        ))}
      </ul>
    </figure>
  );
}

export function PortfolioProductPage({ productId }: { productId: ProductId }) {
  const product = portfolio[productId];
  const content = productContent[productId];
  return (
    <>
      <Header />
      <main className="portfolio-product" data-product={productId}>
        <section className="portfolio-hero" aria-labelledby="product-title">
          <div className="shell portfolio-hero-layout">
            <div>
              <p className="eyebrow portfolio-category">{product.category}</p>
              <h1 id="product-title">{product.name}</h1>
              <p className="portfolio-headline">{content.headline}</p>
              <p className="portfolio-intro">{content.intro}</p>
              <div className="portfolio-actions">
                <a className="portfolio-button" href="#product-contact">Contact Suppple</a>
                {productId === 'predikt' && <a className="portfolio-hero-link" href={prediktPlatformPath}>Explore the Predikt platform <span aria-hidden="true">→</span></a>}
              </div>
            </div>
            <figure className="portfolio-preview">
              <figcaption>
                <span>{content.preview.description}</span>
                <strong>{content.preview.title}</strong>
              </figcaption>
              <ol>
                {content.preview.steps.map(([label, status]) => (
                  <li key={label}><span>{label}</span><strong>{status}</strong></li>
                ))}
              </ol>
            </figure>
          </div>
        </section>

        <div className="portfolio-section-nav">
          <nav className="shell" aria-label={`${product.name} page sections`}>
            <a href="#product-overview">Overview</a>
            <a href="#product-architecture">Architecture</a>
            <a href="#product-capabilities">Capabilities</a>
            <a href="#product-applications">Applications</a>
            <a href="#product-deployment">Deployment</a>
            <a href="#group-portfolio">Portfolio</a>
          </nav>
        </div>

        <div className="shell">
          <section className="portfolio-detail portfolio-overview" id="product-overview" aria-labelledby="product-overview-heading">
            <h2 id="product-overview-heading">Overview</h2>
            <p>{content.overview}</p>
          </section>

          <section className="portfolio-detail" id="product-architecture" aria-labelledby="product-architecture-heading">
            <h2 id="product-architecture-heading">Product architecture</h2>
            <ol className="portfolio-architecture">
              {content.architecture.map(([title, description]) => (
                <li key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </li>
              ))}
            </ol>
          </section>

          <DetailsSection id="product-capabilities" title="Capabilities" items={content.capabilities} />
          <DetailsSection id="product-applications" title="Industry applications" items={content.applications} />

          <section className="portfolio-detail" aria-labelledby="product-customers-heading">
            <h2 id="product-customers-heading">Customer segments</h2>
            <ul className="portfolio-customers">
              {content.customers.map(customer => <li key={customer}>{customer}</li>)}
            </ul>
          </section>

          <DetailsSection id="product-commercial" title="Commercial model and distribution" items={content.commercial} />
          <DetailsSection id="product-infrastructure" title="Technology infrastructure" items={content.infrastructure} />
          <DetailsSection id="product-governance" title="Security, governance and risk" items={content.governance} />
          <DetailsSection id="product-deployment" title="Deployment" items={content.deployment} />

          <section className="portfolio-detail portfolio-relationship" id="group-portfolio" aria-labelledby="group-portfolio-heading">
            <div>
              <h2 id="group-portfolio-heading">Part of Suppple Group Plc</h2>
              <p>{content.relationship}</p>
              <a className="text-link" href="/company-overview">Corporate overview <span aria-hidden="true">→</span></a>
              <a className="text-link" href="/#portfolio">View the group portfolio <span aria-hidden="true">→</span></a>
            </div>
            <PortfolioDiagram current={productId} />
          </section>
        </div>

        <section className="portfolio-contact" id="product-contact" aria-labelledby="product-contact-heading">
          <div className="shell">
            <div>
              <h2 id="product-contact-heading">Contact Suppple</h2>
              <p>{content.contact}</p>
            </div>
            <a className="portfolio-button" href="/contact">Contact the group <span aria-hidden="true">→</span></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
