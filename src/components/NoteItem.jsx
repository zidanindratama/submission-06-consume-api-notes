import { Link } from "react-router-dom";
import dayjs from "dayjs";

export default function NoteItem({ note, onDelete, onArchive, onUnarchive }) {
  return (
    <div className="rounded-2xl border p-4 shadow-sm dark:border-slate-700">
      <div className="mb-1 text-xs text-slate-500">
        {dayjs(note.createdAt).format("DD MMM YYYY")}
      </div>
      <Link
        to={`/notes/${note.id}`}
        className="text-lg font-semibold hover:underline"
      >
        {note.title}
      </Link>
      <p className="mt-2 line-clamp-3 text-sm text-slate-600 dark:text-slate-300">
        {note.body}
      </p>
      <div className="mt-3 flex gap-2">
        {onArchive && (
          <button
            onClick={() => onArchive(note.id)}
            className="rounded-lg border px-3 py-1 text-xs dark:border-slate-700"
          >
            Arsipkan
          </button>
        )}
        {onUnarchive && (
          <button
            onClick={() => onUnarchive(note.id)}
            className="rounded-lg border px-3 py-1 text-xs dark:border-slate-700"
          >
            Batal Arsip
          </button>
        )}
        <button
          onClick={() => onDelete(note.id)}
          className="rounded-lg bg-rose-600 px-3 py-1 text-xs text-white"
        >
          Hapus
        </button>
      </div>
    </div>
  );
}
