const galleryItems = [
  { title: 'Custom Road Build', category: 'Custom Build', gradient: 'from-red-500/80 to-orange-500/80' },
  { title: 'Full Overhaul', category: 'Restoration', gradient: 'from-blue-500/80 to-purple-500/80' },
  { title: 'E-Bike Conversion', category: 'E-Bike', gradient: 'from-green-500/80 to-teal-500/80' },
  { title: 'Wheel Building', category: 'Components', gradient: 'from-yellow-500/80 to-red-500/80' },
  { title: 'Paint & Detail', category: 'Custom Build', gradient: 'from-purple-500/80 to-pink-500/80' },
  { title: 'Race Prep', category: 'Performance', gradient: 'from-cyan-500/80 to-blue-500/80' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2 mb-4">Project Gallery</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Browse our recent builds, restorations, and custom projects. Every bike tells a story.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.title} className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-white/70 text-xs font-medium uppercase tracking-wider mb-1">{item.category}</span>
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
