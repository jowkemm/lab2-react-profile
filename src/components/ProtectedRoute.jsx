import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuthStore();

  // 1. Check if user is logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 2. Check Role (if allowedRoles is provided)
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // If access denied, alert and redirect to dashboard
    alert("Access Denied: You do not have permission to view this page.");
    return <Navigate to="/dashboard" replace />;
  }

  // If pass all checks, render the page
  return children;
};

export default ProtectedRoute;