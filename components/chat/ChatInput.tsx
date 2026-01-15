
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
      className="relative flex items-center gap-8 group"
    >
      <div className="relative flex-1">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={disabled}
          placeholder="Inject intent stream..."
          className="w-full bg-slate-900 border-2 border-white/5 rounded-[3.5rem] px-12 py-7 text-xl font-bold focus:outline-none focus:border-blue-600 focus:bg-slate-800 transition-all duration-500 text-white placeholder:text-slate-700 disabled:opacity-50 shadow-inner"
        />
        <div className="absolute right-10 top-1/2 -translate-y-1/2 flex gap-6">
            <span className="text-[12px] font-black text-slate-800 uppercase tracking-widest hidden xl:inline italic">Neural link ready</span>
        </div>
      </div>
      
      <button
        type="submit"
        disabled={!input.trim() || disabled}
        className="h-[88px] w-[88px] bg-white text-black rounded-[3rem] flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:scale-110 active:scale-95 transition-all disabled:bg-slate-900 disabled:text-slate-800 group border border-white/10"
      >
        <svg
          className="w-10 h-10 transform group-hover:rotate-12 transition-transform"
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
