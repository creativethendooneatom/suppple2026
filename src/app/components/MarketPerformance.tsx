import { motion } from 'motion/react';
import { TrendingUp, DollarSign, BarChart3, PieChart } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart as RePieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function MarketPerformance() {
  const revenueData = [
    { quarter: 'Q1 2023', revenue: 320, profit: 45 },
    { quarter: 'Q2 2023', revenue: 345, profit: 52 },
    { quarter: 'Q3 2023', revenue: 380, profit: 61 },
    { quarter: 'Q4 2023', revenue: 425, profit: 75 },
    { quarter: 'Q1 2024', revenue: 450, profit: 82 },
    { quarter: 'Q2 2024', revenue: 480, profit: 91 },
  ];

  const regionalRevenue = [
    { name: 'Europe', value: 45, color: '#3b82f6' },
    { name: 'Africa', value: 30, color: '#8b5cf6' },
    { name: 'Americas', value: 20, color: '#10b981' },
    { name: 'Asia Pacific', value: 5, color: '#f59e0b' },
  ];

  const segmentData = [
    { segment: 'Sports Betting', value: 450 },
    { segment: 'Casino', value: 380 },
    { segment: 'Live Gaming', value: 220 },
    { segment: 'Other', value: 90 },
  ];

  const keyMetrics = [
    {
      label: 'Market Cap',
      value: '£250m+',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
    },
    {
      label: 'Stock Price',
      value: '£2.50',
      change: '+8.2%',
      trend: 'up',
      icon: TrendingUp,
    },
    {
      label: 'Revenue (TTM)',
      value: '$1.73B',
      change: '+18.3%',
      trend: 'up',
      icon: BarChart3,
    },
    {
      label: 'EBITDA Margin',
      value: '22.5%',
      change: '+2.1pp',
      trend: 'up',
      icon: PieChart,
    },
  ];

  return (
    <section id="market-performance" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Market Performance & Financials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Consistent growth and strong financial performance driving shareholder value.
            </p>
          </motion.div>
        </div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {keyMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <metric.icon className="text-blue-600" size={24} />
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  metric.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {metric.change}
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Revenue & Profit Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-200 p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Quarterly Revenue & Profit Growth</h3>
          <div style={{ width: '100%', height: '320px' }}>
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="quarter" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  name="Revenue ($M)"
                  dot={{ fill: '#3b82f6', r: 5 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="profit" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  name="Net Profit ($M)"
                  dot={{ fill: '#10b981', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Regional Revenue & Segment Performance */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Regional Revenue */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-200 p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Revenue by Region</h3>
            <div style={{ width: '100%', height: '320px' }}>
              <ResponsiveContainer width="100%" height={320}>
                <RePieChart>
                  <Pie
                    data={regionalRevenue}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {regionalRevenue.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RePieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {regionalRevenue.map((region, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: region.color }}
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{region.name}</div>
                    <div className="text-sm text-gray-600">{region.value}%</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Segment Performance */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-200 p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Revenue by Segment ($M)</h3>
            <div style={{ width: '100%', height: '320px' }}>
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={segmentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="segment" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#fff', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Financial Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 md:p-12 text-white"
        >
          <h3 className="text-3xl font-bold text-center mb-8">FY 2024 Financial Highlights</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Total Revenue', value: '$1.73B', growth: '+18.3%' },
              { label: 'Gross Profit', value: '$856M', growth: '+21.5%' },
              { label: 'EBITDA', value: '$389M', growth: '+24.2%' },
              { label: 'Net Income', value: '$267M', growth: '+28.7%' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{item.value}</div>
                <div className="text-white/90 mb-2">{item.label}</div>
                <div className="inline-block px-3 py-1 bg-green-500/20 rounded-full text-green-300 text-sm">
                  {item.growth} YoY
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}