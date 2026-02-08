import { Award, Users, Calendar, ThumbsUp } from 'lucide-react'

const stats = [
  { icon: Calendar, value: '15+', label: 'Years Experience' },
  { icon: Users, value: '10K+', label: 'Happy Cyclists' },
  { icon: Award, value: '50+', label: 'Awards Won' },
  { icon: ThumbsUp, value: '99%', label: 'Satisfaction Rate' },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2 mb-6">
              Passionate About Cycling Since 2009
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              At SOSbike, we believe every bicycle deserves expert attention. Founded by cycling enthusiasts, our workshop combines traditional craftsmanship with modern technology to deliver exceptional service.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              Our team of certified mechanics works on everything from vintage road bikes to the latest e-bikes, ensuring every rider gets back on the road safely and efficiently.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <stat.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-text-secondary">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-accent/5 rounded-3xl rotate-3" />
            <div className="relative bg-gradient-to-br from-primary to-surface rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose SOSbike?</h3>
              <ul className="space-y-4">
                {[
                  'Certified mechanics with 15+ years experience',
                  'Same-day service for most repairs',
                  'Genuine parts from trusted brands',
                  'Free safety inspection with every service',
                  'Comfortable waiting area with bike shop',
                  '6-month warranty on all repairs',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
