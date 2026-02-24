import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Sparkles, Zap } from "lucide-react";
import heroImage from "@/assets/tarun-hero.jpeg";
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
  const [orbitSpeed, setOrbitSpeed] = useState(1);

  const dynamicWords = ["CINEMATIC", "CREATIVE", "DYNAMIC", "STUNNING"];

  // Video editing tools for orbit animation
  const tools = [
    { icon: capCutIcon, name: "CapCut", tooltip: "Edited in CapCut", color: "#FF6B6B" },
    { icon: afterEffectsIcon, name: "After Effects", tooltip: "Crafted in After Effects", color: "#9D4EDD" },
    { icon: premiereProIcon, name: "Premiere Pro", tooltip: "Edited in Premiere Pro", color: "#00D4FF" },
    { icon: davinciResolveIcon, name: "DaVinci Resolve", tooltip: "Graded in DaVinci Resolve", color: "#FF8500" },
    { icon: timelineIcon, name: "Timeline", tooltip: "Timeline Magic", color: "#C9A66B" },
    { icon: effectsIcon, name: "Effects", tooltip: "Visual Effects", color: "#2ABD8B" },
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
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Hero background with portrait positioning */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-out ${isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) scale(1.02)`,
        }}
      >
        <img
          src={heroImage}
          alt="Tarun Tiwari - Video Editor"
          className="w-full h-full object-cover object-right"
        />
      </div>

      {/* Creative Orbit Animation - positioned below text, above hand */}
      <div className={`absolute left-40 top-2/4 w-80 h-80 transition-all duration-1000 delay-1500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>

        {/* Orbit container */}
        <div className="relative w-full h-full flex items-center justify-center">

          {/* Simple Circular Orbit */}
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
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-90px) rotate(-${angle}deg)`,
                    zIndex: 20,
                  }}
                  onMouseEnter={() => setHoveredIcon(index)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  {/* Simple glow halo */}
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-500 ${isHovered ? 'scale-150' : 'scale-100'}`}
                    style={{
                      background: `radial-gradient(circle, rgba(42, 189, 139, 0.3) 0%, rgba(201, 166, 107, 0.2) 50%, transparent 70%)`,
                      filter: `blur(8px)`,
                    }}
                  />

                  {/* Icon container */}
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-full h-full transition-all duration-300 object-contain"
                      style={{
                        filter: isHovered
                          ? `brightness(1.3) contrast(1.2) drop-shadow(0 0 12px rgba(42, 189, 139, 0.8))`
                          : 'brightness(1.1) contrast(1.1)',
                      }}
                    />
                  </div>

                  {/* Simple tooltip */}
                  {isHovered && (
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-background/90 border border-primary/30 rounded-lg text-xs text-primary whitespace-nowrap animate-fade-up z-50">
                      {tool.tooltip}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Central energy core */ }
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="w-4 h-4 rounded-full bg-primary/30 animate-pulse-energy"
                  style={{
                    boxShadow: '0 0 20px hsl(var(--primary) / 0.5), 0 0 40px hsl(var(--secondary) / 0.3)',
                  }}
                />
              </div>

              {/* Elliptical orbit trail */ }
              <div
                className="absolute inset-0 border border-primary/10 animate-pulse"
                style={{
                  width: '180px',
                  height: '60px',
                  margin: 'auto',
                  borderRadius: '50%',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              />

              {/* Floating energy particles */ }
              {
                [...Array(20)].map((_, i) => {
                  const particleAngle = (i * 18 * Math.PI) / 180;
                  const px = Math.cos(particleAngle) * 100;
                  const py = Math.sin(particleAngle) * 60;
                  const pz = Math.sin(particleAngle) * 20;

                  return (
                    <div
                      key={i}
                      className="absolute w-1 h-1 rounded-full animate-float-gentle"
                      style={{
                        left: `${160 + px}px`,
                        top: `${160 + py}px`,
                        background: `linear-gradient(45deg, #2ABD8B, #C9A66B)`,
                        opacity: 0.6,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: `${4 + Math.random() * 2}s`,
                        transform: `translateZ(${pz}px)`,
                      }}
                    />
                  );
                })
              }
        </div>

          {/* Ambient lighting effect reflecting on hand area */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 60%, hsl(var(--primary) / 0.15) 0%, transparent 60%)`,
            }}
          />
        </div>

        {/* Cinematic gradient overlay for text readability */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-1000"
          style={{
            background: `
            linear-gradient(90deg, hsl(var(--background-dark) / 0.85) 0%, hsl(var(--background-dark) / 0.4) 50%, transparent 100%),
            linear-gradient(180deg, transparent 0%, hsl(var(--background-dark) / 0.3) 100%)
          `,
          }}
        />

        {/* Enhanced film grain with animation */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Content Container - Repositioned Layout */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between px-8">

          {/* Upper Section - Main Content (Red doodle area) */}
          <div className="pt-16 max-w-4xl">
            <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>

              {/* Floating badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 transition-all duration-700 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Available for Projects</span>
              </div>

              {/* Main Heading with signature overlay style */}
              <h1 className="relative text-7xl md:text-9xl font-black mb-6 leading-[0.85] tracking-wider uppercase">
                {/* Background block text */}
                <div className={`transition-all duration-700 delay-700 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                  <span className="block text-foreground/20 font-black" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                    TARUN TIWARI
                  </span>
                </div>

                {/* Signature overlay */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-700 delay-900 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
                  style={{
                    fontFamily: '"Brush Script MT", "Lucida Handwriting", "Segoe Script", "Monotype Corsiva", cursive',
                    fontSize: '0.4em',
                    transform: 'rotate(-2deg) translateY(-8px) translateX(15px)',
                    letterSpacing: '0.05em',
                    fontWeight: '500',
                  }}
                >
                  <span
                    style={{
                      color: 'hsl(var(--primary))',
                      textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
                      filter: 'drop-shadow(0 0 6px hsl(var(--primary) / 0.4))',
                      fontStyle: 'normal',
                    }}
                  >
                    Tarun Tiwari
                  </span>
                </div>
              </h1>

              {/* Professional titles */}
              <div className={`mb-4 transition-all duration-700 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <p className="text-lg text-primary/70 tracking-[0.2em]">
                  Video Editor • Visual Storyteller • Motion Designer
                </p>
              </div>

              {/* Dynamic subtitle with rotating words */}
              <div className={`mb-8 transition-all duration-700 delay-1100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <p className="text-2xl md:text-3xl font-light tracking-[0.15em] text-foreground/90">
                  Creating{" "}
                  <span
                    className="inline-block min-w-[200px] text-left transition-all duration-500"
                    style={{
                      background: 'linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {dynamicWords[currentWord]} Visuals
                  </span>
                </p>
              </div>

            </div>
          </div>

          {/* Lower Section - CTA Buttons (Green doodle area) */}
          <div className="pb-24 flex justify-end">
            <div className={`flex gap-6 flex-wrap transition-all duration-700 delay-1300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <Button
                size="lg"
                className="group px-8 py-6 text-base font-medium bg-primary hover:bg-primary-glow text-background transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group px-8 py-6 text-base font-medium border-2 border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Let's Collaborate
              </Button>
            </div>
          </div>

        </div>

        {/* Enhanced Scroll Indicator */}
        <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-700 delay-1700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-primary/60 uppercase tracking-wider">Scroll</span>
            <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;
