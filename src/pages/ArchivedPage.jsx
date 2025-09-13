import { useEffect, useState } from "react";
import { deleteNote, getArchivedNotes, unarchiveNote } from "../api.js";
import Loader from "../components/Loader.jsx";
import NoteList from "../components/NoteList.jsx";

export default function ArchivedPage() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await getArchivedNotes();
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

  const onUnarchive = async (id) => {
    await unarchiveNote(id);
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  if (loading) return <Loader label="Memuat arsip..." />;
  if (error) return <div className="text-rose-600">{error}</div>;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Arsip</h1>
      <NoteList notes={notes} onDelete={onDelete} onUnarchive={onUnarchive} />
    </div>
  );
}
