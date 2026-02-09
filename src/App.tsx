import Header from './components/Header'
import Services from './components/Services'
import CTABanner from './components/CTABanner'
import ContactForm from './components/ContactForm'
import PartnerCarousel from './components/PartnerCarousel'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <Services />
      <CTABanner />
      <ContactForm />
      <PartnerCarousel />
      <Footer />
    </div>
  )
}

export default App
