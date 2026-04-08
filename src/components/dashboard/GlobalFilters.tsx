import { Calendar, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const GlobalFilters = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-2 bg-card rounded-lg px-3 py-2 card-shadow border border-border">
        <Calendar className="w-4 h-4 text-primary" />
        <span className="text-sm text-muted-foreground">01 Jan 2025</span>
        <span className="text-muted-foreground">→</span>
        <span className="text-sm text-muted-foreground">31 Mar 2025</span>
      </div>

      <Select defaultValue="process">
        <SelectTrigger className="w-[160px] bg-card card-shadow">
          <SelectValue placeholder="Tipo de data" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="process">Process Date</SelectItem>
          <SelectItem value="safrado">Safrado</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="all">
        <SelectTrigger className="w-[140px] bg-card card-shadow">
          <SelectValue placeholder="Squad" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos Squads</SelectItem>
          <SelectItem value="inbound">Inbound</SelectItem>
          <SelectItem value="outbound">Outbound</SelectItem>
          <SelectItem value="expansion">Expansão</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="all">
        <SelectTrigger className="w-[140px] bg-card card-shadow">
          <SelectValue placeholder="Canal" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos Canais</SelectItem>
          <SelectItem value="organic">Orgânico</SelectItem>
          <SelectItem value="paid">Pago</SelectItem>
          <SelectItem value="referral">Referral</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline" size="sm" className="gap-1.5">
        <Filter className="w-3.5 h-3.5" />
        Mais filtros
      </Button>
    </div>
  );
};

export default GlobalFilters;
