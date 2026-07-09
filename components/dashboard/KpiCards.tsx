const kpiData = [
  { title: "Vyrobené kusy", value: "12 450", change: "+8.2 %" },
  { title: "OK kusy", value: "12 180", change: "+6.4 %" },
  { title: "NOK kusy", value: "270", change: "-1.1 %" },
  { title: "Efektivita", value: "97.8 %", change: "+2.3 %" },
];

export default function KpiCards() {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {kpiData.map((item) => (
        <div
          key={item.title}
          className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <p className="text-sm text-slate-500">{item.title}</p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900">
            {item.value}
          </h2>

          <p className="mt-3 text-sm font-semibold text-green-600">
            {item.change}
          </p>
        </div>
      ))}
    </section>
  );
}