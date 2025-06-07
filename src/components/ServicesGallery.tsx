import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  size: {
    width: string;
    height: string;
    left?: string;
    top?: string;
  };
}

export const ServicesGallery: React.FC = () => {
  const { setTheme } = useTheme();
  const sectionRef = React.useRef<HTMLElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Smart Street Lighting",
      description: "IoT-enabled intelligent lighting systems for smart cities",
      image: "https://images.unsplash.com/photo-1542652694-40abf526446e?q=80&w=800&auto=format&fit=crop",
      size: { width: '293.73px', height: '392.37px', left: '322px' }
    },
    {
      id: 2,
      title: "Energy Management",
      description: "Efficient power solutions for sustainable infrastructure",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
      size: { width: '272.93px', height: '200.05px', left: '641.72px' }
    },
    {
      id: 3,
      title: "GIS Mapping",
      description: "Advanced geographical mapping for infrastructure planning",
      image: "https://images.unsplash.com/photo-1576400883215-7083980b6193?q=80&w=800&auto=format&fit=crop",
      size: { width: '179.35px', height: '200.05px', left: '940.65px' }
    },
    {
      id: 4,
      title: "Infrastructure Solutions",
      description: "End-to-end EPC services for urban development",
      image: "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?q=80&w=800&auto=format&fit=crop",
      size: { width: '478.28px', height: '175.15px', left: '641.72px', top: '217.22px' }
    },
    {
      id: 5,
      title: "Automation Systems",
      description: "Smart control systems for efficient operations",
      image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=800&auto=format&fit=crop",
      size: { width: '500.81px', height: '185.45px', left: '322px', top: '409.55px' }
    },
    {
      id: 6,
      title: "Renewable Integration",
      description: "Solar-powered and sustainable lighting solutions",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop",
      size: { width: '271.2px', height: '185.45px', left: '848.8px', top: '409.55px' }
    }
  ];

  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTheme('dark');
        }
      });
    }, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [setTheme]);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#E7DED7] dark:bg-black transition-colors duration-700 pt-20">
      <div className="max-w-[1440px] mx-auto relative min-h-[800px] px-4">
        <h2 className="text-center text-[#06153A] dark:text-[#E7DED7] text-[32px] font-normal tracking-[3.2px] mb-16 transition-colors duration-700"
            style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
          GLIMPSE TO OUR SERVICES
        </h2>

        <div className="relative">
          {services.map((service) => (
            <div
              key={service.id}
              className={`absolute rounded-[20px] overflow-hidden transition-all duration-500 cursor-pointer ${
                hoveredId !== null && hoveredId !== service.id ? 'scale-95 opacity-50' : ''
              } ${hoveredId === service.id ? 'scale-105 z-10' : ''}`}
              style={service.size}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img 
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-black/50 flex flex-col justify-end p-6 transition-opacity duration-300 ${
                hoveredId === service.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <h3 className="text-white text-2xl font-normal mb-2">{service.title}</h3>
                <p className="text-[#DDB9A2] text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 

