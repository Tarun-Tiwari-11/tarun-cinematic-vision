import { useState, useEffect } from "react";
import { Play, Sparkles, Instagram, Youtube } from "lucide-react";
import heroImage from "@/assets/tarun-hero.jpeg";
import logo from "@/assets/logo.png";

import capCutIcon from "@/assets/icons/capcut.png";
import afterEffectsIcon from "@/assets/icons/after-effects.png";
import premiereProIcon from "@/assets/icons/premiere-pro.png";
import davinciResolveIcon from "@/assets/icons/davinci_resolve.png";
import timelineIcon from "@/assets/icons/timeline.png";
import effectsIcon from "@/assets/icons/effects.png";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const [orbitSpeed] = useState(1);

  const dynamicWords = ["CINEMATIC", "CREATIVE", "DYNAMIC", "STUNNING"];

  const tools = [
    { icon: capCutIcon, name: "CapCut", tooltip: "Edited in CapCut" },
    { icon: afterEffectsIcon, name: "After Effects", tooltip: "Crafted in After Effects" },
    { icon: premiereProIcon, name: "Premiere Pro", tooltip: "Edited in Premiere Pro" },
    { icon: davinciResolveIcon, name: "DaVinci Resolve", tooltip: "Graded in DaVinci Resolve" },
    { icon: timelineIcon, name: "Timeline", tooltip: "Timeline Magic" },
    { icon: effectsIcon, name: "Effects", tooltip: "Visual Effects" },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % dynamicWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">

      {/* Floating Logo Top Left */}
      <div className="absolute top-8 left-8 z-30">
        <img
          src={logo}
          alt="Morphyx Lab Logo"
          className="w-16 md:w-20 drop-shadow-[0_15px_35px_rgba(0,0,0,0.5)] animate-float-vertical -rotate-12"
        />
      </div>

      {/* Badge - Top Right */}
      <div className="absolute top-10 right-10 z-40">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">
            Available for Projects
          </span>
        </div>
      </div>

      {/* Social Media Icons - Bottom Right */}
      <div className="absolute bottom-16 right-24 z-30 flex flex-row gap-3">
        <a
          href="https://www.instagram.com/morphyx_lab/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-background/40 backdrop-blur-md border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 group"
        >
          <Instagram className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://www.youtube.com/@morphyx_lab"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-background/40 backdrop-blur-md border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 group"
        >
          <Youtube className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://discord.com/users/1308490559094132811"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-background/40 backdrop-blur-md border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 group"
        >
          <svg className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
          </svg>
        </a>
        <a
          href="https://www.youtube.com/@morphyx_lab"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-background/40 backdrop-blur-md border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 group"
        >
          <svg className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547l-.8 3.747c1.824.07 3.48.632 4.674 1.488c.308-.309.73-.491 1.207-.491c.968 0 1.754.786 1.754 1.754c0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87c-3.874 0-7.004-2.176-7.004-4.87c0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754c.463 0 .898.196 1.207.49c1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197a.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248c.687 0 1.248-.561 1.248-1.249c0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25c0 .687.561 1.248 1.249 1.248c.688 0 1.249-.561 1.249-1.249c0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094a.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913c.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463a.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73c-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
          </svg>
        </a>
      </div>

      {/* Background Image */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-out ${
          isLoaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
        }`}
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) scale(1.02)`,
        }}
      >
        <img
          src={heroImage}
          alt="Morphyx Lab"
          className="w-full h-full object-cover object-right"
        />
      </div>

      {/* Orbit Animation */}
      <div className={`absolute left-48 top-2/4 w-80 h-80 transition-all duration-1000 delay-1500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <div className="relative w-full h-full flex items-center justify-center">

          <div
            className="absolute inset-0 w-64 h-64 m-auto"
            style={{
              animation: `orbit ${30 / orbitSpeed}s linear infinite`,
            }}
          >
            {tools.map((tool, index) => {
              const angle = (index * 360) / tools.length;
              const isHovered = hoveredIcon === index;

              return (
                <div
                  key={index}
                  className="absolute w-12 h-12 flex items-center justify-center cursor-pointer group"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-90px) rotate(-${angle}deg)`,
                  }}
                  onMouseEnter={() => setHoveredIcon(index)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-500 ${isHovered ? "scale-150" : "scale-100"}`}
                    style={{
                      background: `radial-gradient(circle, rgba(42,189,139,0.3) 0%, rgba(201,166,107,0.2) 50%, transparent 70%)`,
                      filter: `blur(8px)`,
                    }}
                  />

                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className={`w-full h-full transition-all duration-300 object-contain ${
                        isHovered 
                          ? 'drop-shadow-[0_0_20px_rgba(201,166,107,0.8)] brightness-125' 
                          : 'drop-shadow-[0_0_12px_rgba(201,166,107,0.5)] brightness-110'
                      }`}
                      style={{
                        filter: isHovered 
                          ? 'drop-shadow(0 0 20px rgba(201,166,107,0.8)) drop-shadow(0 0 10px rgba(42,189,139,0.6)) brightness(1.25) contrast(1.1)' 
                          : 'drop-shadow(0 0 12px rgba(201,166,107,0.5)) drop-shadow(0 4px 8px rgba(0,0,0,0.4)) brightness(1.1) contrast(1.05)'
                      }}
                    />
                  </div>

                  {isHovered && (
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-background/90 border border-primary/30 rounded-lg text-xs text-primary whitespace-nowrap z-50">
                      {tool.tooltip}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
          linear-gradient(90deg, hsl(var(--background-dark) / 0.85) 0%, 
          hsl(var(--background-dark) / 0.4) 50%, transparent 100%)
        `,
        }}
      />

      {/* Content */}
      <div className="relative z-20 w-full h-full flex flex-col justify-between px-8">

        <div className="pt-32 max-w-4xl">

          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold leading-none">
              <span className="bg-gradient-to-r from-foreground via-primary-glow to-foreground bg-clip-text text-transparent">
                MORPHYX
              </span>
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold leading-none -mt-2">
              <span className="bg-gradient-to-r from-foreground via-primary-glow to-foreground bg-clip-text text-transparent">
                LAB
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Creating{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent font-semibold">
              {dynamicWords[currentWord]} Visuals
            </span>
          </p>

        </div>

        {/* CTA - Bottom Center */}
        <div className="pb-16 flex justify-center">
          {/* View Our Work Button */}
          <a
            href="#work"
            className="group relative px-8 py-3 rounded-full overflow-hidden transition-all duration-500 hover:scale-105"
          >
            {/* Border gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary bg-[length:200%_100%] animate-gradient rounded-full p-[2px]">
              <div className="w-full h-full bg-background rounded-full" />
            </div>
            
            {/* Button content */}
            <div className="relative flex items-center gap-2 font-semibold text-base">
              <Play className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                View Our Work
              </span>
            </div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;