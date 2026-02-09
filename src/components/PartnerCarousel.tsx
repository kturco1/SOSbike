const basePath = import.meta.env.BASE_URL

const partners = [
  { name: 'Populous Hotel', image: `${basePath}assets/partner-populous.png` },
  { name: 'Pine', image: `${basePath}assets/partner-pine.png` },
  { name: 'Bikes', image: `${basePath}assets/partner-bikes.png` },
  { name: 'Rail Spur', image: `${basePath}assets/partner-railspur.png` },
  { name: 'Building', image: `${basePath}assets/partner-building.png` },
]

export default function PartnerCarousel() {
  return (
    <section className="bg-white border-t-[6px] border-primary pt-16 pb-20 px-6">
      <div className="max-w-[1024px] mx-auto">
        <h2 className="font-black text-primary text-4xl md:text-5xl uppercase text-center mb-12">
          Our Partners
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-surface border-[3px] border-border w-[248px] h-[192px] flex flex-col items-center justify-center gap-4"
            >
              <div className="w-[178px] h-[86px] flex items-center justify-center overflow-hidden">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="font-bold text-dark text-sm uppercase tracking-wider">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
