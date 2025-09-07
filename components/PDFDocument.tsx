import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { siteConfig } from "@/types/site";

Font.registerHyphenationCallback((word) => [word]);

Font.register({
  family: "Inter",
  fonts: [
    { src: "/fonts/Inter-Regular.otf" },
    { src: "/fonts/Inter-Medium.otf", fontWeight: "medium" },
    { src: "/fonts/Inter-Bold.otf", fontWeight: "bold" },
  ],
});

// Styles PDF
const styles = StyleSheet.create({
  page: {
    fontFamily: "Inter",
    fontSize: 10,
    lineHeight: 1.4,
    color: "#1f2937",
    backgroundColor: "#ffffff",
    padding: 40,
  },
  header: { marginBottom: 30, textAlign: "center" },
  name: { fontSize: 24, fontWeight: "bold", color: "#6366f1", marginBottom: 8 },
  subtitle: { fontSize: 14, color: "#374151", marginBottom: 12 },
  contactInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    fontSize: 9,
    color: "#6b7280",
  },
  contactItem: { textAlign: "center" },
  section: { marginBottom: 24 },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    paddingBottom: 4,
  },
  aboutText: {
    fontSize: 10,
    lineHeight: 1.5,
    color: "#374151",
    textAlign: "justify",
  },
  experienceItem: { marginBottom: 16 },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  jobTitle: { fontSize: 11, fontWeight: "bold", color: "#1f2937" },
  company: { fontSize: 10, color: "#6366f1", fontWeight: "medium" },
  period: { fontSize: 9, color: "#6b7280", textAlign: "right" },
  location: { fontSize: 9, color: "#6b7280", textAlign: "right" },
  achievementsList: { marginLeft: 12 },
  achievement: {
    fontSize: 9,
    color: "#374151",
    marginBottom: 3,
    lineHeight: 1.3,
  },
  bullet: { color: "#6366f1", marginRight: 6 },
  projectItem: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: "#f9fafb",
    borderRadius: 4,
  },
  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 6,
  },
  projectTitle: { fontSize: 11, fontWeight: "bold", color: "#1f2937", flex: 1 },
  projectStatus: {
    fontSize: 8,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  projectType: {
    fontSize: 9,
    color: "#6366f1",
    fontWeight: "medium",
    marginBottom: 4,
  },
  projectDescription: {
    fontSize: 9,
    color: "#374151",
    lineHeight: 1.4,
    marginBottom: 6,
  },
  technologiesList: { flexDirection: "row", flexWrap: "wrap", marginBottom: 4 },
  techBadge: {
    fontSize: 8,
    color: "#374151",
    backgroundColor: "#e5e7eb",
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 3,
    marginRight: 4,
    marginBottom: 4,
  },
  skillsContainer: { flexDirection: "row", justifyContent: "space-between" },
  skillsColumn: { flex: 1 },
  skillsSubtitle: {
    fontSize: 11,
    fontWeight: "medium",
    color: "#1f2937",
    marginBottom: 8,
  },
  skillsList: { flexDirection: "row", flexWrap: "wrap", marginBottom: 4 },
  skillBadge: {
    fontSize: 9,
    color: "#1f2937",
    borderWidth: 1,
    borderColor: "#d1d5db",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginRight: 4,
    marginBottom: 4,
  },
  linkText: { color: "#6366f1", textDecoration: "underline" },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: "center",
    fontSize: 8,
    color: "#9ca3af",
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    paddingTop: 12,
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
            <Text>Téléphone: {siteConfig.phone}</Text>
          </View>
          <View style={styles.contactItem}>
            <Text>Localisation: {siteConfig.location}</Text>
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

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projets Phares</Text>
        {siteConfig.projects.map((project, index) => (
          <View key={index} style={styles.projectItem}>
            <View style={styles.projectHeader}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text
                style={[
                  styles.projectStatus,
                  {
                    backgroundColor:
                      project.status === "Terminé" ? "#d1fae5" : "#ddd6fe",
                    color: project.status === "Terminé" ? "#059669" : "#7c3aed",
                  },
                ]}
              >
                {project.status}
              </Text>
            </View>
            <Text style={styles.projectType}>{project.type}</Text>
            <Text style={styles.projectDescription}>{project.description}</Text>
            <View style={styles.technologiesList}>
              {project.technologies.map((tech, techIndex) => (
                <Text key={techIndex} style={styles.techBadge}>
                  {tech}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Compétences</Text>
        <View style={styles.skillsContainer}>
          <View style={styles.skillsColumn}>
            <Text style={styles.skillsSubtitle}>Compétences Techniques</Text>
            <View style={styles.skillsList}>
              {siteConfig.skills.technical.map((skill, index) => (
                <Text key={index} style={styles.skillBadge}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.skillsColumn}>
            <Text style={styles.skillsSubtitle}>Compétences Transversales</Text>
            <View style={styles.skillsList}>
              {siteConfig.skills.soft.map((skill, index) => (
                <Text key={index} style={styles.skillBadge}>
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
          Portfolio professionnel - LinkedIn: {siteConfig.socialLinks.linkedin}{" "}
          • GitHub: {siteConfig.socialLinks.github}
        </Text>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
