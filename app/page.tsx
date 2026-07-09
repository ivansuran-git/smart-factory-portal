import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import ProductionDashboard from "../components/dashboard/ProductionDashboard";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 bg-slate-100">
        <Header />
        <ProductionDashboard />
      </div>
    </div>
  );
}