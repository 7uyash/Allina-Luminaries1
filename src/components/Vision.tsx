import React from 'react';

export const Vision: React.FC = () => {
  return (
    <div
      style={{
        width: '1360px',
        height: '647px',
        borderRadius: '30px',
        backgroundImage: "url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1360&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '0 4px 32px rgba(0,0,0,0.12)'
      }}
      className="flex flex-col items-center justify-center mx-auto"
    >
      <h2 className="text-white text-4xl font-bold mb-6 tracking-widest drop-shadow-lg">VISION</h2>
      <p className="text-white text-lg max-w-2xl text-center drop-shadow-lg px-8">
        To be a global leader in delivering innovative, sustainable, and reliable solutions across industries. Our vision reflects our ambition to grow beyond streetlighting and become a multi-industry leader, offering cutting-edge solutions that empower communities, drive progress, and contribute to a sustainable future.
      </p>
    </div>
  );
}; 