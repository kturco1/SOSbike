import { Bike } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Bike className="h-7 w-7 text-accent" />
              <span className="text-lg font-bold">SOSbike</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Professional bicycle repair and maintenance services. Keeping Seattle cycling since 2009.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-2">
              {['Basic Tune-Up', 'Full Overhaul', 'Custom Builds', 'Wheel Truing', 'Bike Fitting', 'E-Bike Service'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-white/50 text-sm hover:text-accent transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Our Team', 'Gallery', 'Partners', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#about" className="text-white/50 text-sm hover:text-accent transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Connect</h4>
            <ul className="space-y-2">
              {['Facebook', 'Instagram', 'Twitter', 'YouTube', 'Strava'].map((item) => (
                <li key={item}>
                  <span className="text-white/50 text-sm hover:text-accent transition-colors cursor-pointer">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">&copy; {new Date().getFullYear()} SOSbike. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 text-xs hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 text-xs hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
