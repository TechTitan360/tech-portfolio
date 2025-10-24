import { motion } from "motion/react";
import { Mail, MessageSquare, Send, Twitter, Github, Linkedin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import personalInfo from "../data/personalInfo.json";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Thanks! This is a demo, so the message wasn't actually sent 😊");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const socials = [
    { icon: Twitter, label: "Twitter", color: "bg-cyan-400", url: personalInfo.contact.twitter },
    { icon: Github, label: "GitHub", color: "bg-slate-800", url: personalInfo.contact.github },
    { icon: Linkedin, label: "LinkedIn", color: "bg-blue-600", url: personalInfo.contact.linkedin },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="inline-block relative mb-4">
            Let's Work Together!
            <motion.div
              className="absolute -bottom-2 left-0 h-4 bg-yellow-400 -z-10 border-2 border-black rotate-1"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto">
            Available for freelance, internships, and full-time opportunities. Let's build something amazing!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-pink-400 border-4 border-black">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3>Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2">Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                    placeholder="Your awesome name"
                  />
                </div>

                <div>
                  <label className="block mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-black hover:bg-slate-800 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 w-4 h-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact info & socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Email card */}
            <motion.div
              className="bg-yellow-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8"
              whileHover={{ rotate: -2, scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-8 h-8" />
                <h3>Email Me</h3>
              </div>
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="text-xl hover:underline break-all"
              >
                {personalInfo.contact.email}
              </a>
              <p className="mt-2 text-slate-700">
                I usually respond within 24 hours!
              </p>
            </motion.div>

            {/* Phone card */}
            <motion.div
              className="bg-pink-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8"
              whileHover={{ rotate: 2, scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-8 h-8" />
                <h3>Call Me</h3>
              </div>
              <a
                href={`tel:${personalInfo.contact.phone}`}
                className="text-xl hover:underline"
              >
                {personalInfo.contact.phone}
              </a>
              <p className="mt-2 text-slate-700">
                Available for quick chats & project discussions!
              </p>
            </motion.div>

            {/* Socials */}
            <div>
              <h4 className="mb-4">Connect on Social</h4>
              <div className="space-y-3">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} ${social.label === "GitHub" ? "text-white" : "text-black"
                      } border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4 flex items-center gap-3 transition-all hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4, y: 4 }}
                  >
                    <social.icon className="w-6 h-6" />
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Fun CTA */}
            <motion.div
              className="bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 text-center rotate-2"
              whileHover={{ rotate: 0, scale: 1.05 }}
            >
              <p className="text-2xl mb-2">🚀</p>
              <p className="font-bold mb-2">
                {personalInfo.tagline}
              </p>
              <p className="text-sm">
                {personalInfo.preferences.motto}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center text-slate-600"
        >
          <p>© 2025 {personalInfo.name}. Designed & Built with ❤️ and lots of {personalInfo.preferences.coffee}</p>
        </motion.div>
      </div>
    </section>
  );
}
