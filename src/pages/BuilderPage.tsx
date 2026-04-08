import DashboardLayout from "@/components/layout/DashboardLayout";
import { Layout, Table, BarChart3, Hash } from "lucide-react";

const components = [
  { name: "Tabela", icon: Table, description: "Tabela interativa com filtros" },
  { name: "Gráfico de Barras", icon: BarChart3, description: "Comparações por categoria" },
  { name: "KPI Card", icon: Hash, description: "Indicador numérico com tendência" },
  { name: "Gráfico de Linha", icon: Layout, description: "Evolução temporal" },
];

const BuilderPage = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-xl font-bold text-foreground">Builder de Dashboards</h1>
          <p className="text-sm text-muted-foreground">Arraste componentes para criar seu dashboard</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Componentes</h3>
            {components.map((c) => (
              <div
                key={c.name}
                className="bg-card rounded-lg border border-border p-3 card-shadow hover:card-shadow-hover hover:border-primary/30 transition-all cursor-grab"
              >
                <div className="flex items-center gap-2">
                  <c.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-card-foreground">{c.name}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{c.description}</p>
              </div>
            ))}
          </div>
          <div className="lg:col-span-3 bg-card rounded-lg border-2 border-dashed border-border min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <Layout className="w-10 h-10 text-muted-foreground/40 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Arraste componentes aqui para começar</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BuilderPage;
