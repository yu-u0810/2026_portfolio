// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 mt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-white text-xl font-bold mb-4">Contact</h2>
        <p className="text-sm mb-8">
          お仕事のご依頼やご相談は、以下のメールアドレスまでお気軽にご連絡ください。
        </p>
        
        {/* メアドのリンク */}
        <a 
          href="mailto:ishiyuu2007@icloud.com" // 自分のメアドに書き換えてください
          className="text-lg text-blue-400 hover:text-blue-300 font-medium transition-colors"
        >
          ishiyuu2007@icloud.com
        </a>

        <div className="mt-8 pt-6 border-t border-slate-800 text-[10px] tracking-widest uppercase">
          © {new Date().getFullYear()} Yu Ishimine. All rights reserved.
        </div>
      </div>
    </footer>
  );
}