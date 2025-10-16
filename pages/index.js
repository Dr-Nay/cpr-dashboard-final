import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle, TrendingUp, DollarSign, Calendar, CheckCircle, Clock, Users, Target } from 'lucide-react';

const CPRDashboard = () => {
  const [view, setView] = useState('executive');
  const [selectedOrg, setSelectedOrg] = useState('all');
  const [alertFilter, setAlertFilter] = useState('all');

  // CPR Phase Progress Data
  const phaseData = [
    { phase: 'Foundation', completion: 95, status: 'Complete', month: 'M1-2' },
    { phase: 'Initial Implementation', completion: 72, status: 'In Progress', month: 'M3-4' },
    { phase: 'Integration', completion: 45, status: 'On Track', month: 'M5-8' },
    { phase: 'Sustainability', completion: 15, status: 'Pending', month: 'M9-12' }
  ];

  // Trend Data
  const trendData = [
    { month: 'M1', analysis: 60, execution: 40, recalibration: 20 },
    { month: 'M2', analysis: 85, execution: 55, recalibration: 35 },
    { month: 'M3', analysis: 90, execution: 75, recalibration: 50 },
    { month: 'M4', analysis: 92, execution: 82, recalibration: 62 },
    { month: 'M5', analysis: 94, execution: 88, recalibration: 75 },
  ];

  // Financial Impact Data
  const financialData = [
    { month: 'M1', projected: 0, actual: 0, savings: 0, revenue: 0 },
    { month: 'M2', projected: 180000, actual: 165000, savings: 95000, revenue: 70000 },
    { month: 'M3', projected: 420000, actual: 410000, savings: 240000, revenue: 170000 },
    { month: 'M4', projected: 720000, actual: 745000, savings: 420000, revenue: 325000 },
    { month: 'M5', projected: 1050000, actual: 1128000, savings: 640000, revenue: 488000 },
  ];

  // Timeline Adherence Data
  const timelineData = [
    { phase: 'Foundation', planned: 100, actual: 95, risk: 0 },
    { phase: 'Initial Implementation', planned: 100, actual: 72, risk: 5 },
    { phase: 'Integration', planned: 100, actual: 45, risk: 12 },
    { phase: 'Sustainability', planned: 100, actual: 15, risk: 25 },
  ];

  // Organization Financial Performance
  const orgFinancialData = [
    { org: 'RS Internal', investment: 450000, realized: 485000, roi: '7.8%', timeAdherence: 94 },
    { org: 'Client A', investment: 850000, realized: 780000, roi: '-8.2%', timeAdherence: 78 },
    { org: 'Client B', investment: 720000, realized: 795000, roi: '10.4%', timeAdherence: 85 },
    { org: 'Client C', investment: 580000, realized: 485000, roi: '-16.4%', timeAdherence: 68 },
  ];

  // Milestone Timeline
  const milestoneData = [
    { name: 'Assessment Complete', dueDate: 'M2', status: 'Complete', daysVariance: -2 },
    { name: 'Dashboards Launched', dueDate: 'M4', status: 'On Track', daysVariance: 0 },
    { name: 'Executive Alignment', dueDate: 'M5', status: 'At Risk', daysVariance: 5 },
    { name: 'Capability Building', dueDate: 'M8', status: 'At Risk', daysVariance: 12 },
    { name: 'Sustainability Plan', dueDate: 'M12', status: 'Pending', daysVariance: 0 },
  ];

  // Strategic Imperative Status
  const imperativeData = [
    { name: 'Strategic Alignment', value: 88, target: 90, status: 'On Track' },
    { name: 'Cross-Functional Execution', value: 75, target: 80, status: 'At Risk' },
    { name: 'Performance Visibility', value: 92, target: 90, status: 'Exceeding' },
    { name: 'Capability Building', value: 68, target: 75, status: 'At Risk' },
    { name: 'Change Adoption', value: 81, target: 85, status: 'On Track' },
  ];

  // Organization Performance
  const orgData = [
    { org: 'RS Internal', cpr: 89, adoption: 86, impact: 92 },
    { org: 'Client A', cpr: 75, adoption: 72, impact: 78 },
    { org: 'Client B', cpr: 82, adoption: 80, impact: 85 },
    { org: 'Client C', cpr: 68, adoption: 65, impact: 70 },
  ];

  // Alert Data
  const alerts = [
    { id: 1, type: 'At Risk', message: 'Client C - Timeline slipping; 12 days behind schedule', severity: 'high', time: '2 hours ago' },
    { id: 2, type: 'Warning', message: 'Client A - ROI realization below target by $70K this month', severity: 'high', time: '4 hours ago' },
    { id: 3, type: 'Notice', message: 'RS Internal - Exceeded financial targets by $35K', severity: 'low', time: '1 day ago' },
    { id: 4, type: 'At Risk', message: 'Client B - Timeline adherence degrading; watch M8-9 phase', severity: 'medium', time: '6 hours ago' },
    { id: 5, type: 'Warning', message: 'Cross-org - Initiative resource constraints impacting phase completion', severity: 'medium', time: '8 hours ago' },
  ];

  // KPI Overview
  const kpis = [
    { label: 'Total Financial Impact', value: '$3.14M', change: '+$280K', icon: DollarSign, subtext: 'Realized vs. Projected' },
    { label: 'Avg. Timeline Adherence', value: '81%', change: '-4%', icon: Calendar, subtext: 'Across all phases' },
    { label: 'Implementation Progress', value: '78%', change: '+5%', icon: Target, subtext: 'Overall completion' },
    { label: 'Executive Alignment', value: '87/100', change: '+3', icon: Users, subtext: 'CPR adoption score' },
  ];

  // Certification Progress
  const certProgress = [
    { module: 'Intro to CPR', completion: 100 },
    { module: 'Strategic Visioning', completion: 95 },
    { module: 'Strategic Planning', completion: 78 },
    { module: 'Cross-Functional Leadership', completion: 65 },
    { module: 'Measurement & Accountability', completion: 45 },
  ];

  const filteredAlerts = alertFilter === 'all' 
    ? alerts 
    : alerts.filter(a => a.severity === alertFilter);

  const getSeverityColor = (severity) => {
    const colors = {
      high: 'border-l-4 border-red-500 bg-red-50',
      medium: 'border-l-4 border-yellow-500 bg-yellow-50',
      low: 'border-l-4 border-blue-500 bg-blue-50',
    };
    return colors[severity] || colors.low;
  };

  const getStatusColor = (status) => {
    const colors = {
      'Exceeding': 'text-green-600 bg-green-100',
      'On Track': 'text-blue-600 bg-blue-100',
      'At Risk': 'text-red-600 bg-red-100',
      'Complete': 'text-green-600 bg-green-100',
      'In Progress': 'text-blue-600 bg-blue-100',
      'Pending': 'text-gray-600 bg-gray-100',
    };
    return colors[status] || colors['On Track'];
  };

  const totalFinancialRealized = financialData[financialData.length - 1].actual;
  const totalInvestment = orgFinancialData.reduce((sum, org) => sum + org.investment, 0);
  const totalRealized = orgFinancialData.reduce((sum, org) => sum + org.realized, 0);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">CPR Implementation Dashboard</h1>
            <p className="text-slate-300">Real-time performance with financial impact and timeline adherence</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-emerald-400">{((totalRealized / totalInvestment) * 100 - 100).toFixed(1)}%</div>
            <p className="text-slate-300 text-sm">ROI Realization Rate</p>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex gap-4 mb-6 flex-wrap">
          <div className="flex gap-2">
            <button
              onClick={() => setView('executive')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                view === 'executive'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              Executive View
            </button>
            <button
              onClick={() => setView('financial')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                view === 'financial'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              Financial Impact
            </button>
            <button
              onClick={() => setView('timeline')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                view === 'timeline'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              Timeline Adherence
            </button>
            <button
              onClick={() => setView('alerts')}
              className={`px-4 py-2 rounded-lg font-medium transition relative ${
                view === 'alerts'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              Alerts & Actions
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {alerts.filter(a => a.severity === 'high').length}
              </span>
            </button>
          </div>

          <select
            value={selectedOrg}
            onChange={(e) => setSelectedOrg(e.target.value)}
            className="px-4 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-emerald-500 outline-none"
          >
            <option value="all">All Organizations</option>
            <option value="rs">RS Internal</option>
            <option value="clientA">Client A</option>
            <option value="clientB">Client B</option>
            <option value="clientC">Client C</option>
          </select>
        </div>
      </div>

      {/* Executive View */}
      {view === 'executive' && (
        <div className="space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpis.map((kpi, idx) => {
              const Icon = kpi.icon;
              return (
                <div key={idx} className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-emerald-500 transition">
                  <div className="flex justify-between items-start mb-4">
                    <Icon className="text-emerald-400" size={24} />
                    <span className={`text-sm font-medium ${kpi.change.startsWith('-') ? 'text-red-400' : 'text-green-400'}`}>{kpi.change}</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-1">{kpi.label}</p>
                  <p className="text-3xl font-bold text-white">{kpi.value}</p>
                  <p className="text-slate-500 text-xs mt-2">{kpi.subtext}</p>
                </div>
              );
            })}
          </div>

          {/* Phase Progress & Trend Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Phase Progress */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">CPR Implementation Phases</h2>
              <div className="space-y-4">
                {phaseData.map((phase, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 font-medium">{phase.phase} ({phase.month})</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(phase.status)}`}>
                        {phase.completion}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-2 rounded-full transition-all"
                        style={{ width: `${phase.completion}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trend Chart */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">CPR Component Progression</h2>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                    labelStyle={{ color: '#e2e8f0' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="analysis" stroke="#10b981" strokeWidth={2} />
                  <Line type="monotone" dataKey="execution" stroke="#3b82f6" strokeWidth={2} />
                  <Line type="monotone" dataKey="recalibration" stroke="#f59e0b" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Strategic Imperatives */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Strategic Imperative Status</h2>
            <div className="space-y-3">
              {imperativeData.map((imp, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                  <div className="flex-1">
                    <p className="text-white font-medium">{imp.name}</p>
                    <div className="flex gap-2 mt-1">
                      <div className="flex-1 bg-slate-600 rounded-full h-1.5 max-w-xs">
                        <div
                          className="bg-emerald-500 h-1.5 rounded-full"
                          style={{ width: `${imp.value}%` }}
                        />
                      </div>
                      <span className="text-slate-400 text-xs">{imp.value}% / {imp.target}%</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded text-xs font-medium ml-4 whitespace-nowrap ${getStatusColor(imp.status)}`}>
                    {imp.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Financial Impact View */}
      {view === 'financial' && (
        <div className="space-y-6">
          {/* Financial Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-400 text-sm mb-2">Total Investment</p>
              <p className="text-3xl font-bold text-white">${(totalInvestment / 1000000).toFixed(2)}M</p>
              <p className="text-emerald-400 text-xs mt-2">Across all implementations</p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-400 text-sm mb-2">Financial Realization</p>
              <p className="text-3xl font-bold text-white">${(totalRealized / 1000000).toFixed(2)}M</p>
              <p className={`text-xs mt-2 ${totalRealized > totalInvestment ? 'text-green-400' : 'text-red-400'}`}>
                {((totalRealized / totalInvestment - 1) * 100).toFixed(1)}% realized
              </p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-400 text-sm mb-2">Avg. Monthly Impact</p>
              <p className="text-3xl font-bold text-white">${(totalFinancialRealized / 5 / 1000).toFixed(0)}K</p>
              <p className="text-emerald-400 text-xs mt-2">This month trajectory</p>
            </div>
          </div>

          {/* Financial Trend */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Financial Impact Timeline</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={financialData}>
                <defs>
                  <linearGradient id="colorProjected" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                  labelStyle={{ color: '#e2e8f0' }}
                  formatter={(value) => `$${(value/1000).toFixed(0)}K`}
                />
                <Legend />
                <Area type="monotone" dataKey="projected" stroke="#3b82f6" fillOpacity={1} fill="url(#colorProjected)" name="Projected" />
                <Area type="monotone" dataKey="actual" stroke="#10b981" fillOpacity={1} fill="url(#colorActual)" name="Actual" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Organization Financial Performance */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Organization Financial Performance</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-4 text-slate-400 font-medium">Organization</th>
                    <th className="text-right py-3 px-4 text-slate-400 font-medium">Investment</th>
                    <th className="text-right py-3 px-4 text-slate-400 font-medium">Realized</th>
                    <th className="text-right py-3 px-4 text-slate-400 font-medium">ROI</th>
                    <th className="text-right py-3 px-4 text-slate-400 font-medium">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {orgFinancialData.map((org, idx) => {
                    const roiNum = parseFloat(org.roi);
                    return (
                      <tr key={idx} className="border-b border-slate-700 hover:bg-slate-700 transition">
                        <td className="py-3 px-4 text-slate-300">{org.org}</td>
                        <td className="text-right py-3 px-4 text-white font-semibold">${(org.investment / 1000).toFixed(0)}K</td>
                        <td className="text-right py-3 px-4 text-white font-semibold">${(org.realized / 1000).toFixed(0)}K</td>
                        <td className={`text-right py-3 px-4 font-bold ${roiNum >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {org.roi}
                        </td>
                        <td className={`text-right py-3 px-4 font-semibold ${org.timeAdherence >= 85 ? 'text-green-400' : org.timeAdherence >= 75 ? 'text-yellow-400' : 'text-red-400'}`}>
                          {org.timeAdherence}%
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Benefit Breakdown */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Benefit Realization Breakdown (M5)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={[
                    { category: 'Cost Savings', value: 640000 },
                    { category: 'Revenue Growth', value: 488000 },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                    <XAxis dataKey="category" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                      labelStyle={{ color: '#e2e8f0' }}
                      formatter={(value) => `$${(value/1000).toFixed(0)}K`}
                    />
                    <Bar dataKey="value" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">Operational Cost Savings</span>
                    <span className="text-emerald-400 font-bold">$640K</span>
                  </div>
                  <p className="text-slate-500 text-sm">Process efficiencies, automation gains, reduced overhead</p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">Revenue Growth</span>
                    <span className="text-emerald-400 font-bold">$488K</span>
                  </div>
                  <p className="text-slate-500 text-sm">New capabilities, market expansion, customer retention</p>
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold">Total Monthly Impact</span>
                    <span className="text-emerald-400 font-bold text-lg">$1.13M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Timeline Adherence View */}
      {view === 'timeline' && (
        <div className="space-y-6">
          {/* Timeline Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-400 text-sm mb-2">On-Time Completion Rate</p>
              <p className="text-3xl font-bold text-white">81%</p>
              <p className="text-blue-400 text-xs mt-2">+3% from last review</p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-400 text-sm mb-2">Avg. Days Variance</p>
              <p className="text-3xl font-bold text-white">-2.6</p>
              <p className="text-emerald-400 text-xs mt-2">Currently trending ahead</p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-400 text-sm mb-2">At-Risk Milestones</p>
              <p className="text-3xl font-bold text-red-400">2</p>
              <p className="text-red-300 text-xs mt-2">Require intervention</p>
            </div>
          </div>

          {/* Phase Timeline Adherence */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Phase Completion vs. Plan</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={timelineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis dataKey="phase" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                  labelStyle={{ color: '#e2e8f0' }}
                />
                <Legend />
                <Bar dataKey="planned" fill="#3b82f6" name="Planned %" />
                <Bar dataKey="actual" fill="#10b981" name="Actual %" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Milestone Status */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Milestone Timeline & Status</h2>
            <div className="space-y-3">
              {milestoneData.map((milestone, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-slate-700 rounded-lg">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    milestone.status === 'Complete' ? 'bg-green-900' :
                    milestone.status === 'On Track' ? 'bg-blue-900' :
                    'bg-red-900'
                  }`}>
                    {milestone.status === 'Complete' ? (
                      <CheckCircle className="text-green-400" size={24} />
                    ) : milestone.status === 'On Track' ? (
                      <Clock className="text-blue-400" size={24} />
                    ) : (
                      <AlertCircle className="text-red-400" size={24} />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold">{milestone.name}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-slate-400 text-sm">Due: {milestone.dueDate}</span>
                      <span className={`text-xs font-medium px-2 py-1 rounded ${
                        milestone.daysVariance === 0 ? 'bg-blue-900 text-blue-300' :
                        milestone.daysVariance < 0 ? 'bg-green-900 text-green-300' :
                        'bg-red-900 text-red-300'
                      }`}>
                        {milestone.daysVariance === 0 ? 'On Time' : `${milestone.daysVariance > 0 ? '+' : ''} ${milestone.daysVariance} days`}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Analysis */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Timeline Risk Assessment</h2>
            <div className="space-y-3">
              {[
                { risk: 'Resource Constraints', impact: 'High', probability: 'Medium', mitigation: 'Accelerate hiring; reallocate from lower priorities' },
                { risk: 'Capability Gaps', impact: 'Medium', probability: 'High', mitigation: 'Intensive training program; external mentoring' },
                { risk: 'Stakeholder Misalignment', impact: 'Medium', probability: 'Medium', mitigation: 'Escalation sessions; alignment workshops' },
                { risk: 'Scope Creep', impact: 'High', probability: 'Medium', mitigation: 'Strict change control; scope gate reviews' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-3 bg-slate-700 rounded-lg">
                  <AlertCircle size={20} className={item.impact === 'High' ? 'text-red-400' : 'text-yellow-400'} />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-white font-semibold">{item.risk}</p>
                      <div className="flex gap-2">
                        <span className={`text-xs px-2 py-1 rounded font-medium ${item.impact === 'High' ? 'bg-red-900 text-red-300' : 'bg-yellow-900 text-yellow-300'}`}>
                          Impact: {item.impact}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded font-medium ${item.probability === 'High' ? 'bg-red-900 text-red-300' : 'bg-yellow-900 text-yellow-300'}`}>
                          {item.probability}
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm">{item.mitigation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Alerts & Actions View */}
      {view === 'alerts' && (
        <div className="space-y-6">
          {/* Alert Filter */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setAlertFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                alertFilter === 'all'
                  ? 'bg-slate-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              All ({alerts.length})
            </button>
            <button
              onClick={() => setAlertFilter('high')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                alertFilter === 'high'
                  ? 'bg-red-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              High Priority ({alerts.filter(a => a.severity === 'high').length})
            </button>
            <button
              onClick={() => setAlertFilter('medium')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                alertFilter === 'medium'
                  ? 'bg-yellow-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              Medium ({alerts.filter(a => a.severity === 'medium').length})
            </button>
          </div>

          {/* Alert List */}
          <div className="space-y-3">
            {filteredAlerts.map((alert) => (
              <div
                key={alert.id}
                className={`rounded-lg p-4 ${getSeverityColor(alert.severity)}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <AlertCircle size={20} className={alert.severity === 'high' ? 'text-red-600' : alert.severity === 'medium' ? 'text-yellow-600' : 'text-blue-600'} />
                    <div>
                      <p className="font-bold text-sm">{alert.type}</p>
                      <p className="text-sm mt-1">{alert.message}</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-white bg-opacity-20 hover:bg-opacity-30 rounded text-xs font-medium transition">
                    View
                  </button>
                </div>
                <p className="text-xs opacity-75 ml-7">{alert.time}</p>
              </div>
            ))}
          </div>

          {/* Adaptive Response Panel */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="text-emerald-400" />
              Recommended Actions
            </h2>
            <div className="space-y-3">
              {[
                {
                  title: 'Escalate Financial Gap - Client A',
                  description: 'ROI shortfall requires root cause analysis. Recommend rapid assessment and intervention plan.',
                  priority: 'Immediate',
                  action: 'Schedule sponsor meeting'
                },
                {
                  title: 'Timeline Recovery - Client C',
                  description: '12 days behind with capability gaps. Recommend resource augmentation and accelerated training.',
                  priority: 'Immediate',
                  action: 'Activate contingency resources'
                },
                {
                  title: 'Phase Risk Mitigation',
                  description: 'Upcoming Integration phase shows resource constraints. Recommend proactive reallocation.',
                  priority: 'High',
                  action: 'Review capacity plan'
                },
                {
                  title: 'Celebrate RS Internal Success',
                  description: 'RS exceeded financial targets and timeline. Leverage as case study for client marketing.',
                  priority: 'Medium',
                  action: 'Create case study asset'
                },
              ].map((action, idx) => (
                <div key={idx} className="bg-slate-700 rounded-lg p-4 hover:bg-slate-600 transition cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-white">{action.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded font-medium whitespace-nowrap ${
                      action.priority === 'Immediate' ? 'bg-red-500 text-white' :
                      action.priority === 'High' ? 'bg-orange-500 text-white' :
                      'bg-blue-500 text-white'
                    }`}>
                      {action.priority}
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm mb-3">{action.description}</p>
                  <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition">
                    {action.action} →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-slate-700 text-center text-slate-400 text-sm">
        <p>Last updated: Today at {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} | Data refreshes every 60 minutes</p>
      </div>
    </div>
  );
};

export default CPRDashboard;
