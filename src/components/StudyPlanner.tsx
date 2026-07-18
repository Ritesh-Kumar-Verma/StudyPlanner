import  { useState, useEffect } from 'react';
import type { FormEvent } from 'react';




type Status = 'pending' | 'studied' | 'skipped';

interface StudyHistory {
  [date: string]: {
    [subject: string]: Status;
  };
}

export default function StudyPlanner() {
  const [subjects, setSubjects] = useState<string[]>([]);
  const [newSubject, setNewSubject] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  );
  const [studyHistory, setStudyHistory] = useState<StudyHistory>({});

  // 1. Load data from localStorage safely
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedSubjects = localStorage.getItem('planner_subjects');
      const savedHistory = localStorage.getItem('planner_history');

      if (savedSubjects) setSubjects(JSON.parse(savedSubjects));
      if (savedHistory) setStudyHistory(JSON.parse(savedHistory));
    }
  }, []);

  // 2. Save data to localStorage automatically
  useEffect(() => {
    if (typeof window !== 'undefined' && subjects.length > 0) {
      localStorage.setItem('planner_subjects', JSON.stringify(subjects));
    }
  }, [subjects]);

  useEffect(() => {
    if (typeof window !== 'undefined' && Object.keys(studyHistory).length > 0) {
      localStorage.setItem('planner_history', JSON.stringify(studyHistory));
    }
  }, [studyHistory]);

  const handleAddSubject = (e: FormEvent) => {
    e.preventDefault();
    if (!newSubject.trim()) return;
    if (subjects.includes(newSubject.trim())) {
      alert("Subject already exists!");
      return;
    }
    setSubjects([...subjects, newSubject.trim()]);
    setNewSubject('');
  };

  const toggleStatus = (subject: string, currentStatus: Status) => {
    let nextStatus: Status = 'pending';
    if (currentStatus === 'pending') nextStatus = 'studied';
    if (currentStatus === 'studied') nextStatus = 'skipped';
    if (currentStatus === 'skipped') nextStatus = 'pending';

    setStudyHistory((prev) => ({
      ...prev,
      [selectedDate]: {
        ...(prev[selectedDate] || {}),
        [subject]: nextStatus,
      },
    }));
  };

  // Helper: Generate the last 7 calendar days cleanly
  const getPastSevenDays = () => {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateString = d.toISOString().split('T')[0];
      const label = d.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' });
      days.push({ dateString, label });
    }
    return days;
  };

  const pastSevenDays = getPastSevenDays();
  const currentDayLogs = studyHistory[selectedDate] || {};

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      
      {/* SECTION 1: WEEKLY PERFORMANCE RECORD */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          📊 Last 7 Days Habit Record
        </h3>
        
        {subjects.length === 0 ? (
          <p className="text-sm text-gray-500 italic text-center py-4">
            Add a subject below to start generating your tracking history matrix!
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="pb-3 font-semibold text-sm text-gray-500 w-1/4">Subject</th>
                  {pastSevenDays.map((day) => (
                    <th key={day.dateString} className="pb-3 text-center font-semibold text-xs text-gray-400">
                      {day.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {subjects.map((subject) => (
                  <tr key={subject} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-3 font-medium text-gray-700 text-sm">{subject}</td>
                    {pastSevenDays.map((day) => {
                      const dayLog = studyHistory[day.dateString] || {};
                      const status = dayLog[subject] || 'pending';

                      return (
                        <td key={day.dateString} className="py-3 text-center">
                          <span 
                            title={`${subject} status on ${day.dateString}: ${status}`}
                            className={`inline-block w-4 h-4 rounded-full transition-all duration-200 ${
                              status === 'studied' ? 'bg-green-500 shadow-sm shadow-green-200 ring-2 ring-green-100' :
                              status === 'skipped' ? 'bg-red-400 shadow-sm shadow-red-200 ring-2 ring-red-100' :
                              'bg-gray-200'
                            }`}
                          />
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Visual Legend */}
            <div className="flex justify-end gap-6 mt-4 text-xs font-medium text-gray-500 border-t border-gray-100 pt-3">
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-500"/> Studied</span>
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-400"/> Skipped</span>
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-gray-200"/> Untracked</span>
            </div>
          </div>
        )}
      </div>

      {/* SECTION 2: DAILY MANAGEMENT HOVER CARD */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Control Board: Pick Date & Create Subjects */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-fit space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Target Tracking Date</label>
            <input 
              type="date" 
              value={selectedDate} 
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700 font-medium bg-gray-50"
            />
          </div>

          <hr className="border-gray-100" />

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Track New Subject</label>
            <form onSubmit={handleAddSubject} className="space-y-2">
              <input
                type="text"
                placeholder="e.g., Mathematics, DBMS"
                value={newSubject}
                onChange={(e) => setNewSubject(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
              />
              <button 
                type="submit" 
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm py-2 px-4 rounded-lg transition-colors shadow-sm"
              >
                + Add to Dashboard
              </button>
            </form>
          </div>
        </div>

        {/* Right Status Logger: Check off tasks day by day */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 md:col-span-2">
          <div className="border-b border-gray-100 pb-3 mb-4">
            <h3 className="text-lg font-bold text-gray-800">Logger Panel</h3>
            <p className="text-xs text-gray-400 font-medium">Updating data for: <span className="text-indigo-600 font-semibold">{selectedDate}</span></p>
          </div>

          {subjects.length === 0 ? (
            <div className="text-center py-12">
              <span className="text-3xl">📚</span>
              <p className="text-gray-500 text-sm font-medium mt-2">Your tracker workspace is empty.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {subjects.map((subject) => {
                const status = currentDayLogs[subject] || 'pending';

                // Configuration setup for dynamic responsive styles
                const badgeConfig = {
                  pending: { bg: 'bg-gray-100 text-gray-700 hover:bg-gray-200', label: 'Mark Action' },
                  studied: { bg: 'bg-green-100 text-green-800 hover:bg-green-200', label: '✅ Studied' },
                  skipped: { bg: 'bg-red-100 text-red-800 hover:bg-red-200', label: '❌ Skipped' }
                };

                return (
                  <div 
                    key={subject} 
                    className="flex justify-between items-center p-3 bg-gray-50 hover:bg-gray-100/70 border border-gray-100 rounded-xl transition-all"
                  >
                    <span className="font-semibold text-gray-700 text-sm pl-1">{subject}</span>
                    <button
                      type="button"
                      onClick={() => toggleStatus(subject, status)}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold shadow-2xs tracking-wide transition-all duration-150 transform active:scale-95 ${badgeConfig[status].bg}`}
                    >
                      {badgeConfig[status].label}
                    </button>
                  </div>
                );
              })}
              <p className="text-[11px] text-gray-400 text-center mt-4">
                💡 Tip: Click a subject's action button to cycle states: Unmarked → Studied → Skipped.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}