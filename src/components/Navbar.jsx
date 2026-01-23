import React from 'react'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent pointer-events-none">
      <div className="w-full px-8 py-6 flex items-center justify-between pointer-events-auto">
        {/* Logo placeholder - top-left */}
        <div className="flex-shrink-0">
          <img 
            src="/assets/logo.png" 
            alt="Logo" 
            className="h-8 w-auto"
            onError={(e) => {
              // Hide image and show placeholder if logo doesn't exist
              e.target.style.display = 'none'
              const placeholder = e.target.nextElementSibling
              if (placeholder) placeholder.style.display = 'flex'
            }}
          />
          <div className="h-8 w-32 bg-black/5 hidden items-center justify-center">
            <span className="font-horizon text-black text-xs opacity-50">LOGO</span>
          </div>
        </div>

        {/* Navigation items - center/right */}
        <div className="flex items-center gap-12">
          <a 
            href="#home" 
            className="font-horizon text-black text-base hover:opacity-70 transition-opacity"
          >
            HOME
          </a>
          <a 
            href="#about" 
            className="font-horizon text-black text-base hover:opacity-70 transition-opacity"
          >
            ABOUT
          </a>
          <a 
            href="#work" 
            className="font-horizon text-black text-base hover:opacity-70 transition-opacity"
          >
            MY WORK
          </a>
          <a 
            href="#contact" 
            className="font-horizon text-black text-base hover:opacity-70 transition-opacity"
          >
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
