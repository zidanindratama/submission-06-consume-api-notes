export default function Loader({ label = "Loading…" }) {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-400 border-t-transparent" />
      <span className="ml-3 text-sm text-slate-500">{label}</span>
    </div>
  );
}
