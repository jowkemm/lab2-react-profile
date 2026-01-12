import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-[60vh]">
      <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
        Welcome to My Portfolio
      </h1>
      <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
        I am a developer passionate about building modern web applications.
      </p>
      <Link 
        to="/projects"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-transform hover:scale-105"
      >
        View My Work
      </Link>
    </div>
  );
};

export default Home;