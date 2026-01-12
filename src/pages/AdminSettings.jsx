import { useNavigate } from "react-router-dom";

const AdminSettings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg border-t-4 border-red-500">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Admin Settings Panel</h1>
        <p className="text-gray-700 mb-8">
          This area is strictly restricted to users with the <strong>'admin'</strong> role.
          Regular users should never see this page.
        </p>
        
        <div className="space-y-4">
          <div className="p-4 border rounded bg-gray-50">
            <h3 className="font-bold">System Configuration</h3>
            <p className="text-sm text-gray-500">Manage global variables.</p>
          </div>
          <div className="p-4 border rounded bg-gray-50">
            <h3 className="font-bold">User Management</h3>
            <p className="text-sm text-gray-500">Add or remove users.</p>
          </div>
        </div>

        <button 
          onClick={() => navigate("/dashboard")}
          className="mt-8 text-blue-600 hover:underline"
        >
          &larr; Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default AdminSettings;