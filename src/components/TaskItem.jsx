export default function TaskItem({ task, onComplete, onDelete }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center flex-1">
        <span
          className={`text-lg flex-1 ${
            task.completed
              ? 'text-green-600 font-medium'
              : 'text-gray-800'
          }`}
        >
          {task.completed && '✔️ '}
          {task.text}
        </span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onComplete(task.id)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            task.completed
              ? 'bg-green-500 text-white hover:bg-green-600'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
