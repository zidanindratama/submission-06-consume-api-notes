import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteNote, getNotes, archiveNote } from "../api.js";
import Loader from "../components/Loader.jsx";
import NoteList from "../components/NoteList.jsx";

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await getNotes();
        setNotes(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const onDelete = async (id) => {
    if (!confirm("Hapus catatan ini?")) return;
    await deleteNote(id);
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  const onArchive = async (id) => {
    await archiveNote(id);
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  if (loading) return <Loader label="Memuat catatan..." />;
  if (error) return <div className="text-rose-600">{error}</div>;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Catatan</h1>
        <Link
          to="/notes/new"
          className="rounded-xl bg-slate-900 px-4 py-2 text-white dark:bg-slate-100 dark:text-slate-900"
        >
          Tambah
        </Link>
      </div>
      <NoteList notes={notes} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
}
