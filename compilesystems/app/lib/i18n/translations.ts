import type { Locale } from "./locales";

import type { ServiceIconId } from "../services";
import { COMPANY_EMAIL } from "../site";

export type ServiceItem = {
  id: ServiceIconId;
  title: string;
  description: string;
};

export type StatItem = {
  label: string;
  value: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type ClientItem = {
  id: string;
  name: string;
  description: string;
};

export type LegalSection = {
  title: string;
  paragraphs: string[];
};

export type LegalDocument = {
  title: string;
  intro: string;
  sections: LegalSection[];
};

export type Translations = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    services: string;
    profile: string;
    clients: string;
    contact: string;
  };
  hero: {
    badge: string;
    titleBefore: string;
    titleAccent: string;
    titleAfter: string;
    description: string;
    ctaServices: string;
    ctaAbout: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  profile: {
    title: string;
    paragraphs: [string, string];
    stats: StatItem[];
    howWeWork: {
      title: string;
      subtitle: string;
      steps: ProcessStep[];
    };
    techStack: {
      title: string;
      items: string[];
    };
  };
  clients: {
    title: string;
    subtitle: string;
    visitWebsite: string;
    items: ClientItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    findUs: string;
    openInMaps: string;
    companyName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    sendMessage: string;
    formIntro: string;
    mapTitle: string;
  };
  companyContact: {
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  form: {
    name: string;
    email: string;
    subject: string;
    message: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    clear: string;
    success: string;
    genericError: string;
  };
  footer: {
    tagline: string;
    navigation: string;
    legal: string;
    contact: string;
    privacyPolicy: string;
    termsOfUse: string;
    copyright: string;
  };
  legal: {
    backToHome: string;
    lastUpdated: string;
    privacy: LegalDocument;
    terms: LegalDocument;
  };
  scrollToTop: string;
  navMenu: {
    main: string;
    open: string;
    close: string;
  };
  languageBar: {
    label: string;
  };
  themeToggle: {
    switchToLight: string;
    switchToDark: string;
  };
  brand: {
    slogan: string;
  };
};

const servicesEn: ServiceItem[] = [
  {
    id: "customSoftware",
    title: "Custom Software",
    description:
      "End-to-end product development — from discovery and architecture to production deployment.",
  },
  {
    id: "systemArchitecture",
    title: "System Architecture",
    description:
      "Scalable, maintainable systems designed for performance, reliability, and long-term growth.",
  },
  {
    id: "cloudDevops",
    title: "Cloud & DevOps",
    description:
      "CI/CD pipelines, infrastructure as code, and cloud-native solutions on AWS, GCP, and Azure.",
  },
  {
    id: "technicalConsulting",
    title: "Technical Consulting",
    description:
      "Code reviews, tech stack decisions, and engineering leadership for teams at any stage.",
  },
];

const servicesEl: ServiceItem[] = [
  {
    id: "customSoftware",
    title: "Προσαρμοσμένο Λογισμικό",
    description:
      "Ανάπτυξη προϊόντος από την αρχή μέχρι το τέλος — από την ανακάλυψη και την αρχιτεκτονική μέχρι την παραγωγική ανάπτυξη.",
  },
  {
    id: "systemArchitecture",
    title: "Αρχιτεκτονική Συστημάτων",
    description:
      "Κλιμακούμενα, συντηρήσιμα συστήματα σχεδιασμένα για απόδοση, αξιοπιστία και μακροπρόθεσμη ανάπτυξη.",
  },
  {
    id: "cloudDevops",
    title: "Cloud & DevOps",
    description:
      "CI/CD pipelines, infrastructure as code και cloud-native λύσεις σε AWS, GCP και Azure.",
  },
  {
    id: "technicalConsulting",
    title: "Τεχνική Συμβουλευτική",
    description:
      "Αξιολογήσεις κώδικα, αποφάσεις τεχνολογικού stack και ηγεσία μηχανικής για ομάδες σε κάθε στάδιο.",
  },
];

const servicesFil: ServiceItem[] = [
  {
    id: "customSoftware",
    title: "Custom na Software",
    description:
      "Buong proseso ng pagbuo ng produkto — mula sa discovery at architecture hanggang sa production deployment.",
  },
  {
    id: "systemArchitecture",
    title: "System Architecture",
    description:
      "Scalable at madaling-maintain na mga system na dinisenyo para sa performance, reliability, at pangmatagalang paglago.",
  },
  {
    id: "cloudDevops",
    title: "Cloud & DevOps",
    description:
      "CI/CD pipelines, infrastructure as code, at cloud-native na solusyon sa AWS, GCP, at Azure.",
  },
  {
    id: "technicalConsulting",
    title: "Technical Consulting",
    description:
      "Code reviews, tech stack decisions, at engineering leadership para sa mga team sa anumang yugto.",
  },
];

const howWeWorkEn: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "We align on goals, users, constraints, and success criteria before writing code.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Architecture, scope, and delivery plan — reviewed with your team early and often.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Iterative development with demos, code reviews, and tight feedback loops.",
  },
  {
    step: "04",
    title: "Ship",
    description:
      "Production deployment, documentation, handover, and support as you scale.",
  },
];

const howWeWorkEl: ProcessStep[] = [
  {
    step: "01",
    title: "Ανακάλυψη",
    description:
      "Ευθυγραμμιζόμαστε σε στόχους, χρήστες, περιορισμούς και κριτήρια επιτυχίας πριν γράψουμε κώδικα.",
  },
  {
    step: "02",
    title: "Σχεδιασμός",
    description:
      "Αρχιτεκτονική, εύρος και σχέδιο παράδοσης — με έλεγχο από την ομάδα σας νωρίς και συχνά.",
  },
  {
    step: "03",
    title: "Κατασκευή",
    description:
      "Επαναληπτική ανάπτυξη με demos, code reviews και στενούς βρόχους ανατροφοδότησης.",
  },
  {
    step: "04",
    title: "Παράδοση",
    description:
      "Ανάπτυξη σε παραγωγή, τεκμηρίωση, παράδοση και υποστήριξη καθώς κλιμακώνεστε.",
  },
];

const howWeWorkFil: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "Nag-a-align kami sa goals, users, constraints, at success criteria bago magsulat ng code.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Architecture, scope, at delivery plan — sinusuri kasama ang inyong team nang maaga at madalas.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Iterative development na may demos, code reviews, at mahigpit na feedback loops.",
  },
  {
    step: "04",
    title: "Ship",
    description:
      "Production deployment, documentation, handover, at support habang lumalago kayo.",
  },
];

const techStackItems = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "CI/CD",
];

const clientsEn: ClientItem[] = [
  {
    id: "sparxIQ",
    name: "SPARXiQ",
    description: "Intelligent automation, analytics, and digital operations.",
  },
  {
    id: "siemens",
    name: "Siemens",
    description: "Global engineering, industrial technology, and smart infrastructure.",
  },
  {
    id: "hubbell",
    name: "Hubbell",
    description: "Electrical solutions and utility infrastructure systems.",
  },
  {
    id: "idea",
    name: "IDEA",
    description: "Innovation-led product design and engineering delivery.",
  },
  {
    id: "jpinox",
    name: "JPInox Systems",
    description: "Stainless steel systems and precision industrial fabrication.",
  },
];

const clientsEl: ClientItem[] = [
  {
    id: "sparxIQ",
    name: "SPARXiQ",
    description: "Έξυπνος αυτοματισμός, αναλυτικά στοιχεία και ψηφιακές λειτουργίες.",
  },
  {
    id: "siemens",
    name: "Siemens",
    description: "Παγκόσμια μηχανική, βιομηχανική τεχνολογία και έξυπνη υποδομή.",
  },
  {
    id: "hubbell",
    name: "Hubbell",
    description: "Ηλεκτρολογικές λύσεις και συστήματα υποδομής κοινής ωφέλειας.",
  },
  {
    id: "idea",
    name: "IDEA",
    description: "Σχεδιασμός προϊόντων και μηχανική παράδοση με έμφαση στην καινοτομία.",
  },
  {
    id: "jpinox",
    name: "JPInox Systems",
    description: "Συστήματα ανοξείδωτου χάλυβα και ακριβής βιομηχανική κατασκευή.",
  },
];

const privacyEn: LegalDocument = {
  title: "Privacy Policy",
  intro:
    "Compile Systems Ltd respects your privacy. This policy explains what information we collect, how we use it, and the choices you have when you visit our website or contact us.",
  sections: [
    {
      title: "Information we collect",
      paragraphs: [
        "When you use our contact form, we collect the details you provide — typically your name, email address, subject, and message.",
        "We also collect standard technical data such as browser type and page interactions through server logs and, if enabled, privacy-friendly analytics.",
      ],
    },
    {
      title: "How we use your information",
      paragraphs: [
        "We use contact form submissions to respond to enquiries and discuss potential projects.",
        "We do not sell your personal data. We only share information when required by law or when necessary to operate our services (for example, with an email delivery provider).",
      ],
    },
    {
      title: "Data retention",
      paragraphs: [
        "We retain contact enquiries only for as long as needed to respond, manage our relationship with you, or meet legal obligations.",
      ],
    },
    {
      title: "Your rights",
      paragraphs: [
        "Depending on your location, you may have rights to access, correct, delete, or restrict the use of your personal data. To exercise these rights, contact us at the email address below.",
      ],
    },
    {
      title: "Contact",
      paragraphs: [
        `Questions about this policy can be sent to ${COMPANY_EMAIL}.`,
      ],
    },
  ],
};

const privacyEl: LegalDocument = {
  title: "Πολιτική Απορρήτου",
  intro:
    "Η Compile Systems Ltd σέβεται την ιδιωτικότητά σας. Η παρούσα πολιτική εξηγεί ποιες πληροφορίες συλλέγουμε, πώς τις χρησιμοποιούμε και ποιες επιλογές έχετε όταν επισκέπτεστε τον ιστότοπό μας ή επικοινωνείτε μαζί μας.",
  sections: [
    {
      title: "Πληροφορίες που συλλέγουμε",
      paragraphs: [
        "Όταν χρησιμοποιείτε τη φόρμα επικοινωνίας, συλλέγουμε τα στοιχεία που παρέχετε — συνήθως όνομα, διεύθυνση email, θέμα και μήνυμα.",
        "Συλλέγουμε επίσης βασικά τεχνικά δεδομένα, όπως τύπο προγράμματος περιήγησης και αλληλεπιδράσεις σελίδας, μέσω server logs και, εάν είναι ενεργοποιημένα, privacy-friendly analytics.",
      ],
    },
    {
      title: "Πώς χρησιμοποιούμε τις πληροφορίες σας",
      paragraphs: [
        "Χρησιμοποιούμε τις υποβολές της φόρμας επικοινωνίας για να απαντήσουμε σε ερωτήματα και να συζητήσουμε πιθανά έργα.",
        "Δεν πουλάμε τα προσωπικά σας δεδομένα. Κοινοποιούμε πληροφορίες μόνο όταν απαιτείται από τον νόμο ή όταν είναι απαραίτητο για τη λειτουργία των υπηρεσιών μας.",
      ],
    },
    {
      title: "Διατήρηση δεδομένων",
      paragraphs: [
        "Διατηρούμε αιτήματα επικοινωνίας μόνο για όσο χρειάζεται να απαντήσουμε, να διαχειριστούμε τη σχέση μας μαζί σας ή να εκπληρώσουμε νομικές υποχρεώσεις.",
      ],
    },
    {
      title: "Τα δικαιώματά σας",
      paragraphs: [
        "Ανάλογα με την τοποθεσία σας, μπορεί να έχετε δικαιώματα πρόσβασης, διόρθωσης, διαγραφής ή περιορισμού της χρήσης των προσωπικών σας δεδομένων. Για να τα ασκήσετε, επικοινωνήστε μαζί μας στο email παρακάτω.",
      ],
    },
    {
      title: "Επικοινωνία",
      paragraphs: [
        `Ερωτήσεις σχετικά με αυτή την πολιτική μπορούν να αποσταλούν στο ${COMPANY_EMAIL}.`,
      ],
    },
  ],
};

const privacyFil: LegalDocument = {
  title: "Privacy Policy",
  intro:
    "Iginagalang ng Compile Systems Ltd ang inyong privacy. Ipinaliliwanag ng patakarang ito kung anong impormasyon ang kinokolekta namin, paano namin ito ginagamit, at ang mga pagpipilian ninyo kapag binisita ninyo ang aming website o nakipag-ugnayan sa amin.",
  sections: [
    {
      title: "Impormasyong kinokolekta namin",
      paragraphs: [
        "Kapag ginamit ninyo ang contact form, kinokolekta namin ang mga detalyeng ibinibigay ninyo — karaniwang pangalan, email address, paksa, at mensahe.",
        "Kinokolekta rin namin ang karaniwang technical data tulad ng browser type at page interactions sa pamamagitan ng server logs at, kung naka-enable, privacy-friendly analytics.",
      ],
    },
    {
      title: "Paano namin ginagamit ang inyong impormasyon",
      paragraphs: [
        "Ginagamit namin ang mga contact form submission upang tumugon sa mga enquiry at pag-usapan ang mga posibleng proyekto.",
        "Hindi namin ibinebenta ang inyong personal data. Nagbabahagi lang kami ng impormasyon kapag kinakailangan ng batas o kapag kailangan para mapatakbo ang aming mga serbisyo.",
      ],
    },
    {
      title: "Pagpapanatili ng data",
      paragraphs: [
        "Pinapanatili lang namin ang mga contact enquiry hangga't kailangan upang tumugon, pamahalaan ang relasyon namin sa inyo, o matugunan ang mga legal na obligasyon.",
      ],
    },
    {
      title: "Inyong mga karapatan",
      paragraphs: [
        "Depende sa inyong lokasyon, maaaring may karapatan kayong ma-access, itama, burahin, o limitahan ang paggamit ng inyong personal data. Para gamitin ang mga ito, makipag-ugnayan sa amin sa email address sa ibaba.",
      ],
    },
    {
      title: "Contact",
      paragraphs: [
        `Ang mga tanong tungkol sa patakarang ito ay maaaring ipadala sa ${COMPANY_EMAIL}.`,
      ],
    },
  ],
};

const termsEn: LegalDocument = {
  title: "Terms of Use",
  intro:
    "By accessing and using the Compile Systems Ltd website, you agree to these terms. If you do not agree, please do not use this site.",
  sections: [
    {
      title: "Use of the website",
      paragraphs: [
        "This website provides general information about our software engineering services. Content is provided for informational purposes and may change without notice.",
        "You agree to use the site lawfully and not to attempt to disrupt, damage, or gain unauthorised access to our systems.",
      ],
    },
    {
      title: "Intellectual property",
      paragraphs: [
        "Unless otherwise stated, all content on this website — including text, branding, graphics, and layout — is owned by Compile Systems Ltd or used with permission. You may not copy, modify, or redistribute it without our written consent.",
      ],
    },
    {
      title: "Contact submissions",
      paragraphs: [
        "Information submitted through our contact form must be accurate to the best of your knowledge. We are not obliged to respond to every enquiry.",
      ],
    },
    {
      title: "Disclaimer",
      paragraphs: [
        "We aim to keep this website accurate and available, but we provide it on an \"as is\" basis without warranties of any kind. To the extent permitted by law, Compile Systems Ltd is not liable for losses arising from use of this website.",
      ],
    },
    {
      title: "Governing law",
      paragraphs: [
        "These terms are governed by the laws of the Republic of Cyprus. Any disputes shall be subject to the exclusive jurisdiction of the courts of Cyprus.",
      ],
    },
    {
      title: "Contact",
      paragraphs: [
        `Questions about these terms can be sent to ${COMPANY_EMAIL}.`,
      ],
    },
  ],
};

const termsEl: LegalDocument = {
  title: "Όροι Χρήσης",
  intro:
    "Με την πρόσβαση και τη χρήση του ιστότοπου της Compile Systems Ltd, αποδέχεστε τους παρόντες όρους. Εάν δεν συμφωνείτε, παρακαλούμε μην χρησιμοποιείτε αυτόν τον ιστότοπο.",
  sections: [
    {
      title: "Χρήση του ιστότοπου",
      paragraphs: [
        "Ο ιστότοπος παρέχει γενικές πληροφορίες σχετικά με τις υπηρεσίες μηχανικής λογισμικού μας. Το περιεχόμενο παρέχεται για ενημερωτικούς σκοπούς και μπορεί να αλλάξει χωρίς προειδοποίηση.",
        "Συμφωνείτε να χρησιμοποιείτε τον ιστότοπο νόμιμα και να μην επιχειρείτε να διαταράξετε, να προκαλέσετε ζημιά ή να αποκτήσετε μη εξουσιοδοτημένη πρόσβαση στα συστήματά μας.",
      ],
    },
    {
      title: "Πνευματική ιδιοκτησία",
      paragraphs: [
        "Εκτός αν αναφέρεται διαφορετικά, όλο το περιεχόμενο του ιστότοπου — συμπεριλαμβανομένων κειμένων, branding, γραφικών και διάταξης — ανήκει στην Compile Systems Ltd ή χρησιμοποιείται με άδεια. Δεν επιτρέπεται η αντιγραφή, τροποποίηση ή αναδιανομή χωρίς γραπτή συγκατάθεσή μας.",
      ],
    },
    {
      title: "Υποβολές επικοινωνίας",
      paragraphs: [
        "Οι πληροφορίες που υποβάλλονται μέσω της φόρμας επικοινωνίας πρέπει να είναι ακριβείς κατά το δυνατόν. Δεν υποχρεούμαστε να απαντήσουμε σε κάθε αίτημα.",
      ],
    },
    {
      title: "Αποποίηση ευθύνης",
      paragraphs: [
        "Σκοπεύουμε να διατηρούμε τον ιστότοπο ακριβή και διαθέσιμο, αλλά τον παρέχουμε «ως έχει» χωρίς εγγυήσεις οποιουδήποτε είδους. Στο βαθμό που επιτρέπεται από τον νόμο, η Compile Systems Ltd δεν ευθύνεται για ζημίες που προκύπτουν από τη χρήση του ιστότοπου.",
      ],
    },
    {
      title: "Εφαρμοστέο δίκαιο",
      paragraphs: [
        "Οι παρόντες όροι διέπονται από τους νόμους της Κυπριακής Δημοκρατίας. Τυχόν διαφορές υπόκεινται στην αποκλειστική δικαιοδοσία των δικαστηρίων της Κύπρου.",
      ],
    },
    {
      title: "Επικοινωνία",
      paragraphs: [
        `Ερωτήσεις σχετικά με τους όρους μπορούν να αποσταλούν στο ${COMPANY_EMAIL}.`,
      ],
    },
  ],
};

const termsFil: LegalDocument = {
  title: "Terms of Use",
  intro:
    "Sa pag-access at paggamit ng website ng Compile Systems Ltd, sumasang-ayon kayo sa mga tuntuning ito. Kung hindi kayo sumasang-ayon, huwag gamitin ang site na ito.",
  sections: [
    {
      title: "Paggamit ng website",
      paragraphs: [
        "Ang website na ito ay nagbibigay ng pangkalahatang impormasyon tungkol sa aming software engineering services. Ang content ay para sa impormasyon at maaaring magbago nang walang abiso.",
        "Sumasang-ayon kayong gamitin ang site nang legal at huwag subukang gambalain, siraan, o makakuha ng hindi awtorisadong access sa aming mga system.",
      ],
    },
    {
      title: "Intellectual property",
      paragraphs: [
        "Maliban kung nakasaad, ang lahat ng content sa website na ito — kasama ang text, branding, graphics, at layout — ay pag-aari ng Compile Systems Ltd o ginagamit nang may pahintulot. Hindi ninyo maaaring kopyahin, baguhin, o ipamahagi ito nang walang nakasulat na pahintulot.",
      ],
    },
    {
      title: "Mga contact submission",
      paragraphs: [
        "Ang impormasyong isinumite sa pamamagitan ng contact form ay dapat na tumpak sa abot ng inyong kaalaman. Hindi kami obligadong tumugon sa bawat enquiry.",
      ],
    },
    {
      title: "Disclaimer",
      paragraphs: [
        "Layunin naming panatilihing tumpak at available ang website na ito, ngunit ibinibigay namin ito sa \"as is\" na batayan nang walang anumang warranty. Sa lawak na pinahihintulutan ng batas, hindi mananagot ang Compile Systems Ltd para sa mga pagkalugi na nagmumula sa paggamit ng website na ito.",
      ],
    },
    {
      title: "Governing law",
      paragraphs: [
        "Ang mga tuntuning ito ay pinamamahalaan ng mga batas ng Republic of Cyprus. Ang anumang hindi pagkakaunawaan ay sasailalim sa eksklusibong hurisdiksyon ng mga korte ng Cyprus.",
      ],
    },
    {
      title: "Contact",
      paragraphs: [
        `Ang mga tanong tungkol sa mga tuntuning ito ay maaaring ipadala sa ${COMPANY_EMAIL}.`,
      ],
    },
  ],
};

const clientsFil: ClientItem[] = [
  {
    id: "sparxIQ",
    name: "SPARXiQ",
    description: "Intelligent automation, analytics, at digital operations.",
  },
  {
    id: "siemens",
    name: "Siemens",
    description: "Global engineering, industrial technology, at smart infrastructure.",
  },
  {
    id: "hubbell",
    name: "Hubbell",
    description: "Electrical solutions at mga utility infrastructure system.",
  },
  {
    id: "idea",
    name: "IDEA",
    description: "Innovation-led na product design at engineering delivery.",
  },
  {
    id: "jpinox",
    name: "JPInox Systems",
    description: "Stainless steel systems at precision industrial fabrication.",
  },
];

export const translations: Record<Locale, Translations> = {
  en: {
    meta: {
      title: "Compile Systems Ltd | Software Engineering",
      description:
        "Compile Systems Ltd delivers modern software engineering — architecture, development, and delivery.",
    },
    nav: {
      home: "Home",
      services: "Services",
      profile: "Profile",
      clients: "Clients",
      contact: "Contact",
    },
    hero: {
      badge: "Software Engineering",
      titleBefore: "We build software that ",
      titleAccent: "compiles",
      titleAfter: " with your business.",
      description:
        "Compile Systems Ltd partners with ambitious teams to design, build, and ship reliable software — fast, clean, and built to last.",
      ctaServices: "Our Services",
      ctaAbout: "About Us",
    },
    services: {
      title: "Services",
      subtitle:
        "Focused expertise across the full software lifecycle — no bloat, no buzzwords.",
      items: servicesEn,
    },
    profile: {
      title: "Profile",
      paragraphs: [
        "Compile Systems Ltd is a software engineering consultancy founded on clarity, craftsmanship, and delivery. We work alongside your team — not around it — to turn complex problems into elegant, maintainable solutions.",
        "Whether you need a greenfield product, a legacy migration, or senior engineering capacity, we bring the rigour of a compiler and the pragmatism of a startup.",
      ],
      stats: [
        { label: "Founded", value: "2024" },
        { label: "Focus", value: "Engineering" },
        { label: "Approach", value: "Lean & Agile" },
        { label: "Stack", value: "Modern Web" },
      ],
      howWeWork: {
        title: "How we work",
        subtitle:
          "A clear, collaborative process from first conversation to production.",
        steps: howWeWorkEn,
      },
      techStack: {
        title: "Tech stack",
        items: techStackItems,
      },
    },
    clients: {
      title: "Clients",
      subtitle:
        "Trusted by forward-thinking teams across automation, industry, and infrastructure.",
      visitWebsite: "Visit website",
      items: clientsEn,
    },
    contact: {
      title: "Contact",
      subtitle:
        "Reach out to discuss your project, ask a question, or explore how we can work together.",
      findUs: "Find Us",
      openInMaps: "Open in Google Maps →",
      companyName: "Compile Systems Ltd",
      email: "Email",
      phone: "Phone",
      address: "Address",
      city: "City",
      postalCode: "Postal Code",
      country: "Country",
      sendMessage: "Send a Message",
      formIntro:
        "Fill in the form below and we'll respond as soon as possible.",
      mapTitle: "Compile Systems Ltd — {address}",
    },
    companyContact: {
      email: COMPANY_EMAIL,
      phone: "+306936696835",
      address: "23 Dromos, 4C, Episkopi",
      city: "Limassol",
      postalCode: "4620",
      country: "Cyprus",
    },
    form: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@company.com",
      subjectPlaceholder: "How can we help?",
      messagePlaceholder: "Tell us about your project or question...",
      submit: "Send Message",
      submitting: "Sending…",
      clear: "Clear",
      success:
        "Thank you — your message has been sent. We'll get back to you soon.",
      genericError: "Something went wrong. Please try again.",
    },
    footer: {
      tagline: "Your vision. Our code.",
      navigation: "Navigation",
      legal: "Legal",
      contact: "Contact",
      privacyPolicy: "Privacy Policy",
      termsOfUse: "Terms of Use",
      copyright: "© {year} Compile Systems Ltd. All rights reserved.",
    },
    legal: {
      backToHome: "Back to home",
      lastUpdated: "Last updated: June 2026",
      privacy: privacyEn,
      terms: termsEn,
    },
    scrollToTop: "Scroll to top",
    navMenu: {
      main: "Main navigation",
      open: "Open menu",
      close: "Close menu",
    },
    languageBar: {
      label: "Language",
    },
    themeToggle: {
      switchToLight: "Switch to light view",
      switchToDark: "Switch to dark view",
    },
    brand: {
      slogan: "Your vision. Our code.",
    },
  },
  el: {
    meta: {
      title: "Compile Systems Ltd | Μηχανική Λογισμικού",
      description:
        "Η Compile Systems Ltd παρέχει σύγχρονη μηχανική λογισμικού — αρχιτεκτονική, ανάπτυξη και παράδοση.",
    },
    nav: {
      home: "Αρχική",
      services: "Υπηρεσίες",
      profile: "Προφίλ",
      clients: "Πελάτες",
      contact: "Επικοινωνία",
    },
    hero: {
      badge: "Μηχανική Λογισμικού",
      titleBefore: "Φτιάχνουμε λογισμικό που ",
      titleAccent: "συντάσσεται",
      titleAfter: " με την επιχείρησή σας.",
      description:
        "Η Compile Systems Ltd συνεργάζεται με φιλόδοξες ομάδες για να σχεδιάσει, να κατασκευάσει και να παραδώσει αξιόπιστο λογισμικό — γρήγορα, καθαρά και μακροχρόνια.",
      ctaServices: "Οι Υπηρεσίες μας",
      ctaAbout: "Σχετικά με εμάς",
    },
    services: {
      title: "Υπηρεσίες",
      subtitle:
        "Εξειδικευμένη γνώση σε όλο τον κύκλο ζωής του λογισμικού — χωρίς περιττά στοιχεία.",
      items: servicesEl,
    },
    profile: {
      title: "Προφίλ",
      paragraphs: [
        "Η Compile Systems Ltd είναι μια εταιρεία συμβουλευτικής μηχανικής λογισμικού, βασισμένη στη σαφήνεια, την τεχνική δεξιοτεχνία και την παράδοση. Εργαζόμαστε δίπλα στην ομάδα σας — όχι γύρω της — για να μετατρέψουμε σύνθετα προβλήματα σε κομψές, συντηρήσιμες λύσεις.",
        "Είτε χρειάζεστε νέο προϊόν, μετάβαση από παλαιό σύστημα ή εμπειρογνώμονες μηχανικούς, φέρνουμε την ακρίβεια ενός compiler και τον πραγματισμό μιας startup.",
      ],
      stats: [
        { label: "Ίδρυση", value: "2024" },
        { label: "Εστίαση", value: "Μηχανική" },
        { label: "Προσέγγιση", value: "Lean & Agile" },
        { label: "Stack", value: "Modern Web" },
      ],
      howWeWork: {
        title: "Πώς δουλεύουμε",
        subtitle:
          "Μια σαφής, συνεργατική διαδικασία από την πρώτη συζήτηση μέχρι την παραγωγή.",
        steps: howWeWorkEl,
      },
      techStack: {
        title: "Τεχνολογίες",
        items: techStackItems,
      },
    },
    clients: {
      title: "Πελάτες",
      subtitle:
        "Μας εμπιστεύονται προοδευτικές ομάδες στον αυτοματισμό, τη βιομηχανία και τις υποδομές.",
      visitWebsite: "επίσκεψη ιστοσελίδας",
      items: clientsEl,
    },
    contact: {
      title: "Επικοινωνία",
      subtitle:
        "Επικοινωνήστε μαζί μας για να συζητήσουμε το έργο σας, να απαντήσουμε σε ερωτήσεις ή να εξερευνήσουμε συνεργασία.",
      findUs: "Βρείτε μας",
      openInMaps: "Άνοιγμα στο Google Maps →",
      companyName: "Compile Systems Ltd",
      email: "Email",
      phone: "Τηλέφωνο",
      address: "Διεύθυνση",
      city: "Πόλη",
      postalCode: "Τ.Κ.",
      country: "Χώρα",
      sendMessage: "Στείλτε Μήνυμα",
      formIntro:
        "Συμπληρώστε την παρακάτω φόρμα και θα σας απαντήσουμε το συντομότερο δυνατό.",
      mapTitle: "Compile Systems Ltd — {address}",
    },
    companyContact: {
      email: COMPANY_EMAIL,
      phone: "+306936696835",
      address: "23 Δρόμος, 4C, Επισκοπή",
      city: "Λεμεσός",
      postalCode: "4620",
      country: "Κύπρος",
    },
    form: {
      name: "Όνομα",
      email: "Email",
      subject: "Θέμα",
      message: "Μήνυμα",
      namePlaceholder: "Το όνομά σας",
      emailPlaceholder: "you@company.com",
      subjectPlaceholder: "Πώς μπορούμε να βοηθήσουμε;",
      messagePlaceholder: "Περιγράψτε το έργο ή την ερώτησή σας...",
      submit: "Αποστολή Μηνυμάτος",
      submitting: "Αποστολή…",
      clear: "Καθαρισμός",
      success:
        "Ευχαριστούμε — το μήνυμά σας στάλθηκε. Θα επικοινωνήσουμε μαζί σας σύντομα.",
      genericError: "Κάτι πήγε στραβά. Παρακαλούμε δοκιμάστε ξανά.",
    },
    footer: {
      tagline: "Το όραμά σας. Ο κώδικάς μας.",
      navigation: "Πλοήγηση",
      legal: "Νομικά",
      contact: "Επικοινωνία",
      privacyPolicy: "Πολιτική Απορρήτου",
      termsOfUse: "Όροι Χρήσης",
      copyright: "© {year} Compile Systems Ltd. Με επιφύλαξη παντός δικαιώματος.",
    },
    legal: {
      backToHome: "Επιστροφή στην αρχική",
      lastUpdated: "Τελευταία ενημέρωση: Ιούνιος 2026",
      privacy: privacyEl,
      terms: termsEl,
    },
    scrollToTop: "Μετάβαση στην κορυφή",
    navMenu: {
      main: "Κύρια πλοήγηση",
      open: "Άνοιγμα μενού",
      close: "Κλείσιμο μενού",
    },
    languageBar: {
      label: "Γλώσσα",
    },
    themeToggle: {
      switchToLight: "Μετάβαση σε ανοιχτή εμφάνιση",
      switchToDark: "Μετάβαση σε σκούρα εμφάνιση",
    },
    brand: {
      slogan: "Το όραμά σας. Ο κώδικάς μας.",
    },
  },
  fil: {
    meta: {
      title: "Compile Systems Ltd | Software Engineering",
      description:
        "Ang Compile Systems Ltd ay naghahatid ng modernong software engineering — architecture, development, at delivery.",
    },
    nav: {
      home: "Home",
      services: "Mga Serbisyo",
      profile: "Profile",
      clients: "Mga Kliyente",
      contact: "Contact",
    },
    hero: {
      badge: "Software Engineering",
      titleBefore: "Gumagawa kami ng software na ",
      titleAccent: "tugma",
      titleAfter: " sa inyong negosyo.",
      description:
        "Ang Compile Systems Ltd ay nakikipagtulungan sa mga ambitious na team upang magdisenyo, magbuo, at mag-deliver ng maaasahang software — mabilis, malinis, at pangmatagalan.",
      ctaServices: "Mga Serbisyo Namin",
      ctaAbout: "Tungkol sa Amin",
    },
    services: {
      title: "Mga Serbisyo",
      subtitle:
        "Focused na expertise sa buong software lifecycle — walang labis, walang buzzwords.",
      items: servicesFil,
    },
    profile: {
      title: "Profile",
      paragraphs: [
        "Ang Compile Systems Ltd ay isang software engineering consultancy na nakabatay sa kalinawan, craftsmanship, at delivery. Nakikipagtrabaho kami kasama ang inyong team — hindi sa paligid nito — upang gawing elegant at madaling-maintain na solusyon ang mga komplikadong problema.",
        "Kailangan man ninyo ng bagong produkto, legacy migration, o senior engineering capacity, dala namin ang husay ng compiler at ang pragmatismo ng startup.",
      ],
      stats: [
        { label: "Itinatag", value: "2024" },
        { label: "Pokus", value: "Engineering" },
        { label: "Paraan", value: "Lean & Agile" },
        { label: "Stack", value: "Modern Web" },
      ],
      howWeWork: {
        title: "Paano kami nagtatrabaho",
        subtitle:
          "Isang malinaw at collaborative na proseso mula sa unang usapan hanggang sa production.",
        steps: howWeWorkFil,
      },
      techStack: {
        title: "Tech stack",
        items: techStackItems,
      },
    },
    clients: {
      title: "Mga Kliyente",
      subtitle:
        "Pinagkakatiwalaan ng mga forward-thinking na team sa automation, industry, at infrastructure.",
      visitWebsite: "bisitahin ang website",
      items: clientsFil,
    },
    contact: {
      title: "Contact",
      subtitle:
        "Makipag-ugnayan upang pag-usapan ang inyong proyekto, magtanong, o tuklasin kung paano tayo makikipagtulungan.",
      findUs: "Hanapin Kami",
      openInMaps: "Buksan sa Google Maps →",
      companyName: "Compile Systems Ltd",
      email: "Email",
      phone: "Telepono",
      address: "Address",
      city: "Lungsod",
      postalCode: "Postal Code",
      country: "Bansa",
      sendMessage: "Magpadala ng Mensahe",
      formIntro:
        "Punan ang form sa ibaba at tutugon kami sa lalong madaling panahon.",
      mapTitle: "Compile Systems Ltd — {address}",
    },
    companyContact: {
      email: COMPANY_EMAIL,
      phone: "+306936696835",
      address: "23 Dromos, 4C, Episkopi",
      city: "Limassol",
      postalCode: "4620",
      country: "Cyprus",
    },
    form: {
      name: "Pangalan",
      email: "Email",
      subject: "Paksa",
      message: "Mensahe",
      namePlaceholder: "Inyong pangalan",
      emailPlaceholder: "you@company.com",
      subjectPlaceholder: "Paano kami makakatulong?",
      messagePlaceholder: "Sabihin sa amin ang tungkol sa inyong proyekto o tanong...",
      submit: "Ipadala ang Mensahe",
      submitting: "Ipinapadala…",
      clear: "I-clear",
      success:
        "Salamat — naipadala na ang inyong mensahe. Makikipag-ugnayan kami sa inyo sa lalong madaling panahon.",
      genericError: "May nangyaring mali. Pakisubukan muli.",
    },
    footer: {
      tagline: "Ang inyong vision. Ang aming code.",
      navigation: "Navigation",
      legal: "Legal",
      contact: "Contact",
      privacyPolicy: "Privacy Policy",
      termsOfUse: "Terms of Use",
      copyright: "© {year} Compile Systems Ltd. Lahat ng karapatan ay nakalaan.",
    },
    legal: {
      backToHome: "Bumalik sa home",
      lastUpdated: "Huling na-update: Hunyo 2026",
      privacy: privacyFil,
      terms: termsFil,
    },
    scrollToTop: "Bumalik sa taas",
    navMenu: {
      main: "Pangunahing navigation",
      open: "Buksan ang menu",
      close: "Isara ang menu",
    },
    languageBar: {
      label: "Wika",
    },
    themeToggle: {
      switchToLight: "Lumipat sa light view",
      switchToDark: "Lumipat sa dark view",
    },
    brand: {
      slogan: "Ang inyong vision. Ang aming code.",
    },
  },
};
