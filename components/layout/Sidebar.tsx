import Link from "next/link";

const menuItems = [
  { title: "Dashboard", href: "/" },
  { title: "Production", href: "/production" },
  { title: "Quality", href: "/quality" },
  { title: "Maintenance", href: "/maintenance" },
  { title: "Warehouse", href: "/warehouse" },
  { title: "Reports", href: "/reports" },
  { title: "Settings", href: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-10">Smart Factory</h2>

      <nav className="space-y-3">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block w-full rounded-lg px-4 py-3 hover:bg-slate-700 transition"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}