
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020617] py-24 px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-5 mb-8">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-black font-black text-xl">
              Y
            </div>
            <span className="font-black text-3xl tracking-tighter text-white uppercase italic">Customized.AI</span>
          </div>
          <p className="text-slate-600 text-sm font-bold max-w-xs uppercase tracking-widest leading-relaxed">
            Your customized chatbot // Conversational synthesis for the next generation of digital commerce.
          </p>
        </div>

        <div className="flex gap-20 text-[11px] text-slate-500 font-black uppercase tracking-[0.4em]">
          <div className="flex flex-col gap-6">
            <span className="text-white">Architecture</span>
            <a href="#" className="hover:text-blue-500 transition-colors">Neural Hub</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Link Stream</a>
            <a href="#" className="hover:text-blue-500 transition-colors">System Logs</a>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-white">Security</span>
            <a href="#" className="hover:text-blue-500 transition-colors">AES-256</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Zero Trust</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 text-center text-[11px] text-slate-800 font-black uppercase tracking-[0.8em]">
        © 2026 Your customized chatbot // Deep Ocean Protocol
      </div>
    </footer>
  );
};
