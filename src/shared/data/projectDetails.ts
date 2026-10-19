export type ProjectBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "media"; items: { src: string; alt: string }[] }
  | { type: "quote"; text: string; author?: string };

export type ProjectSectionId =
  | "context"
  | "challenge"
  | "approach"
  | "ux"
  | "ui"
  | "decisions"
  | "development"
  | "result";

export interface ProjectSection {
  id: ProjectSectionId;
  title: string;
  lead?: string;
  blocks: ProjectBlock[];
}

export interface ProjectDetailMeta {
  exitLabel?: string;
  exitValue?: string;
  exitNote?: string;
  metricLabel?: string;
  metricValue?: string;
  metricNote?: string;
  services?: string[];
  techStack?: string;
  industry?: string;
  website?: string;
}

export interface ProjectDetail {
  id: string;
  heroImage: string;
  about: string;
  meta: ProjectDetailMeta;
  sections: ProjectSection[];
}

const p = (text: string): ProjectBlock => ({ type: "paragraph", text });
const ul = (items: string[]): ProjectBlock => ({ type: "list", items });
const media = (
  items: { src: string; alt: string }[],
): ProjectBlock => ({ type: "media", items });
const quote = (text: string, author?: string): ProjectBlock => ({
  type: "quote",
  text,
  ...(author ? { author } : {}),
});

const IMG = {
  hero: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600",
  dashboard: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200",
  mobile: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200",
  branding:
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200",
  design: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200",
  analytics:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
  code: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200",
  workshop:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200",
};

const upstream: ProjectDetail = {
  id: "upstream",
  heroImage: IMG.dashboard,
  about:
    "Upstream, une plateforme de gestion carbone, nous a confié la refonte de son produit pour le rendre plus clair et plus accessible. Nous avons repensé le parcours et l'interface afin de clarifier le discours, renforcer l'image de marque et augmenter les conversions.",
  meta: {
    exitLabel: "Levée de fonds",
    exitValue: "$12M",
    exitNote: "Série A",
    metricLabel: "Utilisateurs actifs",
    metricValue: "50K+",
    metricNote: "Sur 12 mois",
    services: ["Design / maquette", "Création de sites web"],
    techStack: "React, Tailwind CSS, Node.js, PostgreSQL",
    industry: "SaaS / Climat",
    website: "upstream.com",
  },
  sections: [
    {
      id: "context",
      title: "Le contexte",
      lead: "Tout part d'un problème.",
      blocks: [
        p(
          "Upstream évoluait dans un marché de la gestion carbone encore jeune, dominé par des outils complexes pensés pour de grandes entreprises. Le produit fonctionnait, mais le parcours était difficile à appréhender pour une cible moins experte. Nous avons été sollicités pour clarifier l'ensemble de l'expérience, du positionnement jusqu'à l'interface.",
        ),
      ],
    },
    {
      id: "challenge",
      title: "Le défi",
      lead: "Rendre le complexe évident.",
      blocks: [
        p(
          "Le principal enjeu était de simplifier un domaine technique sans en trahir la rigueur. Il fallait rendre l'outil compréhensible dès le premier écran, accélérer l'accès aux informations clés et donner confiance à des utilisateurs non spécialistes.",
        ),
        ul([
          "Offrir un parcours d'onboarding court et rassurant.",
          "Rendre les données carbone lisibles sans expertise préalable.",
          "Livrer un MVP complet et testable en un seul trimestre.",
        ]),
      ],
    },
    {
      id: "approach",
      title: "L'approche",
      lead: "Alors, comment résoudre ça ?",
      blocks: [
        p(
          "Nous sommes partis du parcours utilisateur plutôt que des fonctionnalités. Une phase de cadrage a permis d'identifier les moments de friction, puis de construire une structure simple : comprendre, mesurer, agir. Chaque écran répond à une intention unique.",
        ),
      ],
    },
    {
      id: "ux",
      title: "UX",
      lead: "Avant de penser pixels, pensons parcours.",
      blocks: [
        media([
          { src: IMG.workshop, alt: "Atelier de cadrage UX" },
          { src: IMG.dashboard, alt: "Maquettes du tableau de bord" },
        ]),
        p(
          "Le parcours a été raccourci autour de trois étapes clés, avec des points de repère systématiques. Les retours utilisateurs ont été intégrés à chaque itération pour valider les hypothèses avant de passer au design final.",
        ),
      ],
    },
    {
      id: "ui",
      title: "Design d'interface",
      lead: "Une fois la route claire, place à l'interface.",
      blocks: [
        media([
          { src: IMG.design, alt: "Écran de synthèse" },
          { src: IMG.dashboard, alt: "Écran principal" },
          { src: IMG.analytics, alt: "Écran de données" },
        ]),
        p(
          "L'interface repose sur une hiérarchie claire, des espacements généreux et une palette sobre. Les états sont toujours explicites et les données complexes sont présentées de façon progressive.",
        ),
      ],
    },
    {
      id: "decisions",
      title: "Décisions importantes",
      lead: "Quelques décisions qui ont changé l'expérience.",
      blocks: [
        ul([
          "**Comprendre avant de configurer.** Aucune donnée n'est demandée avant d'avoir montré la valeur.",
          "**Une action par écran.** Chaque vue porte une intention unique pour réduire la charge cognitive.",
          "**La confiance par la transparence.** Les chiffres sont toujours contextualisés et sourcés.",
          "**Un socle design réutilisable.** Un système de composants pour accélérer la suite du produit.",
        ]),
      ],
    },
    {
      id: "development",
      title: "Développement",
      lead: "Le design était prêt, il fallait le faire vivre.",
      blocks: [
        media([
          { src: IMG.code, alt: "Intégration front-end" },
          { src: IMG.dashboard, alt: "Produit en production" },
        ]),
        p(
          "Le produit a été développé en React avec Tailwind CSS, sur une API Node.js. Une attention particulière a été portée à la performance et à l'accessibilité, avec un système de composants partagés entre les différentes vues.",
        ),
      ],
    },
    {
      id: "result",
      title: "Le résultat",
      lead: "Et au final, voilà le résultat.",
      blocks: [
        quote(
          "Un travail remarquable qui a transformé notre produit.",
          "John Doe, CEO chez Upstream",
        ),
        p(
          "Une plateforme plus claire, plus rapide et plus crédible, qui a directement soutenu la croissance et la levée de fonds de l'entreprise.",
        ),
      ],
    },
  ],
};

const rizzle: ProjectDetail = {
  id: "rizzle",
  heroImage: IMG.mobile,
  about:
    "Rizzle, plateforme de création vidéo, nous a confié une refonte complète de son expérience afin de renforcer l'engagement et de clarifier son positionnement auprès des créateurs.",
  meta: {
    metricLabel: "Utilisateurs mensuels",
    metricValue: "34M+",
    metricNote: "Au pic d'activité",
    exitLabel: "Engagement",
    exitValue: "+60%",
    exitNote: "Après refonte",
    services: ["Branding", "Redesign de site web", "Applications mobiles"],
    techStack: "React Native, React, Tailwind CSS, Node.js",
    industry: "Média / Social",
    website: "rizzle.tv",
  },
  sections: [
    {
      id: "context",
      title: "Le contexte",
      lead: "Tout part d'une ambition.",
      blocks: [
        p(
          "Rizzle est né de l'envie de créer une plateforme de création vidéo pour la génération Instagram. Le produit avait grandi vite et l'expérience ne suivait plus la promesse : il fallait remettre de la cohérence entre la marque, le parcours et l'interface.",
        ),
      ],
    },
    {
      id: "challenge",
      title: "Le défi",
      lead: "Réconcilier croissance et clarté.",
      blocks: [
        p(
          "Avec des millions d'utilisateurs, chaque décision de design a un impact fort. Le défi était de simplifier un produit riche sans casser les habitudes, tout en redonnant du sens au parcours de création.",
        ),
        ul([
          "Clarifier le parcours de création vidéo de bout en bout.",
          "Unifier l'expérience mobile et web autour d'un même langage.",
          "Augmenter l'engagement sans ajouter de complexité.",
        ]),
      ],
    },
    {
      id: "approach",
      title: "L'approche",
      lead: "Alors, comment résoudre ça ?",
      blocks: [
        p(
          "Nous avons commencé par observer les usages réels pour identifier les moments de perte. De là, nous avons reconstruit un parcours en boucle simple : créer, publier, découvrir. L'accent a été mis sur la rapidité d'accès à la création.",
        ),
      ],
    },
    {
      id: "ux",
      title: "UX",
      lead: "Avant de penser pixels, pensons parcours.",
      blocks: [
        media([
          { src: IMG.mobile, alt: "Parcours de création mobile" },
          { src: IMG.workshop, alt: "Tests utilisateurs" },
        ]),
        p(
          "Le parcours a été pensé mobile d'abord, avec une action principale toujours à portée de pouce. Chaque étape secondaire est accessible mais jamais imposée.",
        ),
      ],
    },
    {
      id: "ui",
      title: "Design d'interface",
      lead: "Une fois la route claire, place à l'interface.",
      blocks: [
        media([
          { src: IMG.mobile, alt: "Écran de création" },
          { src: IMG.branding, alt: "Identité visuelle" },
          { src: IMG.design, alt: "Écran de découverte" },
        ]),
        p(
          "Une interface dynamique mais lisible, portée par une identité forte. La vidéo est toujours au centre, et l'interface s'efface derrière le contenu.",
        ),
      ],
    },
    {
      id: "decisions",
      title: "Décisions importantes",
      lead: "Quelques décisions qui ont changé l'expérience.",
      blocks: [
        ul([
          "**Mobile d'abord.** Le parcours principal est pensé pour le pouce, pas pour le curseur.",
          "**Créer en moins de 30 secondes.** Aucun réglage requis avant de commencer.",
          "**Une identité assumée.** La marque guide l'interface plutôt que l'inverse.",
          "**Découvrir sans effort.** Le contenu s'adapte au contexte plutôt que de tout afficher.",
        ]),
      ],
    },
    {
      id: "development",
      title: "Développement",
      lead: "Le design était prêt, il fallait le faire vivre.",
      blocks: [
        media([
          { src: IMG.code, alt: "Développement de l'application" },
          { src: IMG.mobile, alt: "Application en production" },
        ]),
        p(
          "L'application a été développée en React Native pour le mobile et en React pour le web, avec un design system partagé afin de garantir la cohérence entre les plateformes.",
        ),
      ],
    },
    {
      id: "result",
      title: "Le résultat",
      lead: "Et au final, voilà le résultat.",
      blocks: [
        quote(
          "La refonte a transformé l'expérience et relancé notre engagement.",
          "Jane Doe, Head of Product chez Rizzle",
        ),
        p(
          "Une expérience unifiée, plus fluide, qui a directement soutenu l'engagement et la croissance de la communauté.",
        ),
      ],
    },
  ],
};

const firefox: ProjectDetail = {
  id: "firefox",
  heroImage: IMG.branding,
  about:
    "Firefox nous a sollicités pour un système d'identité cohérent destiné à renforcer la reconnaissance de la marque sur l'ensemble de ses points de contact.",
  meta: {
    exitLabel: "Reconnaissance",
    exitValue: "+35%",
    exitNote: "Étude post-lancement",
    metricLabel: "Engagement",
    metricValue: "+28%",
    metricNote: "Sur la marque",
    services: ["Identité de marque", "Design / maquette"],
    techStack: "Figma, Design tokens",
    industry: "Technologie",
    website: "firefox.com",
  },
  sections: [
    {
      id: "context",
      title: "Le contexte",
      lead: "Tout part d'un constat.",
      blocks: [
        p(
          "Malgré une notoriété forte, l'expression de la marque manquait d'unité selon les supports. Le projet visait à construire un système d'identité capable de tenir sur tous les formats sans perdre son caractère.",
        ),
      ],
    },
    {
      id: "challenge",
      title: "Le défi",
      lead: "Unifier sans appauvrir.",
      blocks: [
        p(
          "Le défi était de définir des règles claires tout en laissant assez de liberté pour que la marque reste vivante. Il fallait un système robuste, pas un carcan.",
        ),
        ul([
          "Définir des fondations solides : couleur, typographie, rythme.",
          "Garantir la cohérence sur le print et le digital.",
          "Rendre le système simple à faire vivre par les équipes internes.",
        ]),
      ],
    },
    {
      id: "approach",
      title: "L'approche",
      lead: "Alors, comment résoudre ça ?",
      blocks: [
        p(
          "Nous avons construit le système à partir de principes plutôt que de visuels figés. Chaque décision graphique découle d'une intention, ce qui rend l'ensemble facile à décliner.",
        ),
      ],
    },
    {
      id: "ux",
      title: "UX",
      lead: "Avant de penser pixels, pensons expérience.",
      blocks: [
        media([
          { src: IMG.workshop, alt: "Atelier de marque" },
          { src: IMG.branding, alt: "Déclinaisons" },
        ]),
        p(
          "Nous avons cartographié tous les points de contact pour vérifier que l'identité fonctionne aussi bien en grand qu'en très petit, en ligne comme hors ligne.",
        ),
      ],
    },
    {
      id: "ui",
      title: "Design d'interface",
      lead: "Le système prend forme.",
      blocks: [
        media([
          { src: IMG.branding, alt: "Logo et variations" },
          { src: IMG.design, alt: "Palette et typographie" },
          { src: IMG.dashboard, alt: "Application sur écran" },
        ]),
        p(
          "Un système visuel sobre et affirmé, avec des règles d'usage documentées pour chaque contexte d'application.",
        ),
      ],
    },
    {
      id: "decisions",
      title: "Décisions importantes",
      lead: "Quelques décisions qui ont changé la marque.",
      blocks: [
        ul([
          "**Principes avant visuels.** Les règles priment sur les fichiers isolés.",
          "**Un langage unique.** Une seule identité pour tous les supports.",
          "**Documentation intégrée.** Chaque élément est livré avec ses contextes d'usage.",
          "**Accessibilité par défaut.** Contrastes et tailles respectent les standards.",
        ]),
      ],
    },
    {
      id: "development",
      title: "Développement",
      lead: "Le design était prêt, il fallait l'outiller.",
      blocks: [
        media([
          { src: IMG.code, alt: "Design tokens" },
          { src: IMG.design, alt: "Bibliothèque de composants" },
        ]),
        p(
          "L'identité a été livrée sous forme de design tokens et d'une bibliothèque de composants, directement exploitables par les équipes produit.",
        ),
      ],
    },
    {
      id: "result",
      title: "Le résultat",
      lead: "Et au final, voilà le résultat.",
      blocks: [
        quote(
          "Le système a redonné de la cohérence à toute notre expression de marque.",
          "Alex Roe, Brand Lead chez Firefox",
        ),
        p(
          "Une marque plus reconnaissable et plus cohérente, portée par un système que les équipes peuvent réellement faire vivre.",
        ),
      ],
    },
  ],
};

const opera: ProjectDetail = {
  id: "opera",
  heroImage: IMG.design,
  about:
    "Opera nous a confié la création d'un système visuel cohérent pour améliorer son image et l'engagement sur l'ensemble de ses produits.",
  meta: {
    exitLabel: "Reconnaissance",
    exitValue: "+35%",
    exitNote: "Étude post-lancement",
    metricLabel: "Engagement",
    metricValue: "+28%",
    metricNote: "Sur la marque",
    services: ["Identité de marque", "Design / maquette"],
    techStack: "Figma, Design tokens",
    industry: "Technologie",
    website: "opera.com",
  },
  sections: [
    {
      id: "context",
      title: "Le contexte",
      lead: "Tout part d'un besoin de cohérence.",
      blocks: [
        p(
          "Opera souhaitait aligner l'ensemble de ses produits derrière un langage visuel commun. L'objectif était de renforcer la reconnaissance tout en améliorant la lisibilité de l'interface.",
        ),
      ],
    },
    {
      id: "challenge",
      title: "Le défi",
      lead: "Une image unifiée, sans perdre les usages.",
      blocks: [
        p(
          "Il fallait unifier des produits hétérogènes sans casser les habitudes installées. Le système devait être assez souple pour s'adapter à chaque contexte.",
        ),
        ul([
          "Créer un langage visuel partagé entre les produits.",
          "Améliorer la lisibilité et l'accessibilité de l'interface.",
          "Rendre le système facile à maintenir dans le temps.",
        ]),
      ],
    },
    {
      id: "approach",
      title: "L'approche",
      lead: "Alors, comment résoudre ça ?",
      blocks: [
        p(
          "Nous avons posé des fondations communes, puis décliné le système produit par produit. Cette méthode garantit la cohérence tout en respectant la spécificité de chaque usage.",
        ),
      ],
    },
    {
      id: "ux",
      title: "UX",
      lead: "Avant de penser pixels, pensons parcours.",
      blocks: [
        media([
          { src: IMG.workshop, alt: "Cartographie des parcours" },
          { src: IMG.design, alt: "Maquettes" },
        ]),
        p(
          "Les parcours clés ont été simplifiés pour réduire le nombre d'étapes et rendre les actions principales immédiatement visibles.",
        ),
      ],
    },
    {
      id: "ui",
      title: "Design d'interface",
      lead: "Une fois la route claire, place à l'interface.",
      blocks: [
        media([
          { src: IMG.design, alt: "Interface principale" },
          { src: IMG.branding, alt: "Système de couleurs" },
          { src: IMG.dashboard, alt: "Écran de données" },
        ]),
        p(
          "Une interface claire, apaisée et cohérente, qui met l'utilisateur et le contenu au centre.",
        ),
      ],
    },
    {
      id: "decisions",
      title: "Décisions importantes",
      lead: "Quelques décisions qui ont changé l'expérience.",
      blocks: [
        ul([
          "**Un système avant tout.** Des règles partagées plutôt que des écrans isolés.",
          "**La lisibilité d'abord.** Contraste et hiérarchie au service du contenu.",
          "**Souplesse maîtrisée.** Le système s'adapte sans se diluer.",
          "**Maintenance pensée.** Des tokens pour faire évoluer la marque facilement.",
        ]),
      ],
    },
    {
      id: "development",
      title: "Développement",
      lead: "Le design était prêt, il fallait le faire vivre.",
      blocks: [
        media([
          { src: IMG.code, alt: "Intégration des tokens" },
          { src: IMG.design, alt: "Composants partagés" },
        ]),
        p(
          "Le système a été implémenté sous forme de tokens et de composants, directement utilisables par les équipes produit.",
        ),
      ],
    },
    {
      id: "result",
      title: "Le résultat",
      lead: "Et au final, voilà le résultat.",
      blocks: [
        quote(
          "Un système cohérent qui a nettement amélioré notre image et notre engagement.",
          "Sam Poe, Design Director chez Opera",
        ),
        p(
          "Une image unifiée et un engagement en hausse, portés par un système clair et durable.",
        ),
      ],
    },
  ],
};

const chrome: ProjectDetail = {
  id: "chrome",
  heroImage: IMG.analytics,
  about:
    "Chrome nous a sollicités pour clarifier son identité digitale et mieux guider les utilisateurs à travers ses différents points de contact.",
  meta: {
    exitLabel: "Reconnaissance",
    exitValue: "+35%",
    exitNote: "Étude post-lancement",
    metricLabel: "Engagement",
    metricValue: "+28%",
    metricNote: "Sur la marque",
    services: ["Identité de marque", "Design / maquette"],
    techStack: "Figma, Design tokens",
    industry: "Technologie",
    website: "chrome.com",
  },
  sections: [
    {
      id: "context",
      title: "Le contexte",
      lead: "Tout part d'une navigation à clarifier.",
      blocks: [
        p(
          "L'écosystème Chrome s'était densifié, rendant l'orientation parfois difficile pour l'utilisateur. Le projet visait à clarifier l'identité digitale et à guider plus efficacement.",
        ),
      ],
    },
    {
      id: "challenge",
      title: "Le défi",
      lead: "Guider sans surcharger.",
      blocks: [
        p(
          "Le défi était d'apporter de la clarté à un ensemble déjà riche, sans ajouter de complexité. Chaque écran devait répondre à une question simple : où suis-je, et que puis-je faire ?",
        ),
        ul([
          "Clarifier la hiérarchie et la navigation.",
          "Rendre l'identité cohérente entre les surfaces.",
          "Réduire la charge cognitive sur les parcours clés.",
        ]),
      ],
    },
    {
      id: "approach",
      title: "L'approche",
      lead: "Alors, comment résoudre ça ?",
      blocks: [
        p(
          "Nous sommes partis de la structure d'information avant de toucher au style. Une fois la navigation clarifiée, l'identité a été alignée pour en renforcer la lecture.",
        ),
      ],
    },
    {
      id: "ux",
      title: "UX",
      lead: "Avant de penser pixels, pensons parcours.",
      blocks: [
        media([
          { src: IMG.workshop, alt: "Arborescence" },
          { src: IMG.analytics, alt: "Parcours utilisateur" },
        ]),
        p(
          "Les parcours ont été réorganisés autour de points d'entrée clairs, avec des repères cohérents à chaque étape.",
        ),
      ],
    },
    {
      id: "ui",
      title: "Design d'interface",
      lead: "Une fois la route claire, place à l'interface.",
      blocks: [
        media([
          { src: IMG.analytics, alt: "Écran d'accueil" },
          { src: IMG.design, alt: "Composants" },
          { src: IMG.dashboard, alt: "Écran de détail" },
        ]),
        p(
          "Une interface épurée, guidée par une hiérarchie nette et une identité discrète mais reconnaissable.",
        ),
      ],
    },
    {
      id: "decisions",
      title: "Décisions importantes",
      lead: "Quelques décisions qui ont changé l'expérience.",
      blocks: [
        ul([
          "**La structure d'abord.** Clarifier la navigation avant l'esthétique.",
          "**Des repères constants.** Un même emplacement pour les mêmes actions.",
          "**Moins, mais mieux.** Retirer ce qui n'aide pas à décider.",
          "**Une identité discrète.** Elle guide sans prendre le dessus.",
        ]),
      ],
    },
    {
      id: "development",
      title: "Développement",
      lead: "Le design était prêt, il fallait le faire vivre.",
      blocks: [
        media([
          { src: IMG.code, alt: "Développement front-end" },
          { src: IMG.analytics, alt: "Produit en production" },
        ]),
        p(
          "L'implémentation s'est appuyée sur un système de composants partagés, garantissant la cohérence et accélérant les évolutions.",
        ),
      ],
    },
    {
      id: "result",
      title: "Le résultat",
      lead: "Et au final, voilà le résultat.",
      blocks: [
        quote(
          "Une identité plus claire qui aide réellement nos utilisateurs à s'orienter.",
          "Chris Nwosu, Product Lead chez Chrome",
        ),
        p(
          "Une navigation clarifiée et une identité digitale cohérente, qui améliorent l'expérience sur tous les points de contact.",
        ),
      ],
    },
  ],
};

const brave: ProjectDetail = {
  id: "brave",
  heroImage: IMG.workshop,
  about:
    "Brave nous a confié la refonte de son expérience web afin de présenter son offre de façon plus simple et plus convaincante.",
  meta: {
    exitLabel: "Reconnaissance",
    exitValue: "+35%",
    exitNote: "Étude post-lancement",
    metricLabel: "Engagement",
    metricValue: "+28%",
    metricNote: "Sur la marque",
    services: ["Création de sites web", "Application e-commerce"],
    techStack: "React, Tailwind CSS, Node.js, Stripe",
    industry: "Technologie / E-commerce",
    website: "brave.com",
  },
  sections: [
    {
      id: "context",
      title: "Le contexte",
      lead: "Tout part d'une offre à mieux présenter.",
      blocks: [
        p(
          "L'offre de Brave s'était enrichie, mais le site ne la reflétait plus clairement. L'objectif était de simplifier le parcours web et de mieux présenter la valeur du produit.",
        ),
      ],
    },
    {
      id: "challenge",
      title: "Le défi",
      lead: "Présenter vite, convaincre mieux.",
      blocks: [
        p(
          "Le défi était de rendre l'offre compréhensible en quelques secondes, tout en guidant efficacement vers l'achat. Il fallait réduire les frictions sur l'ensemble du tunnel.",
        ),
        ul([
          "Clarifier le message dès les premiers écrans.",
          "Simplifier le parcours d'achat.",
          "Rendre l'expérience cohérente sur mobile et desktop.",
        ]),
      ],
    },
    {
      id: "approach",
      title: "L'approche",
      lead: "Alors, comment résoudre ça ?",
      blocks: [
        p(
          "Nous avons retravaillé le contenu et le parcours ensemble, en alignant le message sur les moments de décision de l'utilisateur.",
        ),
      ],
    },
    {
      id: "ux",
      title: "UX",
      lead: "Avant de penser pixels, pensons parcours.",
      blocks: [
        media([
          { src: IMG.workshop, alt: "Parcours d'achat" },
          { src: IMG.analytics, alt: "Analyse des conversions" },
        ]),
        p(
          "Le tunnel a été raccourci et clarifié, avec une réduction nette des étapes inutiles.",
        ),
      ],
    },
    {
      id: "ui",
      title: "Design d'interface",
      lead: "Une fois la route claire, place à l'interface.",
      blocks: [
        media([
          { src: IMG.workshop, alt: "Page d'accueil" },
          { src: IMG.design, alt: "Fiche produit" },
          { src: IMG.analytics, alt: "Panier et paiement" },
        ]),
        p(
          "Une interface directe et efficace, qui met le produit et la valeur en avant sans distraction.",
        ),
      ],
    },
    {
      id: "decisions",
      title: "Décisions importantes",
      lead: "Quelques décisions qui ont changé l'expérience.",
      blocks: [
        ul([
          "**Le message avant le design.** La clarté du contenu prime sur l'esthétique.",
          "**Un tunnel court.** Moins d'étapes, moins d'abandon.",
          "**Cohérence multi-support.** Une seule expérience du mobile au desktop.",
          "**La preuve plutôt que la promesse.** Des éléments concrets pour rassurer.",
        ]),
      ],
    },
    {
      id: "development",
      title: "Développement",
      lead: "Le design était prêt, il fallait le faire vivre.",
      blocks: [
        media([
          { src: IMG.code, alt: "Intégration" },
          { src: IMG.workshop, alt: "Site en production" },
        ]),
        p(
          "Le site a été développé en React avec Tailwind CSS, avec une intégration e-commerce via Stripe et une attention forte portée à la performance.",
        ),
      ],
    },
    {
      id: "result",
      title: "Le résultat",
      lead: "Et au final, voilà le résultat.",
      blocks: [
        quote(
          "Une expérience plus simple qui présente enfin clairement notre offre.",
          "Dana Lee, Growth Lead chez Brave",
        ),
        p(
          "Un site plus clair et un tunnel d'achat simplifié, qui améliorent directement la conversion.",
        ),
      ],
    },
  ],
};

export const projectDetailsData: Record<string, ProjectDetail> = {
  upstream,
  rizzle,
  firefox,
  opera,
  chrome,
  brave,
};

export function findProjectDetailById(
  projectId: string,
): ProjectDetail | undefined {
  return projectDetailsData[projectId];
}
