// src/components/Hero.tsx

export default function Hero() {
  return (
   
    <section 
      id="about" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url("/Okinawa_hero.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-slate-50 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
        
        <p className="text-5xl tracking-tight font-bold mb-12 border-l-4 border-blue-400 pl-4 text-white drop-shadow-md">
          ABOUT ME
        </p>

        <div className="grid grid-cols-2 md:grid-cols-2 items-center gap-16 bg-white/10 backdrop-blur-md p-8 md:p-16 border border-white/20 shadow-2xl">
          
          {/* テキストエリア */}
          <div className="text-white">
            <h1 className="text-7xl font-bold drop-shadow-sm">YU <br />ISHIMINE</h1>
            <p className="text-lg mt-4 font-bold tracking-[0.2em] text-gray-100"> 伊志嶺　勇</p>
            <p className="text-xl mt-2 font-semibold tracking-[0.2em] text-blue-500">
              Application Developer 
            </p>
            <p className="text-lg mt-2 font-semibold">
              NIT Okinawa College / Bioresources Engineering 
            </p>
            
            {/* SNSリンク */}
            <div className="flex gap-4 mt-8">
              <a
                aria-label="GitHub"
                title="GitHub"
                href="https://github.com/yu-u0810"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-white hover:text-black transition-all duration-200 hover:-translate-y-1 hover:scale-110 drop-shadow-sm hover:drop-shadow-[0_12px_12px_rgba(0,0,0,0.5)]"
              >
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <span
                aria-label="Instagram（準備中）"
                title="Instagram（準備中）"
                className="inline-flex cursor-not-allowed text-white/60"
              >
                <svg
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"
                  stroke="none" />
                </svg>
              </span>

              <span
                aria-label="Facebook（準備中）"
                title="Facebook（準備中）"
                className="inline-flex cursor-not-allowed text-white/60"
              >
                <svg
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <defs>
                    <mask id="facebook-icon-cutout">
                      {/* 白い部分は表示される */}
                      <rect width="24" height="24" fill="white" />

                      {/* 黒いf部分は円からくり抜かれる */}
                      <path
                        fill="black"
                        d="M13.5 20v-7H16l.4-3h-2.9V8.5c0-.9.25-1.5 1.5-1.5h1.5V4.3c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.8v2H8v3h2.5v7h3Z"
                      />
                    </mask>
                  </defs>

                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    mask="url(#facebook-icon-cutout)"
                  />
                </svg>
              </span>
            </div>  
          </div>

            {/* プロフィール画像 */}
          <div className="w-110 h-110 justify-self-end rounded-full overflow-hidden border-4 border-white shadow-2xl flex-shrink-0">
            <img 
              src="/my-photo.jpg" 
              alt="伊志嶺 勇"
              className="w-full h-full object-cover"
            />
          </div>  
        </div>
      </div>
    </section>
  );
}