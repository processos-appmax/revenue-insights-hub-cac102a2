import { Eye, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const views = [
  { name: "Visão Geral", active: true },
  { name: "Inbound", active: false },
  { name: "Outbound", active: false },
  { name: "Expansão", active: false },
];

const SavedViews = () => {
  return (
    <div className="flex items-center gap-2">
      {views.map((view) => (
        <Button
          key={view.name}
          variant={view.active ? "default" : "outline"}
          size="sm"
          className={`text-xs gap-1.5 ${view.active ? "" : "bg-card"}`}
        >
          {view.active ? <Star className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
          {view.name}
        </Button>
      ))}
    </div>
  );
};

export default SavedViews;
