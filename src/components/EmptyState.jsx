export default function EmptyState({
  title = "Kosong",
  subtitle = "Belum ada data.",
}) {
  return (
    <div className="rounded-xl border border-dashed p-10 text-center text-sm text-slate-500 dark:border-slate-700">
      <div className="font-medium text-slate-700 dark:text-slate-300">
        {title}
      </div>
      <div>{subtitle}</div>
    </div>
  );
}
