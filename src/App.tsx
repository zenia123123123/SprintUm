import React, { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  Zap, 
  Smartphone, 
  BookOpen, 
  Check, 
  X, 
  Sliders, 
  TrendingUp, 
  Users
} from 'lucide-react';

// Custom pristine SVG implementation of the user's SprintUm Logo
export function AppLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="sprintumGrad" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4BF0A5" />
          <stop offset="100%" stopColor="#05B7C2" />
        </linearGradient>
      </defs>
      
      {/* Pristine high-resolution squircle gradient background matching the picture */}
      <rect width="512" height="512" rx="128" fill="url(#sprintumGrad)" />
      
      {/* Tilted vector group matching the exact angle and styling of the provided logo */}
      <g transform="rotate(35, 256, 256)">
        {/* Speed movement trails on the left */}
        <path d="M 110, 255 Q 92, 260 82, 245 T 108, 222" fill="none" stroke="white" strokeWidth="12" strokeLinecap="round" opacity="0.5" />
        <path d="M 128, 218 Q 102, 225 92, 208 T 120, 182" fill="none" stroke="white" strokeWidth="14" strokeLinecap="round" opacity="0.75" />
        
        {/* Encircled outer action arrow */}
        <path d="M 155, 210 C 115, 265 140, 360 256, 375 C 315, 375 365, 315 385, 245" fill="none" stroke="white" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 353, 248 L 390, 230 L 398, 275" fill="none" stroke="white" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />

        {/* Core lightbulb contour */}
        <path d="M 196, 210 A 60,60 0 1,1 316,210 C 316,245 286,275 286,295 L 226,295 C 226,275 196,245 196,210 Z" fill="none" stroke="white" strokeWidth="20" strokeLinejoin="round" strokeLinecap="round" />
        
        {/* Lightbulb metal base threads */}
        <path d="M 233, 310 L 279, 310" stroke="white" strokeWidth="20" strokeLinecap="round" />
        <path d="M 239, 328 L 273, 328" stroke="white" strokeWidth="16" strokeLinecap="round" />
        <path d="M 246, 344 L 266, 344" stroke="white" strokeWidth="12" strokeLinecap="round" />

        {/* Open Book of Knowledge in center of bulb */}
        <path d="M 251, 201 C 238, 187 220, 192 212, 197 V 225 C 220, 220 238, 215 251, 228 Z" fill="white" />
        <path d="M 261, 201 C 274, 187 292, 192 300, 197 V 225 C 292, 220 274, 215 261, 228 Z" fill="white" />
      </g>
    </svg>
  );
}

export default function App() {
  const [reelsMinutes, setReelsMinutes] = useState(45);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [downloadPlatform, setDownloadPlatform] = useState<'ios' | 'android' | null>(null);
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  // Dynamic calculations for the utility comparison
  const potentialLessonsPerDay = Math.floor(reelsMinutes / 3.5);
  const potentialLessonsPerMonth = potentialLessonsPerDay * 30;

  const handleDownloadSimulation = (platform: 'ios' | 'android') => {
    setDownloadPlatform(platform);
    setIsDownloading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress(prev => {
        const step = Math.floor(Math.random() * 25) + 12;
        if (prev + step >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          return 100;
        }
        return prev + step;
      });
    }, 200);
  };

  return (
    <div className="min-h-screen bg-[#070D0F] text-[#ECEFF1] font-sans antialiased relative overflow-hidden flex flex-col justify-between">
      
      {/* Dynamic color auroras in background */}
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden pointer-events-none z-0 select-none">
        <div className="absolute top-[-250px] left-[-150px] w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="absolute top-[-100px] right-[-150px] w-[550px] h-[550px] rounded-full bg-cyan-400/15 blur-[160px]" />
      </div>

      {/* HEADER BAR */}
      <header className="sticky top-0 z-40 bg-[#070D0F]/90 backdrop-blur-md border-b border-teal-950/40 relative">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AppLogo className="w-10 h-10" />
            <div className="flex flex-col text-left">
              <span className="text-xl font-black tracking-tight text-white leading-none mb-1">
                СпринтУм
              </span>
              <span className="text-[10px] text-[#10B981] font-bold uppercase tracking-widest leading-none">
                короткие видеокурсы
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              setDownloadPlatform(null);
              setIsDownloadModalOpen(true);
            }}
            className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-[#070D0F] font-black text-xs px-5 py-2.5 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-teal-500/10"
          >
            Скачать
          </button>
        </div>
      </header>

      {/* MAIN LAYOUT */}
      <main className="max-w-4xl mx-auto px-6 pt-12 pb-24 relative z-10 flex-1 flex flex-col justify-center">
        
        {/* HERO TITLE SECTION */}
        <div className="text-center flex flex-col items-center mb-16">


          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
            Курсы для ума в формате <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              коротких видеоуроков
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-10">
            Смотри концентрированные научно-познавательные ролики от одаренных школьников и сверстников, отвечай на быстрые интерактивные квизы и прокачивай интеллект на ходу.
          </p>

          {/* APP STORE & GOOGLE PLAY CTAs with Pristine CSS/SVG Grid */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-md">
            
            <button 
              onClick={() => {
                setIsDownloadModalOpen(true);
                handleDownloadSimulation('ios');
              }}
              className="w-full sm:w-1/2 flex items-center justify-center gap-3 bg-[#0B1518] hover:bg-[#122429] border border-[#16333A] text-white px-5 py-3.5 rounded-2xl transition-all font-semibold hover:border-teal-500/40 text-left cursor-pointer active:scale-98"
            >
              <svg className="w-6 h-6 text-white fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.84-.98 2.94 1.07.08 2.16-.52 2.81-1.33z" />
              </svg>
              <div className="flex flex-col">
                <span className="text-[9px] text-[#80A4AD] uppercase tracking-wider font-bold leading-none mb-1">Скачать на</span>
                <span className="text-sm font-black text-white leading-none">App Store</span>
              </div>
            </button>

            <button 
              onClick={() => {
                setIsDownloadModalOpen(true);
                handleDownloadSimulation('android');
              }}
              className="w-full sm:w-1/2 flex items-center justify-center gap-3 bg-[#0B1518] hover:bg-[#122429] border border-[#16333A] text-white px-5 py-3.5 rounded-2xl transition-all font-semibold hover:border-teal-500/40 text-left cursor-pointer active:scale-98"
            >
              <svg className="w-6 h-6 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.25 3C5.1 3 4.95 3.03 4.81 3.09L15.81 14.09L19.08 10.82L5.69 3.19C5.55 3.07 5.4 3 5.25 3Z" fill="currentColor" opacity="0.8" />
                <path d="M3.47 3.87C3.32 4.22 3.25 4.61 3.25 5.02V18.98C3.25 19.39 3.32 19.78 3.47 20.13L13.44 10.16L3.47 3.87Z" fill="currentColor" />
                <path d="M14.59 15.22L3.56 26.22C3.7 26.28 3.85 26.31 4 26.31C4.15 26.31 4.3 26.24 4.44 26.12L17.87 18.49L14.59 15.22Z" fill="currentColor" />
                <path d="M17.47 11.87L21.31 9.69C21.72 9.46 22 9 22 8.5C22 8 21.72 7.54 21.31 7.31L17.47 5.13L13.81 8.79L17.47 11.87Z" fill="currentColor" opacity="0.9" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[9px] text-[#80A4AD] uppercase tracking-wider font-bold leading-none mb-1">Доступно в</span>
                <span className="text-sm font-black text-white leading-none">Google Play</span>
              </div>
            </button>

          </div>

          {/* Quick core metrics summary */}
          <div className="flex items-center gap-6 pt-10 mt-6 border-t border-teal-950/40 w-full max-w-md justify-center">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-400" />
              <div className="text-left">
                <span className="block text-sm font-black text-white leading-none">3.5 минуты</span>
                <span className="text-[10px] text-slate-400">Средняя длина урока</span>
              </div>
            </div>
            <div className="w-px h-8 bg-teal-950" />
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <div className="text-left">
                <span className="block text-sm font-black text-white leading-none">Без оффтопа и воды</span>
                <span className="text-[10px] text-slate-400">Только факты и суть</span>
              </div>
            </div>
          </div>
        </div>

        {/* WHY THE SHORT FORMAT REALLY WORKS SECTION */}
        <section className="bg-[#050B0D] py-12 px-6 sm:px-8 border border-teal-950/40 rounded-3xl mb-16 text-left">
          <div className="max-w-2xl mx-auto mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Почему короткий формат действительно работает?
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Мы отказались от длинных лекций в пользу 3.5-минутных роликов с пиковой концентрацией пользы. И вот почему это намного эффективнее для обучения:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-[#081114] p-5 rounded-2xl border border-teal-950/45 transition-all duration-300 hover:border-emerald-500/30 hover:bg-[#0b161a]">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 font-bold text-sm">
                01
              </div>
              <h3 className="text-sm font-black text-white mb-2 uppercase tracking-wide flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                Легкий старт
              </h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Открыть 3-минутный ролик психологически намного проще, чем заставить себя сидеть над часовой лекцией. Мозг не испытывает страха перед сложным делом.
              </p>
            </div>

            <div className="bg-[#081114] p-5 rounded-2xl border border-teal-950/45 transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#0b161a]">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 mb-4 font-bold text-sm">
                02
              </div>
              <h3 className="text-sm font-black text-white mb-2 uppercase tracking-wide flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                Пик внимания
              </h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Человеческий мозг удерживает максимальную фокусировку первые 3–4 минуты. Мы убрали вводные паузы и воду — оставили только плотные формулы и образы.
              </p>
            </div>

            <div className="bg-[#081114] p-5 rounded-2xl border border-teal-950/45 transition-all duration-300 hover:border-teal-500/30 hover:bg-[#0b161a]">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-4 font-bold text-sm">
                03
              </div>
              <h3 className="text-sm font-black text-white mb-2 uppercase tracking-wide flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-teal-400" />
                Обучение на ходу
              </h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Формат легко встраивается в любое расписание: на перемене в школе, в автобусе или за завтраком. Короткие яркие сессии формируют сильную ежедневную привычку.
              </p>
            </div>

          </div>
        </section>

        {/* TIME-SAVING INTERACTIVE CALCULATOR */}
        <section className="bg-gradient-to-b from-[#0A181C] to-[#050D0F] border border-teal-900/30 rounded-3xl p-6 sm:p-8 text-left">
          <div className="max-w-xl mb-8">
            <span className="text-[10px] uppercase font-black tracking-widest text-[#10B981] bg-teal-500/10 px-3 py-1 rounded-full inline-block mb-3">
              Интерактивный счётчик пользы
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
              Оцени выгоду от «СпринтУм»
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Сколько минут в день ты тратишь на бессмысленное залипание в социальных сетях? Узнай, сколько реальных знаний ты мог бы получить вместо этого.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-6 bg-slate-950/40 p-5 rounded-2xl border border-teal-950/50">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-300">Минуты в Shorts/Reels ежедневно:</label>
                  <span className="text-sm font-black text-cyan-400">{reelsMinutes} мин</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="180" 
                  step="5"
                  value={reelsMinutes}
                  onChange={(e) => setReelsMinutes(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#122A2F] rounded-lg appearance-none cursor-pointer accent-teal-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>10 минут</span>
                  <span>1.5 часа</span>
                  <span>3 часа</span>
                </div>
              </div>

              <div className="pt-2 border-t border-teal-950/40">
                <span className="text-[10px] text-slate-400 block leading-relaxed">
                  *Уроки созданы победителями школьных олимпиад и хакатонов. Длина одного законченного микроурока на СпринтУм составляет ровно <strong>3.5 минуты</strong>.
                </span>
              </div>
            </div>

            <div className="bg-[#0B1E22] border border-teal-500/10 rounded-2xl p-6 flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] text-teal-400 font-bold uppercase tracking-wider block mb-4">Твой потенциал в СпринтУм</span>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-white block">
                      {potentialLessonsPerDay} {potentialLessonsPerDay === 1 ? 'урок' : potentialLessonsPerDay < 5 ? 'урока' : 'уроков'}
                    </span>
                    <span className="text-xs text-slate-400">Ты можешь изучить за один день</span>
                  </div>

                  <div>
                    <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent block">
                      {potentialLessonsPerMonth} {potentialLessonsPerMonth % 10 === 1 ? 'тема' : 'тем'}
                    </span>
                    <span className="text-xs text-slate-400">Усвоенных важных научных концепций за месяц</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-teal-900/30 flex items-center gap-2 justify-start">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-bold text-slate-300">Вместо глупой прокрастинации</span>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER BAR */}
      <footer className="bg-[#040809] border-t border-teal-950/60 py-10 text-xs text-slate-400 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-2.5">
              <AppLogo className="w-8 h-8" />
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white tracking-tight">СпринтУм</span>
                <span className="text-[9px] uppercase tracking-widest text-[#10B981] font-bold">короткие видеокурсы</span>
              </div>
            </div>

            <div className="flex gap-6 text-slate-400 font-bold">
              <span className="text-slate-500">© 2026 СпринтУм</span>
              <a href="#about" className="hover:text-white transition-colors">О проекте</a>
            </div>
          </div>

          <p className="text-slate-500 text-[11px] leading-relaxed text-center max-w-2xl mx-auto">
            Сайт разработан в рамках конкурса Техностартап-2026 командой Восход (Бойко Виталий, Гетманенко Евгений, Воронова Мария. Наставник: Красильников Алексей Петрович)
          </p>
        </div>
      </footer>

      {/* DETAILED DIGITAL DOWNLOAD SIMULATION MODAL */}
      {isDownloadModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#060D0F] border border-teal-900/40 rounded-3xl max-w-sm w-full p-6 text-center shadow-2xl relative">
            
            <button 
              onClick={() => setIsDownloadModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <AppLogo className="w-16 h-16 mx-auto mb-4" />

            <h3 className="text-xl font-black text-white mb-6">Бесплатная установка СпринтУм</h3>

            {!downloadPlatform ? (
              <div className="space-y-2.5">
                <button 
                  onClick={() => handleDownloadSimulation('ios')}
                  className="w-full bg-[#0E2024] hover:bg-[#163036] border border-teal-500/20 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.84-.98 2.94 1.07.08 2.16-.52 2.81-1.33z" />
                  </svg>
                  Скачать для iOS (iPhone)
                </button>

                <button 
                  onClick={() => handleDownloadSimulation('android')}
                  className="w-full bg-[#0E2024] hover:bg-[#163036] border border-teal-500/20 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.25 3C5.1 3 4.95 3.03 4.81 3.09L15.81 14.09L19.08 10.82L5.69 3.19C5.55 3.07 5.4 3 5.25 3Z" fill="currentColor" />
                    <path d="M3.47 3.87C3.32 4.22 3.25 4.61 3.25 5.02V18.98C3.25 19.39 3.32 19.78 3.47 20.13L13.44 10.16L3.47 3.87Z" fill="currentColor" />
                    <path d="M14.59 15.22L3.56 26.22C3.7 26.28 3.85 26.31 4 26.31C4.15 26.31 4.3 26.24 4.44 26.12L17.87 18.49L14.59 15.22Z" fill="currentColor" />
                    <path d="M17.47 11.87L21.31 9.69C21.72 9.46 22 9 22 8.5C22 8 21.72 7.54 21.31 7.31L17.47 5.13L13.81 8.79L17.47 11.87Z" fill="currentColor" />
                  </svg>
                  Скачать для Android
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <span className="text-xs uppercase font-bold text-teal-400 block">
                  Загрузка на {downloadPlatform === 'ios' ? 'iOS устройств...' : 'Android устройство...'}
                </span>

                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-150"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <span className="text-xl font-black text-white">{progress}%</span>

                {progress === 100 ? (
                  <div className="pt-2">
                    <span className="text-xs font-bold text-emerald-400 block mb-3">✓ Успешно установлено!</span>
                    <button
                      onClick={() => setIsDownloadModalOpen(false)}
                      className="bg-emerald-500 text-slate-900 text-xs font-black px-6 py-2 rounded-full"
                    >
                      Закрыть и начать пользоваться
                    </button>
                  </div>
                ) : (
                  <p className="text-[10px] text-slate-500">Пожалуйста, подождите завершения установки...</p>
                )}
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
