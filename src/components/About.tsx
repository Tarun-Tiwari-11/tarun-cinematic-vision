const About = () => {
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">


      <div className="max-w-5xl mx-auto relative z-10">
        {/* Cinematic Video/Intro Section */}
        <div className="mb-20 animate-fade-up">
          {/* Text moved to top in same line */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-foreground via-primary-glow to-foreground bg-clip-text text-transparent">
                Crafting Emotion{" "}
              </span>
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Through Every Frame
              </span>
            </h2>
          </div>

          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-primary/40 group">
            <div className="aspect-[16/9] bg-gradient-to-br from-card via-background-dark to-card relative">
              {/* YouTube Embed - Optimized for Portfolio */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_VIDEO_ID&controls=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
                title="Tarun Tiwari - Video Editor Showreel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              
              {/* Subtle overlay for integration */}
              <div className="absolute inset-0 bg-background/5 group-hover:bg-background/0 transition-all duration-700 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* About Text */}
        <div className="mb-16 text-center animate-fade-up">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            I'm <span className="text-primary font-semibold">Tarun Tiwari</span>, a video editor who believes 
            every frame tells a story. I transform raw footage into compelling visual narratives 
            that captivate, inspire, and leave lasting impressions.
          </p>
        </div>

        {/* Skills & Expertise */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up">
          {[
            { title: "Video Editing", icon: "🎬", description: "Professional editing" },
            { title: "Motion Graphics", icon: "⭐", description: "Dynamic animations" },
            { title: "Color Grading", icon: "🎨", description: "Cinematic looks" },
            { title: "Sound Design", icon: "🎵", description: "Audio perfection" },
          ].map((skill, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-xl bg-card/60 border border-border hover:border-primary/50 transition-all duration-500 relative overflow-hidden interactive-card hover-lift cursor-pointer"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Top glow line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">
                {skill.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-primary mb-2 group-hover:scale-105 transition-all duration-300">
                {skill.title}
              </h3>
              
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {skill.description}
              </p>

              {/* Pulse effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-primary/30 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
