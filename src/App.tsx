import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import LoginPage from "./pages/LoginPage.tsx";
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
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
            <Route path="/integrations" element={<ProtectedRoute><IntegrationsPage /></ProtectedRoute>} />
            <Route path="/modeling" element={<ProtectedRoute><ModelingPage /></ProtectedRoute>} />
            <Route path="/glossary" element={<ProtectedRoute><GlossaryPage /></ProtectedRoute>} />
            <Route path="/builder" element={<ProtectedRoute><BuilderPage /></ProtectedRoute>} />
            <Route path="/access" element={<ProtectedRoute><AccessPage /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
