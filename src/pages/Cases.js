import React, { useState } from 'react';

const mockCases = [
  { id: 1, patient: 'John Doe', status: 'Open', date: '2024-06-01', complaint: 'Chest pain' },
  { id: 2, patient: 'Jane Smith', status: 'Closed', date: '2024-05-28', complaint: 'Fever and cough' },
  { id: 3, patient: 'Sam Patel', status: 'Open', date: '2024-05-25', complaint: 'Headache' },
];

/**
 * Cases component placeholder.
 * This would contain the UI for managing patient cases.
 */
function Cases() {
  const [search, setSearch] = useState('');
  const [cases, setCases] = useState(mockCases);

  const filtered = cases.filter(c =>
    c.patient.toLowerCase().includes(search.toLowerCase()) ||
    c.complaint.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto mt-8">
      {/* Search and Create Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="Search by patient or complaint..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full md:w-1/2 border border-gray-300 rounded-lg px-3 py-2"
        />
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">
          + Create New Case
        </button>
      </div>
      {/* Cases Table Card */}
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Patient Cases</h3>
        {filtered.length === 0 ? (
          <div className="text-gray-500 text-center py-8">No cases found.</div>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="py-2">Date</th>
                <th className="py-2">Patient</th>
                <th className="py-2">Complaint</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id} className="border-b last:border-0">
                  <td className="py-2 text-gray-700">{c.date}</td>
                  <td className="py-2 text-gray-700">{c.patient}</td>
                  <td className="py-2 text-gray-700">{c.complaint}</td>
                  <td className="py-2 text-gray-700">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${c.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}>{c.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Cases;
