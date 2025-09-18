import React from 'react';
import { BookOpen, CheckSquare, Target } from 'lucide-react';

interface HeaderProps {
  activeTab: 'syllabus' | 'todo';
  setActiveTab: (tab: 'syllabus' | 'todo') => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Target className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">ExamTracker</h1>
              <p className="text-sm text-gray-600">Track your exam preparation progress</p>
            </div>
          </div>
          
          <nav className="flex space-x-1">
            <button
              onClick={() => setActiveTab('syllabus')}
              className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'syllabus'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Syllabus
            </button>
            <button
              onClick={() => setActiveTab('todo')}
              className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'todo'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <CheckSquare className="h-5 w-5 mr-2" />
              Todo List
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};