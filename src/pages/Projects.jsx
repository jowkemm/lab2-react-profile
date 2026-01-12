const projects = [
  { id: 1, title: "E-Commerce Web", desc: "A full-stack shopping platform." },
  { id: 2, title: "Social Dashboard", desc: "Analytics dashboard with charts." },
  { id: 3, title: "Task Manager", desc: "Productivity app with React." },
  { id: 4, title: "Portfolio V1", desc: "My first HTML/CSS site." },
  { id: 5, title: "Weather App", desc: "Real-time weather fetching." },
];

const Projects = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
      {/* Grid: 1 col by default, 3 cols on 'md' screens */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="p-6 border rounded-lg shadow-md hover:shadow-xl transition-shadow bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;