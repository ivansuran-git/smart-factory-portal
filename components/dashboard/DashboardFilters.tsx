export default function DashboardFilters() {
  return (
    <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <select className="rounded-lg border border-slate-300 px-4 py-3">
          <option>Všetky linky</option>
          <option>B78</option>
          <option>B79</option>
          <option>B80</option>
        </select>

        <select className="rounded-lg border border-slate-300 px-4 py-3">
          <option>Všetky zmeny</option>
          <option>Ranná</option>
          <option>Poobedná</option>
          <option>Nočná</option>
        </select>

        <input
          type="date"
          className="rounded-lg border border-slate-300 px-4 py-3"
        />

        <button className="rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700">
          Filtrovať
        </button>
      </div>
    </div>
  );
}