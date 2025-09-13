import { Route, Routes, Navigate } from "react-router-dom";
import NotesPage from "./pages/NotesPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import NoteDetailPage from "./pages/NoteDetailPage.jsx";
import NewNotePage from "./pages/NewNotePage.jsx";
import ArchivedPage from "./pages/ArchivedPage.jsx";
import Navbar from "./components/Navbar.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <Navbar />
      <div className="mx-auto max-w-4xl p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/notes" />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/notes/new" element={<NewNotePage />} />
            <Route path="/notes/:id" element={<NoteDetailPage />} />
            <Route path="/archived" element={<ArchivedPage />} />
          </Route>

          <Route path="*" element={<div className="p-6">Not Found</div>} />
        </Routes>
      </div>
    </div>
  );
}
