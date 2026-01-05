import { Briefcase, Heart, Lightbulb, Users2, GraduationCap, Coffee, Plane, DollarSign } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import teamImage from 'figma:asset/808d5c74af84627a5b50722481592ffb7d64dd55.png';
import { useState } from 'react';

export function CareersSection() {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage, mental health support, and wellness programs',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Culture',
      description: 'Work with cutting-edge technology and innovative teams on industry-leading projects',
    },
    {
      icon: Users2,
      title: 'Global Team',
      description: 'Collaborate with talented professionals across 100+ countries worldwide',
    },
    {
      icon: Briefcase,
      title: 'Career Growth',
      description: 'Continuous learning, development programs, and clear advancement pathways',
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Annual training budgets, conferences, certifications, and skill development',
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements, hybrid options, and generous time off',
    },
    {
      icon: Plane,
      title: 'Travel Opportunities',
      description: 'International projects and global team collaboration experiences',
    },
    {
      icon: DollarSign,
      title: 'Competitive Rewards',
      description: 'Market-leading salaries, bonuses, equity options, and performance incentives',
    },
  ];

  const departments = [
    { name: 'Technology', openings: 35, locations: ['Johannesburg', 'Cape Town', 'Remote'] },
    { name: 'Product', openings: 6, locations: ['Cape Town', 'Johannesburg'] },
    { name: 'Marketing', openings: 5, locations: ['Multiple Locations'] },
    { name: 'Data & Analytics', openings: 10, locations: ['Cape Town', 'Remote'] },
    { name: 'Compliance & Legal', openings: 6, locations: ['Johannesburg', 'Cape Town'] },
  ];

  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);

  const featuredPositions = [
    {
      title: 'Senior AI/ML Engineer',
      department: 'Technology',
      location: 'Cape Town / Remote',
      type: 'Full-time',
      seniority: 'Senior',
      description: 'Lead the development of cutting-edge AI models and machine learning algorithms for our prediction markets and gaming platforms. Work with multimodal AI systems, real-time analytics, and large-scale ML infrastructure.',
      requirements: [
        '5+ years experience in machine learning and AI development',
        'Strong Python skills with TensorFlow, PyTorch, or JAX',
        'Experience with large language models and multimodal AI',
        'Cloud infrastructure experience (AWS, GCP, or Azure)',
        'Strong understanding of MLOps and production ML systems'
      ],
      responsibilities: [
        'Design and implement scalable ML models for prediction markets',
        'Optimize AI algorithms for real-time performance',
        'Collaborate with product teams to integrate AI capabilities',
        'Mentor junior engineers and establish best practices'
      ],
      benefits: ['Competitive salary + equity', 'Remote-first culture', 'Annual learning budget of $5,000', 'Latest tech hardware']
    },
    {
      title: 'Head of Product - AI Platforms',
      department: 'Product',
      location: 'Johannesburg / Cape Town',
      type: 'Full-time',
      seniority: 'Leadership',
      description: 'Define and execute the product vision for our AI-powered platforms including Seeek.ai, Makerrr.ai, and GRIO. Drive product strategy, roadmap, and go-to-market for innovative AI applications serving millions of users across Africa.',
      requirements: [
        '8+ years in product management with 3+ years in AI/ML products',
        'Proven track record of launching successful AI products at scale',
        'Deep understanding of generative AI and multimodal models',
        'Experience managing cross-functional teams',
        'Strong analytical and data-driven decision-making skills'
      ],
      responsibilities: [
        'Own product strategy and roadmap for AI platform portfolio',
        'Define success metrics and drive continuous improvement',
        'Work closely with engineering, design, and data science teams',
        'Conduct market research and competitive analysis',
        'Present to executive leadership and board members'
      ],
      benefits: ['Executive compensation package', 'Equity participation', 'Leadership development programs', 'Global conference budget']
    },
    {
      title: 'Senior Full-Stack Engineer (React/Node.js)',
      department: 'Technology',
      location: 'Cape Town / Remote',
      type: 'Full-time',
      seniority: 'Senior',
      description: 'Build and scale high-performance web applications for our gaming and prediction market platforms. Work with modern tech stack including React, Node.js, TypeScript, and real-time technologies serving millions of daily users.',
      requirements: [
        '5+ years of full-stack development experience',
        'Expert-level knowledge of React, TypeScript, and Node.js',
        'Experience with real-time systems (WebSockets, Server-Sent Events)',
        'Strong understanding of system design and architecture',
        'Experience with high-traffic, low-latency applications'
      ],
      responsibilities: [
        'Develop scalable features for prediction market and gaming platforms',
        'Optimize application performance and user experience',
        'Implement real-time betting and prediction market features',
        'Collaborate with designers and product managers',
        'Code review and mentor junior developers'
      ],
      benefits: ['Market-leading salary', 'Flexible remote work', 'Latest MacBook Pro or equivalent', 'Unlimited PTO']
    },
    {
      title: 'Data Scientist - Predictive Analytics',
      department: 'Data & Analytics',
      location: 'Cape Town / Remote',
      type: 'Full-time',
      seniority: 'Mid-Senior',
      description: 'Build predictive models and analytics systems for our prediction markets and gaming platforms. Work with large-scale datasets, real-time streaming data, and advanced statistical methods to drive business insights.',
      requirements: [
        '4+ years experience in data science and predictive modeling',
        'Strong Python/R skills with pandas, scikit-learn, and SQL',
        'Experience with time-series forecasting and probabilistic modeling',
        'Knowledge of A/B testing and experimental design',
        'Experience with big data technologies (Spark, Kafka)'
      ],
      responsibilities: [
        'Develop predictive models for market outcomes and user behavior',
        'Build real-time analytics dashboards and reporting systems',
        'Design and analyze A/B tests for product features',
        'Collaborate with engineering to productionize models',
        'Present insights to stakeholders and leadership'
      ],
      benefits: ['Competitive salary + performance bonus', 'Remote work options', 'Conference attendance', 'Professional development budget']
    },
    {
      title: 'Senior DevOps Engineer',
      department: 'Technology',
      location: 'Johannesburg / Remote',
      type: 'Full-time',
      seniority: 'Senior',
      description: 'Design and maintain highly available cloud infrastructure supporting millions of users across Africa. Work with Kubernetes, CI/CD pipelines, and modern cloud-native technologies.',
      requirements: [
        '5+ years DevOps/SRE experience with production systems',
        'Expert knowledge of Kubernetes, Docker, and container orchestration',
        'Strong experience with AWS, GCP, or Azure',
        'Proficient in Infrastructure as Code (Terraform, CloudFormation)',
        'Experience with monitoring, logging, and observability tools'
      ],
      responsibilities: [
        'Design and implement scalable cloud infrastructure',
        'Build and maintain CI/CD pipelines for rapid deployment',
        'Ensure 99.99% uptime for critical gaming and prediction platforms',
        'Implement security best practices and compliance requirements',
        'Automate operations and reduce manual interventions'
      ],
      benefits: ['Premium salary package', 'Remote-first', 'Certification reimbursement', 'On-call compensation']
    },
    {
      title: 'UX/UI Designer - AI Products',
      department: 'Product',
      location: 'Cape Town',
      type: 'Full-time',
      seniority: 'Mid-Senior',
      description: 'Design intuitive and engaging user experiences for our AI-powered platforms. Create beautiful interfaces that make complex AI capabilities accessible to millions of users across Africa.',
      requirements: [
        '4+ years UX/UI design experience',
        'Portfolio demonstrating exceptional design work',
        'Proficiency in Figma, Sketch, or Adobe XD',
        'Understanding of AI/ML product design patterns',
        'Experience with user research and usability testing'
      ],
      responsibilities: [
        'Design user interfaces for Seeek.ai, Makerrr.ai, and GRIO platforms',
        'Conduct user research and create personas',
        'Develop design systems and component libraries',
        'Collaborate with product and engineering teams',
        'Create prototypes and conduct usability testing'
      ],
      benefits: ['Competitive salary', 'Hybrid work model', 'Latest design tools and hardware', 'Creative workshops']
    },
    {
      title: 'Compliance Manager - Gaming & Betting',
      department: 'Compliance & Legal',
      location: 'Johannesburg',
      type: 'Full-time',
      seniority: 'Manager',
      description: 'Ensure regulatory compliance across all gaming and betting platforms operating through licensed partners in multiple African jurisdictions. Manage licensing relationships and maintain compliance frameworks.',
      requirements: [
        '5+ years in compliance, preferably in gaming/betting industry',
        'Knowledge of African gambling regulations and licensing',
        'Experience with AML/KYC compliance programs',
        'Strong understanding of responsible gaming practices',
        'Excellent communication and stakeholder management skills'
      ],
      responsibilities: [
        'Manage compliance programs across licensed partner operations',
        'Liaise with regulatory bodies and licensing authorities',
        'Develop and implement compliance policies and procedures',
        'Conduct regular compliance audits and risk assessments',
        'Train teams on regulatory requirements and best practices'
      ],
      benefits: ['Executive-level compensation', 'Professional certifications', 'Regulatory conference attendance', 'Career progression']
    },
    {
      title: 'Performance Marketing Specialist',
      department: 'Marketing',
      location: 'Johannesburg / Remote',
      type: 'Full-time',
      seniority: 'Mid-Senior',
      description: 'Drive user acquisition and growth for our AI platforms and gaming products across African markets. Execute data-driven marketing campaigns across digital channels.',
      requirements: [
        '4+ years in performance marketing or growth',
        'Experience with digital advertising platforms (Google Ads, Meta, TikTok)',
        'Strong analytical skills and experience with marketing attribution',
        'Knowledge of African digital marketing landscape',
        'Experience with marketing automation and analytics tools'
      ],
      responsibilities: [
        'Plan and execute multi-channel acquisition campaigns',
        'Optimize campaign performance and ROI',
        'Conduct market research and competitive analysis',
        'Manage marketing budgets across platforms',
        'A/B test creatives, messaging, and landing pages'
      ],
      benefits: ['Performance bonuses', 'Remote work', 'Marketing conferences', 'Creative freedom']
    },
    {
      title: 'Senior Security Engineer',
      department: 'Technology',
      location: 'Johannesburg / Cape Town',
      type: 'Full-time',
      seniority: 'Senior',
      description: 'Protect our platforms and user data across gaming, prediction markets, and AI applications. Build security infrastructure, conduct penetration testing, and ensure compliance with security standards.',
      requirements: [
        '5+ years in information security or cybersecurity',
        'Experience securing cloud infrastructure (AWS, GCP, Azure)',
        'Knowledge of security frameworks (OWASP, NIST, ISO 27001)',
        'Experience with penetration testing and vulnerability assessment',
        'Strong understanding of application security and secure SDLC'
      ],
      responsibilities: [
        'Design and implement security architecture for platforms',
        'Conduct security assessments and penetration testing',
        'Manage incident response and security operations',
        'Ensure compliance with gaming industry security standards',
        'Train development teams on security best practices'
      ],
      benefits: ['Premium compensation', 'Security certifications (CISSP, CEH)', 'Conference budget', 'Remote options']
    }
  ];

  return (
    <section id="careers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={teamImage}
                alt="Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-2xl font-bold mb-2">Join Our Team</div>
                <div className="text-white/90">Global Team</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Build Your Career with Us
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join a global team that's shaping the future of sports betting and iGaming. We're looking for talented individuals who are passionate about innovation and excellence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors"
                >
                  <benefit.icon className="text-blue-600 mb-2" size={24} />
                  <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 px-8"
              onClick={() => document.getElementById('featured-positions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Open Positions
            </Button>
          </div>
        </div>

        {/* Featured Positions with Details */}
        <div className="mt-16" id="featured-positions">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Positions</h3>
            <p className="text-lg text-gray-600">Detailed role descriptions for key openings</p>
          </div>

          <div className="space-y-6">
            {featuredPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h4>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">
                        {position.department}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                        {position.location}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                        {position.seniority}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap"
                    onClick={() => {
                      window.location.href = `mailto:hr@suppple.co.uk?subject=Application for ${position.title}`;
                    }}
                  >
                    Apply Now
                  </Button>
                </div>

                <p className="text-gray-600 mb-6">{position.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-gray-900 mb-3">Requirements</h5>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-gray-900 mb-3">Responsibilities</h5>
                    <ul className="space-y-2">
                      {position.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-3">What We Offer</h5>
                  <div className="flex flex-wrap gap-2">
                    {position.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Culture Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2">Why Join Suppple Group?</h3>
            <p className="text-white/90">Join a company recognized as a great place to work</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.5/5</div>
              <div className="text-white/80">Employee Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">42%</div>
              <div className="text-white/80">Female Leadership</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-white/80">Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-white/80">Nationalities</div>
            </div>
          </div>
        </div>

        {/* All Open Positions by Department */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">All Open Positions (62)</h3>
            <p className="text-lg text-gray-600">Explore opportunities across all our departments</p>
          </div>

          {/* Department Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center border border-blue-100 hover:border-blue-300 transition-all cursor-pointer"
                onClick={() => setSelectedDepartment(selectedDepartment === dept.name ? null : dept.name)}
              >
                <div className="text-3xl font-bold text-blue-600 mb-1">{dept.openings}</div>
                <div className="text-sm font-semibold text-gray-900">{dept.name}</div>
                <div className="text-xs text-gray-600 mt-1">Open Roles</div>
              </div>
            ))}
          </div>

          {/* Technology Department - 35 positions */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-lg">Technology (35)</span>
              <span className="text-gray-500 text-base">Software Engineering, DevOps, Security, Infrastructure</span>
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { role: 'Senior AI/ML Engineer', level: 'Senior', location: 'Cape Town / Remote' },
                { role: 'Staff Software Engineer', level: 'Staff', location: 'Johannesburg / Remote' },
                { role: 'Senior Full-Stack Engineer (React/Node)', level: 'Senior', location: 'Cape Town / Remote' },
                { role: 'Backend Engineer (Python)', level: 'Mid-Senior', location: 'Remote' },
                { role: 'Frontend Engineer (React/TypeScript)', level: 'Mid-Senior', location: 'Remote' },
                { role: 'Mobile Engineer (React Native)', level: 'Mid-Senior', location: 'Cape Town / Remote' },
                { role: 'iOS Engineer (Swift)', level: 'Senior', location: 'Remote' },
                { role: 'Android Engineer (Kotlin)', level: 'Senior', location: 'Remote' },
                { role: 'Senior DevOps Engineer', level: 'Senior', location: 'Johannesburg / Remote' },
                { role: 'Cloud Infrastructure Engineer', level: 'Mid-Senior', location: 'Remote' },
                { role: 'Platform Engineer', level: 'Senior', location: 'Cape Town' },
                { role: 'Site Reliability Engineer (SRE)', level: 'Mid-Senior', location: 'Remote' },
                { role: 'Senior Security Engineer', level: 'Senior', location: 'Johannesburg' },
                { role: 'Application Security Engineer', level: 'Mid-Senior', location: 'Remote' },
                { role: 'Security Operations Analyst', level: 'Mid', location: 'Johannesburg' },
                { role: 'Engineering Manager - AI/ML', level: 'Manager', location: 'Cape Town' },
                { role: 'Engineering Manager - Platform', level: 'Manager', location: 'Johannesburg' },
                { role: 'Principal Engineer', level: 'Principal', location: 'Cape Town / Remote' },
                { role: 'Tech Lead - Frontend', level: 'Lead', location: 'Remote' },
                { role: 'Tech Lead - Backend', level: 'Lead', location: 'Remote' },
                { role: 'Data Engineer', level: 'Mid-Senior', location: 'Cape Town / Remote' },
                { role: 'Senior Data Engineer', level: 'Senior', location: 'Johannesburg' },
                { role: 'ML Infrastructure Engineer', level: 'Senior', location: 'Remote' },
                { role: 'Computer Vision Engineer', level: 'Senior', location: 'Cape Town' },
                { role: 'NLP Engineer', level: 'Mid-Senior', location: 'Remote' },
                { role: 'QA Engineer', level: 'Mid', location: 'Johannesburg' },
                { role: 'Senior QA Engineer', level: 'Senior', location: 'Cape Town' },
                { role: 'QA Automation Engineer', level: 'Mid-Senior', location: 'Remote' },
                { role: 'Database Administrator', level: 'Senior', location: 'Johannesburg' },
                { role: 'Solutions Architect', level: 'Senior', location: 'Cape Town' },
                { role: 'Technical Support Engineer', level: 'Mid', location: 'Johannesburg / Cape Town' },
                { role: 'IT Systems Administrator', level: 'Mid', location: 'Johannesburg' },
                { role: 'Network Engineer', level: 'Senior', location: 'Johannesburg' },
                { role: 'Release Manager', level: 'Mid-Senior', location: 'Remote' },
                { role: 'Technical Writer', level: 'Mid', location: 'Remote' },
              ].map((position, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all">
                  <h5 className="font-bold text-gray-900 mb-2">{position.role}</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">{position.level}</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">{position.location}</span>
                  </div>
                  <button
                    onClick={() => window.location.href = `mailto:hr@suppple.co.uk?subject=Application for ${position.role}`}
                    className="mt-3 text-sm text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Apply →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Product Department - 6 positions */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-purple-600 text-white px-4 py-2 rounded-lg">Product (6)</span>
              <span className="text-gray-500 text-base">Product Management, Design, User Research</span>
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { role: 'Head of Product - AI Platforms', level: 'Leadership', location: 'Johannesburg / Cape Town' },
                { role: 'Senior Product Manager - Gaming', level: 'Senior', location: 'Cape Town' },
                { role: 'Product Manager - AI/ML', level: 'Mid-Senior', location: 'Remote' },
                { role: 'UX/UI Designer - AI Products', level: 'Mid-Senior', location: 'Cape Town' },
                { role: 'Senior UX Designer', level: 'Senior', location: 'Johannesburg' },
                { role: 'Product Designer', level: 'Mid-Senior', location: 'Remote' },
              ].map((position, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-purple-300 hover:shadow-md transition-all">
                  <h5 className="font-bold text-gray-900 mb-2">{position.role}</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">{position.level}</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">{position.location}</span>
                  </div>
                  <button
                    onClick={() => window.location.href = `mailto:hr@suppple.co.uk?subject=Application for ${position.role}`}
                    className="mt-3 text-sm text-purple-600 hover:text-purple-700 font-semibold"
                  >
                    Apply →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Marketing Department - 5 positions */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-orange-600 text-white px-4 py-2 rounded-lg">Marketing (5)</span>
              <span className="text-gray-500 text-base">Growth, Brand, Content, Performance Marketing</span>
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { role: 'Performance Marketing Specialist', level: 'Mid-Senior', location: 'Johannesburg / Remote' },
                { role: 'Head of Growth', level: 'Leadership', location: 'Cape Town' },
                { role: 'Brand Manager', level: 'Mid-Senior', location: 'Johannesburg' },
                { role: 'Content Marketing Manager', level: 'Mid-Senior', location: 'Remote' },
                { role: 'Product Marketing Manager', level: 'Senior', location: 'Johannesburg' },
              ].map((position, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-orange-300 hover:shadow-md transition-all">
                  <h5 className="font-bold text-gray-900 mb-2">{position.role}</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded-full">{position.level}</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">{position.location}</span>
                  </div>
                  <button
                    onClick={() => window.location.href = `mailto:hr@suppple.co.uk?subject=Application for ${position.role}`}
                    className="mt-3 text-sm text-orange-600 hover:text-orange-700 font-semibold"
                  >
                    Apply →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Data & Analytics Department - 10 positions */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-cyan-600 text-white px-4 py-2 rounded-lg">Data & Analytics (10)</span>
              <span className="text-gray-500 text-base">Data Science, Analytics, Business Intelligence</span>
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { role: 'Data Scientist - Predictive Analytics', level: 'Mid-Senior', location: 'Cape Town / Remote' },
                { role: 'Senior Data Scientist', level: 'Senior', location: 'Johannesburg' },
                { role: 'Lead Data Scientist', level: 'Lead', location: 'Cape Town' },
                { role: 'Business Intelligence Analyst', level: 'Mid', location: 'Johannesburg' },
                { role: 'Senior Analytics Engineer', level: 'Senior', location: 'Remote' },
                { role: 'Data Analyst', level: 'Mid', location: 'Cape Town' },
                { role: 'Data Product Manager', level: 'Senior', location: 'Johannesburg' },
                { role: 'Analytics Manager', level: 'Manager', location: 'Cape Town' },
                { role: 'Research Scientist', level: 'Senior', location: 'Remote' },
                { role: 'Head of Data Science', level: 'Leadership', location: 'Johannesburg' },
              ].map((position, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-cyan-300 hover:shadow-md transition-all">
                  <h5 className="font-bold text-gray-900 mb-2">{position.role}</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-cyan-100 text-cyan-700 rounded-full">{position.level}</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">{position.location}</span>
                  </div>
                  <button
                    onClick={() => window.location.href = `mailto:hr@suppple.co.uk?subject=Application for ${position.role}`}
                    className="mt-3 text-sm text-cyan-600 hover:text-cyan-700 font-semibold"
                  >
                    Apply →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance & Legal Department - 6 positions */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-red-600 text-white px-4 py-2 rounded-lg">Compliance & Legal (6)</span>
              <span className="text-gray-500 text-base">Regulatory Compliance, Legal, Risk Management</span>
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { role: 'Compliance Manager - Gaming & Betting', level: 'Manager', location: 'Johannesburg' },
                { role: 'Senior Compliance Officer', level: 'Senior', location: 'Cape Town' },
                { role: 'Legal Counsel - Technology', level: 'Senior', location: 'Johannesburg' },
                { role: 'Risk & Compliance Analyst', level: 'Mid', location: 'Johannesburg' },
                { role: 'AML/KYC Specialist', level: 'Mid-Senior', location: 'Cape Town' },
                { role: 'Head of Compliance', level: 'Leadership', location: 'Johannesburg' },
              ].map((position, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-red-300 hover:shadow-md transition-all">
                  <h5 className="font-bold text-gray-900 mb-2">{position.role}</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">{position.level}</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">{position.location}</span>
                  </div>
                  <button
                    onClick={() => window.location.href = `mailto:hr@suppple.co.uk?subject=Application for ${position.role}`}
                    className="mt-3 text-sm text-red-600 hover:text-red-700 font-semibold"
                  >
                    Apply →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}