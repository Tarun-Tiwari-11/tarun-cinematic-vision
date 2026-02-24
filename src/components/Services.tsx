import { Film, Youtube, FileVideo, Presentation, Package } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Film,
    title: "Short-form Content Editing",
    description: "Instagram Reels, TikToks, and YouTube Shorts optimized for maximum engagement and viral reach.",
    features: [
      "Talking-head clips and podcast snippets",
      "Travel or lifestyle montages",
      "Trend-based or meme-style shorts",
      "Motivational or cinematic edits",
      "Dynamic caption integration and beat-syncing"
    ],
  },
  {
    icon: Youtube,
    title: "YouTube Long-form Editing",
    description: "Professional storytelling for creators who value pacing, retention, and visual flow.",
    features: [
      "Intros/outros and branding consistency",
      "B-roll and stock footage integration",
      "Smooth pacing and transitions",
      "Color grading and sound balancing",
      "Visual storytelling and thumbnail framing"
    ],
  },
  {
    icon: FileVideo,
    title: "Documentary & Case Study Editing",
    description: "In-depth storytelling for business, social, or investigative topics with a cinematic, journalistic tone.",
    features: [
      "Interview or voiceover-driven edits",
      "Archival footage and research visuals",
      "Narrative structuring and pacing",
      "On-screen text and infographics",
      "Polished sound design and color tone"
    ],
  },
  {
    icon: Presentation,
    title: "Explainer & Educational Videos",
    description: "Visually clear, engaging content that simplifies complex ideas and holds viewer attention.",
    features: [
      "Animated text and motion graphics",
      "Charts, icons, and visual breakdowns",
      "Tutorial or course-style pacing",
      "Consistent brand alignment",
      "Clean, professional visual flow"
    ],
  },
  {
    icon: Package,
    title: "Product Promotional Videos",
    description: "Cinematic product showcases for brands, startups, and e-commerce campaigns.",
    features: [
      "Product reveal and macro shots",
      "Lifestyle or brand-context visuals",
      "Text animation and motion overlays",
      "Sound design and music syncing",
      "Smooth transitions and logo outro"
    ],
  },
];

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1 && !visibleCards.includes(index)) {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-32 px-4 relative overflow-hidden" ref={sectionRef}>


      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center animate-fade-up">
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">
            Services
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mt-6 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              What I Offer
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive video editing crafted for impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`group relative p-8 rounded-xl border border-border/50 bg-background/60
                  transition-all duration-500 hover:border-primary/30 hover:-translate-y-2
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              >
                {/* Subtle gold top border */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 relative">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>

                </div>

                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 group-hover/item:bg-primary group-hover/item:scale-125 transition-all duration-300" />
                      <span className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
