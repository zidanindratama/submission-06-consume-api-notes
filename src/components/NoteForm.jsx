import useInput from "../hooks/useInput.js";

export default function NoteForm({ onSubmit, submitLabel = "Buat" }) {
  const [title, onTitleChange, setTitle] = useInput("");
  const [body, onBodyChange, setBody] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(
      { title, body },
      {
        reset: () => {
          setTitle("");
          setBody("");
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="mb-1 block text-sm">Judul</label>
        <input
          value={title}
          onChange={onTitleChange}
          className="w-full rounded-xl border p-2 outline-none dark:border-slate-700 dark:bg-slate-800"
          required
        />
      </div>
      <div>
        <label className="mb-1 block text-sm">Isi</label>
        <textarea
          value={body}
          onChange={onBodyChange}
          rows={6}
          className="w-full rounded-xl border p-2 outline-none dark:border-slate-700 dark:bg-slate-800"
          required
        />
      </div>
      <button className="rounded-xl bg-slate-900 px-4 py-2 text-white dark:bg-slate-100 dark:text-slate-900">
        {submitLabel}
      </button>
    </form>
  );
}
