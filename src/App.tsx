import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/Home";
import { ListingsPage } from "./pages/Listings";
import { ListingDetailPage } from "./pages/ListingDetail";
import { AgentProfilePage } from "./pages/Agent";
import { AboutPage } from "./pages/About";
import { BlogPage } from "./pages/Blog";
import { ContactPage } from "./pages/Contact";
import { NotFoundPage } from "./pages/NotFound";

import { CurrencyProvider } from "./context/CurrencyContext";

export default function App() {
  return (
    <CurrencyProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/listing/:id" element={<ListingDetailPage />} />
          <Route path="/agents" element={<AgentProfilePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </CurrencyProvider>
  );
}
