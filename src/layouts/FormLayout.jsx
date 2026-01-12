import { Outlet, useLocation } from "react-router-dom";

const FormLayout = () => {
  const location = useLocation();

  // Calculate progress based on current URL path
  const getProgress = () => {
    if (location.pathname.includes("step-1")) return "33%";
    if (location.pathname.includes("step-2")) return "66%";
    if (location.pathname.includes("review")) return "100%";
    return "0%";
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border border-gray-200 rounded-xl shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Job Application Portal</h2>
      
      {/* Animated Progress Bar */}
      <div className="w-full bg-gray-200 h-3 mb-8 rounded-full overflow-hidden">
        <div
          className="bg-blue-600 h-full transition-all duration-500 ease-in-out"
          style={{ width: getProgress() }}
        ></div>
      </div>

      {/* The content of Step 1, Step 2, or Review will be rendered here */}
      <div className="min-h-[300px]">
        <Outlet />
      </div>
    </div>
  );
};

export default FormLayout;