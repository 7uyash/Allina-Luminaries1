import React, { useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface MetricData {
  efficiency: string;
  customers: string;
  projects: string;
  revenue: string;
}

export const Metrics: React.FC = () => {
  const { setTheme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeOption, setActiveOption] = useState<'lorem' | 'ipsum' | 'dolor sit'>('lorem');

  // Metric data for different options
  const metricData: Record<string, MetricData> = {
    lorem: {
      efficiency: '98%',
      customers: '20K+',
      projects: '120+',
      revenue: '500M'
    },
    ipsum: {
      efficiency: '95%',
      customers: '15K+',
      projects: '90+',
      revenue: '400M'
    },
    'dolor sit': {
      efficiency: '92%',
      customers: '10K+',
      projects: '80+',
      revenue: '300M'
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full flex justify-center mt-20"
    >
      <div className="max-w-[1440px] mx-auto w-full px-4">
        <div 
          className="bg-black rounded-[32.18px] text-white relative"
          style={{
            height: '647px'
          }}
        >
          {/* Main content container */}
          <div 
            className="absolute"
            style={{
              width: '832.59px',
              height: '528.51px',
              top: '58.34px',
              left: '354.2px',
              borderRadius: '16.09px'
            }}
          >
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 h-full">
              {/* Top Left */}
              <div className="flex flex-col items-center justify-center">
                <div className="text-[90px] font-light mb-2">{metricData[activeOption].efficiency}</div>
                <div className="text-[#DDB9A2] text-lg tracking-wider">Customer Efficiency</div>
              </div>

              {/* Top Right */}
              <div className="flex flex-col items-center justify-center">
                <div className="text-[90px] font-light mb-2">{metricData[activeOption].customers}</div>
                <div className="text-[#DDB9A2] text-lg tracking-wider">Total Customers</div>
              </div>

              {/* Bottom Left */}
              <div className="flex flex-col items-center justify-center">
                <div className="text-[90px] font-light mb-2">{metricData[activeOption].projects}</div>
                <div className="text-[#DDB9A2] text-lg tracking-wider">Projects Completed</div>
              </div>

              {/* Bottom Right */}
              <div className="flex flex-col items-center justify-center">
                <div className="text-[90px] font-light mb-2">{metricData[activeOption].revenue}</div>
                <div className="text-[#DDB9A2] text-lg tracking-wider">Revenue Generated</div>
              </div>
            </div>
          </div>

          {/* Left side text with line */}
          <div 
            className="absolute flex items-center gap-8"
            style={{
              width: '113.43px',
              height: '138.4px',
              top: '256.61px',
              left: '98.95px'
            }}
          >
            <div className="w-[2px] h-full bg-[#DDB9A2]"></div>
            <div className="flex flex-col gap-[36.2px] text-[#DDB9A2] text-lg tracking-wider">
              <button 
                onClick={() => setActiveOption('lorem')}
                className={`text-left hover:text-white transition-colors ${activeOption === 'lorem' ? 'text-white' : ''}`}
              >
                LOREM
              </button>
              <button 
                onClick={() => setActiveOption('ipsum')}
                className={`text-left hover:text-white transition-colors ${activeOption === 'ipsum' ? 'text-white' : ''}`}
              >
                IPSUM
              </button>
              <button 
                onClick={() => setActiveOption('dolor sit')}
                className={`text-left hover:text-white transition-colors ${activeOption === 'dolor sit' ? 'text-white' : ''}`}
              >
                DOLOR SIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
