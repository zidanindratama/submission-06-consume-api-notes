import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNote } from "../api.js";
import NoteForm from "../components/NoteForm.jsx";

export default function NewNotePage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (payload, { reset }) => {
    try {
      setLoading(true);
      setError("");
      await createNote(payload);
      reset();
      navigate("/notes");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Catatan Baru</h1>
      {error && (
        <div className="rounded-lg bg-rose-50 p-3 text-sm text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">
          {error}
        </div>
      )}
      <NoteForm
        onSubmit={onSubmit}
        submitLabel={loading ? "Menyimpan..." : "Buat"}
      />
    </div>
  );
}
