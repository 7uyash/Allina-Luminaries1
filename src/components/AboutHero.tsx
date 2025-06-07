import React from 'react';

export const AboutHero = () => {
  return (
    <div className="relative w-full bg-[#06153A] mt-0">
      <div className="max-w-[1440px] mx-auto relative min-h-[800px] overflow-hidden px-4">
        {/* Main heading "WHO WE ARE" */}
        <h1 
          className="absolute text-white font-normal text-right"
          style={{
            width: '703px',
            height: '322px',
            top: '411px',
            left: 'calc(50% - 650px)',
            fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif',
            fontSize: '170px',
            lineHeight: '150px',
            letterSpacing: '10%'
          }}
        >
          WHO<br />WE ARE
        </h1>

        {/* First description text */}
        <p 
          className="absolute text-justify text-white"
          style={{
            width: '355px',
            height: '135px',
            top: '193px',
            left: 'calc(50% - 661px)',
            fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif',
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '27px'
          }}
        >
          ALLINA, formerly known as Allina Luminaries, began its journey as a dedicated provider of high-quality streetlighting solutions. With a strong foundation in engineering, procurement, and construction (EPC) services, the company has established itself as a trusted name in the streetlighting industry.
        </p>

        {/* Horizontal line */}
        <div 
          className="absolute bg-white"
          style={{
            width: '190px',
            height: '1px',
            top: '490px',
            left: 'calc(50% - 661px)',
            borderTop: '1px solid white'
          }}
        />

        {/* Images section */}
        <div className="absolute" style={{ top: '55px', left: 'calc(50% - 241px)' }}>
          {/* First image */}
          <div 
            className="absolute"
            style={{
              width: '294px',
              height: '273px',
              backgroundImage: 'url(https://c.animaapp.com/zheglGTa/img/unsplash-qsxwhsqyrak.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />

          {/* Second image */}
          <div 
            className="absolute"
            style={{
              width: '294px',
              height: '645px',
              left: '319px',
              backgroundImage: 'url(https://c.animaapp.com/zheglGTa/img/image-10@2x.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />

          {/* Third image */}
          <div 
            className="absolute"
            style={{
              width: '301px',
              height: '538px',
              left: '638px',
              backgroundImage: 'url(https://c.animaapp.com/zheglGTa/img/unsplash-yxcxhfetdhc.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>

        {/* Bottom description text */}
        <p 
          className="absolute text-justify text-white"
          style={{
            width: '294px',
            height: '81px',
            top: '629px',
            left: 'calc(50% + 404px)',
            fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif',
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '27px'
          }}
        >
          Over the years, ALLINA has evolved into a forward-thinking organization with a broader vision to address the growing demands of modern infrastructure.
        </p>
      </div>
    </div>
  );
};
