import Buttton from "./Button.jsx";

const ProjectsSidebar = ({
  onStartAddProject,
  projects,
  onSelectedProject,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Buttton onClick={onStartAddProject}>+ Add Project</Buttton>
      </div>

      <ul className="mt-8">
        {projects &&
          projects.map((project) => (
            <li key={project.id} className="my-4">
              <button
                href="#"
                className="w-full text-left p-2 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800 active:bg-stone-800 active:text-stone-200"
                onClick={() => onSelectedProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          ))}
      </ul>
    </aside>
  );
};
export default ProjectsSidebar;
