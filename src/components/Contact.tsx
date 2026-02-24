import { useState } from "react";
import { Send, Loader2, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using EmailJS for direct email sending
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'tiwaritarun497@gmail.com',
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24-48 hours.",
      });

      // Clear form
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error('Email sending error:', error);

      // Fallback to mailto if EmailJS fails
      const subject = `New Contact Form Message from ${formData.name}`;
      const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      const mailtoLink = `mailto:tiwaritarun497@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

      window.location.href = mailtoLink;

      toast({
        title: "Fallback: Email Client Opened",
        description: "Direct sending failed. Your email client should open with the message pre-filled.",
      });

      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
      }, 1000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/morphyx_lab/", color: "hover:text-pink-500" },
    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@morphyx_lab", color: "hover:text-red-500" },
    { 
      icon: () => (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      ), 
      label: "Discord", 
      href: "https://discord.com/users/1308490559094132811", 
      color: "hover:text-indigo-500" 
    },
    { 
      icon: () => (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547l-.8 3.747c1.824.07 3.48.632 4.674 1.488c.308-.309.73-.491 1.207-.491c.968 0 1.754.786 1.754 1.754c0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87c-3.874 0-7.004-2.176-7.004-4.87c0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754c.463 0 .898.196 1.207.49c1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197a.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248c.687 0 1.248-.561 1.248-1.249c0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25c0 .687.561 1.248 1.249 1.248c.688 0 1.249-.561 1.249-1.249c0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094a.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913c.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463a.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73c-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
        </svg>
      ), 
      label: "Reddit", 
      href: "https://www.youtube.com/@morphyx_lab", 
      color: "hover:text-orange-500" 
    },
  ];

  return (
    <section id="contact" className="py-32 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center animate-fade-up">
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mt-6 mb-6 leading-tight">
            Let's Create{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-card/60 border-border focus:border-secondary focus:ring-2 focus:ring-secondary/30 transition-all"
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-card/60 border-border focus:border-secondary focus:ring-2 focus:ring-secondary/30 transition-all"
              />
            </div>

            <div>
              <Textarea
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="bg-card/60 border-border focus:border-secondary focus:ring-2 focus:ring-secondary/30 transition-all resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary-glow text-background font-semibold transition-all duration-300 group disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-8 rounded-xl bg-card/60 border border-border">
              <h3 className="text-2xl font-bold mb-6 text-primary">Connect With Me</h3>

              <div className="space-y-4">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-background/60 hover:bg-muted border border-border/50 hover:border-secondary/50 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 border border-secondary/30 flex items-center justify-center group-hover:bg-secondary/20 transition-all text-primary">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-medium group-hover:text-primary transition-colors">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="p-8 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30">
              <h4 className="text-lg font-bold mb-3 text-primary">Response Time</h4>
              <p className="text-muted-foreground leading-relaxed">
                I typically respond within 24-48 hours. For urgent projects,
                please mention it in your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
