import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import HeroContact from './components/HeroContact';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import FAQSection from './components/FAQSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroContact />
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
      <FAQSection />
      <Footer />
    </div>
  );
}
