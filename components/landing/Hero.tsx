
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#020617] to-[#0f172a]">
      {/* Background Kinetic Elements - Darker Deep Blues */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[5%] left-[10%] w-[55vw] h-[55vw] bg-blue-600/10 animate-liquid filter blur-[150px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[45vw] h-[45vw] bg-indigo-600/10 animate-liquid filter blur-[150px] delay-1000"></div>
        <div className="absolute top-[30%] right-[15%] w-[40vw] h-[40vw] bg-cyan-500/5 animate-liquid filter blur-[130px] delay-2000"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        <div className="mb-14 flex items-center gap-5 px-7 py-2.5 rounded-full glass-card border-white/5 shadow-2xl animate-float-slow">
          <div className="flex -space-x-3">
            {[1,2,3].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden shadow-xl">
                <img src={`https://i.pravatar.cc/100?u=${i+100}`} alt="user" />
              </div>
            ))}
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-blue-400">Cyber.Node 26 // Live Deployment</p>
        </div>

        <h1 className="text-6xl md:text-[11.5rem] font-black tracking-tighter text-white leading-[0.82] text-center mb-10">
          YOUR <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-indigo-500 to-cyan-400">CUSTOMIZED</span> <br/>
          CHATBOT.
        </h1>
        
        <p className="max-w-2xl text-center text-slate-400 text-lg md:text-2xl font-medium mb-14 leading-relaxed">
          The ultimate conversational bridge for complex discovery. A deep, <span className="text-blue-400 font-bold underline decoration-blue-600 decoration-4 underline-offset-8 italic">cyber-midnight interface</span> that transforms catalog exploration into a fluid neural conversation.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-8">
          <a
            href="#chat-section"
            className="neo-button group px-16 py-8 bg-blue-600 text-white font-black text-xs uppercase tracking-[0.45em] rounded-full hover:scale-105 hover:bg-blue-500 transition-all shadow-[0_20px_60px_rgba(37,99,235,0.4)] active:scale-95"
          >
            Launch Chatbot
          </a>
          <button className="px-14 py-8 border-2 border-white/10 hover:border-blue-500/50 rounded-full text-xs font-black uppercase tracking-[0.45em] text-blue-400 transition-all backdrop-blur-md hover:bg-white/5">
            Architecture
          </button>
        </div>
      </div>

      {/* Hero Interactive Elements - Dark Tech Aesthetic */}
      <div className="mt-28 w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 px-4">
        {[
          { color: 'bg-blue-900/40 text-blue-400', label: 'NEURAL CORE', icon: '🧠' },
          { color: 'bg-indigo-900/40 text-indigo-400', label: 'VOID AUDIO', icon: '🎧' },
          { color: 'bg-cyan-900/40 text-cyan-400', label: 'CYBER WEAVE', icon: '🧶' },
          { color: 'bg-slate-900/40 text-slate-400', label: 'PULSE TECH', icon: '⚡' },
        ].map((item, idx) => (
          <div 
            key={idx} 
            className={`group glass-card p-9 rounded-[3.5rem] border-white/5 hover:border-blue-500/30 transition-all cursor-none ${idx % 2 === 0 ? 'mt-12' : ''}`}
          >
            <div className={`w-full aspect-square rounded-[2.5rem] ${item.color} mb-9 flex items-center justify-center text-5xl transform group-hover:rotate-12 transition-transform shadow-2xl border border-white/5`}>
              {item.icon}
            </div>
            <p className="text-[10px] font-black text-blue-500 tracking-[0.35em] mb-2">{item.label}</p>
            <p className="text-sm font-black text-white uppercase italic tracking-tight">Catalog Drop // 0{idx + 1}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
