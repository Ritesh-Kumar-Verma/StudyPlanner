import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { TodoItem } from '../types/todos';
import { Plus, Trash2, CheckCircle2, Circle, ListTodo, Trophy } from 'lucide-react';

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useLocalStorage<TodoItem[]>('todos', []);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      const todo: TodoItem = {
        id: Date.now().toString(),
        text: newTodo.trim(),
        completed: false,
        createdAt: new Date(),
      };
      setTodos([todo, ...todos]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id 
        ? { 
            ...todo, 
            completed: !todo.completed,
            completedAt: !todo.completed ? new Date() : undefined
          }
        : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);
  const completionRate = todos.length > 0 ? Math.round((completedTodos.length / todos.length) * 100) : 0;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Stats */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Task Management</h2>
            <p className="text-green-100">Stay organized and productive</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold">{completionRate}%</div>
            <div className="flex items-center mt-2">
              <Trophy className="h-5 w-5 mr-1" />
              <span className="text-sm">Completion Rate</span>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white bg-opacity-20 rounded-full h-3">
          <div
            className="bg-white rounded-full h-3 transition-all duration-500"
            style={{ width: `${completionRate}%` }}
          ></div>
        </div>
      </div>

      {/* Add Todo */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Add a new task..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
            />
          </div>
          <button
            onClick={addTodo}
            disabled={!newTodo.trim()}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              newTodo.trim()
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Active Todos */}
      {activeTodos.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <ListTodo className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-xl font-bold text-gray-900">
              Active Tasks ({activeTodos.length})
            </h3>
          </div>
          <div className="space-y-3">
            {activeTodos.map((todo) => (
              <div
                key={todo.id}
                className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => toggleTodo(todo.id)}
                      className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                    >
                      <Circle className="h-6 w-6" />
                    </button>
                    <span className="text-gray-900 font-medium">{todo.text}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">
                      {new Date(todo.createdAt).toLocaleDateString()}
                    </span>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="text-gray-400 hover:text-red-600 transition-colors duration-200"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Completed Todos */}
      {completedTodos.length > 0 && (
        <div>
          <div className="flex items-center mb-4">
            <CheckCircle2 className="h-6 w-6 text-green-600 mr-2" />
            <h3 className="text-xl font-bold text-gray-900">
              Completed Tasks ({completedTodos.length})
            </h3>
          </div>
          <div className="space-y-3">
            {completedTodos.map((todo) => (
              <div
                key={todo.id}
                className="bg-green-50 rounded-xl shadow-md p-4 border-2 border-green-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => toggleTodo(todo.id)}
                      className="text-green-600 hover:text-green-700 transition-colors duration-200"
                    >
                      <CheckCircle2 className="h-6 w-6" />
                    </button>
                    <span className="text-green-700 font-medium line-through">{todo.text}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-green-600">
                      Completed {todo.completedAt ? new Date(todo.completedAt).toLocaleDateString() : ''}
                    </span>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="text-green-400 hover:text-red-600 transition-colors duration-200"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {todos.length === 0 && (
        <div className="text-center py-12">
          <ListTodo className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No tasks yet</h3>
          <p className="text-gray-600">Add your first task to get started with your study planning!</p>
        </div>
      )}
    </div>
  );
};