import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';

const HomePage     = lazy(() => import('@/pages/HomePage').then(m => ({ default: m.HomePage })));
const FeaturesPage = lazy(() => import('@/pages/FeaturesPage').then(m => ({ default: m.FeaturesPage })));
const ContactPage  = lazy(() => import('@/pages/ContactPage').then(m => ({ default: m.ContactPage })));
const RoadmapPage  = lazy(() => import('@/pages/RoadmapPage').then(m => ({ default: m.RoadmapPage })));
const PrivacyPage  = lazy(() => import('@/pages/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const TermsPage    = lazy(() => import('@/pages/TermsPage').then(m => ({ default: m.TermsPage })));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/"         element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/contact"  element={<ContactPage />} />
            <Route path="/roadmap"  element={<RoadmapPage />} />
            <Route path="/privacy"  element={<PrivacyPage />} />
            <Route path="/terms"    element={<TermsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
