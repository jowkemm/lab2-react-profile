import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const Login = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    // Simulate User Data
    const userData = {
      id: 1,
      name: role === 'admin' ? "Admin User" : "Regular User",
      role: role // 'admin' or 'user'
    };
    
    login(userData);
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-96 text-center">
        <h1 className="text-2xl font-bold mb-6">Login Simulation</h1>
        <div className="space-y-4">
          <button
            onClick={() => handleLogin('user')}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
          >
            Login as User
          </button>
          <button
            onClick={() => handleLogin('admin')}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded transition"
          >
            Login as Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;