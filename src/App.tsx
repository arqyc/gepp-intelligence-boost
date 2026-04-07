import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import PlatformPage from "./pages/Platform";
import Scope3Page from "./pages/Scope3";
import Scope3Category5 from "./pages/Scope3Category5";
import TraceabilityPage from "./pages/Traceability";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ESGLanding from "./pages/ESGLanding";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/scope-3" element={<Scope3Page />} />
            <Route path="/scope-3/category-5" element={<Scope3Category5 />} />
            <Route path="/traceability" element={<TraceabilityPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/esg-consultation" element={<ESGLanding />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
