"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { toast } from "sonner";
import { siteConfig } from "@/types/site";

interface ContactSectionProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  company: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<ContactSectionProps>({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Message envoyé ! Je vous répondrai bientôt.", {
        duration: 4000,
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        company: "",
      });
    } catch (error) {
      console.error("Contact error:", error);
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      className="section-spacing bg-card/30 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-display font-semibold mb-12 text-center text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contactez-moi
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.aside
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="text-xl font-display font-medium text-foreground mb-6">
                Restons en contact
              </h3>
              <p className="text-muted-foreground mb-8">
                Intéressé par une collaboration ? N&apos;hésitez pas à me
                contacter.
              </p>
            </div>

            <address className="space-y-4 not-italic">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Téléphone</p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Localisation</p>
                  <p className="text-muted-foreground">{siteConfig.location}</p>
                </div>
              </div>
            </address>

            <nav className="flex gap-4 pt-4" aria-label="Réseaux sociaux">
              <Button variant="outline" size="sm" asChild>
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Manassé AKPOVI"
                >
                  <FaLinkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>

              <Button variant="outline" size="sm" asChild>
                <a
                  href={siteConfig.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub de Manassé AKPOVI"
                >
                  <FaGithub className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </nav>
          </motion.aside>

          <motion.div
            className="card-premium"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                    disabled={isLoading}
                    aria-describedby="name-error"
                    className="focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                    disabled={isLoading}
                    aria-describedby="email-error"
                    className="focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Sujet *</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Sujet de votre message"
                  required
                  disabled={isLoading}
                  aria-describedby="subject-error"
                  className="focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet..."
                  rows={6}
                  required
                  disabled={isLoading}
                  aria-describedby="message-error"
                  className="focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full btn-professional"
                disabled={isLoading}
                aria-describedby={isLoading ? "loading-message" : undefined}
              >
                <Send className="w-4 h-4 mr-2" />
                {isLoading ? "Envoi en cours..." : "Envoyer le message"}
              </Button>

              {isLoading && (
                <div
                  id="loading-message"
                  className="sr-only"
                  aria-live="polite"
                >
                  Votre message est en cours d&apos;envoi, veuillez patienter.
                </div>
              )}
            </form>
          </motion.div>
        </div>

        <motion.footer
          className="mt-16 pt-8 border-t border-border text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-muted-foreground">
            © 2024 {siteConfig.name}. Tous droits réservés.{" "}
            <span className="text-primary ml-2">
              Développé avec React.js & TypeScript
            </span>
          </p>
        </motion.footer>
      </div>
    </motion.section>
  );
}
