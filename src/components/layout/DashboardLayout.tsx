import { ReactNode } from "react";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-56 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
