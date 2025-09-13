const BASE_URL = "https://notes-api.dicoding.dev/v1";

export const getAccessToken = () => localStorage.getItem("accessToken");
export const putAccessToken = (token) =>
  localStorage.setItem("accessToken", token);
export const clearAccessToken = () => localStorage.removeItem("accessToken");

async function _fetch(path, { method = "GET", body, auth = true } = {}) {
  const headers = { "Content-Type": "application/json" };
  if (auth) {
    const token = getAccessToken();
    if (token) headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.status === "fail" || data.status === "error") {
    const msg = data.message || `Request failed (${res.status})`;
    throw new Error(msg);
  }
  return data;
}

export const register = ({ name, email, password }) =>
  _fetch("/register", {
    method: "POST",
    body: { name, email, password },
    auth: false,
  });

export const login = async ({ email, password }) => {
  const res = await _fetch("/login", {
    method: "POST",
    body: { email, password },
    auth: false,
  });
  return res.data.accessToken;
};

export const getMe = async () => {
  const res = await _fetch("/users/me");
  return res.data;
};

export const createNote = async ({ title, body }) => {
  const res = await _fetch("/notes", { method: "POST", body: { title, body } });
  return res.data;
};

export const getNotes = async () => {
  const res = await _fetch("/notes");
  return res.data;
};

export const getArchivedNotes = async () => {
  const res = await _fetch("/notes/archived");
  return res.data;
};

export const getNote = async (id) => {
  const res = await _fetch(`/notes/${id}`);
  return res.data;
};

export const deleteNote = (id) => _fetch(`/notes/${id}`, { method: "DELETE" });

export const archiveNote = (id) =>
  _fetch(`/notes/${id}/archive`, { method: "POST" });

export const unarchiveNote = (id) =>
  _fetch(`/notes/${id}/unarchive`, { method: "POST" });
