import Sidebar from "../../components/layout/Sidebar";
import Header from "../../components/layout/Header";

export default function ProductionPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 bg-slate-100">
        <Header />

        <main className="p-8">
          <h1 className="text-3xl font-bold text-slate-800">Production</h1>
          <p className="mt-2 text-slate-500">
            Modul pre sledovanie výroby, zmien a výkonu liniek.
          </p>
        </main>
      </div>
    </div>
  );
}