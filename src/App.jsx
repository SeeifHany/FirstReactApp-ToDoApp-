import { useState } from "react";

const ToDoApp = () => {
  const [tasklist, setTasklist] = useState([
    // { id: 1, task: "Start"}
  ]);

  const [task, setTask] = useState("");

  const handleAdd = () => {
    const newtasks = {
      id: Date.now(),
      task,
      completed : false
    };

    setTasklist(prev => [...prev, newtasks]);
    setTask("");
  };

  const handleDelete = (id) => {
    setTasklist(prev => prev.filter(tasklist => tasklist.id !== id));
  };
  const handleCompleted = (id) => {
    setTasklist(prev =>
       prev.map(task => task.id === id? {...task,completed : !task.completed } : task));
  }
  

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-2xl ">
      <h1 className="text-3xl font-bold text-center mb-8">ToDo App</h1>

      <div className="space-y-4 mb-6">
        <input
          className="w-full font-semibold p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-300"
          placeholder="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="w-full bg-black text-white font-bold p-3 rounded-xl hover:bg-gray-600 transition-all duration-300 "
          onClick={handleAdd}
        >
          Add New Task
        </button>
      </div>

      <ul className="space-y-2">
        {tasklist.map(tasklist => (
          <li
            key={tasklist.id}
            className={`flex justify-between items-center p-4 rounded-xl transition-all duration-300 bg-gray-100 ${
              tasklist.completed ? "bg-green-200" : ""}`}
          >
            
            <div>
              <p className={`font-semibold ${tasklist.completed ? "line-through text-gray-500 " : ""}`}>
                  {tasklist.task}
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <button
              onClick={() => handleDelete(tasklist.id)}
              className="text-white hover:text-gray-300 shadow-xl bg-red-500 transition-all duration-300 rounded-md p-1"
            >
            Delete
            </button>
            <button
            onClick = {() => handleCompleted(tasklist.id)}
            className="text-white hover:text-gray-300 shadow-xl bg-green-500 transition-all duration-300 rounded-md p-1"
            >
              {tasklist.completed? "Undo" : "Done"}
            </button>
            </div>
            
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
