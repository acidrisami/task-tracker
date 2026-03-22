import { useState } from 'react'
import TaskItem from './components/TaskItem'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  // This adds anew task
  const handleAddTask = () => {
    if (inputValue.trim() === '') return

    const newTask = {
      id: Date.now().toString(),
      text: inputValue,
      completed: false,
    }

    setTasks([...tasks, newTask])
    setInputValue('')
  }

  // Toggles task completion
  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  // Delete a task
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Handle Enter key in input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            📋 Task Tracker
          </h1>
          <p className="text-gray-600">
            Manage your daily assignments efficiently
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter a new assignment..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleAddTask}
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
            >
              Add Task
            </button>
          </div>
        </div>

        {/* Tasks List or Empty State */}
        <div className="space-y-4">
          {tasks.length === 0 ? (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <p className="text-xl text-gray-600 font-medium">
                ✨ Great job! No pending assignments.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Tasks ({tasks.length})
              </h2>
              {tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onComplete={handleToggleTask}
                  onDelete={handleDeleteTask}
                />
              ))}
            </>
          )}
        </div>

        {/* Stats */}
        {tasks.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-sm text-gray-600">Total Tasks</p>
                <p className="text-2xl font-bold text-gray-800">{tasks.length}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-green-600">
                  {tasks.filter((task) => task.completed).length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

