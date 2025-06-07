
import React from 'react';

export const MeetOurTeam = () => {
  return (
    <>
      {/* MEET OUR TEAM Section Title */}
      <div className="flex justify-center items-center py-[40px] sm:py-[20px]">
        <h2 className="text-[#06153A] text-[25px] font-normal tracking-[4px] text-center lg:text-[22px] md:text-[20px] sm:text-[18px]"
            style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
          MEET OUR TEAM
        </h2>
      </div>

      {/* MEET OUR TEAM Content */}
      <div className="flex flex-col items-center gap-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
          {/* Team Member 1 */}
          <div className="relative overflow-hidden rounded-[20px_0px_20px_0px]">
            <img 
              src="https://c.animaapp.com/zheglGTa/img/image-11@2x.png" 
              alt="Team Member 1"
              className="w-full aspect-square object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/86 to-transparent h-[155px]">
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-2xl font-normal tracking-[4.8px] mb-2">
                  TEAM MEMBER
                </h3>
                <p className="text-white text-lg font-normal">
                  Position
                </p>
              </div>
            </div>
          </div>

          {/* Founder & CEO */}
          <div className="relative overflow-hidden rounded-[20px_0px_20px_0px]">
            <img 
              src="https://c.animaapp.com/zheglGTa/img/image-12.png" 
              alt="Founder CEO"
              className="w-full aspect-square object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/86 to-transparent h-[155px]">
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-2xl font-normal tracking-[4.8px] mb-2">
                  RITIK GUPTA
                </h3>
                <p className="text-white text-lg font-normal">
                  Founder & CEO
                </p>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="relative overflow-hidden rounded-[20px_0px_20px_0px]">
            <img 
              src="https://c.animaapp.com/zheglGTa/img/image-13@2x.png" 
              alt="Team Member 3"
              className="w-full aspect-square object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/86 to-transparent h-[155px]">
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-2xl font-normal tracking-[4.8px] mb-2">
                  TEAM MEMBER
                </h3>
                <p className="text-white text-lg font-normal">
                  Position
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
