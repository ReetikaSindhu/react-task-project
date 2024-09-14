import Newtask from "./Newtask";

export default function Task({
  onaddt,
  ondelete,
  tasks,
  deletetask,
  selectedid,
}) {
  console.log("task..............", tasks);
  console.log("selectedid..............", selectedid);
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4"> TASK</h2>
      <Newtask onaddt={onaddt}></Newtask>
      {tasks.length > 0 ? (
        <ul className="pt-4 mt-8 rounded-sm bg-stone-100">
          <li>Tasks are here</li>
          {tasks.map((task) => {
            if (task.taskText && task.taskofproject === selectedid) {
              return (
                <li
                  className="justify-between my-4 flex mx-4"
                  key={task.taskId}
                >
                  <span>{task.taskText}</span>
                  <button
                    onClick={() => deletetask(task.taskId)}
                    className="text-stone-700 hover:text-red-500"
                  >
                    Clear Task
                  </button>
                </li>
              );
            }
            return null;
          })}
        </ul>
      ) : (
        <p>No tasks available</p>
      )}
    </section>
  );
}
