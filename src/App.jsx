import React, { useState, useEffect } from "react";
import NewProject from "./components/NewProject";
import Noprojectselected from "./components/Noprojectselected";
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";
import SelectedProject from "./components/SelectedProject";
import { useCallback } from "react";
function App() {
  const [projectstate, setprojectstate] = useState({
    selectedprojectid: undefined,
    projects: [],
    tasks: [],
  });
  const handleaddtask = useCallback((text) => {
    setprojectstate((prev) => {
      const taskid = Math.random();
      const newTask = {
        taskText: text,
        taskId: taskid,
        taskofproject: prev.selectedprojectid,
      };
      const updatedTasks = [...prev.tasks, newTask];
      console.log("Updated task array:", updatedTasks);
      return {
        ...prev,
        tasks: updatedTasks,
      };
    });
  }, []);
  function handledeletetask(id) {
    setprojectstate((prevstate) => {
      return {
        ...prevstate,

        tasks: prevstate.tasks.filter((tas) => tas.taskId !== id),
      };
    });
  }
  function handleSelectProject(id) {
    setprojectstate((prev) => ({ ...prev, selectedprojectid: id }));
  }
  function handleDelete() {
    setprojectstate((prevstate) => {
      return {
        ...prevstate,
        selectedprojectid: undefined,
        projects: prevstate.projects.filter(
          (project) => project.id !== prevstate.selectedprojectid
        ),
      };
    });
  }

  function handlecancel() {
    setprojectstate((prev) => ({
      ...prev,
      selectedprojectid: undefined,
    }));
  }

  function handleaddproject() {
    setprojectstate((prev) => ({
      ...prev,
      selectedprojectid: null,
    }));
  }

  function handleaddsave(projectData) {
    setprojectstate((prev) => {
      const newProject = { ...projectData, id: Math.random() };
      const updatedProjects = [...prev.projects, newProject];

      return {
        ...prev,
        selectedprojectid: undefined,
        projects: updatedProjects,
      };
    });
  }

  useEffect(() => {
    console.log("Selected Project ID is:", projectstate.selectedprojectid);
  }, [projectstate.selectedprojectid]);

  const getSelectedProject = () => {
    const { selectedprojectid, projects } = projectstate;
    let pro = projects.find((project) => project.id === selectedprojectid);

    return pro;
  };

  const selectedProject = getSelectedProject();

  let content;
  if (projectstate.selectedprojectid === null) {
    content = (
      <NewProject
        handlecancel={handlecancel}
        onAdd={handleaddsave} // Ensure this matches the prop name in NewProject
      />
    );
  } else if (projectstate.selectedprojectid === undefined) {
    content = <Noprojectselected onstartaddproject={handleaddproject} />;
  } else if (selectedProject) {
    content = (
      <SelectedProject
        project={selectedProject}
        ondelete={handleDelete}
        selectedid={projectstate.selectedprojectid}
        onadd={handleaddtask}
        deletetask={handledeletetask}
        tasks={projectstate.tasks}
      />
    );
  }

  return (
    <>
      <Modal />
      <h1 className="my-8 text-center text-5xl font-bold">World</h1>
      <div className="flex h-screen my-8 gap-8">
        <Sidebar
          className="font-bold"
          onstartaddproject={handleaddproject}
          proyours={projectstate.projects}
          onprojectSelect={handleSelectProject}
          selectedProject={selectedProject} // Pass selectedprojectid correctly
        />
        {content}
      </div>
    </>
  );
}

export default App;
