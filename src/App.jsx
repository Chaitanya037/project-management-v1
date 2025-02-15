import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectsState] = useState({
    projects: [],
    selectedProject: undefined,
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const newTask = {
        taskId: Math.random(),
        projectId: prevState.selectedProject,
        text: text,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.taskId !== id),
      };
    });
  }

  function handleSelectedProject(id) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProject: id,
    }));
  }

  function handleStartAddProject(project) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProject: null,
    }));
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProject: undefined,
    }));
  }

  function handleAddProject(ProjectData) {
    setProjectsState((prevState) => {
      const newProject = {
        id: Math.random(),
        ...ProjectData,
      };
      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProject
        ),
      };
    });
  }

  const selectProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProject
  );

  let content = (
    <SelectedProject
      project={selectProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );

  if (projectState.selectedProject === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectedProject={handleSelectedProject}
      />
      {content}
    </main>
  );
}

export default App;
