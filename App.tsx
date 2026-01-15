
import React from 'react';
import { Hero } from './components/landing/Hero';
import { Features } from './components/landing/Features';
import { Footer } from './components/landing/Footer';
import { ChatContainer } from './components/chat/ChatContainer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-600 selection:text-white bg-[#020617]">
      {/* Navigation - Dark Glass Pill */}
      <nav className="fixed top-12 left-0 w-full z-50 flex justify-center px-6">
        <div className="w-full max-w-6xl flex justify-between items-center glass-card px-12 py-6 rounded-full border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-black font-black text-2xl rotate-3 hover:rotate-0 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Y
            </div>
            <span className="font-black text-2xl tracking-tighter text-white uppercase italic hidden sm:inline">Customized.AI</span>
          </div>
          <div className="flex items-center gap-12">
            <div className="hidden md:flex gap-10">
              <a href="#features" className="text-[12px] text-slate-500 hover:text-blue-400 font-black uppercase tracking-[0.5em] transition-colors">Nodes</a>
              <a href="#chat-section" className="text-[12px] text-slate-500 hover:text-blue-400 font-black uppercase tracking-[0.5em] transition-colors">Interface</a>
            </div>
            <a href="#chat-section" className="neo-button px-10 py-5 bg-blue-600 text-white rounded-full text-[12px] font-black uppercase tracking-[0.5em] hover:scale-105 transition-all shadow-xl hover:bg-blue-500 border border-white/10">
              Launch Bot
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        <Hero />
        
        <div id="features" className="relative z-10">
          <Features />
        </div>

        {/* Interaction Section */}
        <section id="chat-section" className="relative py-48 px-6 overflow-hidden bg-[#020617]">
          {/* Cyber Section Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] h-[95vw] bg-blue-600/5 rounded-full blur-[250px] pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto text-center mb-28 relative z-10">
            <span className="text-blue-500 font-black text-[13px] tracking-[0.8em] uppercase mb-10 block">Customized Reasoning Protocol</span>
            <h2 className="text-6xl md:text-[10rem] font-black text-white tracking-tighter mb-12 uppercase italic leading-[0.82]">
              CYBER <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-white">STREAM.</span>
            </h2>
            <p className="text-slate-500 text-2xl md:text-4xl font-medium max-w-3xl mx-auto italic leading-relaxed">
              "Injecting high-fidelity conversational intelligence into your catalog architecture."
            </p>
          </div>
          
          <div className="relative z-10">
            <ChatContainer />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
