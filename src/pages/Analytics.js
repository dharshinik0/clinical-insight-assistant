import React from 'react';
import { ChartBarIcon, ChartPieIcon } from '@heroicons/react/24/outline';

const metrics = [
  { label: 'Cases This Month', value: 12, change: '+8.2%', color: 'text-blue-600', icon: <ChartBarIcon className="h-6 w-6 text-blue-400" /> },
  { label: 'Avg. AI Confidence', value: '93.4%', change: '+2.1%', color: 'text-green-600', icon: <ChartPieIcon className="h-6 w-6 text-green-400" /> },
  { label: 'Time Saved', value: '4.2 hrs', change: '+12.5%', color: 'text-purple-600', icon: <ChartBarIcon className="h-6 w-6 text-purple-400" /> },
  { label: 'Accuracy', value: '97.1%', change: '+1.3%', color: 'text-yellow-600', icon: <ChartPieIcon className="h-6 w-6 text-yellow-400" /> },
];

/**
 * Analytics component placeholder.
 * This would contain charts and data visualizations for clinical analytics.
 */
function Analytics() {
  return (
    <div className="max-w-5xl mx-auto mt-8">
      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((m) => (
          <div key={m.label} className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
            {m.icon}
            <div>
              <div className="text-2xl font-bold text-gray-900">{m.value}</div>
              <div className="text-gray-600 text-sm font-semibold">{m.label}</div>
              <div className={`text-xs font-bold ${m.color}`}>{m.change}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Chart Placeholders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow flex flex-col items-center justify-center min-h-[220px]">
          <ChartBarIcon className="h-12 w-12 text-blue-300 mb-2" />
          <div className="text-lg font-semibold text-gray-800 mb-1">Cases Over Time</div>
          <div className="text-gray-500 text-sm">(Chart placeholder)</div>
        </div>
        <div className="bg-white p-8 rounded-xl shadow flex flex-col items-center justify-center min-h-[220px]">
          <ChartPieIcon className="h-12 w-12 text-green-300 mb-2" />
          <div className="text-lg font-semibold text-gray-800 mb-1">AI Confidence Distribution</div>
          <div className="text-gray-500 text-sm">(Chart placeholder)</div>
        </div>
      </div>
    </div>
  );
}

export default Analytics; 