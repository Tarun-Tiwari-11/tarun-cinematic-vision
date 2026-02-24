import { useState, useEffect } from "react";
import { MessageCircle, ArrowUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingElements = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Custom cursor effect */}
      <div
        className="fixed w-4 h-4 bg-primary/30 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'scale(1)',
        }}
      />

      {/* Floating action buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
        {/* Quick contact button */}
        <Button
          onClick={openContact}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary-glow text-background transition-all duration-300 hover:scale-110 group"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </Button>

        {/* Scroll to top button */}
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            variant="outline"
            className="w-14 h-14 rounded-full border-2 border-primary/40 bg-background/80 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-110 animate-fade-up"
          >
            <ArrowUp className="w-6 h-6 text-primary" />
          </Button>
        )}
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>


    </>
  );
};

export default FloatingElements;