// src/constants/projects.ts

export type Project = {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "VocaBoard / VocaSense",
    description: "会話や筆跡から認知機能をモニタリングするシステム。DCON出展作品。(アプリのみ）",
    tech: ["Next.js", "Python"],
    githubUrl: "https://github.com/yu-u0810/Vocaboard",
    demoUrl: "https://vocaboard-alpha.vercel.app/", // 実際のURLがあれば入れる
  },
  {
    title: "RelaNeck",
    description: "コンピュータビジョンを用いた姿勢モニタリング・改善支援の研究プロジェクト。Wi-Con, DCON出展作品。",
    tech: ["Python", "OpenCV", "Next.js"],
    githubUrl: "https://github.com/yu-u0810/RelaNeck-Dcon",
    demoUrl: "https://rela-neck-dcon.vercel.app/",
  },
  {
    title: "School Festival App(独自サーバー)",
    description: "学内イベントのお菓子交換チケット管理を学生証バーコードを読み込むことでデジタル化",
    tech: ["Next.js", "Go", "PostgreSQL"],
    githubUrl: "https://github.com/yu-u0810/Churaboshi_App_FullStack",
  },
  {
    title: "School Festival App(Firebaseサーバー)",
    description: "学内イベントアプリ Firebaseでサーバーを管理",
    tech: ["Next.js", "firebase"],
    githubUrl: "https://github.com/yu-u0810/Churaboshi",
    demoUrl: "https://churaboshi.vercel.app/",
  },
];