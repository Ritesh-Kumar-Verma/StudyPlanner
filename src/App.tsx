import { useState } from 'react';
import { Header } from './components/Header';
import { SyllabusTracker } from './components/SyllabusTracker';
import { TodoList } from './components/TodoList';
import StudyPlanner from './components/StudyPlanner';

function App() {


const [activeTab, setActiveTab] = useState<'syllabus' | 'todo' | 'study_table'>(() => {
  const storedTab = localStorage.getItem('activeTab');
  
  if (storedTab === 'syllabus' || storedTab === 'todo' || storedTab === 'study_table') {
    return storedTab;
  }
  
  return 'todo';
});


  return (
   <div className="min-h-screen bg-gray-50">
  <Header activeTab={activeTab} setActiveTab={setActiveTab} />
  
  <main className="pb-8">
    {activeTab === 'syllabus' && <SyllabusTracker />}
    {activeTab === 'todo' && <TodoList />}
    {activeTab === 'study_table' && <StudyPlanner/> }
  </main>
</div>
  );
}

export default App;