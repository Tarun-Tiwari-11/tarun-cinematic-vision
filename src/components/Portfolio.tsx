import { useState } from "react";

const projects = [
  {
    title: "Things Explainer Video",
    description: "A fast-paced micro-explainer combining text captions, subtle motion graphics, and contextual B-rolls.\n\nFocus: Clarity, precision editing, smooth caption transitions, and clean pacing.\n\n🎯 Showcases your ability to simplify complex ideas visually.",
    videoId: "dQw4w9WgXcQ",
    category: "Explainer",
  },
  {
    title: "Tech / Mystery Explainer (AI + B-Roll Hybrid)",
    description: "A fact-driven narrative using an AI presenter blended with cinematic B-rolls, ambient sound design, and atmospheric color tone.\n\nFocus: Seamless AI-human integration, story-driven pacing, and visual depth.\n\n🎯 Demonstrates innovation, research storytelling, and modern edit style.",
    videoId: "dQw4w9WgXcQ",
    category: "AI Hybrid",
  },
  {
    title: "Travel Montage",
    description: "A visually immersive edit featuring travel clips stitched with rhythmic beat-syncing and vibrant color grading. \n\nFocus: Flow, pacing, natural transitions, and emotional energy through visuals. \n\n🎯 Highlights your ability to capture vibe, movement, and energy.",
    videoId: "dQw4w9WgXcQ",
    category: "Travel",
  },
  {
    title: "Car Edit",
    description: "A high-energy automotive showcase focusing on macro detailing, motion blur, reflections, and engine sound design. \n\nFocus: Speed ramps, color tone contrast, and kinetic rhythm. \n\n🎯 Displays your commercial edit skills and precision cutting.",
    videoId: "dQw4w9WgXcQ",
    category: "Automotive",
  },
  {
    title: "Vertical Podcast with B-Roll",
    description: "A short-form talking-head clip edited for Instagram or YouTube Shorts with dynamic captions, zooms, and supportive B-rolls. \n\nFocus: Retention pacing, engaging text animations, and sharp punch edits. \n\n🎯 Proves your mastery of vertical content and social-style storytelling.",
    videoId: "dQw4w9WgXcQ",
    category: "Podcast",
  },
  {
    title: "Dan Martell–Style Educational Clip",
    description: "A business insight or motivational short inspired by creators like Dan Martell or Alex Hormozi. \n\nFocus: Branded captions, bold typography, and momentum-based pacing. \n\n🎯 Shows how you can blend value-driven scripting with high-performance editing.",
    videoId: "dQw4w9WgXcQ",
    category: "Educational",
  },
  {
    title: "Dhruv Rathee–Style Explainer",
    description: "A journalistic explainer (2–3 minutes) combining AI narration, research visuals, archival footage, maps, and motion infographics. \n\nFocus: Narrative depth, storytelling rhythm, and editorial pacing. \n\n🎯 Demonstrates documentary-level editing and smart, informative visuals.",
    videoId: "dQw4w9WgXcQ",
    category: "Documentary",
  },
  {
    title: "Animated Storytelling Explainer",
    description: "A Think School or Fern-style educational breakdown with animated charts, icons, and motion text. \n\nFocus: Visual clarity, animation consistency, and tutorial pacing. \n\n🎯 Highlights your understanding of design-thinking and motion graphics integration.",
    videoId: "dQw4w9WgXcQ",
    category: "Animation",
  },
  {
    title: "4K Cinematic Storytelling / Travel Film",
    description: "A cinematic short film blending human emotion and scenic visuals — polished with color grading, sound layering, and smooth transitions. \n\nFocus: Tone, mood building, storytelling through light and sound. \n\n🎯 Perfect to showcase your mastery in cinematic editing and color aesthetics.",
    videoId: "dQw4w9WgXcQ",
    category: "Cinematic",
  },
  {
    title: "Product Promotional Video - Digital Brand",
    description: "AI-assisted commercial-style promo for digital brands. \n\nFocus: Product storytelling, macro visuals, text animation, and music-driven pacing. \n\n🎯 Flexes your commercial creativity and adaptability to brand tone.",
    videoId: "dQw4w9WgXcQ",
    category: "Commercial",
  },
  {
    title: "Product Promotional Video - Lifestyle Brand",
    description: "AI-driven lifestyle brand commercial with emphasis on emotional connection and brand storytelling. \n\nFocus: Lifestyle integration, smooth transitions, and aspirational messaging. \n\n🎯 Demonstrates versatility in commercial editing approaches.",
    videoId: "dQw4w9WgXcQ",
    category: "Lifestyle",
  },
  {
    title: "Product Promotional Video - Tech Concept",
    description: "Concept-based tech product showcase combining innovation narrative with sleek visual design. \n\nFocus: Modern aesthetics, feature highlighting, and tech-forward pacing. \n\n🎯 Shows ability to adapt to cutting-edge brand requirements.",
    videoId: "dQw4w9WgXcQ",
    category: "Tech",
  },
];

const Portfolio = () => {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  return (
    <section id="work" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center animate-fade-up">
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mt-6 mb-6 leading-tight">
            Selected{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Cinematic storytelling across formats and styles
          </p>
        </div>

        <div className="space-y-8">
          {/* First 2 rows - 5 cards total */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 5).map((project, index) => {
              const isExpanded = expandedCards.has(index);
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-card/60 border border-border hover:border-transparent transition-all duration-500 interactive-card hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Enhanced border effect */}
                  <div className={`absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none z-10 border-2 border-primary/50 ${isExpanded ? 'opacity-100' : 'opacity-0'}`} />

                  <div className="aspect-[9/16] overflow-hidden relative">
                    <iframe
                      src={`https://www.youtube.com/embed/${project.videoId}?controls=1&modestbranding=1&rel=0`}
                      title={project.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />

                    {/* Toggle button */}
                    <button
                      onClick={() => toggleCard(index)}
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary/90 text-background flex items-center justify-center transition-all duration-300 hover:bg-primary z-20"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Category badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-background text-xs font-bold uppercase tracking-wider transition-all duration-300 transform ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                      {project.category}
                    </div>

                    {/* Enhanced project info - slides up on toggle */}
                    <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/80 to-black/20 transform transition-all duration-500 ease-out ${isExpanded ? 'translate-y-0' : 'translate-y-full'}`}>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {project.category}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-primary">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-200 leading-relaxed transition-all duration-300 whitespace-pre-line">
                        {project.description}
                      </p>

                      {/* Progress bar animation */}
                      <div className="mt-4 h-1 bg-border rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r from-primary to-secondary transform transition-transform duration-700 ease-out ${isExpanded ? 'translate-x-0' : '-translate-x-full'}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Next 2 rows - 2 cards each (cards 6-9) */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(5, 7).map((project, index) => {
              const cardIndex = index + 5;
              const isExpanded = expandedCards.has(cardIndex);
              return (
                <div
                  key={cardIndex}
                  className="group relative overflow-hidden rounded-2xl bg-card/60 border border-border hover:border-transparent transition-all duration-500 interactive-card hover-lift"
                  style={{ animationDelay: `${cardIndex * 100}ms` }}
                >
                  {/* Enhanced border effect */}
                  <div className={`absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none z-10 border-2 border-primary/50 ${isExpanded ? 'opacity-100' : 'opacity-0'}`} />

                  <div className="aspect-video overflow-hidden relative">
                    <iframe
                      src={`https://www.youtube.com/embed/${project.videoId}?controls=1&modestbranding=1&rel=0`}
                      title={project.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />

                    {/* Toggle button */}
                    <button
                      onClick={() => toggleCard(cardIndex)}
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary/90 text-background flex items-center justify-center transition-all duration-300 hover:bg-primary z-20"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Category badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-background text-xs font-bold uppercase tracking-wider transition-all duration-300 transform ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                      {project.category}
                    </div>

                    {/* Enhanced project info - slides up on toggle */}
                    <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/80 to-black/20 transform transition-all duration-500 ease-out ${isExpanded ? 'translate-y-0' : 'translate-y-full'}`}>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {project.category}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-primary">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-200 leading-relaxed transition-all duration-300 whitespace-pre-line">
                        {project.description}
                      </p>

                      {/* Progress bar animation */}
                      <div className="mt-4 h-1 bg-border rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r from-primary to-secondary transform transition-transform duration-700 ease-out ${isExpanded ? 'translate-x-0' : '-translate-x-full'}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(7, 9).map((project, index) => {
              const cardIndex = index + 7;
              const isExpanded = expandedCards.has(cardIndex);
              return (
                <div
                  key={cardIndex}
                  className="group relative overflow-hidden rounded-2xl bg-card/60 border border-border hover:border-transparent transition-all duration-500 interactive-card hover-lift"
                  style={{ animationDelay: `${cardIndex * 100}ms` }}
                >
                  {/* Enhanced border effect */}
                  <div className={`absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none z-10 border-2 border-primary/50 ${isExpanded ? 'opacity-100' : 'opacity-0'}`} />

                  <div className="aspect-video overflow-hidden relative">
                    <iframe
                      src={`https://www.youtube.com/embed/${project.videoId}?controls=1&modestbranding=1&rel=0`}
                      title={project.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />

                    {/* Toggle button */}
                    <button
                      onClick={() => toggleCard(cardIndex)}
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary/90 text-background flex items-center justify-center transition-all duration-300 hover:bg-primary z-20"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Category badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-background text-xs font-bold uppercase tracking-wider transition-all duration-300 transform ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                      {project.category}
                    </div>

                    {/* Enhanced project info - slides up on toggle */}
                    <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/80 to-black/20 transform transition-all duration-500 ease-out ${isExpanded ? 'translate-y-0' : 'translate-y-full'}`}>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {project.category}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-primary">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-200 leading-relaxed transition-all duration-300 whitespace-pre-line">
                        {project.description}
                      </p>

                      {/* Progress bar animation */}
                      <div className="mt-4 h-1 bg-border rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r from-primary to-secondary transform transition-transform duration-700 ease-out ${isExpanded ? 'translate-x-0' : '-translate-x-full'}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Last row - 3 cards (cards 10-12) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(9, 12).map((project, index) => {
              const cardIndex = index + 9;
              const isExpanded = expandedCards.has(cardIndex);
              return (
                <div
                  key={cardIndex}
                  className="group relative overflow-hidden rounded-2xl bg-card/60 border border-border hover:border-transparent transition-all duration-500 interactive-card hover-lift"
                  style={{ animationDelay: `${cardIndex * 100}ms` }}
                >
                  {/* Enhanced border effect */}
                  <div className={`absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none z-10 border-2 border-primary/50 ${isExpanded ? 'opacity-100' : 'opacity-0'}`} />

                  <div className="aspect-[9/16] overflow-hidden relative">
                    <iframe
                      src={`https://www.youtube.com/embed/${project.videoId}?controls=1&modestbranding=1&rel=0`}
                      title={project.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />

                    {/* Toggle button */}
                    <button
                      onClick={() => toggleCard(cardIndex)}
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary/90 text-background flex items-center justify-center transition-all duration-300 hover:bg-primary z-20"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Category badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-background text-xs font-bold uppercase tracking-wider transition-all duration-300 transform ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                      {project.category}
                    </div>

                    {/* Enhanced project info - slides up on toggle */}
                    <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/80 to-black/20 transform transition-all duration-500 ease-out ${isExpanded ? 'translate-y-0' : 'translate-y-full'}`}>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {project.category}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-primary">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-200 leading-relaxed transition-all duration-300 whitespace-pre-line">
                        {project.description}
                      </p>

                      {/* Progress bar animation */}
                      <div className="mt-4 h-1 bg-border rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r from-primary to-secondary transform transition-transform duration-700 ease-out ${isExpanded ? 'translate-x-0' : '-translate-x-full'}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;