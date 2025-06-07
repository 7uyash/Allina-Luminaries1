import React from 'react';

export const Mission: React.FC = () => {
  return (
    <div
      style={{
        width: '1360px',
        height: '647px',
        borderRadius: '30px',
        backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1360&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '0 4px 32px rgba(0,0,0,0.12)'
      }}
      className="flex flex-col items-center justify-center mx-auto"
    >
      <h2 className="text-white text-4xl font-bold mb-6 tracking-widest drop-shadow-lg">MISSION</h2>
      <p className="text-white text-lg max-w-2xl text-center drop-shadow-lg px-8">
        To provide high-quality, energy-efficient streetlighting and infrastructure solutions that enhance safety, sustainability, and quality of life for communities. We are committed to engineering excellence, customer satisfaction, and environmental responsibility.
      </p>
    </div>
  );
}; 