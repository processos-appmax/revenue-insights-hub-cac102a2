import { Users, Target, DollarSign, TrendingUp, Percent, BarChart3, Zap } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import GlobalFilters from "@/components/dashboard/GlobalFilters";
import SavedViews from "@/components/dashboard/SavedViews";
import KpiCard from "@/components/dashboard/KpiCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import FunnelChart from "@/components/dashboard/FunnelChart";
import BarChartBySource from "@/components/dashboard/BarChartBySource";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-xl font-bold text-foreground">Dashboard de Receita</h1>
            <p className="text-sm text-muted-foreground">Acompanhamento consolidado de performance comercial</p>
          </div>
          <SavedViews />
        </div>

        {/* Filters */}
        <GlobalFilters />

        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          <KpiCard title="Leads" value="4.250" change={12.5} subtitle="vs mês anterior" icon={Users} />
          <KpiCard title="MQL" value="2.100" change={8.3} icon={Target} variant="primary" />
          <KpiCard title="SQL" value="820" change={-3.2} icon={Zap} />
          <KpiCard title="Won" value="310" change={15.1} subtitle="deals" icon={TrendingUp} variant="primary" />
          <KpiCard title="Lost" value="510" change={-5.0} icon={BarChart3} />
          <KpiCard title="TPV" value="R$ 3,8M" change={22.4} icon={DollarSign} variant="accent" />
          <KpiCard title="Conversão" value="37,8%" change={2.1} icon={Percent} />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <RevenueChart />
          <FunnelChart />
        </div>

        <div className="grid grid-cols-1">
          <BarChartBySource />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
