const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    { label: "Instagram", href: "https://www.instagram.com/morphyx_lab/" },
    { label: "YouTube", href: "https://www.youtube.com/@morphyx_lab" },
    { label: "Discord", href: "https://discord.com/users/1308490559094132811" },
  ];

  return (
    <footer className="border-t border-border py-20 px-4 relative" style={{ background: 'hsl(158, 45%, 5%)' }}>
      {/* Thin gold divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                MORPHYX LAB
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Transforming visions into cinematic reality. Professional video editing services for creators and brands worldwide.
            </p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              Crafting stories through motion
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm w-fit relative group"
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Connect</h3>
            <div className="flex flex-col gap-3 mb-6">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm w-fit relative group"
                >
                  <span className="relative">
                    {social.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
                  </span>
                </a>
              ))}
            </div>
            <a 
              href="mailto:tiwaritarun497@gmail.com"
              className="text-sm text-primary hover:text-primary-glow transition-colors duration-300"
            >
              tiwaritarun497@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Tarun Tiwari. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
