"use client";

import { siteConfig } from "@/types/site";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building } from "lucide-react";

export function ExperienceSection() {
  return (
    <motion.section
      className="section-spacing"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-display font-semibold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Expérience Professionnelle
        </motion.h2>

        <div className="space-y-8">
          {siteConfig.experiences.map((exp, index) => (
            <motion.article
              key={index}
              className="card-premium"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <header className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                <div>
                  <h3 className="text-xl font-display font-medium text-foreground mb-2">
                    {exp.position}
                  </h3>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Building className="w-4 h-4" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-col lg:items-end gap-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time>{exp.period}</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </header>

              <ul className="space-y-2" role="list">
                {exp.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <div
                      className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                      aria-hidden="true"
                    ></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
