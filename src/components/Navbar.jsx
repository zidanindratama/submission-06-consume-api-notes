import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext.jsx";
import { useLocale } from "../contexts/LocaleContext.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const { t, toggle: toggleLocale } = useLocale();
  const { isAuthed, user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/70 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
      <div className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <Link to="/" className="font-semibold">
          {t.appName}
        </Link>
        <nav className="flex items-center gap-3 text-sm">
          {isAuthed && (
            <>
              <NavLink
                to="/notes"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                {t.notes}
              </NavLink>
              <NavLink
                to="/archived"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                {t.archived}
              </NavLink>
              <NavLink
                to="/notes/new"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                {t.newNote}
              </NavLink>
            </>
          )}

          <button
            onClick={toggle}
            className="rounded-xl border px-3 py-1 text-xs dark:border-slate-700"
          >
            {t.theme}: {theme === "dark" ? t.dark : t.light}
          </button>
          <button
            onClick={toggleLocale}
            className="rounded-xl border px-3 py-1 text-xs dark:border-slate-700"
          >
            {t.language}
          </button>

          {isAuthed ? (
            <>
              <span className="hidden sm:inline text-slate-500">
                {user?.name}
              </span>
              <button
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
                className="rounded-xl bg-slate-900 px-3 py-1 text-xs text-white dark:bg-slate-100 dark:text-slate-900"
              >
                {t.logout}
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login">{t.login}</NavLink>
              <NavLink to="/register">{t.register}</NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
