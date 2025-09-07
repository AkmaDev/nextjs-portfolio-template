export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  profileImage: string;
  hero: {
    variant: 'minimal' | 'with-image';
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    ctaUrl?: string;
    heroImage?: string;
  };
  socialLinks: {
    linkedin: string;
    github: string;
    portfolioWeb: string;
    portfolioDesign: string;
  };
  experiences: Array<{
    company: string;
    position: string;
    location: string;
    period: string;
    achievements: string[];
  }>;
  projects: Array<{
    title: string;
    description: string;
    type: 'Projet de soutenance' | 'Projet en cours' | 'Autre';
    technologies: string[];
    status: 'Terminé' | 'En développement';
    link: string;
    github?: string;
    features?: string[];
    year?: string;
  }>;
  skills: {
    technical: string[];
    soft: string[];
  };
  about: {
    title: string;
    description: string;
  };
  analytics?: 
  | { enabled: true; provider: 'plausible'; plausibleDomain: string }
  | { enabled: true; provider: 'ga4'; ga4MeasurementId: string }
  | { enabled: false }

}

export const siteConfig: SiteConfig = {
  name: "Manassé AKPOVI",
  title: "Manassé AKPOVI - Développeur Frontend React.js & TypeScript",
  description: "Portfolio professionnel de Manassé AKPOVI, développeur frontend spécialisé en React.js et TypeScript. Création d'interfaces modernes et performantes.",
  email: "manews193@gmail.com",
  phone: "+229 01 91 40 49 10",
  location: "Cotonou, Bénin",
  profileImage: "/photoMoi.png",
  
  hero: {
    variant: 'with-image', // 'minimal' ou 'with-image'
    title: "Manassé AKPOVI",
    subtitle: "Développeur Frontend React.js & TypeScript",
    description: "Passionné par la création d'interfaces utilisateur modernes et performantes. Je transforme vos idées en expériences web exceptionnelles.",
    ctaText: "Voir mes projets",
    ctaUrl: "#projects"
  },

  socialLinks: {
    linkedin: "https://www.linkedin.com/in/manasse-akpovi",
    github: "https://github.com/AkmaDev",
    portfolioWeb: "https://github.com/AkmaDev",
    portfolioDesign: "/portfoliodesign"
  },

  experiences: [
    {
      company: "NerdX Digital",
      position: "ReactJS Developer Intern",
      location: "Bénin",
      period: "03/2024 – 09/2024",
      achievements: [
        "Développement d'interfaces frontend responsives à partir de designs UI/UX",
        "Conversion de maquettes Figma en code React.js propre et maintenable",
        "Utilisation de Tailwind CSS pour des designs modernes",
      ],
    },
    {
      company: "JILMONDE CONSULTING",
      position: "Stagiaire Développeur Java",
      location: "Bénin",
      period: "04/2023 – 06/2023",
      achievements: [
        "Développement et maintenance de tests unitaires avec JUnit et JaCoCo",
        "Application des principes TDD pour renforcer la robustesse du code",
      ],
    },
    {
      company: "AKS PICTURES",
      position: "Stagiaire Développeur Python",
      location: "Bénin",
      period: "07/2022 – 08/2022",
      achievements: [
        "Développement et optimisation de scripts de narration interactive (Python/Ren'Py)",
        "Optimisation des assets du jeu avec Photoshop",
      ],
    },
  ],

  projects: [
    {
      title: "Plateforme de promotion des producteurs locaux",
      description: "Plateforme web pour valoriser les producteurs locaux, faciliter la vente et la promotion de leurs produits. Projet de soutenance développé avec React.js et une base de données moderne.",
      type: "Projet de soutenance",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Appwrite"],
      status: "Terminé",
      link: "https://sinfi-project-soutenance-2024.vercel.app/",
      github: "https://github.com/AkmaDev/sinfi-project",
      year: "2024",
      features: [
        "Interface utilisateur moderne et responsive",
        "Système d'authentification sécurisé",
        "Gestion complète des produits",
        "Tableau de bord producteur",
        "Recherche et filtrage avancés",
        "Optimisation SEO"
      ]
    },
    {
      title: "Flipbook / Bible pour enfants en fon",
      description: "Outil interactif et visuel pour la lecture biblique des enfants, favorisant la méditation et la compréhension. Interface ludique et éducative adaptée aux jeunes utilisateurs.",
      type: "Projet en cours",
      technologies: ["React.js", "Animation", "Design UX/UI"],
      status: "En développement",
      link: "https://github.com/AkmaDev/BibleFon",
      github: "https://github.com/AkmaDev/BibleFon",
      year: "2024",
      features: [
        "Interface ludique adaptée aux enfants",
        "Animations fluides et interactives", 
        "Navigation intuitive",
        "Contenu multimédia intégré",
        "Design responsive",
        "Accessibilité optimisée"
      ]
    },
  ],

  skills: {
    technical: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Appwrite",
      "CSS",
      "HTML",
      "Python",
      "Ren'Py",
      "Photoshop",
      "Frontend Responsive",
    ],
    soft: [
      "Communication excellente",
      "Autonomie",
      "Esprit d'équipe",
      "Créativité",
      "Sens du design",
      "Adaptabilité",
      "Apprentissage rapide",
    ]
  },

  about: {
    title: "Profil Professionnel",
    description: "Développeur frontend passionné, expérimenté en React.js et TypeScript, motivé à créer des solutions innovantes et performantes. Mon objectif est de mettre en avant mes compétences techniques et projets phares de manière professionnelle et interactive, en contribuant à des projets web modernes qui font la différence."
  },

  analytics: {
    enabled: true, // Change to true to enable analytics
    provider: 'plausible', // 'plausible' or 'ga4'
    plausibleDomain: 'your-domain.com', // Replace with your domain
    // ga4MeasurementId: 'G-XXXXXXXXXX', // Uncomment and replace with your GA4 ID
  }
};