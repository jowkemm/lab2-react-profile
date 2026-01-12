import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminSettings from "./pages/AdminSettings";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Redirect Root to Dashboard (which will redirect to Login if not auth) */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Protected Route: Accessible by ANY logged-in user (admin or user) */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute allowedRoles={['user', 'admin']}>
              <Dashboard />
            </ProtectedRoute>
          } 
        />

        {/* Protected Route: Accessible ONLY by 'admin' */}
        <Route 
          path="/admin-settings" 
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminSettings />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;