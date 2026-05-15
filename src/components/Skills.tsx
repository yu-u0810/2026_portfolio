// src/components/Skills.tsx

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    description: "UI/UXデザインとWebフロントエンド構築",
    skills: [
      { name: "Next.js", level: "Advanced" },
      { name: "React", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Advanced" },
    ],
  },
  {
    title: "Backend & DB",
    description: "GoやPythonを用いたAPI開発とデータ設計",
    skills: [
      { name: "Go", level: "Intermediate" },
      { name: "Python", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "Firebase", level: "Intermediate" },
    ],
  },
  {
    title: "Domain & Tools",
    description: "専門分野の知見と開発を支えるツール群",
    skills: [
      { name: "OpenCV", level: "Intermediate" },
      { name: "Docker", level: "Basic" },
      { name: "Git / GitHub", level: "Intermediate" },
      { name: "English", level: "TOEIC 700目標" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <h2 className="text-3xl font-bold mb-12 border-l-4 border-blue-600 pl-4 text-slate-800">
        Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((category) => (
          <div 
            key={category.title} 
            className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-2">{category.title}</h3>
            <p className="text-sm text-slate-500 mb-6">{category.description}</p>
            
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-semibold text-slate-700">{skill.name}</span>
                    <span className="text-[10px] text-blue-500 font-bold uppercase">{skill.level}</span>
                  </div>
                  {/* スキルバーの演出（プロっぽさの向上） */}
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-blue-500 transition-all duration-1000`}
                      style={{ 
                        width: skill.level === "Advanced" ? "90%" : 
                               skill.level === "Intermediate" ? "60%" :
                               skill.name == "English" ? "30%" : "30%"
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}