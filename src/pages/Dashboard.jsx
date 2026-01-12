import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

// Mock Data
const tasks = [
  { id: 1, title: "Design UI", status: "done" },
  { id: 2, title: "Integration API", status: "todo" },
  { id: 3, title: "Fix Login Bug", status: "todo" },
  { id: 4, title: "Write Documentation", status: "done" },
];

const Dashboard = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Read 'status' from URL (Default to 'all')
  const currentFilter = searchParams.get("status") || "all";

  // Filter Logic
  const filteredTasks = tasks.filter((task) => 
    currentFilter === 'all' ? true : task.status === currentFilter
  );

  const handleFilterChange = (status) => {
    setSearchParams({ status }); // Updates URL to ?status=...
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Project Dashboard</h1>
            <p className="text-gray-600">Welcome, {user?.name} ({user?.role})</p>
          </div>
          <div className="space-x-4">
            {/* Conditional Rendering: Show Admin Settings button only for Admin */}
            {user?.role === 'admin' && (
              <button 
                onClick={() => navigate("/admin-settings")}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Admin Settings
              </button>
            )}
            <button 
              onClick={() => { logout(); navigate("/login"); }}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-6">
          {['all', 'todo', 'done'].map((status) => (
            <button
              key={status}
              onClick={() => handleFilterChange(status)}
              className={`px-4 py-2 rounded capitalize font-medium transition ${
                currentFilter === status 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white text-gray-700 border hover:bg-gray-100'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Task List */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 capitalize">Status: {currentFilter}</h2>
          {filteredTasks.length > 0 ? (
            <ul className="space-y-3">
              {filteredTasks.map((task) => (
                <li key={task.id} className="p-4 border rounded flex justify-between items-center hover:bg-gray-50">
                  <span className={task.status === 'done' ? "line-through text-gray-400" : ""}>
                    {task.title}
                  </span>
                  
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      task.status === 'done' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {task.status}
                    </span>
                    
                    {/* Role-based UI: Delete button visible ONLY for Admin */}
                    {user?.role === 'admin' && (
                      <button 
                        className="text-red-500 hover:text-red-700 text-sm font-bold ml-4"
                        onClick={() => alert(`Deleting Task ${task.id} (Admin Only)`)}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-center py-4">No tasks found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;