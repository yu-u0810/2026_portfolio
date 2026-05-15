// src/components/Header.tsx

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/10 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-xl text-slate-900">Yu.I</span>
        <ul className="flex gap-8 text-sm font-medium text-slate-600">
          <li>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}