
import React from 'react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative gradient-border-blue">
      <div className="bg-[#0f172a] rounded-[4.5rem] border border-white/5 overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_60px_100px_rgba(0,0,0,0.8)]">
        <div className="flex flex-col md:flex-row h-full">
          {/* Visual Container */}
          <div className="relative w-full md:w-96 aspect-square overflow-hidden bg-slate-900">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-all duration-1000 transform group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale-[50%] group-hover:grayscale-0" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
            <div className="absolute top-10 left-10 bg-white text-black px-6 py-2 rounded-full text-[11px] font-black tracking-[0.5em] uppercase shadow-2xl">
                Asset.26
            </div>
          </div>

          {/* Details Container */}
          <div className="p-14 md:p-16 flex flex-col justify-between flex-1 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/20">
            <div>
              <div className="flex justify-between items-start mb-8 gap-8">
                <div>
                  <h4 className="font-black text-white text-3xl sm:text-5xl tracking-tighter uppercase italic leading-[0.8] mb-4">{product.name}</h4>
                  <p className="text-[11px] font-black text-blue-500 uppercase tracking-[0.5em]">{product.category}</p>
                </div>
                <div className="bg-white h-16 w-16 rounded-[2.2rem] flex items-center justify-center text-black text-4xl transform hover:rotate-[360deg] transition-all duration-1000 shadow-[0_0_30px_rgba(255,255,255,0.2)] cursor-pointer">
                   ↗
                </div>
              </div>
              <p className="text-blue-400 font-black text-4xl mb-8 tracking-tighter italic">${product.price.toFixed(2)}</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {product.features.slice(0, 3).map((f, i) => (
                  <span key={i} className="px-4 py-2 bg-blue-900/50 rounded-full text-[10px] font-bold text-blue-400 uppercase tracking-widest border border-blue-800">
                    {f}
                  </span>
                ))}
              </div>
              <p className="text-slate-500 text-[18px] font-medium leading-relaxed line-clamp-3 italic">
                "{product.description}"
              </p>
            </div>
            
            <div className="mt-14 flex items-center gap-8">
               <button className="flex-1 py-7 bg-blue-600 text-white rounded-[3rem] text-[13px] font-black uppercase tracking-[0.5em] hover:bg-blue-500 transition-all transform active:scale-95 shadow-[0_25px_50px_rgba(37,99,235,0.3)] border border-white/10">
                Purchase Order
              </button>
              <button className="p-7 bg-white/5 border-2 border-white/5 rounded-[3rem] hover:bg-white/10 transition-colors shadow-sm text-white hover:scale-105 transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
