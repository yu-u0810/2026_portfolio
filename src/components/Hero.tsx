// src/components/Hero.tsx

export default function Hero() {
  return (
   
    <section 
      id="about" 
      className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-[100vw] min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url("/Okinawa_hero.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-slate-50 z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full py-20">
        
        <h2 className="text-3xl font-bold mb-12 border-l-4 border-blue-400 pl-4 text-white drop-shadow-md">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12 bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl">
          
          {/* プロフィール画像 */}
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl flex-shrink-0">
            <img 
              src="/my-photo.jpg" 
              alt="伊志嶺 勇"
              className="w-full h-full object-cover"
            />
          </div>

          {/* テキストエリア */}
          <div className="text-white">
            <h3 className="text-4xl font-bold drop-shadow-sm">伊志嶺 勇 / Yu Ishimine</h3>
            <p className="text-xl text-blue-300 font-semibold mt-2">
              沖縄高専：生物資源工学科 4年
            </p>
            <p className="mt-6 text-slate-100 leading-relaxed font-medium drop-shadow-sm">
              国立沖縄工業高等専門学校（NITOC）に在籍。生物資源工学科という異なる専門分野に身を置きながら、ITの力で課題を解決することに魅力を感じ、エンジニアを目指して活動しています。
              Next.jsを中心としたWeb開発から、Goでのバックエンド構築、モバイルアプリ開発を独学しています。
            </p>
            
            {/* SNSリンク */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/yu-u0810"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm bg-white text-slate-900 px-6 py-2.5 rounded-full font-bold hover:bg-slate-200 transition-all hover:scale-105"
              >
                GitHub
              </a>
              <a
                href="https://instagram.com/..."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2.5 rounded-full font-bold hover:opacity-90 transition-all hover:scale-105"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}