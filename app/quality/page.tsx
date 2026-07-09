import Sidebar from "../../components/layout/Sidebar";
import Header from "../../components/layout/Header";

const qualityKpi = [
  { title: "NOK", value: "270", change: "-1.1 %" },
  { title: "OK kusy", value: "12 180", change: "+6.4 %" },
  { title: "FTQ", value: "96.8 %", change: "+1.7 %" },
  { title: "PPM", value: "218", change: "-4.3 %" },
];

export default function QualityPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 bg-slate-100">
        <Header />

        <main className="p-8">
          <h1 className="text-3xl font-bold text-slate-800">
            Quality Dashboard
          </h1>

          <p className="mt-2 text-slate-500">
            Modul pre sledovanie kvality, NOK chýb, FTQ, PPM a retuší.
          </p>

          <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
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
          </section>

          <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {qualityKpi.map((item) => (
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

          <section className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-800">
                Pareto NOK chýb
              </h2>

              <div className="mt-6 flex h-72 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
                Graf doplníme v ďalšom kroku
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-800">
                Trend NOK
              </h2>

              <div className="mt-6 flex h-72 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
                Graf doplníme v ďalšom kroku
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}