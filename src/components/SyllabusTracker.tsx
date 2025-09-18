import React, { useState } from 'react';
import { syllabuses} from '../data/syllabuses';
import type { Syllabus, Subject, Topic } from '../data/syllabuses';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ChevronDown, ChevronRight, BookOpen, Trophy, Target } from 'lucide-react';

interface SyllabusProgress {
  [examId: string]: {
    [subjectId: string]: {
      [topicId: string]: boolean;
    };
  };
}

export const SyllabusTracker: React.FC = () => {
  
  const [selectedExam, setSelectedExam] = useState<string>('ssc');
  const [expandedSubjects, setExpandedSubjects] = useState<Set<string>>(new Set());
  const [progress, setProgress] = useLocalStorage<SyllabusProgress>('syllabusProgress', {});

  const currentSyllabus = syllabuses.find(s => s.id === selectedExam);

  const toggleSubject = (subjectId: string) => {
    const newExpanded = new Set(expandedSubjects);
    if (newExpanded.has(subjectId)) {
      newExpanded.delete(subjectId);
    } else {
      newExpanded.add(subjectId);
    }
    setExpandedSubjects(newExpanded);
  };

  const toggleTopic = (subjectId: string, topicId: string) => {
    const newProgress = { ...progress };
    if (!newProgress[selectedExam]) {
      newProgress[selectedExam] = {};
    }
    if (!newProgress[selectedExam][subjectId]) {
      newProgress[selectedExam][subjectId] = {};
    }
    
    newProgress[selectedExam][subjectId][topicId] = !newProgress[selectedExam][subjectId][topicId];
    setProgress(newProgress);
  };

  const isTopicCompleted = (subjectId: string, topicId: string): boolean => {
    return progress[selectedExam]?.[subjectId]?.[topicId] || false;
  };

  const getSubjectProgress = (subject: Subject): number => {
    const completedTopics = subject.topics.filter(topic => 
      isTopicCompleted(subject.id, topic.id)
    ).length;
    return Math.round((completedTopics / subject.topics.length) * 100);
  };

  const getOverallProgress = (syllabus: Syllabus): number => {
    const totalTopics = syllabus.subjects.reduce((sum, subject) => sum + subject.topics.length, 0);
    const completedTopics = syllabus.subjects.reduce((sum, subject) => 
      sum + subject.topics.filter(topic => isTopicCompleted(subject.id, topic.id)).length, 0
    );
    return totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
  };

  if (!currentSyllabus) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Exam Selection */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4">
          {syllabuses.map((syllabus) => (
            <button
              key={syllabus.id}
              onClick={() => setSelectedExam(syllabus.id)}
              className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                selectedExam === syllabus.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
              }`}
            >
              <BookOpen className="h-5 w-5 mr-2" />
              {syllabus.name}
            </button>
          ))}
        </div>
      </div>

      {/* Overall Progress */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{currentSyllabus.name}</h2>
            <p className="text-blue-100">Overall Progress</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold">{getOverallProgress(currentSyllabus)}%</div>
            <div className="flex items-center mt-2">
              <Trophy className="h-5 w-5 mr-1" />
              <span className="text-sm">Keep going!</span>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white bg-opacity-20 rounded-full h-3">
          <div
            className="bg-white rounded-full h-3 transition-all duration-500"
            style={{ width: `${getOverallProgress(currentSyllabus)}%` }}
          ></div>
        </div>
      </div>

      {/* Subjects */}
      <div className="space-y-6">
        {currentSyllabus.subjects.map((subject) => {
          const progressPercentage = getSubjectProgress(subject);
          const isExpanded = expandedSubjects.has(subject.id);
          
          return (
            <div key={subject.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleSubject(subject.id)}
                className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {isExpanded ? (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-500" />
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{subject.name}</h3>
                      <p className="text-sm text-gray-600">
                        {subject.topics.filter(topic => isTopicCompleted(subject.id, topic.id)).length} / {subject.topics.length} topics completed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{progressPercentage}%</div>
                    </div>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </button>

              {isExpanded && (
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {subject.topics.map((topic) => {
                      const isCompleted = isTopicCompleted(subject.id, topic.id);
                      return (
                        <label
                          key={topic.id}
                          className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                            isCompleted
                              ? 'bg-green-50 border-2 border-green-200'
                              : 'bg-gray-50 hover:bg-blue-50 border-2 border-transparent hover:border-blue-200'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isCompleted}
                            onChange={() => toggleTopic(subject.id, topic.id)}
                            className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500 focus:ring-offset-0"
                          />
                          <span className={`text-sm font-medium ${
                            isCompleted ? 'text-green-700 line-through' : 'text-gray-700'
                          }`}>
                            {topic.name}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};