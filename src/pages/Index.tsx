import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
      <FloatingElements />
    </div>
  );
};

export default Index;
