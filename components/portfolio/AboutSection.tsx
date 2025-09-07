"use client";

import { siteConfig } from "@/types/site";
import { motion } from "framer-motion";
import { JSX } from "react";

export function AboutSection(): JSX.Element {
  return (
    <motion.section
      className="section-spacing"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.article
          className="card-premium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-display font-semibold mb-6 text-primary">
            {siteConfig.about.title}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {siteConfig.about.description
              .split("React.js")
              .join("")
              .split("TypeScript")
              .join("")}
            <span className="text-primary font-medium">React.js</span> et{" "}
            <span className="text-primary font-medium">TypeScript</span>
            {siteConfig.about.description.split("TypeScript")[1]}
          </p>
        </motion.article>
      </div>
    </motion.section>
  );
}
