
import React, { useState, useRef, useEffect } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  useEffect(() => {
    if (!disabled) {
      inputRef.current?.focus();
    }
  }, [disabled]);

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center gap-6 sm:gap-8 group"
    >
      <div className="relative flex-1">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={disabled}
          placeholder="Inject intent stream..."
          className="w-full bg-slate-900 border-2 border-white/5 rounded-[3.5rem] px-8 sm:px-12 py-6 sm:py-7 text-lg sm:text-xl font-bold focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/80 transition-all duration-500 text-white placeholder:text-slate-700 disabled:opacity-50 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
        />
        <div className="absolute right-10 top-1/2 -translate-y-1/2 flex gap-6 pointer-events-none">
            <span className="text-[11px] font-black text-slate-800 uppercase tracking-widest hidden xl:inline italic">Neural link optimized</span>
        </div>
      </div>
      
      <button
        type="submit"
        disabled={!input.trim() || disabled}
        className="h-[70px] w-[70px] sm:h-[88px] sm:w-[88px] bg-white text-black rounded-[2.5rem] sm:rounded-[3rem] flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:scale-110 hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] active:scale-95 transition-all disabled:bg-slate-900 disabled:text-slate-800 group border border-white/10"
      >
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 transform group-hover:rotate-12 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M5 12h14M12 5l7 7-7 7"
          />
        </svg>
      </button>
    </form>
  );
};
