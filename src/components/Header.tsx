const basePath = import.meta.env.BASE_URL

export default function Header() {
  return (
    <header className="relative w-full overflow-hidden border-b-[6px] border-accent">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={`${basePath}assets/hero-bg.png`}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-[992px] mx-auto px-6 py-32 min-h-[640px] flex flex-col justify-center">
        {/* Logo + Title */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 shrink-0">
            <img src={`${basePath}assets/header-icon.svg`} alt="TrailSpur" className="w-full h-full" />
            <div className="absolute -top-1 -right-3 w-4 h-4 bg-accent rounded-full opacity-85" />
          </div>
          <div>
            <h1 className="font-black text-white text-5xl md:text-7xl uppercase tracking-tight">
              TrailSpur
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <img src={`${basePath}assets/location-pin.svg`} alt="" className="w-4 h-4" />
              <span className="font-bold text-text-lighter text-sm uppercase tracking-wider">
                Seattle, WA
              </span>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="border-l-[6px] border-accent pl-8 mb-8">
          <p className="font-black text-white text-3xl md:text-5xl uppercase leading-tight">
            Stop what you're doing and go for a ride.
          </p>
        </div>

        {/* Description */}
        <p className="font-medium text-text-light text-lg md:text-xl leading-relaxed max-w-3xl">
          Whether you love smooth pavement or rocky trails, we're here to support your cycling journey. Let's get you equipped, inspired, and ready to ride wherever your wheels take you.
        </p>
      </div>
    </header>
  )
}
