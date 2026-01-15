
import React from 'react';
import { Message } from '../../types';
import { ProductCard } from './ProductCard';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex flex-col mb-10 ${isUser ? 'items-end' : 'items-start'} animate-message`}>
      <div className={`flex gap-6 max-w-[94%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        {!isUser && (
          <div className="w-16 h-16 rounded-[1.6rem] bg-white flex-shrink-0 flex items-center justify-center text-[14px] font-black text-black shadow-[0_0_30px_rgba(255,255,255,0.1)] mt-1 transform rotate-6 border border-white/20">
            YCC
          </div>
        )}
        <div className="flex flex-col gap-3">
          <div
            className={`px-10 py-8 rounded-[3.5rem] relative overflow-hidden transition-all duration-300 ${
              isUser
                ? 'bg-blue-600 text-white rounded-tr-none shadow-[0_20px_50px_rgba(37,99,235,0.4)]'
                : 'bg-slate-900 text-slate-100 rounded-tl-none font-medium border border-white/5 shadow-xl hover:border-blue-500/30'
            }`}
          >
            {isUser && (
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            )}
            <p className="text-lg sm:text-[20px] leading-[1.7] tracking-tight whitespace-pre-wrap relative z-10">{message.content}</p>
          </div>
          
          <div className={`flex items-center gap-4 mt-1 ${isUser ? 'justify-end' : 'justify-start'}`}>
            <span className={`text-[11px] font-black uppercase tracking-[0.5em] ${isUser ? 'text-blue-500' : 'text-slate-600'}`}>
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
            {!isUser && (
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">Custom Intelligence</span>
            )}
          </div>
        </div>
      </div>

      {message.products && message.products.length > 0 && (
        <div className="mt-12 w-full pl-0 sm:pl-24 flex flex-col gap-10">
          <div className="flex items-center gap-5">
             <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent"></div>
             <span className="text-[11px] font-black text-blue-500 uppercase tracking-[0.8em] italic">Customized Matches</span>
             <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent"></div>
          </div>
          {message.products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
