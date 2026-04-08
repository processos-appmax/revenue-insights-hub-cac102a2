const funnelData = [
  { stage: "Leads", value: 4250, color: "hsl(264, 95%, 82%)" },
  { stage: "MQL", value: 2100, color: "hsl(264, 93%, 70%)" },
  { stage: "SQL", value: 820, color: "hsl(264, 40%, 54%)" },
  { stage: "Won", value: 310, color: "hsl(264, 45%, 20%)" },
  { stage: "Lost", value: 510, color: "hsl(var(--muted))" },
];

const FunnelChart = () => {
  const maxValue = funnelData[0].value;

  return (
    <div className="bg-card rounded-lg border border-border p-5 card-shadow animate-fade-in">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-card-foreground">Funil de Vendas</h3>
        <p className="text-xs text-muted-foreground">Pipeline atual por etapa</p>
      </div>
      <div className="space-y-3">
        {funnelData.map((item, index) => {
          const width = Math.max((item.value / maxValue) * 100, 12);
          const prevValue = index > 0 ? funnelData[index - 1].value : null;
          const conversion = prevValue ? ((item.value / prevValue) * 100).toFixed(1) : null;

          return (
            <div key={item.stage} className="flex items-center gap-3">
              <div className="w-12 text-xs font-medium text-muted-foreground text-right shrink-0">{item.stage}</div>
              <div className="flex-1 relative">
                <div
                  className="h-8 rounded-md flex items-center px-3 transition-all duration-500"
                  style={{ width: `${width}%`, backgroundColor: item.color }}
                >
                  <span className="text-xs font-bold text-primary-foreground drop-shadow-sm">
                    {item.value.toLocaleString("pt-BR")}
                  </span>
                </div>
              </div>
              {conversion && (
                <span className="text-xs text-muted-foreground w-12 text-right shrink-0">{conversion}%</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FunnelChart;
