import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput.js";
import { useAuth } from "../contexts/AuthContext.jsx";
import { useLocale } from "../contexts/LocaleContext.jsx";

export default function LoginPage() {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { t } = useLocale();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/notes";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await login({ email, password });
      navigate(from, { replace: true });
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md">
      <h1 className="mb-4 text-2xl font-semibold">{t.login}</h1>
      {error && (
        <div className="mb-3 rounded-lg bg-rose-50 p-3 text-sm text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="mb-1 block text-sm">{t.email}</label>
          <input
            type="email"
            value={email}
            onChange={onEmailChange}
            required
            className="w-full rounded-xl border p-2 dark:border-slate-700 dark:bg-slate-800"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm">{t.password}</label>
          <input
            type="password"
            value={password}
            onChange={onPasswordChange}
            required
            className="w-full rounded-xl border p-2 dark:border-slate-700 dark:bg-slate-800"
          />
        </div>
        <button
          disabled={loading}
          className="w-full rounded-xl bg-slate-900 p-2 text-white disabled:opacity-60 dark:bg-slate-100 dark:text-slate-900"
        >
          {loading ? t.loading : t.login}
        </button>
      </form>
      <p className="mt-3 text-sm text-slate-500">
        Belum punya akun?{" "}
        <Link className="underline" to="/register">
          {t.register}
        </Link>
      </p>
    </div>
  );
}
