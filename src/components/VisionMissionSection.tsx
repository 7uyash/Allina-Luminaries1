import React, { useState } from 'react';
import { Vision } from './Vision';
import { Mission } from './Mission';

export const VisionMissionSection: React.FC = () => {
  const [active, setActive] = useState<'vision' | 'mission'>('vision');

  return (
    <div className="w-full flex flex-col items-center justify-center mt-12">
      <div className="flex gap-8 mb-6">
        <button
          className={`px-8 py-3 rounded-full text-lg font-bold transition ${
            active === 'vision'
              ? 'bg-white text-[#06153A] shadow-lg'
              : 'bg-[#06153A] text-white opacity-80'
          }`}
          onClick={() => setActive('vision')}
        >
          Vision
        </button>
        <button
          className={`px-8 py-3 rounded-full text-lg font-bold transition ${
            active === 'mission'
              ? 'bg-white text-[#06153A] shadow-lg'
              : 'bg-[#06153A] text-white opacity-80'
          }`}
          onClick={() => setActive('mission')}
        >
          Mission
        </button>
      </div>
      {active === 'vision' ? <Vision /> : <Mission />}
    </div>
  );
}; 