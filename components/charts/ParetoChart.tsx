"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { defect: "Scratch", count: 42 },
  { defect: "Dent", count: 35 },
  { defect: "Paint", count: 27 },
  { defect: "Gap", count: 18 },
  { defect: "Clip", count: 12 },
];

export default function ParetoChart() {
  return (
    <div className="h-96 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold">Top 5 NOK chýb</h2>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="defect" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#dc2626" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}