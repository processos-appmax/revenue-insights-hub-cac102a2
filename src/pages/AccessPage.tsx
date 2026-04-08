import DashboardLayout from "@/components/layout/DashboardLayout";
import { Shield, Users, Eye, Edit } from "lucide-react";

const roles = [
  { name: "Admin", users: 3, permissions: "Acesso total", icon: Shield },
  { name: "Gestor", users: 8, permissions: "Dashboards + Métricas", icon: Edit },
  { name: "Operacional", users: 25, permissions: "Visualização", icon: Eye },
];

const AccessPage = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-xl font-bold text-foreground">Controle de Acesso</h1>
          <p className="text-sm text-muted-foreground">Gerencie permissões por perfil</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {roles.map((role) => (
            <div key={role.name} className="bg-card rounded-lg border border-border p-5 card-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <role.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-card-foreground">{role.name}</h3>
                  <p className="text-xs text-muted-foreground">{role.users} usuários</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">{role.permissions}</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AccessPage;
