import { FileText, Download, Calendar, TrendingUp, BarChart3, PieChart } from 'lucide-react';
import { Button } from './ui/button';

export function ReportingSection() {
  const financialReports = [
    {
      title: 'Annual Report 2023',
      description: 'Comprehensive annual financial statements and business review for fiscal year 2023.',
      date: 'March 2024',
      type: 'Annual Report',
      size: '4.2 MB',
      downloadUrl: '#',
    },
    {
      title: 'Q3 2024 Quarterly Report',
      description: 'Third quarter financial results and operational highlights.',
      date: 'November 2024',
      type: 'Quarterly Report',
      size: '1.8 MB',
      downloadUrl: '#',
    },
    {
      title: 'Q2 2024 Quarterly Report',
      description: 'Second quarter financial results and operational highlights.',
      date: 'August 2024',
      type: 'Quarterly Report',
      size: '1.7 MB',
      downloadUrl: '#',
    },
    {
      title: 'Q1 2024 Quarterly Report',
      description: 'First quarter financial results and operational highlights.',
      date: 'May 2024',
      type: 'Quarterly Report',
      size: '1.6 MB',
      downloadUrl: '#',
    },
    {
      title: 'Half-Year Report 2024',
      description: 'Mid-year financial review and performance analysis for H1 2024.',
      date: 'July 2024',
      type: 'Interim Report',
      size: '2.5 MB',
      downloadUrl: '#',
    },
  ];

  const governanceReports = [
    {
      title: 'Corporate Governance Report 2024',
      description: 'Overview of governance structure, board composition, and compliance frameworks.',
      date: 'April 2024',
      type: 'Governance',
      size: '1.2 MB',
      downloadUrl: '#',
    },
    {
      title: 'Remuneration Report 2023',
      description: 'Executive compensation policies and disclosures.',
      date: 'March 2024',
      type: 'Governance',
      size: '950 KB',
      downloadUrl: '#',
    },
    {
      title: 'Risk Management Report 2024',
      description: 'Comprehensive risk assessment and mitigation strategies.',
      date: 'June 2024',
      type: 'Risk',
      size: '1.5 MB',
      downloadUrl: '#',
    },
  ];

  const sustainabilityReports = [
    {
      title: 'ESG Report 2023',
      description: 'Environmental, Social, and Governance performance metrics and commitments.',
      date: 'October 2024',
      type: 'ESG',
      size: '3.1 MB',
      downloadUrl: '#',
    },
    {
      title: 'Sustainability Strategy 2024-2027',
      description: 'Long-term sustainability goals and action plans.',
      date: 'January 2024',
      type: 'ESG',
      size: '2.2 MB',
      downloadUrl: '#',
    },
  ];

  const presentations = [
    {
      title: 'Q3 2024 Investor Presentation',
      description: 'Management presentation deck for Q3 2024 earnings call.',
      date: 'November 2024',
      type: 'Presentation',
      size: '8.5 MB',
      downloadUrl: '#',
    },
    {
      title: 'Capital Markets Day 2024',
      description: 'Strategic update and growth outlook presentation.',
      date: 'September 2024',
      type: 'Presentation',
      size: '12.3 MB',
      downloadUrl: '#',
    },
    {
      title: 'Technology Innovation Showcase',
      description: 'Deep dive into AI capabilities and platform infrastructure.',
      date: 'July 2024',
      type: 'Presentation',
      size: '15.7 MB',
      downloadUrl: '#',
    },
  ];

  const reportCategories = [
    {
      title: 'Financial Reports',
      icon: TrendingUp,
      reports: financialReports,
      color: 'blue',
    },
    {
      title: 'Governance & Risk',
      icon: BarChart3,
      reports: governanceReports,
      color: 'purple',
    },
    {
      title: 'ESG & Sustainability',
      icon: PieChart,
      reports: sustainabilityReports,
      color: 'green',
    },
    {
      title: 'Investor Presentations',
      icon: FileText,
      reports: presentations,
      color: 'orange',
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string; hover: string }> = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-300', hover: 'hover:bg-blue-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-300', hover: 'hover:bg-purple-600' },
    green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-300', hover: 'hover:bg-green-600' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-300', hover: 'hover:bg-orange-600' },
  };

  return (
    <section id="reporting" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 p-3 bg-blue-100 rounded-xl">
            <FileText className="text-blue-600" size={40} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Financial Reporting
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive financial reports, governance documents, ESG disclosures, and investor presentations.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Annual Reports', value: '5+', icon: FileText },
            { label: 'Quarterly Updates', value: '20+', icon: Calendar },
            { label: 'Presentations', value: '15+', icon: TrendingUp },
            { label: 'ESG Reports', value: '10+', icon: PieChart },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <stat.icon className="text-blue-600 mx-auto mb-3" size={32} />
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Report Categories */}
        <div className="space-y-12">
          {reportCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color];
            return (
              <div key={categoryIndex}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
                    <Icon className={colors.text} size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>

                {/* Reports Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.reports.map((report, reportIndex) => (
                    <div
                      key={reportIndex}
                      className={`group bg-white border-2 ${colors.border} rounded-xl p-6 hover:shadow-lg transition-all`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-medium`}>
                              {report.type}
                            </span>
                            <span className="text-sm text-gray-500">{report.size}</span>
                          </div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2">{report.title}</h4>
                          <p className="text-sm text-gray-600 mb-3">{report.description}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar size={14} className="mr-1" />
                            {report.date}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className={`flex-1 border-2 ${colors.border} ${colors.text} ${colors.hover} hover:text-white transition-all`}
                          onClick={() => {
                            alert(`Download ${report.title} - This would download the report in a production environment`);
                          }}
                        >
                          <Download size={16} className="mr-2" />
                          Download PDF
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-600 hover:text-gray-900"
                          onClick={() => {
                            alert(`View ${report.title} - This would open the report in a production environment`);
                          }}
                        >
                          View Online
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Archive Notice */}
        <div className="mt-16 bg-white border border-gray-200 rounded-xl p-8 text-center">
          <FileText className="text-gray-400 mx-auto mb-4" size={48} />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Looking for Older Reports?</h3>
          <p className="text-gray-600 mb-6">
            Access our complete archive of historical financial reports, presentations, and regulatory filings.
          </p>
          <Button
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
            onClick={() => {
              alert('Archive access - This would open the historical reports archive in a production environment');
            }}
          >
            View Archive
          </Button>
        </div>

        {/* Email Alerts */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Get Report Notifications</h3>
            <p className="text-white/90 mb-6">
              Receive email alerts when new financial reports, presentations, or regulatory documents are published.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg text-gray-900 placeholder:text-gray-500 flex-1 max-w-md"
              />
              <Button
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => {
                  alert('Email alert subscription - This would subscribe users to report notifications in a production environment');
                }}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
