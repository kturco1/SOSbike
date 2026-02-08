import type { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  price: string
}

export default function ServiceCard({ icon: Icon, title, description, price }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
        <Icon className="h-6 w-6 text-accent" />
      </div>
      <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-accent font-bold text-lg">{price}</span>
        <a href="#contact" className="text-sm font-medium text-text-secondary hover:text-accent transition-colors">
          Book now &rarr;
        </a>
      </div>
    </div>
  )
}
