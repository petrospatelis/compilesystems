import { COMPANY_EMAIL } from "../site";
import type {
  ClientItem,
  LegalDocument,
  ProcessStep,
  ServiceItem,
  Translations,
} from "./translations";

export const servicesYue: ServiceItem[] = [
  {
    id: "customSoftware",
    title: "定制軟件",
    description:
      "由需求探索、架構設計到正式上線嘅端到端產品開發。",
  },
  {
    id: "systemArchitecture",
    title: "系統架構",
    description:
      "可擴展、易維護嘅系統設計，兼顧效能、可靠性同長遠發展。",
  },
  {
    id: "cloudDevops",
    title: "雲端與 DevOps",
    description:
      "CI/CD 流水線、基礎設施即代碼，以及 AWS、GCP、Azure 雲原生方案。",
  },
  {
    id: "technicalConsulting",
    title: "技術顧問",
    description:
      "程式碼審查、技術選型同工程領導，支援任何階段嘅團隊。",
  },
];

export const howWeWorkYue: ProcessStep[] = [
  {
    step: "01",
    title: "探索",
    description:
      "喺寫程式之前，先同你對齊目標、用戶、限制同成功標準。",
  },
  {
    step: "02",
    title: "設計",
    description:
      "架構、範圍同交付計劃——及早同你嘅團隊反覆檢視。",
  },
  {
    step: "03",
    title: "開發",
    description:
      "迭代式開發，配合示範、程式碼審查同緊密回饋循環。",
  },
  {
    step: "04",
    title: "交付",
    description:
      "正式上線、文件交接同持續支援，伴你一路擴展。",
  },
];

export const clientsYue: ClientItem[] = [
  {
    id: "sparxIQ",
    name: "SPARXiQ",
    description: "智能自動化、數據分析同數碼營運。",
  },
  {
    id: "siemens",
    name: "Siemens",
    description: "全球工程、工業技術同智慧基礎設施。",
  },
  {
    id: "hubbell",
    name: "Hubbell",
    description: "電力方案同公用事業基礎設施系統。",
  },
  {
    id: "idea",
    name: "IDEA",
    description: "以創新為本嘅產品設計同工程交付。",
  },
  {
    id: "jpinox",
    name: "JPInox Systems",
    description: "不鏽鋼系統同精密工業製造。",
  },
];

const privacyYue: LegalDocument = {
  title: "私隱政策",
  intro:
    "Compile Systems Ltd 重視你嘅私隱。本政策說明我哋收集咩資料、點樣使用，以及你喺瀏覽網站或聯絡我哋時有咩選擇。",
  sections: [
    {
      title: "我哋收集嘅資料",
      paragraphs: [
        "當你使用聯絡表格時，我哋會收集你提供嘅資料——通常包括姓名、電郵地址、主題同訊息內容。",
        "我哋亦會透過伺服器日誌收集基本技術資料，例如瀏覽器類型同頁面互動；如已啟用，亦可能使用注重私隱嘅分析工具。",
      ],
    },
    {
      title: "點樣使用你嘅資料",
      paragraphs: [
        "我哋使用聯絡表格提交嘅資料回覆查詢同討論潛在項目。",
        "我哋唔會出售你嘅個人資料，只會喺法律要求或營運服務所需時（例如電郵發送服務供應商）分享資料。",
      ],
    },
    {
      title: "資料保留",
      paragraphs: [
        "我哋只會喺回覆查詢、維繫合作關係或履行法律責任所需嘅期間內保留聯絡記錄。",
      ],
    },
    {
      title: "你嘅權利",
      paragraphs: [
        "視乎你所在地區，你可能享有查閱、更正、刪除或限制使用個人資料嘅權利。如需行使，請透過下方電郵聯絡我哋。",
      ],
    },
    {
      title: "聯絡我哋",
      paragraphs: [
        `有關本政策嘅問題，請電郵至 ${COMPANY_EMAIL}。`,
      ],
    },
  ],
};

const termsYue: LegalDocument = {
  title: "使用條款",
  intro:
    "當你瀏覽並使用 Compile Systems Ltd 網站，即表示你同意以下條款。如你唔同意，請勿使用本網站。",
  sections: [
    {
      title: "網站使用",
      paragraphs: [
        "本網站提供有關我哋軟件工程服務嘅一般資訊，內容僅供參考，可能會不時更新。",
        "你同意合法使用本網站，並唔會嘗試干擾、破壞或未經授權存取我哋嘅系統。",
      ],
    },
    {
      title: "知識產權",
      paragraphs: [
        "除非另有說明，本網站所有內容——包括文字、品牌、圖像同版面——均屬 Compile Systems Ltd 所有或已獲授權使用。未經書面同意，不得複製、修改或再分發。",
      ],
    },
    {
      title: "聯絡表格提交",
      paragraphs: [
        "透過聯絡表格提交嘅資料應盡你所知準確無誤。我哋並無義務回覆每一個查詢。",
      ],
    },
    {
      title: "免責聲明",
      paragraphs: [
        "我哋致力保持網站準確同可用，但網站按「現況」提供，不作任何保證。在法律允許範圍內，Compile Systems Ltd 唔對因使用本網站而產生嘅損失負責。",
      ],
    },
    {
      title: "適用法律",
      paragraphs: [
        "本條款受塞浦路斯共和國法律管轄，任何爭議由塞浦路斯法院專屬管轄。",
      ],
    },
    {
      title: "聯絡我哋",
      paragraphs: [
        `有關本條款嘅問題，請電郵至 ${COMPANY_EMAIL}。`,
      ],
    },
  ],
};

const cookiesYue: LegalDocument = {
  title: "Cookie 政策",
  intro:
    "本政策說明 Compile Systems Ltd 點樣喺網站使用 cookies 同類似技術。我哋盡量減少使用，現時並無使用廣告或第三方追蹤 cookies。",
  sections: [
    {
      title: "咩係 cookies",
      paragraphs: [
        "Cookies 係你瀏覽網站時儲存喺裝置上嘅細小文字檔。類似技術（例如瀏覽器本地儲存）亦可以記住你嘅偏好設定。",
      ],
    },
    {
      title: "我哋使用嘅 cookies",
      paragraphs: [
        "目前我哋只儲存必要偏好：你選擇嘅主題（淺色或深色）同語言。呢啲資料儲存喺你嘅瀏覽器，方便下次到訪。",
        "現時本網站並無使用分析、廣告或社交媒體追蹤 cookies。",
      ],
    },
    {
      title: "管理 cookies",
      paragraphs: [
        "你可以隨時透過瀏覽器設定清除網站資料。清除後，下次到訪時主題同語言偏好會重設。",
      ],
    },
    {
      title: "聯絡我哋",
      paragraphs: [
        `有關本政策嘅問題，請電郵至 ${COMPANY_EMAIL}。`,
      ],
    },
  ],
};

const techStackItems = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "AI",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "CI/CD",
];

export const cantoneseTranslations: Translations = {
  meta: {
    title: "Compile Systems Ltd | 軟件工程",
    description:
      "Compile Systems Ltd 提供現代軟件工程服務——架構、開發同交付。",
  },
  nav: {
    home: "主頁",
    services: "服務",
    profile: "簡介",
    clients: "客戶",
    contact: "聯絡",
  },
  hero: {
    badge: "軟件工程",
    titleBefore: "我哋打造能夠同你嘅業務",
    titleAccent: "完美配合",
    titleAfter: "嘅軟件。",
    description:
      "Compile Systems Ltd 與有抱負嘅團隊合作，設計、開發同交付可靠軟件——快速、精簡、持久耐用。",
    ctaServices: "我哋嘅服務",
    ctaAbout: "關於我哋",
  },
  services: {
    title: "服務",
    subtitle: "涵蓋軟件全生命週期嘅專注能力——冇冗餘，冇空話。",
    items: servicesYue,
  },
  profile: {
    eyebrow: "關於我哋",
    title: "簡介",
    paragraphs: [
      "Compile Systems Ltd 係一間以清晰、工藝同交付為本嘅軟件工程顧問公司。我哋同你嘅團隊並肩合作——而唔係喺旁邊繞過——將複雜問題轉化為優雅、易維護嘅方案。",
      "無論你需要全新產品、舊系統遷移定係資深工程能力，我哋都帶住編譯器般嘅嚴謹同初創嘅務實——喺適當地方善用 AI，加速交付之餘唔犧牲質素。",
    ],
    stats: [
      { label: "成立", value: "2024" },
      { label: "專注", value: "工程" },
      { label: "方法", value: "精益敏捷" },
      { label: "技術", value: "現代 Web" },
    ],
    howWeWork: {
      eyebrow: "四步交付",
      title: "我哋點樣工作",
      subtitle: "由首次對話到正式上線，清晰而協作嘅流程。",
      steps: howWeWorkYue,
    },
    techStack: {
      eyebrow: "能力",
      title: "技術棧",
      subtitle: "我哋每日使用、可隨時上線嘅工具。",
      items: techStackItems,
    },
  },
  clients: {
    title: "客戶",
    subtitle: "深受自動化、工業同基礎設施領域前瞻團隊信賴。",
    visitWebsite: "瀏覽網站",
    items: clientsYue,
  },
  contact: {
    title: "聯絡",
    subtitle: "歡迎聯絡我哋，討論你嘅項目、提出問題，或探索合作方式。",
    findUs: "搵我哋",
    openInMaps: "喺 Google 地圖開啟 →",
    companyName: "Compile Systems Ltd",
    email: "電郵",
    phone: "電話",
    address: "地址",
    city: "城市",
    postalCode: "郵政編碼",
    country: "國家",
    sendMessage: "發送訊息",
    formIntro: "填寫以下表格，我哋會盡快回覆。",
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
    name: "姓名",
    email: "電郵",
    phone: "電話（選填）",
    subject: "主題",
    message: "訊息",
    namePlaceholder: "你嘅姓名",
    emailPlaceholder: "you@company.com",
    phonePlaceholder: "+852 9123 4567",
    phoneHint: "請包含國家代碼，以 + 開頭",
    phoneCountryCodeRequired: "請喺電話號碼中包含國家代碼（例如 +852）。",
    phoneInvalid: "請輸入有效嘅國際電話號碼。",
    subjectPlaceholder: "我哋可以點樣幫到你？",
    messagePlaceholder: "話俾我哋知你嘅項目或問題…",
    submit: "發送訊息",
    submitting: "發送中…",
    clear: "清除",
    success: "多謝——你嘅訊息已發送，我哋會盡快回覆。",
    genericError: "出現問題，請再試一次。",
  },
  footer: {
    tagline: "你嘅願景。我哋嘅程式。",
    navigation: "導覽",
    legal: "法律",
    contact: "聯絡",
    privacyPolicy: "私隱政策",
    termsOfUse: "使用條款",
    cookiePolicy: "Cookie 政策",
    copyright: "© {year} Compile Systems Ltd. 版權所有。",
    cta: "討論你嘅項目 →",
    language: "語言",
    followUs: "關注我哋",
    registration: "註冊編號 {number}",
    vat: "VAT {number}",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  legal: {
    backToHome: "返回主頁",
    lastUpdated: "最後更新：2026 年 6 月",
    privacy: privacyYue,
    terms: termsYue,
    cookies: cookiesYue,
  },
  scrollToTop: "返回頂部",
  navMenu: {
    main: "主要導覽",
    open: "開啟選單",
    close: "關閉選單",
  },
  languageBar: {
    label: "語言",
  },
  themeToggle: {
    switchToLight: "切換至淺色模式",
    switchToDark: "切換至深色模式",
  },
  brand: {
    slogan: "你嘅願景。我哋嘅程式。",
  },
};
