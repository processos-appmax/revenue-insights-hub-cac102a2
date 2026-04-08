import DashboardLayout from "@/components/layout/DashboardLayout";
import { Plug, FileSpreadsheet, Database, Upload } from "lucide-react";

const sources = [
  { name: "HubSpot", icon: Plug, status: "Conectado", statusColor: "text-success" },
  { name: "Google Sheets", icon: FileSpreadsheet, status: "Conectado", statusColor: "text-success" },
  { name: "Supabase", icon: Database, status: "Configurar", statusColor: "text-warning" },
  { name: "Upload CSV", icon: Upload, status: "Disponível", statusColor: "text-muted-foreground" },
];

const IntegrationsPage = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-xl font-bold text-foreground">Integrações</h1>
          <p className="text-sm text-muted-foreground">Conecte suas fontes de dados</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sources.map((source) => (
            <div key={source.name} className="bg-card rounded-lg border border-border p-5 card-shadow hover:card-shadow-hover transition-all cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <source.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-card-foreground">{source.name}</h3>
              <p className={`text-xs font-medium mt-1 ${source.statusColor}`}>{source.status}</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default IntegrationsPage;
