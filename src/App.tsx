import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { DataAnalyticsPage } from './components/DataAnalyticsPage';
import { DemoSignup } from './components/DemoSignup';
import { PricingPage } from './components/PricingPage';
import { SupportPage } from './components/SupportPage';
import { RenewalPage } from './components/RenewalPage';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/analytics" element={<DataAnalyticsPage />} />
            <Route path="/demo" element={<DemoSignup />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/renewal" element={<RenewalPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}