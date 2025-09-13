import EmptyState from "./EmptyState.jsx";
import NoteItem from "./NoteItem.jsx";

export default function NoteList({ notes, onDelete, onArchive, onUnarchive }) {
  if (!notes?.length)
    return (
      <EmptyState
        title="Belum ada catatan"
        subtitle="Tambahkan catatan baru."
      />
    );
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {notes.map((n) => (
        <NoteItem
          key={n.id}
          note={n}
          onDelete={onDelete}
          onArchive={onArchive}
          onUnarchive={onUnarchive}
        />
      ))}
    </div>
  );
}
