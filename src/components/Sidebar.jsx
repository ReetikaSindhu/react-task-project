import SelectedProject from "./SelectedProject";

export default function Sidebar({
  onstartaddproject,
  proyours,
  onprojectSelect,
  selectedProject,
}) {
  
  const projects = proyours;

  return (
    <div className="w-1/3 px-8 py-16 bg-stone-600 text-stone-50">
      <h2 className="mb-18 font-bold uppercase">YOUR PROJECTS </h2>
      <button
        onClick={onstartaddproject}
        className="px-4 py-2 uppercase text-xs md:text-base rounded-md bg-stone-700 
        text-stone-400 hover:text-stone-100 hover:bg-stone-600"
      >
        + Add Project
      </button>
      <div>
        {proyours.length > 0 ? (
          <ul>
            {proyours.map((project1) => {
              // Initialize base CSS class
              let cssclass =
                "w-full px-4 py-2 uppercase rounded-sm m-3 md:text-base hover:bg-stone-50 hover:text-stone-900";

              // Append conditional classes based on whether the project is selected
              if (selectedProject && selectedProject.id === project1.id) {
                cssclass += " bg-yellow-500 text-yellow-900";
              } else {
                cssclass += " text-stone-400"; // Ensures it uses a valid color class
              }

              return (
                <>
                  <li key={project1.title}>
                    <button
                      className={cssclass}
                      onClick={() => {
                        onprojectSelect(project1.id);
                       
                      }}
                      //             className="w-full px-4 py-2 uppercase text-xs md:text-base rounded-md bg-stone-400
                      // text-stone-100 hover:text-stone-50 hover:bg-stone-600"
                    >
                      {project1.title}
                    </button>
                  </li>
                </>
              );
            })}
          </ul>
        ) : (
          <p>no project</p>
        )}
      </div>
    </div>
  );
}
