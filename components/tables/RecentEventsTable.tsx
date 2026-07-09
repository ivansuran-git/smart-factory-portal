const events = [
  { time: "06:12", line: "B78", type: "START", message: "Spustenie zmeny" },
  { time: "07:05", line: "B78", type: "NOK", message: "Scratch defect" },
  { time: "08:20", line: "B78", type: "STOP", message: "Krátke zastavenie linky" },
  { time: "09:10", line: "B78", type: "OK", message: "Výroba stabilná" },
  { time: "10:35", line: "B78", type: "NOK", message: "Paint issue" },
];

export default function RecentEventsTable() {
  return (
    <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-slate-800">
        Posledné udalosti výroby
      </h2>

      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b text-slate-500">
            <th className="py-3">Čas</th>
            <th>Linka</th>
            <th>Typ</th>
            <th>Správa</th>
          </tr>
        </thead>

        <tbody>
          {events.map((event, index) => (
            <tr key={index} className="border-b last:border-0">
              <td className="py-3 font-medium">{event.time}</td>
              <td>{event.line}</td>
              <td>{event.type}</td>
              <td>{event.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}