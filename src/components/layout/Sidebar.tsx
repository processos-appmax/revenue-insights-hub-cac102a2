import { BarChart3, Database, BookOpen, Layout, Settings, Plug, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { icon: BarChart3, label: "Dashboard", path: "/" },
  { icon: Plug, label: "Integrações", path: "/integrations" },
  { icon: Database, label: "Modelagem", path: "/modeling" },
  { icon: BookOpen, label: "Glossário", path: "/glossary" },
  { icon: Layout, label: "Builder", path: "/builder" },
  { icon: Settings, label: "Acessos", path: "/access" },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-sidebar text-sidebar-foreground flex flex-col transition-all duration-300 z-50 ${
        collapsed ? "w-16" : "w-56"
      }`}
    >
      <div className="flex items-center gap-2 px-4 h-16 border-b border-sidebar-border">
        {!collapsed && (
          <span className="text-lg font-bold text-sidebar-primary animate-fade-in tracking-tight">
            Appmax<span className="text-sidebar-foreground opacity-60 font-normal">BI</span>
          </span>
        )}
        {collapsed && <BarChart3 className="w-6 h-6 text-sidebar-primary mx-auto" />}
      </div>

      <nav className="flex-1 py-4 space-y-1 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-primary"
                  : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
              }`}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              {!collapsed && <span className="animate-fade-in">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center justify-center h-12 border-t border-sidebar-border text-sidebar-foreground/50 hover:text-sidebar-foreground transition-colors"
      >
        {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>
    </aside>
  );
};

export default Sidebar;
