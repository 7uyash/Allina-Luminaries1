import React, { useState } from 'react';

interface Role {
  id: number;
  title: string;
  description: string;
  type: string;
  payRange: string;
  location: string;
}

const engineeringRoles: Role[] = [
  { 
    id: 1, 
    title: 'IOT Engineer', 
    description: "We're looking for a mid-level product designer to join our team.",
    type: 'Full-time',
    payRange: '80k-100k',
    location: 'Faridabad, India'
  },
  { 
    id: 2, 
    title: 'Mechanical Engineer', 
    description: "We're looking for a mid-level product designer to join our team.",
    type: 'Full-time',
    payRange: '80k-100k',
    location: 'Faridabad, India'
  }
];

const managementRoles: Role[] = [
  { 
    id: 3, 
    title: 'HR Manager', 
    description: "We're looking for a mid-level product designer to join our team.",
    type: 'Full-time',
    payRange: '80k-100k',
    location: 'Faridabad, India'
  },
  { 
    id: 4, 
    title: 'Team Manager', 
    description: "We're looking for a mid-level product designer to join our team.",
    type: 'Full-time',
    payRange: '80k-100k',
    location: 'Faridabad, India'
  }
];

const RoleCard: React.FC<{ role: Role }> = ({ role }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        width: '932px',
        height: '202px',
        backgroundColor: '#E7DED7',
        borderRadius: '15px',
        border: '1px solid #000000',
        marginBottom: '48px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Circular expanding overlay */}
      <div 
        className="absolute inset-0 bg-black transition-all ease-in-out"
        style={{
          clipPath: isHovered ? 'circle(150% at 50% 100%)' : 'circle(0% at 50% 100%)',
          borderRadius: '15px',
          transitionDuration: '1200ms',
          transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      />

      {/* Description */}
      <p 
        className="relative z-10"
        style={{
          position: 'absolute',
          width: '550px',
          height: '27px',
          top: '75px',
          left: '41px',
          fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
          fontWeight: 400,
          color: isHovered ? '#ffffff' : '#666666',
          fontSize: '18.3px',
          letterSpacing: '0',
          lineHeight: 'normal',
          transition: 'color 1200ms ease-in-out'
        }}
      >
        {role.description}
      </p>

      {/* Title Section with Icon */}
      <div 
        className="relative z-10"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 0px',
          position: 'absolute',
          top: '23px',
          left: '30px'
        }}
      >
        {/* Icon */}
        <svg 
          style={{
            position: 'relative',
            width: '32px',
            height: '32px',
            transition: 'stroke 1200ms ease-in-out'
          }}
          viewBox="0 0 24 24" 
          fill="none"
        >
          <circle cx="12" cy="12" r="10" stroke={isHovered ? "#ffffff" : "#000000"} strokeWidth="2"/>
          <path d="M12 6v6l4 2" stroke={isHovered ? "#ffffff" : "#000000"} strokeWidth="2" strokeLinecap="round"/>
        </svg>
        
        {/* Title */}
        <div 
          className="relative z-10"
          style={{
            position: 'relative',
            width: 'fit-content',
            fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
            fontWeight: 400,
            color: isHovered ? '#ffffff' : '#000000',
            fontSize: '20.9px',
            letterSpacing: '0',
            lineHeight: 'normal',
            whiteSpace: 'nowrap',
            transition: 'color 1200ms ease-in-out'
          }}
        >
          {role.title}
        </div>
      </div>

      {/* Bottom Section - Full-time and Salary */}
      <div 
        className="relative z-10"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '40px',
          position: 'absolute',
          top: '157px',
          left: '30px'
        }}
      >
        {/* Full-time */}
        <div 
          style={{
            display: 'flex',
            width: '114.32px',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            position: 'relative'
          }}
        >
          <svg 
            style={{
              position: 'relative',
              width: '24px',
              height: '24px',
              transition: 'fill 1200ms ease-in-out'
            }}
            viewBox="0 0 24 24" 
            fill={isHovered ? "#ffffff" : "#000000"}
          >
            <circle cx="12" cy="12" r="3"/>
          </svg>
          <span 
            style={{
              position: 'relative',
              width: '81.33px',
              height: '22.33px',
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
              fontWeight: 400,
              color: isHovered ? '#ffffff' : '#000000',
              fontSize: '19.5px',
              letterSpacing: '0',
              lineHeight: 'normal',
              whiteSpace: 'nowrap',
              transition: 'color 1200ms ease-in-out'
            }}
          >
            {role.type}
          </span>
        </div>

        {/* Salary */}
        <div 
          style={{
            display: 'inline-flex',
            alignItems: 'flex-start',
            gap: '8px',
            position: 'relative'
          }}
        >
          <svg 
            style={{
              position: 'relative',
              width: '24px',
              height: '24px',
              transition: 'fill 1200ms ease-in-out'
            }}
            viewBox="0 0 24 24" 
            fill={isHovered ? "#ffffff" : "#000000"}
          >
            <circle cx="12" cy="12" r="3"/>
          </svg>
          <span 
            style={{
              position: 'relative',
              width: '95.69px',
              marginTop: '-1px',
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
              fontWeight: 400,
              color: isHovered ? '#ffffff' : '#000000',
              fontSize: '19.5px',
              letterSpacing: '0',
              lineHeight: 'normal',
              transition: 'color 1200ms ease-in-out'
            }}
          >
            {role.payRange}
          </span>
        </div>
      </div>

      {/* Location Badge */}
      <div 
        className="relative z-10"
        style={{
          position: 'absolute',
          width: '159px',
          height: '29px',
          top: '18px',
          left: '731px',
          backgroundColor: isHovered ? '#000000' : '#e7ded7',
          borderRadius: '4px',
          border: isHovered ? '1px solid #ffffff' : '1px solid #06153A',
          transition: 'background-color 1200ms ease-in-out, border-color 1200ms ease-in-out'
        }}
      >
        <span 
          style={{
            position: 'absolute',
            height: '18px',
            top: '5px',
            left: '43px',
            fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
            fontWeight: 400,
            color: isHovered ? '#ffffff' : '#06153A',
            fontSize: '14.9px',
            textAlign: 'right',
            letterSpacing: '0',
            lineHeight: 'normal',
            transition: 'color 1200ms ease-in-out'
          }}
        >
          {role.location}
        </span>
        <svg 
          style={{
            position: 'absolute',
            width: '14px',
            height: '18px',
            top: '5px',
            left: '6px',
            transition: 'fill 1200ms ease-in-out'
          }}
          viewBox="0 0 24 24" 
          fill={isHovered ? "#ffffff" : "#06153A"}
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      </div>

      {/* Circle Dot */}
      <div 
        className="relative z-10"
        style={{
          position: 'absolute',
          width: '12px',
          height: '12px',
          top: '202px',
          left: '444px',
          backgroundColor: isHovered ? '#ffffff' : '#000000',
          borderRadius: '6px',
          transition: 'background-color 1200ms ease-in-out'
        }}
      />
    </div>
  );
};

const NavigationDots: React.FC<{ total: number; current: number }> = ({ total, current }) => (
  <div className="flex justify-center gap-2 mt-6">
    {Array.from({ length: total }).map((_, index) => (
      <button
        key={index}
        className={`w-3 h-3 rounded-full transition-colors ${
          index === current ? 'bg-orange-500' : 'bg-gray-300'
        }`}
      />
    ))}
  </div>
);

export const OpenRoles: React.FC = () => {
  const [engineeringSlide, setEngineeringSlide] = useState(0);
  const [managementSlide, setManagementSlide] = useState(0);

  return (
    <section className="w-full bg-[#E7DED7] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-gray-500 text-sm font-medium tracking-wider uppercase mb-8"
            style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
          >
            OPEN ROLES
          </h1>
        </div>

        {/* Engineering Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Title and Image */}
            <div>
              <div className="mb-8">
                <h2 
                  className="text-4xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                >
                  Engineering
                </h2>
                <p 
                  className="text-gray-600 text-lg"
                  style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                >
                  Open positions in our Engineering team.
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src="/images/image2.png" 
                  alt="Engineering Team" 
                  className="object-cover"
                  style={{
                    width: '402px',
                    height: '336px',
                    borderRadius: '10px'
                  }}
                />
              </div>
            </div>

            {/* Right Side - Job Cards */}
            <div style={{ marginLeft: '-250px' }}>
              {engineeringRoles.map((role) => (
                <RoleCard key={role.id} role={role} />
              ))}
            </div>
          </div>
          
          {/* Navigation Dots for Engineering */}
          <NavigationDots total={5} current={0} />
        </div>

        {/* Management Section */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Title and Image */}
            <div>
              <div className="mb-8">
                <h2 
                  className="text-4xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                >
                  Management
                </h2>
                <p 
                  className="text-gray-600 text-lg"
                  style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                >
                  Open positions in our Management team.
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src="/images/image3.jpg" 
                  alt="Management Team" 
                  className="object-cover"
                  style={{
                    width: '402px',
                    height: '336px',
                    borderRadius: '10px'
                  }}
                />
              </div>
            </div>

            {/* Right Side - Job Cards */}
            <div style={{ marginLeft: '-250px' }}>
              {managementRoles.map((role) => (
                <RoleCard key={role.id} role={role} />
              ))}
            </div>
          </div>
          
          {/* Navigation Dots for Management */}
          <NavigationDots total={5} current={0} />
        </div>
      </div>
    </section>
  );
}; 