import KpiCards from "./KpiCards";
import ProductionChart from "../charts/ProductionChart";
import ParetoChart from "../charts/ParetoChart";
import RecentEventsTable from "../tables/RecentEventsTable";
import DashboardFilters from "./DashboardFilters";

export default function ProductionDashboard() {
  return (
    <main className="p-8">
      <DashboardFilters />

      <KpiCards />

      <section className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <ProductionChart />
        <ParetoChart />
      </section>

      <RecentEventsTable />
    </main>
  );
}