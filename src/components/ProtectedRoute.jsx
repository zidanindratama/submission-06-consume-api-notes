import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";
import Loader from "./Loader.jsx";

export default function ProtectedRoute() {
  const { isAuthed, initializing } = useAuth();
  const location = useLocation();
  if (initializing) return <Loader />;
  if (!isAuthed)
    return <Navigate to="/login" state={{ from: location }} replace />;
  return <Outlet />;
}
