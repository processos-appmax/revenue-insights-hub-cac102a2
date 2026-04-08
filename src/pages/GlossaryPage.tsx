import DashboardLayout from "@/components/layout/DashboardLayout";
import { BookOpen } from "lucide-react";

const metrics = [
  { name: "TPV Realizado 30d", definition: "Volume total processado até 30 dias após data de ganho", formula: "SOMASES(TPV, Data_Ganho, \"<=HOJE()-30\")", source: "HubSpot + Supabase", owner: "RevOps" },
  { name: "MQL", definition: "Lead qualificado pelo marketing com score >= 70", formula: "CONT.SES(Score, \">=70\")", source: "HubSpot", owner: "Marketing" },
  { name: "Taxa de Conversão SQL→Won", definition: "Percentual de SQLs que se tornaram deals ganhos", formula: "WON / SQL * 100", source: "HubSpot", owner: "Vendas" },
  { name: "ROL", definition: "Receita Operacional Líquida mensal recorrente", formula: "TPV * Taxa_MDR - Chargebacks", source: "Supabase", owner: "Financeiro" },
  { name: "CAC", definition: "Custo de Aquisição por Cliente", formula: "Total_Investimento / Novos_Clientes", source: "Google Sheets", owner: "Marketing" },
];

const GlossaryPage = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Glossário de Métricas</h1>
            <p className="text-sm text-muted-foreground">Governança e padronização de métricas</p>
          </div>
        </div>
        <div className="bg-card rounded-lg border border-border card-shadow overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left p-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Métrica</th>
                <th className="text-left p-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Definição</th>
                <th className="text-left p-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Fórmula</th>
                <th className="text-left p-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Fonte</th>
                <th className="text-left p-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Owner</th>
              </tr>
            </thead>
            <tbody>
              {metrics.map((m, i) => (
                <tr key={m.name} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "" : "bg-muted/20"}`}>
                  <td className="p-3 font-medium text-card-foreground">{m.name}</td>
                  <td className="p-3 text-muted-foreground">{m.definition}</td>
                  <td className="p-3 font-mono text-xs text-primary">{m.formula}</td>
                  <td className="p-3 text-muted-foreground">{m.source}</td>
                  <td className="p-3 text-muted-foreground">{m.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default GlossaryPage;
