import React, { useState } from 'react';

const mockNotes = [
  {
    id: 1,
    patient: 'John Doe',
    date: '2024-06-01',
    summary: 'Chest pain, possible angina. EKG and labs ordered.'
  },
  {
    id: 2,
    patient: 'Jane Smith',
    date: '2024-05-28',
    summary: 'Fever and cough, likely viral. Supportive care.'
  }
];

/**
 * SOAPNotes component placeholder.
 * This would contain the UI for generating and managing SOAP notes.
 */
function SOAPNotes() {
  const [form, setForm] = useState({
    patient: '',
    age: '',
    gender: '',
    complaint: '',
    note: ''
  });
  const [notes, setNotes] = useState(mockNotes);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setNotes([
        {
          id: notes.length + 1,
          patient: form.patient,
          date: new Date().toISOString().slice(0, 10),
          summary: form.note || form.complaint
        },
        ...notes
      ]);
      setForm({ patient: '', age: '', gender: '', complaint: '', note: '' });
      setSubmitting(false);
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      {/* Form Card */}
      <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Generate New SOAP Note</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Patient Name</label>
            <input name="patient" value={form.patient} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Age</label>
            <input name="age" value={form.age} onChange={handleChange} type="number" min="0" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Gender</label>
            <select name="gender" value={form.gender} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Chief Complaint</label>
            <input name="complaint" value={form.complaint} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-1">SOAP Note</label>
            <textarea name="note" value={form.note} onChange={handleChange} rows={4} className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="Enter full SOAP note or leave blank to auto-generate..." />
          </div>
          <div className="md:col-span-2 text-right">
            <button type="submit" disabled={submitting} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">
              {submitting ? 'Generating...' : 'Generate SOAP Note'}
            </button>
          </div>
        </form>
      </div>
      {/* Notes List Card */}
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Previous SOAP Notes</h3>
        {notes.length === 0 ? (
          <div className="text-gray-500 text-center py-8">No notes yet.</div>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="py-2">Date</th>
                <th className="py-2">Patient</th>
                <th className="py-2">Summary</th>
              </tr>
            </thead>
            <tbody>
              {notes.map(note => (
                <tr key={note.id} className="border-b last:border-0">
                  <td className="py-2 text-gray-700">{note.date}</td>
                  <td className="py-2 text-gray-700">{note.patient}</td>
                  <td className="py-2 text-gray-700">{note.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default SOAPNotes;
