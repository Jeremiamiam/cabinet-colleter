import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import PosturologiePage from './pages/PosturologiePage';
import OrthesesMainPage from './pages/OrthesesMainPage';
import CabinetPage from './pages/CabinetPage';
import ConsultationPage from './pages/ConsultationPage';
import ContactPage from './pages/ContactPage';
import ProPage from './pages/ProPage';
import FAQPage from './pages/FAQPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyPage from './pages/CaseStudyPage';
import PodologiePage from './pages/PodologiePage';
import RhizarthrosePage from './pages/orthoses/RhizarthrosePage';
import CanalCarpienPage from './pages/orthoses/CanalCarpienPage';
import TendinitesPage from './pages/orthoses/TendinitesPage';
import PostOperatoirePage from './pages/orthoses/PostOperatoirePage';
import FracturesPage from './pages/orthoses/FracturesPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posturologie-semelles" element={<PosturologiePage />} />
          <Route path="/podologie" element={<PodologiePage />} />
          <Route path="/ortheses-main" element={<OrthesesMainPage />} />
          <Route path="/cabinet" element={<CabinetPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pro" element={<ProPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/etudes-de-cas" element={<CaseStudiesPage />} />
                                <Route path="/etudes-de-cas/:studyId" element={<CaseStudyPage />} />
                      <Route path="/ortheses-main/rhizarthrose" element={<RhizarthrosePage />} />
                      <Route path="/ortheses-main/canal-carpien" element={<CanalCarpienPage />} />
                      <Route path="/ortheses-main/tendinites" element={<TendinitesPage />} />
                      <Route path="/ortheses-main/post-operatoire" element={<PostOperatoirePage />} />
                      <Route path="/ortheses-main/fractures" element={<FracturesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
