import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Courses from './components/Courses';
import Platforms from './components/Platforms';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import EnrollmentModal from './components/EnrollmentModal';

export default function App() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'trial' | 'regular';
    defaultCourseId?: string;
  }>({
    isOpen: false,
    type: 'trial',
    defaultCourseId: '',
  });

  const handleOpenModal = (type: 'trial' | 'regular' = 'trial', courseId?: string) => {
    setModalState({
      isOpen: true,
      type,
      defaultCourseId: courseId || '',
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div id="app-root-container" className="font-sans bg-[#011409] text-emerald-100/90 antialiased min-h-screen selection:bg-royal-gold selection:text-emerald-950 scroll-smooth">
      {/* Academy Global Navigation Header */}
      <Header onOpenModal={handleOpenModal} />
      
      {/* Crown Hero Presentation with live CSS virtual feed */}
      <Hero onOpenModal={handleOpenModal} />
      
      {/* High-contrast rounded choose us cards */}
      <WhyChooseUs />
      
      {/* Elegant program cards directory */}
      <Courses onOpenModal={handleOpenModal} />
      
      {/* Interactive Platform connectors & secure side check */}
      <Platforms />
      
      {/* Clean 4-step horizontal methodology path */}
      <HowItWorks />
      
      {/* Glowing 5-star customer review boards */}
      <Testimonials />
      
      {/* Bottom directory map & final trial invitation sheet */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Main interactive enrollment dialog drawer */}
      <EnrollmentModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        defaultType={modalState.type}
        defaultCourseId={modalState.defaultCourseId}
      />
    </div>
  );
}
