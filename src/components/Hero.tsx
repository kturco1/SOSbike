import { ArrowRight, Shield, Clock, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-surface to-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm mb-6">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              Trusted by 10,000+ cyclists
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Bike Deserves{' '}
              <span className="text-accent">Expert Care</span>
            </h1>

            <p className="text-lg text-white/70 mb-8 max-w-lg mx-auto lg:mx-0">
              Professional bicycle repair, maintenance, and custom builds. We keep you riding with fast turnarounds and quality craftsmanship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-accent-hover transition-colors text-lg"
              >
                Our Services
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/20 transition-colors text-lg border border-white/20"
              >
                Book Repair
              </a>
            </div>

            <div className="flex items-center gap-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-white/70 text-sm">Warranty Included</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-white/70 text-sm">Same Day Service</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-accent/20 rounded-3xl rotate-6 blur-sm" />
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <svg viewBox="0 0 400 300" className="w-full h-auto">
                  <circle cx="110" cy="200" r="60" fill="none" stroke="#e94560" strokeWidth="4" />
                  <circle cx="290" cy="200" r="60" fill="none" stroke="#e94560" strokeWidth="4" />
                  <circle cx="110" cy="200" r="8" fill="#e94560" />
                  <circle cx="290" cy="200" r="8" fill="#e94560" />
                  <line x1="110" y1="200" x2="200" y2="120" stroke="white" strokeWidth="3" />
                  <line x1="200" y1="120" x2="290" y2="200" stroke="white" strokeWidth="3" />
                  <line x1="200" y1="120" x2="170" y2="110" stroke="white" strokeWidth="3" />
                  <line x1="170" y1="110" x2="155" y2="100" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  <line x1="200" y1="120" x2="220" y2="110" stroke="white" strokeWidth="3" />
                  <circle cx="220" cy="110" r="3" fill="white" />
                  <line x1="110" y1="200" x2="200" y2="180" stroke="white" strokeWidth="2.5" />
                  <line x1="200" y1="180" x2="290" y2="200" stroke="white" strokeWidth="2.5" />
                  <line x1="200" y1="120" x2="200" y2="180" stroke="white" strokeWidth="2.5" />
                  <text x="200" y="50" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">SOSbike</text>
                  <text x="200" y="75" textAnchor="middle" fill="#e94560" fontSize="12">PROFESSIONAL CYCLE SERVICES</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
