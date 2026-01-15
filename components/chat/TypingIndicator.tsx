
import React from 'react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center space-x-1 bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-none w-16 mb-4">
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-dot"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-dot delay-200"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-dot delay-400"></div>
    </div>
  );
};
