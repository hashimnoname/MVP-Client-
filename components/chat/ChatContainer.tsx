
import React, { useRef, useEffect } from 'react';
import { useChat } from '../../hooks/useChat';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { TypingIndicator } from './TypingIndicator';

export const ChatContainer: React.FC = () => {
  const { messages, isLoading, sendMessage } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <div id="chat-section" className="w-full max-w-6xl mx-auto h-[85vh] md:h-[850px] flex flex-col bg-slate-950/80 backdrop-blur-[60px] rounded-[4.5rem] overflow-hidden my-24 shadow-[0_50px_150px_-30px_rgba(0,0,0,0.8)] border border-white/5 relative">
      {/* Decorative Cyber Glow */}
      <div className="absolute -top-40 -right-40 w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Header */}
      <div className="bg-slate-900/60 backdrop-blur-3xl px-14 py-12 flex items-center justify-between border-b border-white/5 z-20">
        <div className="flex items-center gap-10">
          <div className="relative">
            <div className="w-20 h-20 bg-blue-600 rounded-[1.8rem] flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.4)] transform rotate-3 hover:rotate-0 transition-all duration-500 cursor-pointer">
              <span className="text-white font-black text-4xl tracking-tighter">Y</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-cyan-400 border-[5px] border-slate-900 rounded-full animate-pulse"></div>
          </div>
          <div>
            <h3 className="font-black text-white text-3xl tracking-tighter uppercase italic">Cyber Agent</h3>
            <div className="flex items-center gap-4">
              <span className="text-[12px] font-black text-blue-400 tracking-[0.5em] uppercase">Your customized chatbot // Active</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex gap-5">
          <div className="px-8 py-3 rounded-full bg-white text-black text-[11px] font-black tracking-[0.4em] uppercase shadow-2xl hover:bg-blue-400 transition-colors cursor-default">
            v5.0 Deep-Flash
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-12 py-14 space-y-12 scroll-smooth bg-transparent hide-scrollbar relative z-10"
      >
        <div className="flex justify-center mb-14">
            <span className="px-10 py-3 rounded-full bg-white/5 text-[10px] font-black text-blue-500 tracking-[0.6em] uppercase border border-white/5 shadow-sm">
                Custom Interface // Neural_Link_01
            </span>
        </div>
        
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        {isLoading && (
          <div className="ml-8">
            <TypingIndicator />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-12 bg-slate-900/80 backdrop-blur-2xl border-t border-white/5 relative z-20">
        <ChatInput onSendMessage={sendMessage} disabled={isLoading} />
        <div className="flex justify-between items-center mt-10 px-8">
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.6em]">
            Protocol // Direct_Neural_Sync
          </p>
          <div className="flex gap-5 items-center">
             <div className="h-2 w-32 bg-white/5 rounded-full overflow-hidden shadow-inner">
                <div className="h-full bg-blue-600 w-2/3 animate-pulse shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
             </div>
             <span className="text-[10px] font-black text-blue-600 tracking-[0.3em] uppercase animate-pulse">Processing Stream</span>
          </div>
        </div>
      </div>
    </div>
  );
};
