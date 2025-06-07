
import React from 'react';

export const OurValues = () => {
  return (
    <>
      {/* OUR VALUES Section Title */}
      <div className="flex justify-center items-center py-[40px] sm:py-[20px]">
        <h2 className="text-[#06153A] text-[25px] font-normal tracking-[4px] text-center lg:text-[22px] md:text-[20px] sm:text-[18px]"
            style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
          OUR VALUES
        </h2>
      </div>

      {/* OUR VALUES Content */}
      <div className="relative w-full h-[946px] bg-black mb-[60px] lg:h-[800px] md:h-[700px] sm:h-auto sm:min-h-[600px]">
        <div className="absolute w-[578px] h-[599px] top-[229px] left-[72px] bg-cover bg-center lg:w-[450px] lg:h-[450px] lg:left-[50px] lg:top-[180px] md:w-[350px] md:h-[350px] md:left-[30px] md:top-[150px] sm:w-[280px] sm:h-[280px] sm:left-[20px] sm:top-[80px]"
             style={{ backgroundImage: 'url(https://c.animaapp.com/zheglGTa/img/unsplash-xu5mqq0chck.png)' }}>
        </div>
        
        <p className="absolute w-[705px] top-[25px] left-[35px] text-white text-[50px] font-normal tracking-[2.5px] leading-[161px] lg:text-[40px] lg:w-[600px] md:text-[35px] md:w-[500px] sm:text-[24px] sm:w-[280px] sm:left-[20px] sm:leading-[40px]"
           style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
          Lorem Ipsum Dolor Sit Amet
        </p>
        
        <div className="absolute w-[681px] h-[629px] top-[229px] left-[719px] lg:w-[550px] lg:left-[600px] lg:top-[180px] md:w-[450px] md:left-[400px] md:top-[150px] sm:w-[280px] sm:left-[20px] sm:top-[380px]">
          {/* Numbers */}
          <div className="absolute flex flex-col gap-[15px] top-0 left-0">
            <div className="flex flex-col gap-[95px]">
              <div className="text-white text-[32px] font-normal tracking-[-0.32px] leading-[79px] lg:text-[28px] md:text-[24px] sm:text-[20px] sm:leading-[50px]"
                   style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
                01.
              </div>
              <div className="text-white text-[32px] font-normal tracking-[-0.32px] leading-[79px] blur-[3.5px] lg:text-[28px] md:text-[24px] sm:text-[20px] sm:leading-[50px]"
                   style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
                02.
              </div>
            </div>
            {['03.', '04.', '05.', '06.'].map((num, index) => (
              <div key={index} className="text-white text-[32px] font-normal tracking-[-0.32px] leading-[79px] blur-[3.5px] lg:text-[28px] md:text-[24px] sm:text-[20px] sm:leading-[50px]"
                   style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
                {num}
              </div>
            ))}
          </div>
          
          {/* Values */}
          <div className="absolute flex flex-col w-[604px] gap-[15px] top-0 left-[77px] lg:w-[480px] md:w-[380px] sm:w-[200px] sm:left-[60px]">
            <div className="flex flex-col gap-[95px]">
              <div className="text-white text-[32px] font-normal tracking-[1.6px] leading-[79px] lg:text-[28px] md:text-[24px] sm:text-[18px] sm:leading-[50px]"
                   style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
                SUSTAINABILITY
              </div>
              <div className="text-white text-[32px] font-normal tracking-[1.6px] leading-[79px] blur-[3.5px] lg:text-[28px] md:text-[24px] sm:text-[18px] sm:leading-[50px]"
                   style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
                INNOVATION
              </div>
            </div>
            {['QUALITY', 'CUSTOMER FOCUS', 'INTEGRITY', 'COLLABORATION'].map((value, index) => (
              <div key={index} className="text-white text-[32px] font-normal tracking-[1.6px] leading-[79px] blur-[3.5px] lg:text-[28px] md:text-[24px] sm:text-[18px] sm:leading-[50px]"
                   style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
                {value}
              </div>
            ))}
          </div>
          
          {/* Description */}
          <p className="absolute w-[583px] top-[71px] left-[81px] text-white text-[20px] font-normal leading-[27px] lg:w-[450px] lg:text-[18px] md:w-[350px] md:text-[16px] sm:w-[200px] sm:text-[12px] sm:leading-[20px] sm:left-[60px]"
             style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}>
            We are committed to environmentally responsible practices, ensuring that our projects contribute to a
            greener and more sustainable future.
          </p>
          
          {/* Divider lines */}
          {[168, 255, 349, 446, 540].map((top, index) => (
            <div key={index} className={`absolute w-[681px] h-[1px] bg-white top-[${top}px] left-0 lg:w-[550px] md:w-[450px] sm:w-[280px]`} />
          ))}
        </div>
      </div>
    </>
  );
};
