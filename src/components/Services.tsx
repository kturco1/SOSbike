import ServiceCard from './ServiceCard'

const basePath = import.meta.env.BASE_URL

const services = [
  {
    image: `${basePath}assets/equip.png`,
    iconSrc: `${basePath}assets/icon-equip.svg`,
    title: 'Equip',
    description: "Quality bikes and gear for every kind of ride. Whether you're exploring paved roads or rugged trails, we'll help you find what fits your adventure style.",
  },
  {
    image: `${basePath}assets/experience.png`,
    iconSrc: `${basePath}assets/icon-experience-2.svg`,
    title: 'Experience',
    description: "Guided rides for all levels and interests. From scenic road routes to backcountry trails, we'll meet you where you are and help you explore what excites you.",
  },
  {
    image: `${basePath}assets/learn.png`,
    iconSrc: `${basePath}assets/icon-learn.svg`,
    title: 'Learn',
    description: "Build confidence with hands-on workshops and skills training. From basic maintenance to navigation and safety, we'll support you in becoming a more capable cyclist.",
  },
]

export default function Services() {
  return (
    <section className="bg-surface pt-20 pb-16 px-6">
      <div className="max-w-[1024px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-black text-primary text-5xl md:text-6xl uppercase leading-none">
            What We Do
          </h2>
          <p className="font-medium text-text-secondary text-lg md:text-xl mt-4 max-w-xl mx-auto">
            Supporting every cyclist's journey, from city streets to mountain peaks
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
