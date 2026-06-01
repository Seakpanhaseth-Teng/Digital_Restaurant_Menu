export default function AdminToolbar({
  onAddItem,
}) {
  return (
    <div className="mb-6">
      <button
        onClick={onAddItem}
        className="w-full rounded-xl bg-black px-4 py-3 text-white"
      >
        Add New Item
      </button>
    </div>
  );
}