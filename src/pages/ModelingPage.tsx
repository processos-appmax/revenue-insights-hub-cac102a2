import DashboardLayout from "@/components/layout/DashboardLayout";
import { Database } from "lucide-react";

const ModelingPage = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-xl font-bold text-foreground">Modelagem de Dados</h1>
          <p className="text-sm text-muted-foreground">Crie campos calculados e métricas customizadas</p>
        </div>
        <div className="bg-card rounded-lg border border-border p-8 card-shadow flex items-center justify-center min-h-[300px]">
          <div className="text-center">
            <Database className="w-10 h-10 text-muted-foreground/40 mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Editor de fórmulas em breve</p>
            <p className="text-xs text-muted-foreground mt-1">SOMASES, CONT.SES, SE, SEERRO e mais</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ModelingPage;
