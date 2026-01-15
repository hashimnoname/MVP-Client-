
import React from 'react';

export const Features: React.FC = () => {
  return (
    <section className="py-44 bg-[#020617] px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-900 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-32">
          <span className="text-blue-500 font-black text-[11px] tracking-[0.7em] uppercase mb-8 flex items-center gap-6">
            <span className="w-16 h-[2px] bg-blue-600"></span>
            Your customized chatbot Protocol
          </span>
          <h2 className="text-6xl md:text-[9.5rem] font-black text-white tracking-tighter leading-[0.82] italic uppercase">
            Built for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-900">The Dark.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Main Node */}
          <div className="md:col-span-8 glass-card rounded-[4.5rem] p-20 relative group overflow-hidden border-white/5 shadow-2xl">
             <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] group-hover:bg-blue-600/15 transition-all"></div>
             <div className="relative z-10">
                <div className="w-24 h-24 bg-blue-950 rounded-[2.2rem] flex items-center justify-center text-5xl mb-14 shadow-2xl border border-blue-800 transform rotate-6 hover:rotate-0 transition-transform">🤖</div>
                <h3 className="text-5xl font-black text-white mb-10 tracking-tighter uppercase italic leading-none">Deep Reasoning.</h3>
                <p className="text-slate-400 text-2xl max-w-2xl leading-relaxed font-medium">
                  We've replaced archaic search filters with a neural bridge. Your customized chatbot understands nuance, aesthetic preference, and situational context to find the perfect catalog match.
                </p>
             </div>
          </div>

          {/* Secondary Nodes */}
          <div className="md:col-span-4 glass-card rounded-[4.5rem] p-14 flex flex-col justify-between border-white/5 bg-gradient-to-br from-blue-900/20 to-transparent">
             <div className="text-6xl bg-blue-950 w-24 h-24 rounded-[2.2rem] flex items-center justify-center shadow-2xl border border-blue-900">⚡</div>
             <div>
                <h3 className="text-3xl font-black text-white mb-5 uppercase italic">Void Speed.</h3>
                <p className="text-slate-400 text-xl font-medium leading-tight">Instantaneous inference that moves as fast as human thought.</p>
             </div>
          </div>

          <div className="md:col-span-4 glass-card rounded-[4.5rem] p-14 flex flex-col justify-between border-white/5">
             <div className="text-6xl bg-blue-950 w-24 h-24 rounded-[2.2rem] flex items-center justify-center shadow-2xl border border-blue-900">🌐</div>
             <div>
                <h3 className="text-3xl font-black text-white mb-5 uppercase italic">Cyber Stream.</h3>
                <p className="text-slate-400 text-xl font-medium leading-tight">A mobile-first stream designed for the generation that hates browsing.</p>
             </div>
          </div>

          <div className="md:col-span-8 glass-card rounded-[4.5rem] p-20 border-white/5 flex flex-col md:flex-row items-center gap-20 bg-slate-900/20 shadow-2xl">
             <div className="flex-1">
                <h3 className="text-5xl font-black text-white mb-10 tracking-tighter uppercase italic leading-none">Vibe Synthesis.</h3>
                <p className="text-slate-400 text-2xl leading-relaxed font-medium">
                  The chatbot doesn't just list products—it synthesizes why an item fits your specific aesthetic DNA, creating a personalized shopping narrative.
                </p>
             </div>
             <div className="w-full md:w-80 h-56 bg-blue-950 rounded-[3.5rem] border border-blue-900 flex items-center justify-center overflow-hidden">
                <div className="flex gap-5">
                    <div className="w-5 h-24 bg-blue-600 rounded-full animate-bounce shadow-[0_0_20px_rgba(37,99,235,0.5)]"></div>
                    <div className="w-5 h-14 bg-cyan-400 rounded-full animate-bounce delay-150"></div>
                    <div className="w-5 h-28 bg-white rounded-full animate-bounce delay-300"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
