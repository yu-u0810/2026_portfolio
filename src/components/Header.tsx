"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 100px以上スクロールしたら「白背景モード」に切り替え
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200 text-slate-900 shadow-sm" 
          : "bg-black/20 backdrop-blur-md border-b border-white/10 text-white"
      }`}
    >
      <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-xl tracking-tight">
          Yu.I
        </span>

        <ul className="flex gap-8 text-sm font-bold">
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