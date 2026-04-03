import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Name is required";
    else if (form.name.trim().length > 100) errs.name = "Name must be under 100 characters";

    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = "Enter a valid email";

    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.trim().length > 1000) errs.message = "Message must be under 1000 characters";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const formData = new FormData(e.target as HTMLFormElement);
    try {
      toast({ title: "Sending...", description: "Please wait..." });
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const json = await response.json();

      if (json.success) {
        toast({
          title: "Success!",
          description: "Thank you! I'll get back to you soon.",
        });
        setForm({ name: "", email: "", message: "" });
        setErrors({});
        (e.target as HTMLFormElement).reset();
      } else {
        toast({
          title: "Error!",
          description: json.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      toast({
        title: "Error!",
        description: "Network error. Please check your connection.",
      });
    }
  };

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Have a question or want to work together? Drop me a message!
          </p>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  { icon: Mail, text: "tadimurahwa@gmail.com" },
                  { icon: Phone, text: " (+263) 714825243 / (+263)780047816" },
                  { icon: MapPin, text: "Harare, Kuwadzana Extension" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-4">
                    <div className="p-3 rounded-lg gradient-bg">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{text}</span>
                  </div>
                ))}
              </div>

              {/* Social Icons */}
              <div>
                <p className="text-sm text-muted-foreground mb-3">Follow me</p>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: "https://github.com/makamurahwa-star", label: "GitHub" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/tadiwanashe1/", label: "LinkedIn" },
                    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-3 rounded-lg bg-secondary hover:bg-primary/10 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 space-y-5" noValidate>
              <input type="hidden" name="access_key" value="e5b2a534-59c0-4557-a303-f38712bb4214" />
              <input type="hidden" name="to_email" value="tadimurahwa@gmail.com" />
              <input type="hidden" name="from_name" value="Portfolio Website" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-ring outline-none transition-colors"
                  placeholder="Your name"
                  required
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-ring outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-ring outline-none transition-colors resize-none"
                  placeholder="Your message..."
                  required
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>
              <button type="submit" className="w-full gradient-bg text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
