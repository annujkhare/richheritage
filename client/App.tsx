import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Placeholder from "@/pages/Placeholder";

const queryClient = new QueryClient();

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route
              path="/map"
              element={
                <Placeholder
                  title="Interactive Map"
                  description="A dedicated full-screen map experience with layers for festivals, heritage sites, cuisine, and art forms will be added here."
                />
              }
            />
            <Route
              path="/library"
              element={
                <Placeholder
                  title="Multimedia Library"
                  description="Curated videos, high-quality images, and audio of traditional music and dance will live here."
                />
              }
            />
            <Route
              path="/resources"
              element={
                <Placeholder
                  title="Educational Resources"
                  description="In-depth articles on history, mythology, philosophy, and cultural timelines will be here."
                />
              }
            />
            <Route
              path="/forum"
              element={
                <Placeholder
                  title="Community Forum"
                  description="Discuss, ask questions, and share cultural experiences with the community."
                />
              }
            />
            <Route
              path="/admin"
              element={
                <Placeholder
                  title="Admin Panel"
                  description="Manage content, users, and analytics. Connect a backend to enable administration workflows."
                />
              }
            />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
