const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-border py-16 px-4 relative" style={{ background: 'hsl(158, 45%, 5%)' }}>
      {/* Thin gold divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="text-5xl font-bold mb-2 group cursor-pointer">
              <span 
                className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent hover:drop-shadow-[0_0_20px_hsl(42_39%_61%/0.5)] transition-all duration-300"
                style={{ backgroundSize: '200% auto' }}
              >
                TT
              </span>
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-3">
              Crafting stories through motion
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Tarun Tiwari. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex gap-8">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm font-medium relative group"
              >
                {link.label}
                {/* Underline in gold on hover */}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
