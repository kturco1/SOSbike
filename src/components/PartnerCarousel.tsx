const partners = [
  'Shimano', 'SRAM', 'Continental', 'Schwalbe', 'Park Tool',
  'Campagnolo', 'Mavic', 'DT Swiss', 'Brooks', 'Chris King',
]

export default function PartnerCarousel() {
  return (
    <section id="partners" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Trusted Partners</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2 mb-4">We Work With the Best</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We use only genuine parts from industry-leading brands to ensure quality and reliability.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="flex animate-scroll gap-12 w-max">
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={`${partner}-${i}`}
              className="flex items-center justify-center h-16 px-8 bg-gray-50 rounded-xl border border-gray-100 flex-shrink-0"
            >
              <span className="text-lg font-bold text-text-secondary/60 whitespace-nowrap">{partner}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
