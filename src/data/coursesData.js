import image1 from '../public_assets/ai.jpg'
import image2 from '../public_assets/ges.jpg'
import image3 from '../public_assets/ship.jpg'
import image4 from '../public_assets/side.jpg'
import IA from '../public_assets/ia-brochure.pdf'
import Visual from '../public_assets/visuel-brochure.pdf'
import Gp from '../public_assets/gp.pdf'
import Lead from '../public_assets/Lead.pdf'

const coursesData = [
  {
    id: "bootcamp",
    title: "Stratégie et Management Projets audiovisuels",
    content: "Formation intensive pour acquérir rapidement les compétences essentielles dans un domaine particulier.",
    backgroundImage: image1,
    brochure : Visual,
    link: "https://forms.gle/3ESBMjHBXjjQhRVL7",
    backgroundColor: "#000000",
    badge: "Bootcamp",
    date: "30.04.2026",
    place: "San-Pedro",
    format: "En Présentiel",
    duration: "3 jours",
    level: "Tous niveaux",
    students: "30",
    price: "150 000 FCFA",
    description: `Ce bootcamp intensif est une immersion stratégique destinée aux jeunes professionnels, créateurs et porteurs de projets audiovisuels souhaitant structurer, professionnaliser et rendre durables leurs projets.
Pendant quatre jours, les participants apprendront à penser, gérer et vendre leurs projets audiovisuels en combinant vision stratégique, management et pratique terrain.`,
    objectives: [
      "Concevoir un projet audiovisuel structuré et cohérent",
      "Définir une stratégie créative, technique et financière",
      "Gérer efficacement équipes, budgets et délais",
      "Améliorer la qualité technique de leurs productions",
      "Pitcher et valoriser leurs projets sur le marché",
    ],
    programme: [
      { semaine: "Jour 1 ", contenu: "Formation théorique sur la gestion et la stratégie des projets audiovisuels." },
      { semaine: "Jour 2 ", contenu: "Ateliers pratiques, débriefing et remise des certificats." },
      { semaine: "Jour 3 ", contenu: "Networking et activités de découverte avant le retour à Abidjan." },
    ],
    instructor: "Steven Awuku",
    instructorRole: "Réalisateur ivoirien de clips vidéo et fondateur de Awuku | Meilleur Réalisateur Vidéo aux AFRIMA (2019)",
  },
  {
    id: "gestion-projet",
    title: "Introduction à la Gestion de Projet",
    content: "Apprendre à gérer efficacement des projets complexes dans un environnement professionnel.",
    backgroundImage: image2,
    brochure : Gp,
    link: "https://forms.gle/ULMeoapDSqyktSYB8",
    backgroundColor: "#000000",
    badge: "Cohorte",
    duration: "1 Mois",
    date: "26.07.2026",
    level: "Débutant",
    format: "Hybride",
    students: "25",
    price: "120 000 FCFA",
    description: `Cette formation vous donne les outils et méthodologies pour piloter des projets de A à Z. Vous apprendrez à planifier, organiser, coordonner et contrôler toutes les phases d'un projet, quelle que soit sa taille ou son secteur d'activité.`,
    objectives: [
      "Comprendre les fondamentaux de la gestion de projets",
      "Structurer un projet de l’idée à l’exécution",
      "Planifier et suivre efficacement son projet",
      "Utiliser des outils simples et applicables immédiatement",
    ],
    programme: [
      { semaine: "Semaine 1 ", contenu: "Introduction au management de projet et cadres méthodologiques" },
      { semaine: "Semaine 2 ", contenu: "Planification : WBS, planning, ressources" },
      { semaine: "Semaine 3 ", contenu: "Budget, coûts et gestion financière du projet" },
      { semaine: "Semaine 4 ", contenu: "Gestion des risques et des parties prenantes" },
      
    ],
    instructor: "Jonathan KOFFI",
    instructorRole: "Instructeur",

    otherInstructor: "Marie Dominique BEUGRE",
    otherInstructorRole: "Instructeur",

    otherInstructor2: "Mouna YEBOUE",
    otherInstructorRole2: "Instructeur",
  },
  {
    id: "leadership",
    title: "Leadership et Management Personnel",
    content: "Développer les compétences nécessaires pour motiver et guider une équipe vers la réussite.",
    backgroundImage: image3,
    brochure : Lead,
    link: "https://forms.gle/6jJvatYJG2cq6neEA",
    backgroundColor: "#000000",
    badge: "Bootcamp",
    duration: "3 jours",
    date: "26.07.2026",
    place: "Yamoussoukro",
    level: "Intermédiaire",
    format: "En Présentiel",
    students: "30",
    price: "130 000 FCFA",
    description: `Ce bootcamp intensif est une expérience immersive conçue pour révéler et structurer le potentiel de leadership des jeunes professionnels, créateurs et porteurs de projets.
À travers des apports théoriques, des mises en situation et un accompagnement ciblé, les participants apprendront à incarner leur leadership, mobiliser efficacement les autres et piloter leurs projets avec vision, assurance et cohérence.`,
    objectives: [
      "Approche stratégique + pratique concrète",
      "Clarifier et structurer leur vision stratégique",
      "Prendre des décisions avec assurance et responsabilité",
      "Mobiliser et fédérer efficacement une équipe",
      "Conduire des projets avec impact et performance",
    ],
    programme: [
      { semaine: "Jour 1 ", contenu: "Formation théorique en leadership : styles de leadership, vision stratégique, communication, prise de décision et gestion des situations complexes" },
      { semaine: "Jour 2 ", contenu: " Ateliers pratiques & clôture : exercices de leadership, simulations, coaching personnalisé, plan d’action et remise des certificats." },
      { semaine: "Jour 3 ", contenu: " Networking & découverte : soirée d’échanges entre participants, activité touristique et départ." },
      
    ],
    instructor: "Christian Emmanuel DJEDJE",
    instructorRole: "Président de l’organisation WAKE UP CI Coach certifié en Leadership",
  },
  {
    id: "intelligence-artificielle",
    title: "Initiation à l'Intelligence Artificielle",
    content: "Apprendre à s'exprimer clairement, à convaincre et à interagir efficacement dans tous les contextes.",
    backgroundImage: image4,
    brochure : IA,
    link: "https://forms.gle/bA1HYUGtAWazgiJp6",
    backgroundColor: "#000000",
    badge: "Cohorte",
    duration: "1 Mois",
    date: "18.05.2026",
    level: "Débutant",
    students: "25",
    price: "120 000 FCFA",
    description: `L'Intelligence Artificielle redéfinit tous les secteurs d'activité. Cette initiation vous permet de comprendre les mécanismes fondamentaux de l'IA, d'explorer ses applications concrètes dans le monde professionnel africain, et de commencer à utiliser des outils IA dans votre quotidien.`,
    objectives: [
      "Comprendre ce qu'est l'IA, le Machine Learning et le Deep Learning",
      "Explorer les cas d'usage concrets dans divers secteurs",
      "Utiliser des outils IA accessibles sans coder",
      "Anticiper les impacts de l'IA sur les métiers et s'y préparer",
    ],
    programme: [
      { semaine: "Semaine 1 ", contenu: "Qu'est-ce que l'IA ? Histoire, concepts et démystification" },
      { semaine: "Semaine 2 ", contenu: "Machine Learning : comprendre sans coder" },
      { semaine: "Semaine 3 ", contenu: "Outils IA du quotidien et applications pratiques" },
      { semaine: "Semaine 4 ", contenu: "IA et éthique, IA en Afrique, projet final" },
    ],
    instructor: "Eudes Koffi",
    instructorRole: "Executive Manager, Beriverse Inc.",
  },
];

export default coursesData;
