import NewTask from "./NewTask.jsx";

const Tasks = ({ tasks, onAdd, onDelete }) => {

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAdd} />
      {tasks.length == 0 && (
        <p className="text-stone-800 py-4">
          This project does not have any tasks
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-4 bg-stone-100 rounded-md">
          {tasks.map((task) => (
            <li key={task.taskId} className="flex justify-between py-2">
              <span className="text-stone-600">{task.text}</span>
              <button
                onClick={() => onDelete(task.taskId)}Í
                className="text-stone-700 hover:text-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
export default Tasks;
