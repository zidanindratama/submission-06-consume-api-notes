import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteNote, getNote, archiveNote, unarchiveNote } from "../api.js";
import Loader from "../components/Loader.jsx";

export default function NoteDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await getNote(id);
        setNote(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  const handleDelete = async () => {
    if (!confirm("Hapus catatan ini?")) return;
    await deleteNote(id);
    navigate("/notes");
  };

  const handleArchiveToggle = async () => {
    if (note.archived) await unarchiveNote(id);
    else await archiveNote(id);
    navigate(note.archived ? "/archived" : "/notes");
  };

  if (loading) return <Loader label="Memuat detail..." />;
  if (error) return <div className="text-rose-600">{error}</div>;
  if (!note) return null;

  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>{note.title}</h1>
      <p className="text-sm text-slate-500">
        {new Date(note.createdAt).toLocaleString()}
      </p>
      <p>{note.body}</p>
      <div className="mt-4 flex gap-2">
        <button
          onClick={handleArchiveToggle}
          className="rounded-lg border px-3 py-1 text-xs dark:border-slate-700"
        >
          {note.archived ? "Batal Arsip" : "Arsipkan"}
        </button>
        <button
          onClick={handleDelete}
          className="rounded-lg bg-rose-600 px-3 py-1 text-xs text-white"
        >
          Hapus
        </button>
      </div>
    </article>
  );
}
