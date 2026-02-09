const basePath = import.meta.env.BASE_URL

export default function Footer() {
  return (
    <footer className="bg-dark border-t-[6px] border-accent py-14">
      <div className="max-w-[992px] mx-auto px-6 flex flex-col items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={`${basePath}assets/logo-icon.svg`} alt="TrailSpur" className="w-10 h-10" />
          <span className="font-black text-white text-3xl uppercase">TrailSpur</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2">
          <img src={`${basePath}assets/location-pin.svg`} alt="" className="w-4 h-4" />
          <span className="font-bold text-text-lighter text-sm uppercase tracking-wider">
            Seattle, Washington
          </span>
        </div>

        {/* Copyright */}
        <p className="font-bold text-text-faint text-sm uppercase tracking-wider text-center">
          &copy; 2026 TrailSpur — Supporting Cyclists of All Kinds
        </p>
      </div>
    </footer>
  )
}
