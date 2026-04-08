import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { month: "Jan", TPV: 2400000, ROL: 180000, Meta: 2200000 },
  { month: "Fev", TPV: 2800000, ROL: 210000, Meta: 2400000 },
  { month: "Mar", TPV: 3100000, ROL: 245000, Meta: 2600000 },
  { month: "Abr", TPV: 2900000, ROL: 220000, Meta: 2800000 },
  { month: "Mai", TPV: 3400000, ROL: 270000, Meta: 3000000 },
  { month: "Jun", TPV: 3800000, ROL: 310000, Meta: 3200000 },
];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", notation: "compact" }).format(value);

const RevenueChart = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-5 card-shadow animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold text-card-foreground">Evolução de Receita</h3>
          <p className="text-xs text-muted-foreground">TPV, ROL e Meta mensal</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
          <YAxis tickFormatter={formatCurrency} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
          <Tooltip
            formatter={(value: number) => formatCurrency(value)}
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
              fontSize: "12px",
            }}
          />
          <Legend iconSize={8} wrapperStyle={{ fontSize: "12px" }} />
          <Line type="monotone" dataKey="TPV" stroke="hsl(264, 93%, 70%)" strokeWidth={2.5} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="ROL" stroke="hsl(195, 100%, 60%)" strokeWidth={2.5} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="Meta" stroke="hsl(var(--muted-foreground))" strokeWidth={1.5} strokeDasharray="6 3" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
