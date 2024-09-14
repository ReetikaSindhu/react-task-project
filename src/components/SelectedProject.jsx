import Task from "./Task";
export default function SelectedProject({
  project,
  ondelete,
  selectedid,
  onadd,
  ondeletetask,
  tasks,
  deletetask,
}) {
  console.log(selectedid);

  if (!project) {
    return <p>No project selected</p>; // Fallback UI if project is undefined
  }

  const formatteDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    date: "numeric",
  });
  return (
    <>
      <div className="w-[35rem] flex  m-16 flex flex-col space-y-4">
        <div className=" flex  m-8 flex flex-row space-x-2">
          <div className=" w-[20rem]flex  m-16 flex flex-col space-x-4">
            <div>
              <h2 className="font-bold text-3xl text-stone-300 mb-2">
                {project.title}
              </h2>
            </div>
            <div>
              <p className="whitespace-pre-wrap">{project.description}</p>
            </div>
            <div>
              <h2>TO BE DONE BY:</h2>
            </div>

            <div>
              <p>{project.programmer}</p>
            </div>
            <div>
              <h6 className="mb-4 text-stone-400">by :{formatteDate}</h6>
            </div>
          </div>
          <div>
            <div>
              <button
                onClick={ondelete}
                className="text-stone-400 hover:text-stone-950 rounded-sm"
              >
                Delete
              </button>
            </div>
          </div>
          <hr className="border-t border-gray-300 my-4" />
        </div>
        <Task
          onaddt={onadd}
          tasks={tasks}
          selectedid={selectedid}
          deletetask={deletetask}
          ondelete={ondeletetask}
        ></Task>
      </div>
    </>
  );
}
