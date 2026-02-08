import { Wrench, Cog, Paintbrush, Gauge, Package, Bike } from 'lucide-react'
import ServiceCard from './ServiceCard'

const services = [
  {
    icon: Wrench,
    title: 'Basic Tune-Up',
    description: 'Brake adjustments, gear indexing, tire inflation, and safety check to keep your ride smooth.',
    price: 'From $49',
  },
  {
    icon: Cog,
    title: 'Full Overhaul',
    description: 'Complete disassembly, deep cleaning, bearing service, and full rebuild of your bicycle.',
    price: 'From $199',
  },
  {
    icon: Paintbrush,
    title: 'Custom Builds',
    description: 'Dream bike from scratch. We source parts and assemble your perfect ride to specification.',
    price: 'From $299',
  },
  {
    icon: Gauge,
    title: 'Wheel Truing',
    description: 'Precision spoke tensioning and wheel alignment for a wobble-free, efficient ride.',
    price: 'From $29',
  },
  {
    icon: Package,
    title: 'Bike Fitting',
    description: 'Ergonomic assessment and adjustments for optimal comfort, power, and injury prevention.',
    price: 'From $89',
  },
  {
    icon: Bike,
    title: 'E-Bike Service',
    description: 'Specialized maintenance for electric bicycles including motor diagnostics and battery care.',
    price: 'From $79',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2 mb-4">Our Services</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            From quick fixes to complete overhauls, our certified mechanics provide top-quality service for every type of bicycle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
