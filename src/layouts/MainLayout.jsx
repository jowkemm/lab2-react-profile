import { Link, Outlet } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const MainLayout = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navbar */}
      <nav className="p-4 flex justify-between items-center border-b dark:border-gray-700 shadow-sm">
        <h1 className="text-xl font-bold">MyPortfolio</h1>
        
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
          <Link to="/projects" className="hover:text-blue-500 transition-colors">Projects</Link>
          <Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
          
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="p-8">
        <Outlet /> {/* Child pages will render here */}
      </main>
    </div>
  );
};

export default MainLayout;