import type { ProductId } from '../portfolio';

type Detail = [title: string, description: string];

type ProductContent = {
  headline: string;
  intro: string;
  overview: string;
  architecture: [Detail, Detail, Detail, Detail];
  capabilities: Detail[];
  applications: Detail[];
  customers: string[];
  commercial: Detail[];
  infrastructure: Detail[];
  governance: Detail[];
  deployment: Detail[];
  relationship: string;
  contact: string;
  preview: {
    title: string;
    description: string;
    steps: Detail[];
  };
};

export const productContent: Record<ProductId, ProductContent> = {
  predikt: {
    headline: 'A market-based view of what happens next.',
    intro: 'Predikt brings event contracts, trading and market intelligence into one platform. Participants express views on defined outcomes, and market prices provide a continuously updated signal of collective expectations.',
    overview: 'Predikt turns questions about future events into structured markets with published outcomes, closing times and resolution criteria. Participants can discover markets, follow prices and manage positions. Operators can configure markets, controls and reporting for their jurisdiction.',
    architecture: [
      ['Market definition', 'Define the event, outcome set, authoritative sources, eligibility rules and closing conditions.'],
      ['Participation and execution', 'Connect account and portfolio interfaces to order submission, matching and transaction processing.'],
      ['Pricing, liquidity and data', 'Maintain price history, implied probabilities and order-book data. Configure liquidity arrangements and reporting.'],
      ['Resolution and controls', 'Review outcome evidence, settle contracts, handle disputes and apply market and operator controls.'],
    ],
    capabilities: [
      ['Market creation and discovery', 'Create, categorise and review event contracts with clearly defined YES/NO outcomes, authoritative sources and rules for suspension, cancellation or correction.'],
      ['Trading and execution', 'Support order submission, matching and execution, live price updates, trade history, position management and configurable trading limits.'],
      ['Pricing and market intelligence', 'A YES contract trading at 65 cents can signal an implied probability near 65%. Contract terms, fees, liquidity and bid–ask spreads affect how to interpret that price.'],
      ['Order books and liquidity', 'Support market makers, operator-led liquidity and external liquidity integrations where permitted.'],
      ['Resolution and disputes', 'Use published evidence sources to verify outcomes and manage settlement, corrections and dispute review.'],
    ],
    applications: [
      ['Sports', 'Markets around defined fixtures, tournaments and sporting outcomes.'],
      ['Politics and public affairs', 'Markets around objectively resolvable elections or policy milestones where permitted.'],
      ['Economics and business', 'Markets around scheduled releases, macroeconomic indicators and verifiable business events.'],
      ['Technology and culture', 'Markets around product launches, milestones and cultural events with clear resolution criteria.'],
    ],
    customers: ['Market participants', 'Licensed local operators', 'Telecommunications and payment partners', 'Institutional researchers and media'],
    commercial: [
      ['Operator licensing and white-label deployments', 'Offer prediction-market infrastructure to authorised operators, with licensing or revenue sharing under agreed terms.'],
      ['Transaction and platform fees', 'Support transaction and operating fees where permitted by applicable rules and commercial agreements.'],
      ['Distribution and market data', 'Work with payment and telecommunications partners on distribution. Offer aggregated market data to institutions where permitted.'],
    ],
    infrastructure: [
      ['Exchange services', 'Market catalogue, event records, order processing, price feeds, settlement and market-status management.'],
      ['Identity and payments', 'Account verification, permissions and limits, with approved identity and payment integrations where required.'],
      ['Data and operator tools', 'Market telemetry, activity records, portfolio views and country-specific operator administration and reporting.'],
    ],
    governance: [
      ['Market integrity', 'Publish market definitions and resolution sources, monitor activity and provide controls for suspensions, corrections and disputes.'],
      ['Participant protection', 'Apply eligibility checks, limits, customer information, monitoring and support appropriate to each market.'],
      ['Jurisdiction and responsibilities', 'Assess gaming, financial services, derivatives, advertising, consumer protection and data rules locally. Assign responsibilities to the technology provider, licensed operator and distribution partner.'],
    ],
    deployment: [
      ['Local operating model', 'Assess legal and licensing requirements by country, identify an operating partner, and configure permitted market categories, payments, reporting and controls before launch.'],
      ['South Africa and planned expansion', 'Predikt’s South African operating model is based on its partnership with licensed operator Ansino. Licensing in Malawi and Tanzania is in progress. Other markets are assessed individually.'],
    ],
    relationship: 'Predikt is Suppple Group Plc’s event-driven market infrastructure platform. It can draw on the group’s software engineering, AI, data and identity capabilities to support its own operating model.',
    contact: 'Discuss market infrastructure, operator partnerships, distribution or institutional market data with Suppple.',
    preview: {
      title: 'Event contracts',
      description: 'Illustrative market view',
      steps: [
        ['Will inflation exceed 3% this quarter?', 'YES 65c'],
        ['Market close', 'Before data release'],
        ['Resolution source', 'Official release'],
      ],
    },
  },
  grio: {
    headline: 'Connect people, information and workflows with AI.',
    intro: 'GRIO is a multimodal AI platform for working with text, voice, images and documents. It is designed to connect organisational knowledge and approved tools to everyday workflows.',
    overview: 'GRIO is designed to interpret inputs, retrieve information from authorised sources and coordinate AI models and tools for defined tasks. Organisations can configure experiences such as knowledge assistants, document processing and guided service workflows.',
    architecture: [
      ['Experience layer', 'Offer text, voice, image and document interfaces across web, mobile and embedded channels.'],
      ['Multimodal processing and orchestration', 'Process speech, images and documents, then route tasks to suitable models and approved tools.'],
      ['Knowledge and data', 'Index approved content and retrieve relevant passages with source permissions and attribution where available.'],
      ['Integration and governance', 'Connect enterprise systems and model providers with privacy, monitoring, permissions and output controls.'],
    ],
    capabilities: [
      ['Multimodal interaction', 'Support text conversations, voice input, image interpretation and document ingestion. Extract, summarise and generate content using approved sources.'],
      ['Model orchestration', 'Select and route requests by task, manage context and prompts, and configure inference fallbacks, usage limits and cost monitoring.'],
      ['Enterprise knowledge retrieval', 'Use retrieval-augmented generation to search indexed policies, documents and enterprise data. Apply source permissions, refresh and version content, and cite supporting material where available.'],
      ['Workflow assistance', 'Connect AI experiences to approved tools, APIs and data sources for guided, multi-step workflows, with escalation to a person where needed.'],
    ],
    applications: [
      ['Government and education', 'Potential uses include student support, academic administration, staff assistants, policy search, discovery of education materials and public information services.'],
      ['Department of Higher Education and Training (DHET)', 'Suppple’s initial engagement with DHET provides context for exploring higher education use cases. Deployment scope and status depend on the specific engagement.'],
      ['Enterprise and financial services', 'Help staff find approved procedures, interpret documents and prepare responses, with appropriate review and controls.'],
      ['Customer operations', 'Support guided enquiries and service workflows across channels with clear escalation paths.'],
    ],
    customers: ['Education institutions', 'Public-sector teams', 'Enterprise knowledge and operations teams', 'Service providers and integration partners'],
    commercial: [
      ['Enterprise and institutional licensing', 'Offer subscriptions or institutional licences based on workflows, users and deployment needs.'],
      ['Usage and API access', 'Support usage-based AI services and integration licensing for organisations embedding GRIO capabilities.'],
      ['Dedicated implementation', 'Provide discovery, knowledge preparation, custom integrations, dedicated deployments and ongoing support.'],
    ],
    infrastructure: [
      ['AI model and processing services', 'Model-provider interfaces, task routing and pipelines for supported audio, image, text and document inputs.'],
      ['Knowledge infrastructure', 'Document ingestion, semantic search, embeddings, versioned indexes and access-controlled connections to enterprise data.'],
      ['Enterprise integration and monitoring', 'APIs and connectors for approved systems, with logging, observability and usage monitoring.'],
    ],
    governance: [
      ['Data access and privacy', 'Set permissions, permitted data sources, retention, residency and model-provider handling for each deployment.'],
      ['Human accountability', 'Define review and escalation for uncertain or consequential outputs and keep staff accountable for final decisions.'],
      ['AI quality and oversight', 'Evaluate task performance, monitor outputs and explain to users when results rely on model-generated content.'],
    ],
    deployment: [
      ['Scope and pilot', 'Choose a defined workflow, approve its information sources, configure roles and test model outputs with the team that owns the process.'],
      ['Integrate and scale', 'Connect approved systems and channels after validation, then monitor outputs, costs and source freshness as usage grows.'],
    ],
    relationship: 'GRIO brings multimodal AI and intelligent interaction to Suppple Group Plc. It can support other group platforms with document intelligence, content analysis, knowledge retrieval and automated assistance.',
    contact: 'Discuss institutional AI, enterprise knowledge or a GRIO implementation with Suppple.',
    preview: {
      title: 'Institutional knowledge assistant',
      description: 'Illustrative retrieval workflow',
      steps: [
        ['Staff enquiry', 'Voice input'],
        ['Approved documents', 'Policy search'],
        ['Draft response', 'Sources attached'],
      ],
    },
  },
  makerrr: {
    headline: 'An AI-native environment for the full development cycle.',
    intro: 'Makerrr is designed to bring repository intelligence, coding agents, editing, execution and verification into a single environment under developer control.',
    overview: 'Makerrr is an AI-native development environment in development. Its intended workflow covers planning, implementation, debugging, testing and maintenance, with review and approval as developers move from a request to a proposed change.',
    architecture: [
      ['Developer workspace and Composer', 'Bring editing, project navigation, task plans, diffs and coordinated multi-file changes into one workspace.'],
      ['Repository intelligence and agents', 'Index project context and dependencies, decompose work, and coordinate bounded development tasks.'],
      ['Execution and verification', 'Run approved commands, builds and tests in local or isolated managed environments, with debugging and source-control support.'],
      ['Model and compute control plane', 'Configure providers, credentials, model choices, compute quotas, permissions and usage budgets.'],
    ],
    capabilities: [
      ['Repository-aware development', 'Explore files, project structure and dependencies. Generate, explain and refactor code using relevant repository context and conventions.'],
      ['Coding agents with approvals', 'Agents can inspect the repository, plan a change, identify affected files, execute approved work, run diagnostics and present a diff for developer review.'],
      ['Composer and terminal', 'Coordinate changes across files, run approved build and test commands, interpret errors, debug issues and work with Git.'],
      ['Bring your own key (BYOK)', 'Select among supported model providers, configure provider credentials and models, and review token use and costs by project or team.'],
    ],
    applications: [
      ['Individual development', 'Understand unfamiliar code, implement features and reduce repetitive maintenance work.'],
      ['Startups and agencies', 'Coordinate multi-file work across projects with access boundaries for each repository.'],
      ['Enterprise engineering', 'Use agent-assisted development with repository, credential, execution and audit controls.'],
    ],
    customers: ['Independent and professional developers', 'Startups and agencies', 'Engineering teams and enterprise administrators'],
    commercial: [
      ['Developer subscriptions', 'Offer individual and professional plans with defined capabilities and usage.'],
      ['Team and enterprise licensing', 'Offer organisation-level administration, support and enterprise deployment.'],
      ['Managed compute', 'Offer metered execution or optional GPU resources where available.'],
    ],
    infrastructure: [
      ['Local-first execution', 'Use a desktop workspace, repository index and agent runtime with local command execution by default.'],
      ['Model gateway', 'Route workloads through selected providers with credential handling, usage tracking and configurable limits.'],
      ['Optional managed compute', 'Support a path to isolated remote execution, GPU or vGPU allocation and workload provisioning. Proposed Stratos Labs and YSBERG relationships depend on final integration and commercial agreements.'],
    ],
    governance: [
      ['Developer approval', 'Keep plans and diffs inspectable. Require review for command execution and final code integration according to the project’s permissions.'],
      ['Enterprise security', 'Apply role-based and repository-level access, secret protection, environment isolation, administrative controls and audit logs.'],
      ['Cost management', 'Expose model and compute usage, team budgets, quotas and limits.'],
    ],
    deployment: [
      ['Local setup', 'Connect approved repositories, select model providers and configure permissions and execution approvals.'],
      ['Team rollout', 'Validate agent workflows on defined tasks before enabling shared policies, managed compute or broader repository access.'],
    ],
    relationship: 'Makerrr is Suppple Group Plc’s software engineering and development automation platform. It can also help the group develop and maintain its wider technology portfolio.',
    contact: 'Discuss team licensing, enterprise deployment or managed compute with Suppple.',
    preview: {
      title: 'Engineering workbench',
      description: 'Illustrative Composer workflow',
      steps: [
        ['Inspect repository and dependencies', 'Context ready'],
        ['Review a proposed multi-file change', 'Approval required'],
        ['Run build and tests', 'After approval'],
      ],
    },
  },
  supppleverify: {
    headline: 'Identity and risk infrastructure for digital business.',
    intro: 'SupppleVERIFY is designed to integrate identity verification, customer due diligence, financial crime screening and risk assessment into onboarding and ongoing customer management.',
    overview: 'SupppleVERIFY connects checks, customer risk signals and case records in a single workflow. Customers can collect information, review results, escalate exceptions, record decisions and monitor relevant changes through configured providers.',
    architecture: [
      ['Customer and business intake', 'Collect required identity, business, address and financial evidence through approved interfaces or APIs.'],
      ['Verification and screening', 'Route requests to configured identity, business, banking, sanctions, PEP and adverse-media data providers.'],
      ['Risk and case management', 'Normalise results into reviewable risk indicators, configurable rules, alerts and escalation queues.'],
      ['Evidence and monitoring', 'Record source evidence, review decisions and ongoing screening events for operations and audit.'],
    ],
    capabilities: [
      ['Know Your Customer (KYC)', 'Support identity and document validation, eligibility, address checks and customer risk classification where relevant data is available.'],
      ['Know Your Business (KYB)', 'Support company registration, director and officer checks, beneficial ownership and corporate due diligence.'],
      ['AML and financial crime screening', 'Screen against relevant sanctions, watchlists, politically exposed person (PEP) and adverse-media sources, with potential-match alerts and escalation.'],
      ['Bank verification and affordability', 'Validate bank details and account ownership where supported. Use permitted financial data for affordability workflows and reviewable risk indicators.'],
      ['Case management and ongoing monitoring', 'Record evidence, investigation notes, alerts and decisions. Support periodic or event-triggered rescreening and compliance reporting.'],
    ],
    applications: [
      ['United Kingdom', 'Potential uses include identity verification, customer due diligence, sanctions and PEP screening.'],
      ['South Africa', 'Support Financial Intelligence Centre Act (FICA) workflows such as identification, due diligence, risk assessment and recordkeeping.'],
      ['Malawi, Tanzania and Uganda', 'Potential uses include verification and customer due diligence for digital onboarding and regulated platforms.'],
      ['Nigeria', 'Potential uses include identity and business verification and anti-money-laundering workflows.'],
    ],
    customers: ['Banks and fintechs', 'Payment providers', 'Gaming operators', 'Digital marketplaces and regulated enterprises'],
    commercial: [
      ['API subscriptions and embedded checks', 'Integrate checks and results into existing customer journeys and operating systems.'],
      ['Transaction-based usage', 'Charge per verification, screening or transaction according to coverage, volumes and agreed commercial terms.'],
      ['Enterprise licensing and monitoring', 'Offer subscriptions, volume agreements, dedicated integrations and ongoing monitoring.'],
    ],
    infrastructure: [
      ['Orchestration APIs and webhooks', 'Connect customer systems to verification and screening providers and route results into review workflows.'],
      ['Provider connectivity', 'Configure available identity, business, bank and screening sources for the relevant jurisdiction and application.'],
      ['Evidence and audit', 'Use role-based access, encryption, evidence retention and audit records to support customer oversight.'],
    ],
    governance: [
      ['Accountable review', 'Use risk indicators to inform manual reviews and escalations. The regulated customer owns its compliance programme and final decisions.'],
      ['Data protection', 'Define lawful access, permitted use, data minimisation, retention and cross-border data handling for each deployment.'],
      ['Coverage and traceability', 'Coverage depends on the availability, reliability and lawful accessibility of local data sources. Keep source, timing and decision records reviewable.'],
    ],
    deployment: [
      ['Configure a workflow', 'Map the customer journey, jurisdiction, available data sources and review responsibilities. Connect approved provider integrations.'],
      ['Validate and monitor', 'Test checks, risk rules and escalation paths before scaling. Review data coverage and rescreening policies as usage expands.'],
    ],
    relationship: 'SupppleVERIFY is Suppple Group Plc’s identity, trust and compliance infrastructure. It can support Predikt and other group platforms as well as external customers.',
    contact: 'Discuss verification coverage, API integration or enterprise onboarding with Suppple.',
    preview: {
      title: 'Customer verification case',
      description: 'Illustrative review workflow',
      steps: [
        ['Identity evidence', 'Received'],
        ['Screening result', 'Review required'],
        ['Decision record', 'Pending review'],
      ],
    },
  },
};
