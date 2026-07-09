"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Po", production: 1200 },
  { day: "Ut", production: 1350 },
  { day: "St", production: 1500 },
  { day: "Št", production: 1480 },
  { day: "Pi", production: 1650 },
  { day: "So", production: 900 },
  { day: "Ne", production: 650 },
];

export default function ProductionChart() {
  return (
    <div className="rounded-xl bg-white border border-slate-200 shadow-sm p-6 h-96">
      <h2 className="text-xl font-semibold mb-4">
        Produkcia za týždeň
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="production"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}