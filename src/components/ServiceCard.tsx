interface ServiceCardProps {
  image: string
  iconSrc: string
  title: string
  description: string
}

export default function ServiceCard({ image, iconSrc, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white border-[5px] border-primary rounded-[14px] overflow-hidden flex flex-col">
      {/* Image with icon overlay */}
      <div className="relative h-[320px] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute bottom-4 left-4 w-[70px] h-[70px] bg-white/95 border-[3px] border-accent flex items-center justify-center">
          <img src={iconSrc} alt="" className="w-8 h-8" />
        </div>
      </div>

      {/* Card content */}
      <div className="border-b-2 border-border px-6 py-6 flex-1">
        <h3 className="font-black text-primary text-3xl uppercase tracking-tight mb-2">
          {title}
        </h3>
        <p className="font-medium text-text-secondary text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Button */}
      <div className="px-6 py-6">
        <button className="w-full bg-accent border-[3px] border-primary rounded-lg py-3 shadow-lg">
          <span className="font-black text-white text-base uppercase tracking-wider">
            Learn more
          </span>
        </button>
      </div>
    </div>
  )
}
