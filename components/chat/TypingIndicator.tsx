
import React from 'react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 bg-blue-900/30 backdrop-blur-md px-6 py-4 rounded-[2rem] rounded-bl-none border border-white/5 w-24 mb-6 shadow-2xl">
      <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-dot shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
      <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-dot [animation-delay:0.2s] shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
      <div className="w-2.5 h-2.5 bg-indigo-400 rounded-full animate-dot [animation-delay:0.4s] shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
    </div>
  );
};
