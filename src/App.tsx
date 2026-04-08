import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import IntegrationsPage from "./pages/IntegrationsPage.tsx";
import ModelingPage from "./pages/ModelingPage.tsx";
import GlossaryPage from "./pages/GlossaryPage.tsx";
import BuilderPage from "./pages/BuilderPage.tsx";
import AccessPage from "./pages/AccessPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/modeling" element={<ModelingPage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="/builder" element={<BuilderPage />} />
          <Route path="/access" element={<AccessPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
