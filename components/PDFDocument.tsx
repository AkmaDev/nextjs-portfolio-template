import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Link,
} from "@react-pdf/renderer";
import { siteConfig } from "@/types/site";

// Font config
Font.registerHyphenationCallback((word) => [word]);
Font.register({
  family: "Inter",
  fonts: [
    { src: "/fonts/Inter-Regular.otf" },
    { src: "/fonts/Inter-Medium.otf", fontWeight: "medium" },
    { src: "/fonts/Inter-Bold.otf", fontWeight: "bold" },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Inter",
    fontSize: 10,
    lineHeight: 1.4,
    color: "#1f2937",
    backgroundColor: "#ffffff",
    padding: 36,
  },

  // Header
  header: { marginBottom: 18, textAlign: "center" },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 12,
    color: "#4b5563",
    fontWeight: "medium",
    marginBottom: 6,
  },
  contactInfo: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 14,
    marginTop: 4,
    marginBottom: 8,
    fontSize: 9,
    color: "#374151",
  },
  contactItem: { flexDirection: "row", alignItems: "center", gap: 4 },

  // Sections
  section: { marginBottom: 20 },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#6366f1",
    paddingBottom: 4,
    letterSpacing: 0.4,
  },
  aboutText: {
    fontSize: 10,
    lineHeight: 1.4,
    color: "#374151",
    textAlign: "justify",
  },

  // Expérience
  experienceItem: { marginBottom: 10 },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  jobTitle: { fontSize: 11, fontWeight: "bold", color: "#111827" },
  company: { fontSize: 9, color: "#6366f1", fontWeight: "medium" },
  period: { fontSize: 8.5, color: "#6b7280", textAlign: "right" },
  location: { fontSize: 8.5, color: "#6b7280", textAlign: "right" },
  achievementsList: { marginLeft: 10 },
  achievement: {
    fontSize: 9,
    color: "#374151",
    marginBottom: 2,
    lineHeight: 1.25,
  },
  bullet: { color: "#6366f1", marginRight: 4 },

  // Formation
  educationItem: { marginBottom: 10 },
  eduHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  degree: { fontSize: 11, fontWeight: "bold", color: "#111827" },
  institution: { fontSize: 9, color: "#6366f1", fontWeight: "medium" },
  eduPeriod: { fontSize: 8.5, color: "#6b7280", textAlign: "right" },

  // Projets
  projectItem: {
    marginTop: 0,
    marginBottom: 12,
    padding: 8,
    backgroundColor: "#f9fafb",
    borderRadius: 3,
  },
  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 4,
  },
  projectTitle: {
    fontSize: 10.5,
    fontWeight: "bold",
    color: "#111827",
    flex: 1,
  },
  projectStatus: {
    fontSize: 7.5,
    paddingVertical: 1,
    paddingHorizontal: 4,
    borderRadius: 3,
  },
  projectDescription: {
    fontSize: 8.5,
    color: "#374151",
    lineHeight: 1.3,
    marginBottom: 4,
  },
  technologiesList: { flexDirection: "row", flexWrap: "wrap", marginBottom: 2 },
  techBadge: {
    fontSize: 7.5,
    color: "#374151",
    backgroundColor: "#e5e7eb",
    paddingVertical: 1.5,
    paddingHorizontal: 4,
    borderRadius: 3,
    marginRight: 3,
    marginBottom: 3,
  },
  projectLinks: { flexDirection: "row", marginTop: 4, gap: 8 },

  // Compétences
  skillsContainer: { flexDirection: "row", justifyContent: "space-between" },
  skillsColumn: { flex: 1, marginRight: 8 },
  skillsSubtitle: {
    fontSize: 10.5,
    fontWeight: "medium",
    color: "#111827",
    marginBottom: 6,
  },
  skillsList: { flexDirection: "row", flexWrap: "wrap" },
  skillBadge: {
    fontSize: 8.5,
    borderWidth: 1,
    borderColor: "#d1d5db",
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 3,
    marginRight: 4,
    marginBottom: 4,
  },
  skillBadgeTech: { backgroundColor: "#f3f4f6", color: "#1f2937" },
  skillBadgeSoft: { backgroundColor: "#ffffff", color: "#374151" },

  // Footer
  footer: {
    position: "absolute",
    bottom: 24,
    left: 36,
    right: 36,
    textAlign: "center",
    fontSize: 7.5,
    color: "#9ca3af",
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    paddingTop: 8,
  },
});

const PDFDocument: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{siteConfig.name}</Text>
        <Text style={styles.subtitle}>{siteConfig.hero.subtitle}</Text>

        <View style={styles.contactInfo}>
          <View style={styles.contactItem}>
            <Text>Email: {siteConfig.email}</Text>
          </View>
          <View style={styles.contactItem}>
            <Text>Tél: {siteConfig.phone}</Text>
          </View>
          <View style={styles.contactItem}>
            <Text>Lieu: {siteConfig.location}</Text>
          </View>
        </View>
      </View>

      {/* About */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{siteConfig.about.title}</Text>
        <Text style={styles.aboutText}>{siteConfig.about.description}</Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Expérience Professionnelle</Text>
        {siteConfig.experiences.map((exp, index) => (
          <View key={index} style={styles.experienceItem}>
            <View style={styles.experienceHeader}>
              <View>
                <Text style={styles.jobTitle}>{exp.position}</Text>
                <Text style={styles.company}>{exp.company}</Text>
              </View>
              <View>
                <Text style={styles.period}>{exp.period}</Text>
                <Text style={styles.location}>{exp.location}</Text>
              </View>
            </View>
            <View style={styles.achievementsList}>
              {exp.achievements.map((achievement, achIndex) => (
                <View
                  key={achIndex}
                  style={{ flexDirection: "row", alignItems: "flex-start" }}
                >
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.achievement}>{achievement}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Formation</Text>
        {siteConfig.education.map((edu, idx) => (
          <View key={idx} style={styles.educationItem}>
            <View style={styles.eduHeader}>
              <View>
                <Text style={styles.degree}>{edu.degree}</Text>
                <Text style={styles.institution}>{edu.institution}</Text>
              </View>
              <View>
                <Text style={styles.eduPeriod}>{edu.period}</Text>
                {edu.location && (
                  <Text style={styles.location}>{edu.location}</Text>
                )}
              </View>
            </View>
            {edu.description &&
              edu.description.map((d, i) => (
                <View
                  key={i}
                  style={{ flexDirection: "row", alignItems: "flex-start" }}
                >
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.achievement}>{d}</Text>
                </View>
              ))}
          </View>
        ))}
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projets Phares</Text>
        {siteConfig.projects
          .filter((project) => project.title && project.description)
          .map((project, index) => (
            <View key={index} style={styles.projectItem}>
              <View style={styles.projectHeader}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text
                  style={[
                    styles.projectStatus,
                    {
                      backgroundColor:
                        project.status === "Terminé" ? "#d1fae5" : "#ede9fe",
                      color:
                        project.status === "Terminé" ? "#059669" : "#7c3aed",
                    },
                  ]}
                >
                  {project.status}
                </Text>
              </View>
              {project.type !== "Autre" && (
                <Text
                  style={{ fontSize: 9, color: "#6366f1", marginBottom: 4 }}
                >
                  {project.type}
                </Text>
              )}
              <Text style={styles.projectDescription}>
                {project.description}
              </Text>
              <View style={styles.technologiesList}>
                {project.technologies.map((tech, techIndex) => (
                  <Text key={techIndex} style={styles.techBadge}>
                    {tech}
                  </Text>
                ))}
              </View>

              {/* 🔗 Liens */}
              <View style={styles.projectLinks}>
                {project.link && (
                  <Link
                    src={project.link}
                    style={{ fontSize: 8, color: "#2563eb" }}
                  >
                    Voir en ligne →
                  </Link>
                )}
                {project.github && (
                  <Link
                    src={project.github}
                    style={{ fontSize: 8, color: "#374151" }}
                  >
                    Code source
                  </Link>
                )}
              </View>
            </View>
          ))}
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Compétences</Text>
        <View style={styles.skillsContainer}>
          <View style={styles.skillsColumn}>
            <Text style={styles.skillsSubtitle}>Techniques</Text>
            <View style={styles.skillsList}>
              {siteConfig.skills.technical.map((skill, index) => (
                <Text
                  key={index}
                  style={[styles.skillBadge, styles.skillBadgeTech]}
                >
                  {skill}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.skillsColumn}>
            <Text style={styles.skillsSubtitle}>Transversales</Text>
            <View style={styles.skillsList}>
              {siteConfig.skills.soft.map((skill, index) => (
                <Text
                  key={index}
                  style={[styles.skillBadge, styles.skillBadgeSoft]}
                >
                  {skill}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text>
          Portfolio - LinkedIn: {siteConfig.socialLinks.linkedin} • GitHub:{" "}
          {siteConfig.socialLinks.github}
        </Text>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
