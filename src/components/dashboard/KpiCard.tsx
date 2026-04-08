import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string;
  change?: number;
  subtitle?: string;
  icon: LucideIcon;
  variant?: "default" | "primary" | "accent";
}

const KpiCard = ({ title, value, change, subtitle, icon: Icon, variant = "default" }: KpiCardProps) => {
  const getTrendIcon = () => {
    if (!change) return <Minus className="w-3.5 h-3.5 text-muted-foreground" />;
    return change > 0 ? (
      <TrendingUp className="w-3.5 h-3.5 text-success" />
    ) : (
      <TrendingDown className="w-3.5 h-3.5 text-destructive" />
    );
  };

  const variantClasses = {
    default: "bg-card border-border",
    primary: "bg-card border-primary/20",
    accent: "bg-card border-blue-accent/30",
  };

  return (
    <div
      className={`rounded-lg border p-5 card-shadow hover:card-shadow-hover transition-all duration-300 animate-fade-in ${variantClasses[variant]}`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{title}</span>
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-primary" />
        </div>
      </div>
      <p className="text-2xl font-bold text-card-foreground mb-1">{value}</p>
      <div className="flex items-center gap-1.5">
        {getTrendIcon()}
        {change !== undefined && (
          <span className={`text-xs font-medium ${change > 0 ? "text-success" : change < 0 ? "text-destructive" : "text-muted-foreground"}`}>
            {change > 0 ? "+" : ""}{change}%
          </span>
        )}
        {subtitle && <span className="text-xs text-muted-foreground ml-1">{subtitle}</span>}
      </div>
    </div>
  );
};

export default KpiCard;
