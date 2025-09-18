import { useState } from 'react';
import { Header } from './components/Header';
import { SyllabusTracker } from './components/SyllabusTracker';
import { TodoList } from './components/TodoList';

function App() {


  const [activeTab, setActiveTab] = useState<'syllabus' | 'todo'>(() => {
  const storedTab = localStorage.getItem('activeTab');
  return storedTab === 'todo' ? 'todo' : 'syllabus';
});


  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="pb-8">
        {activeTab === 'syllabus' ? <SyllabusTracker /> : <TodoList />}
      </main>
    </div>
  );
}

export default App;