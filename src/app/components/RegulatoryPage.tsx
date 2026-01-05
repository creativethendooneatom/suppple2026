import { Shield, Book, Scale, FileText, CheckCircle, AlertTriangle, Users, Globe, Lock, Download, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useState } from 'react';

export function RegulatoryPage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const regulatorySections = [
    {
      id: 'overview',
      title: 'Regulatory Overview',
      icon: Shield,
      content: {
        intro: 'Predict by Suppple operates through licensed partnerships in regulated jurisdictions, ensuring compliance with all applicable laws and regulations governing prediction markets and financial services.',
        points: [
          'Licensed operations through qualified partners in multiple jurisdictions',
          'Adherence to anti-money laundering (AML) and know-your-customer (KYC) requirements',
          'Regular audits and compliance reviews by independent third parties',
          'Transparent operations subject to regulatory oversight',
          'Member of industry self-regulatory organizations where applicable'
        ]
      }
    },
    {
      id: 'market-rules',
      title: 'Market Rules',
      icon: Book,
      content: {
        intro: 'All markets on Predict by Suppple are governed by clear rules that define outcomes, settlement criteria, and resolution procedures.',
        sections: [
          {
            title: 'Market Creation',
            points: [
              'Markets must have clearly defined binary or categorical outcomes',
              'Settlement criteria must be objective and verifiable',
              'Official data sources are predetermined before market launch',
              'Market descriptions include all relevant terms and conditions',
              'Event timing and settlement deadlines are clearly specified'
            ]
          },
          {
            title: 'Market Settlement',
            points: [
              'Markets settle based on official sources designated in market rules',
              'Settlement occurs as soon as official results are available',
              'In case of ambiguity, markets may be settled based on market intent',
              'Voided markets result in full refund to all participants',
              'Settlement decisions are final unless a clear error is identified'
            ]
          },
          {
            title: 'Market Suspension',
            points: [
              'Markets may be suspended due to unforeseen circumstances',
              'Trading halts may occur to protect market integrity',
              'Suspended markets may be voided or settled based on available information',
              'Users are notified of suspensions and resolution decisions'
            ]
          }
        ]
      }
    },
    {
      id: 'trading-rules',
      title: 'Trading Rules',
      icon: Scale,
      content: {
        intro: 'Trading on Predict by Suppple is subject to rules designed to ensure fair, orderly, and transparent markets.',
        sections: [
          {
            title: 'Order Types',
            points: [
              'Market orders execute immediately at best available price',
              'Limit orders execute at specified price or better',
              'Orders are matched on price-time priority',
              'Partial fills are permitted and may occur at multiple prices',
              'Orders may be cancelled before execution'
            ]
          },
          {
            title: 'Position Limits',
            points: [
              'Position limits may apply to individual markets',
              'Limits are designed to promote market liquidity and fairness',
              'Users are notified of applicable limits before trading',
              'Limits may vary based on market type and user status',
              'Violations may result in position reductions or account restrictions'
            ]
          },
          {
            title: 'Prohibited Activities',
            points: [
              'Market manipulation including wash trading and spoofing',
              'Using non-public information to gain unfair advantage',
              'Coordinating with others to manipulate market prices',
              'Using automated systems without authorization',
              'Creating multiple accounts to evade position limits',
              'Any activity that undermines market integrity'
            ]
          }
        ]
      }
    },
    {
      id: 'user-obligations',
      title: 'User Obligations',
      icon: Users,
      content: {
        intro: 'Users of Predict by Suppple have certain obligations to maintain account integrity and comply with platform rules.',
        sections: [
          {
            title: 'Account Requirements',
            points: [
              'Must be 18 years or older to create an account',
              'Must provide accurate and truthful information',
              'Must complete identity verification process',
              'Must maintain one account per individual',
              'Must keep account credentials secure and confidential'
            ]
          },
          {
            title: 'Responsible Trading',
            points: [
              'Trade within your financial means',
              'Understand the risks of prediction market trading',
              'Use available tools for deposit limits and self-exclusion',
              'Report suspicious activity or potential violations',
              'Comply with tax obligations in your jurisdiction'
            ]
          },
          {
            title: 'Prohibited Users',
            points: [
              'Individuals under 18 years of age',
              'Residents of jurisdictions where prediction markets are prohibited',
              'Individuals with prior account suspensions or bans',
              'Politically exposed persons (PEPs) without enhanced verification',
              'Anyone accessing the platform through VPN or proxy services'
            ]
          }
        ]
      }
    },
    {
      id: 'compliance',
      title: 'Compliance Framework',
      icon: FileText,
      content: {
        intro: 'Predict by Suppple maintains a comprehensive compliance program to meet regulatory obligations and protect users.',
        sections: [
          {
            title: 'AML/KYC Program',
            points: [
              'Identity verification required for all users',
              'Enhanced due diligence for high-value accounts',
              'Transaction monitoring for suspicious activity',
              'Reporting of suspicious transactions to authorities',
              'Regular review and update of customer information'
            ]
          },
          {
            title: 'Data Protection',
            points: [
              'Compliance with GDPR, POPIA, and applicable data protection laws',
              'Encryption of sensitive user information',
              'Regular security audits and penetration testing',
              'User rights to access, correct, and delete personal data',
              'Data breach notification procedures'
            ]
          },
          {
            title: 'Financial Controls',
            points: [
              'Segregation of user funds from operational funds',
              'Regular reconciliation of user balances',
              'Third-party custody arrangements for user deposits',
              'Insurance coverage for operational risks',
              'Annual financial audits by qualified auditors'
            ]
          }
        ]
      }
    },
    {
      id: 'disputes',
      title: 'Dispute Resolution',
      icon: AlertTriangle,
      content: {
        intro: 'Predict by Suppple provides clear procedures for resolving disputes related to market settlements, account issues, and platform operations.',
        sections: [
          {
            title: 'Dispute Process',
            points: [
              'Submit disputes through official support channels',
              'Provide detailed information and supporting evidence',
              'Disputes reviewed within 5 business days',
              'Decision made based on market rules and available evidence',
              'Written explanation provided for all dispute resolutions'
            ]
          },
          {
            title: 'Market Settlement Disputes',
            points: [
              'Disputes must be filed within 48 hours of settlement',
              'Must cite specific rule violations or errors',
              'Reviewed by compliance team and market operations',
              'Settlements may be corrected if clear error is identified',
              'Mass disputes reviewed for potential systemic issues'
            ]
          },
          {
            title: 'Escalation Procedures',
            points: [
              'Unresolved disputes may be escalated to senior management',
              'Independent review available for significant disputes',
              'Binding arbitration available for contractual disputes',
              'Regulatory complaints can be filed with relevant authorities',
              'Legal action permitted subject to terms of service'
            ]
          }
        ]
      }
    }
  ];

  const documentsAvailable = [
    {
      title: 'Platform Rulebook',
      description: 'Complete rules governing all platform operations',
      version: 'v3.3',
      updated: 'January 2026',
      size: '2.4 MB'
    },
    {
      title: 'Terms of Service',
      description: 'User agreement and platform terms',
      version: 'v2.9',
      updated: 'December 2025',
      size: '1.1 MB'
    },
    {
      title: 'Privacy Policy',
      description: 'How we collect, use, and protect your data',
      version: 'v2.6',
      updated: 'November 2025',
      size: '650 KB'
    },
    {
      title: 'Market Resolution Guidelines',
      description: 'Detailed guidelines for market settlement decisions',
      version: 'v4.2',
      updated: 'January 2026',
      size: '1.8 MB'
    },
    {
      title: 'AML/KYC Policy',
      description: 'Anti-money laundering and verification procedures',
      version: 'v2.0',
      updated: 'December 2025',
      size: '890 KB'
    },
    {
      title: 'Risk Disclosure Statement',
      description: 'Important information about trading risks',
      version: 'v2.2',
      updated: 'November 2025',
      size: '420 KB'
    }
  ];

  const handleDocumentDownload = (docTitle: string) => {
    // Create detailed PDF content based on document type
    let content = '';
    
    switch(docTitle) {
      case 'Platform Rulebook':
        content = `SUPPPLE GROUP - PLATFORM RULEBOOK v3.3
Last Updated: January 2026

TABLE OF CONTENTS
1. Introduction and Scope
2. Market Creation and Management
3. Trading Rules and Procedures
4. Settlement and Resolution
5. User Obligations
6. Prohibited Activities
7. Compliance Framework
8. Dispute Resolution

1. INTRODUCTION
This Platform Rulebook governs all operations on Suppple Group's prediction market platforms. All users must comply with these rules.

2. MARKET CREATION AND MANAGEMENT
- Markets must have clearly defined outcomes
- Settlement criteria must be objective and verifiable
- Official data sources predetermined before launch
- Event timing and deadlines clearly specified

3. TRADING RULES
- Market orders execute immediately at best price
- Limit orders execute at specified price or better
- Position limits may apply to individual markets
- Orders matched on price-time priority

4. SETTLEMENT
- Markets settle based on official designated sources
- Settlement occurs when official results available
- Voided markets result in full refund
- Settlement decisions are final unless clear error

For complete details, visit suppple.co.uk/regulatory`;
        break;
        
      case 'Terms of Service':
        content = `SUPPPLE GROUP - TERMS OF SERVICE v2.9
Last Updated: December 2025

BY USING OUR SERVICES, YOU AGREE TO THESE TERMS

1. ACCEPTANCE OF TERMS
By creating an account, you agree to these Terms of Service, Privacy Policy, and all applicable regulations.

2. ELIGIBILITY
- Must be 18+ years old
- Provide accurate information
- Complete identity verification
- Maintain one account per individual

3. ACCOUNT SECURITY
- Keep credentials secure
- Report unauthorized access
- No account sharing or transfer

4. TRADING CONDUCT
- Trade within your means
- No market manipulation
- No wash trading or spoofing
- Comply with all platform rules

5. INTELLECTUAL PROPERTY
All content and trademarks are property of Suppple Group.

6. LIMITATION OF LIABILITY
Trading involves risk. Past performance doesn't indicate future results.

Contact: legal@suppple.co.uk`;
        break;
        
      case 'Privacy Policy':
        content = `SUPPPLE GROUP - PRIVACY POLICY v2.6
Last Updated: November 2025

We protect your privacy and comply with GDPR, POPIA, and all data protection laws.

INFORMATION WE COLLECT
- Identity information (name, DOB, address)
- Contact information (email, phone)
- Financial information (payment methods)
- Trading activity and preferences
- Device and technical information

HOW WE USE YOUR INFORMATION
- Account management and verification
- Platform operations and security
- Regulatory compliance (AML/KYC)
- Customer support
- Service improvements

DATA SECURITY
- Encryption of sensitive data
- Regular security audits
- Access controls and monitoring
- Secure data centers

YOUR RIGHTS
- Access your personal data
- Correct inaccurate information
- Request data deletion
- Withdraw consent
- Data portability

Contact: privacy@suppple.co.uk`;
        break;
        
      case 'Market Resolution Guidelines':
        content = `SUPPPLE GROUP - MARKET RESOLUTION GUIDELINES v4.2
Last Updated: January 2026

PRINCIPLES
1. Markets settle based on official designated sources
2. Settlement decisions are objective and verifiable
3. Market intent guides ambiguous situations
4. Fairness to all participants

RESOLUTION PROCESS
1. Official results published by designated source
2. Compliance team verifies results
3. Market settled within designated timeframe
4. Users notified of settlement

DISPUTE PROCEDURES
- Submit within 48 hours of settlement
- Provide evidence and specific rule violations
- Review by compliance team
- Decision within 5 business days
- Settlements corrected if clear error identified

SPECIAL CIRCUMSTANCES
- Suspended events may be voided
- Ambiguous outcomes settled based on intent
- Mass disputes reviewed for systemic issues

Contact: compliance@suppple.co.uk`;
        break;
        
      case 'AML/KYC Policy':
        content = `SUPPPLE GROUP - AML/KYC POLICY v2.0
Last Updated: December 2025

ANTI-MONEY LAUNDERING COMPLIANCE

IDENTITY VERIFICATION
All users must complete KYC verification:
- Government-issued ID verification
- Proof of address (utility bill, bank statement)
- Enhanced due diligence for high-value accounts
- PEP screening and monitoring

TRANSACTION MONITORING
- Automated monitoring of all transactions
- Detection of suspicious patterns
- Investigation of unusual activity
- Reporting to Financial Intelligence Units

CUSTOMER DUE DILIGENCE
- Risk-based approach to verification
- Ongoing monitoring of customer activity
- Enhanced due diligence for high-risk customers
- Regular review of customer information

RECORD KEEPING
- Records maintained for minimum 5 years
- Audit trail of all verification procedures
- Documentation of suspicious activity reports

COMPLIANCE TRAINING
- Staff trained on AML/KYC requirements
- Regular updates on regulatory changes

Contact: aml@suppple.co.uk`;
        break;
        
      case 'Risk Disclosure Statement':
        content = `SUPPPLE GROUP - RISK DISCLOSURE STATEMENT v2.2
Last Updated: November 2025

IMPORTANT: PLEASE READ CAREFULLY

TRADING RISKS
Trading on prediction markets involves substantial risk and may not be suitable for all users.

KEY RISKS:
1. LOSS OF CAPITAL
   - You may lose your entire investment
   - Past performance does not indicate future results
   - Market outcomes are uncertain

2. MARKET RISK
   - Prices fluctuate based on market conditions
   - Liquidity may vary across markets
   - Spreads may widen during volatile periods

3. SETTLEMENT RISK
   - Official results may be delayed
   - Markets may be voided in certain circumstances
   - Disputes may affect settlement timing

4. REGULATORY RISK
   - Laws and regulations may change
   - Operations may be affected by regulatory actions
   - Compliance requirements may vary by jurisdiction

5. OPERATIONAL RISK
   - Technical issues may affect trading
   - System downtime may prevent access
   - Security breaches are possible

RECOMMENDATIONS:
- Only trade with funds you can afford to lose
- Understand market rules before trading
- Use responsible trading tools and limits
- Seek independent financial advice if needed

This is not financial advice. You are responsible for your trading decisions.

Contact: risk@suppple.co.uk`;
        break;
    }
    
    // In production, this would generate and download an actual PDF
    // For now, we'll show the content and simulate download
    const message = `DOWNLOADING: ${docTitle}

${content}

═══════════════════════════════════

This is a preview of the document content. In a production environment, this would download a fully formatted PDF document with the complete ${docTitle}.

To request the full official PDF document, please contact: investors@suppple.co.uk`;
    
    alert(message);
  };

  const regulatoryPartners = [
    {
      name: 'Licensed Operators',
      description: 'Predict by Suppple partners with licensed operators in each jurisdiction',
      regions: ['Africa', 'Europe', 'Americas']
    },
    {
      name: 'Financial Regulators',
      description: 'Subject to oversight by financial services regulators',
      regions: ['Multiple jurisdictions']
    },
    {
      name: 'Industry Associations',
      description: 'Member of prediction market industry groups',
      regions: ['International']
    }
  ];

  return (
    <section id="regulatory" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4 p-3 bg-blue-100 rounded-xl">
              <Shield className="text-blue-600" size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Regulatory Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Predict by Suppple operates in compliance with all applicable laws and regulations. 
              Review our comprehensive regulatory framework and platform rules.
            </p>
          </motion.div>
        </div>

        {/* Key Commitments */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-gray-200 text-center"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Fully Compliant</h3>
            <p className="text-gray-600">
              Operating through licensed partners with full regulatory compliance in all jurisdictions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-gray-200 text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Protected</h3>
            <p className="text-gray-600">
              User funds segregated, encrypted data, and comprehensive security measures
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-gray-200 text-center"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent</h3>
            <p className="text-gray-600">
              Clear rules, open operations, and regular reporting to users and regulators
            </p>
          </motion.div>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          {/* Mobile Dropdown Navigation */}
          <div className="lg:hidden mb-6">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full flex items-center justify-between bg-white border-2 border-gray-200 rounded-xl px-4 py-4 hover:border-blue-300 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {regulatorySections.find(s => s.id === activeSection)?.icon && (
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      {(() => {
                        const Icon = regulatorySections.find(s => s.id === activeSection)!.icon;
                        return <Icon className="text-blue-600" size={16} />;
                      })()}
                    </div>
                  )}
                  <span className="font-bold text-gray-900">
                    {regulatorySections.find(s => s.id === activeSection)?.title}
                  </span>
                </div>
                <ChevronDown 
                  className={`text-gray-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              
              {dropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl z-10 overflow-hidden">
                  {regulatorySections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => {
                        setActiveSection(section.id);
                        setDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                        activeSection === section.id 
                          ? 'bg-blue-50 border-l-4 border-blue-600' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        activeSection === section.id ? 'bg-blue-600' : 'bg-gray-100'
                      }`}>
                        <section.icon 
                          className={activeSection === section.id ? 'text-white' : 'text-gray-600'} 
                          size={16} 
                        />
                      </div>
                      <span className={`font-semibold ${
                        activeSection === section.id ? 'text-blue-600' : 'text-gray-700'
                      }`}>
                        {section.title}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Tab Navigation */}
          <TabsList className="hidden lg:flex w-full flex-wrap justify-start gap-2 bg-white p-2 rounded-xl border border-gray-200 mb-8">
            {regulatorySections.map((section) => (
              <TabsTrigger key={section.id} value={section.id} className="px-4 py-3 flex items-center gap-2">
                <section.icon size={16} />
                {section.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {regulatorySections.map((section) => (
            <TabsContent key={section.id} value={section.id} className="mt-8">
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{section.title}</h3>
                    <p className="text-lg text-gray-700">{section.content.intro}</p>
                  </div>
                </div>

                {section.content.points && (
                  <div className="space-y-3 mb-8">
                    {section.content.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                        <p className="text-gray-700">{point}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.content.sections && (
                  <div className="space-y-8">
                    {section.content.sections.map((subsection, idx) => (
                      <div key={idx} className="border-l-4 border-blue-600 pl-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">{subsection.title}</h4>
                        <ul className="space-y-3">
                          {subsection.points.map((point, pointIdx) => (
                            <li key={pointIdx} className="flex items-start gap-3">
                              <span className="text-blue-600 mt-1">•</span>
                              <span className="text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Regulatory Documents */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Regulatory Documents</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentsAvailable.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="text-blue-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">{doc.title}</h4>
                    <p className="text-sm text-gray-600">{doc.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{doc.version}</span>
                  <span>Updated: {doc.updated}</span>
                  <span>{doc.size}</span>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleDocumentDownload(doc.title)}
                >
                  <Download size={16} className="mr-2" />
                  Download PDF
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Regulatory Partners */}
        <div className="mt-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">Regulatory Partnerships</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {regulatoryPartners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3">{partner.name}</h4>
                <p className="text-white/80 mb-4">{partner.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {partner.regions.map((region, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Compliance */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About Compliance?</h3>
            <p className="text-gray-700 mb-6">
              Our compliance team is available to answer questions about platform rules, regulatory requirements, 
              and legal matters. Contact us for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => window.location.href = 'mailto:investors@suppple.co.uk?subject=Compliance Inquiry'}
              >
                Email Compliance Team
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  // Scroll to the FAQ section in the regulatory tabs
                  setActiveSection('overview');
                  setTimeout(() => {
                    const faqSection = document.getElementById('regulatory');
                    if (faqSection) {
                      faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 100);
                  alert('Compliance FAQ\n\nFrequently Asked Questions:\n\n1. Who regulates Predict by Suppple?\nWe operate through licensed partners in each jurisdiction, subject to local regulatory oversight.\n\n2. How do I verify my account?\nComplete identity verification through your account settings with government ID and proof of address.\n\n3. Are my funds safe?\nUser funds are segregated from operational funds and held in secure custody arrangements.\n\n4. How are markets settled?\nMarkets settle based on official sources designated in market rules. See Market Resolution Guidelines.\n\n5. What if I disagree with a settlement?\nDisputes can be filed within 48 hours through our support channels.\n\n6. Are there trading limits?\nPosition limits may apply to certain markets. Limits are disclosed before trading.\n\n7. How is my data protected?\nWe comply with GDPR, POPIA, and use encryption and security measures. See Privacy Policy.\n\n8. Can I self-exclude?\nYes, responsible trading tools including deposit limits and self-exclusion are available.\n\nFor more questions, email: investors@suppple.co.uk');
                }}
              >
                View Compliance FAQ
              </Button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Important Notice</h4>
              <p className="text-sm text-gray-700">
                This regulatory information is provided for informational purposes. Trading on prediction markets involves risk 
                and may not be suitable for all users. Please review all terms, rules, and risk disclosures before trading. 
                Predict by Suppple operates through licensed partners. Users must comply with laws in their jurisdiction. 
                Past performance is not indicative of future results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}