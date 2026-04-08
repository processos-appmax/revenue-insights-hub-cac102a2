import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { source: "Orgânico", Leads: 1200, Won: 120, TPV: 980000 },
  { source: "Pago", Leads: 1800, Won: 95, TPV: 720000 },
  { source: "Referral", Leads: 650, Won: 55, TPV: 540000 },
  { source: "Outbound", Leads: 400, Won: 30, TPV: 310000 },
  { source: "Parceiros", Leads: 200, Won: 10, TPV: 150000 },
];

const BarChartBySource = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-5 card-shadow animate-fade-in">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-card-foreground">Performance por Origem</h3>
        <p className="text-xs text-muted-foreground">Leads e deals por canal de aquisição</p>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} barGap={2}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="source" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
          <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
              fontSize: "12px",
            }}
          />
          <Legend iconSize={8} wrapperStyle={{ fontSize: "12px" }} />
          <Bar dataKey="Leads" fill="hsl(264, 95%, 82%)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Won" fill="hsl(264, 93%, 70%)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartBySource;
