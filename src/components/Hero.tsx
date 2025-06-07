import React, { useState } from 'react';

export const Hero: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleBoxClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="w-full py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto relative">
        {/* Main heading group with decorative elements */}
        <div className="relative w-[1115px] h-[332px] mx-auto">
          <h1 
            className="absolute top-[33px] left-[92px] font-anton text-[90px] font-normal leading-[140px] tracking-[8.1px] text-[#06153A] text-center"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            Illuminating Progress<br />Empowering Growth.
          </h1>
          
          {/* Decorative lines - top right */}
          <svg 
            className="absolute top-[-2px] left-[1065px]" 
            width="50" 
            height="55" 
            viewBox="0 0 50 55" 
            fill="none"
            style={{ width: '50px', height: '55px', flexShrink: 0 }}
          >
            <path d="M2 26.7168L30.3916 2" stroke="#06153A" strokeWidth="4" strokeLinecap="round"/>
            <path d="M14.4678 34.9854L47.9237 17.7314" stroke="#06153A" strokeWidth="4" strokeLinecap="round"/>
            <path d="M18.4678 45.9854L44 53" stroke="#06153A" strokeWidth="4" strokeLinecap="round"/>
          </svg>
          
          {/* Decorative lines - bottom left */}
          <svg 
            className="absolute top-[276px] left-[-2px]" 
            width="57" 
            height="58" 
            viewBox="0 0 59 58" 
            fill="none"
            style={{ width: '57px', height: '58px', flexShrink: 0 }}
          >
            <path d="M56 29.8293L23.2336 56" stroke="#06153A" strokeWidth="4" strokeLinecap="round"/>
            <path d="M41.6111 21.0743L2.99999 39.3432" stroke="#06153A" strokeWidth="4" strokeLinecap="round"/>
            <path d="M36.9948 9.42725L7.52832 2" stroke="#06153A" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        </div>
        
        <p 
          className="text-[#06153A] text-center text-[17px] font-normal leading-[27px] mx-auto mb-12 mt-12"
          style={{ 
            width: '936px', 
            fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif',
            maxWidth: '100%'
          }}
        >
          From smart streetlighting solutions to end-to-end EPC services,
          ALLINA is committed to delivering innovative, sustainable, and
          reliable infrastructure solutions. Together, we light the way to a
          brighter future.
        </p>
        
        <div className="flex justify-center">
          <div 
            onClick={handleBoxClick}
            className={`cursor-pointer transition-all duration-700 ease-in-out relative ${
              isExpanded 
                ? 'w-full max-w-4xl h-48 bg-[#06153A] rounded-[40px]' 
                : 'w-32 h-28 bg-[#06153A] rounded-[20px] hover:scale-105'
            }`}
          >
            <div className={`transition-all duration-700 ease-in-out absolute top-0 left-0 w-full h-full ${
              isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}>
              {isExpanded && (
                <div className="flex items-center h-full p-8 overflow-hidden">
                  <div className="flex items-center gap-8 w-full">
                    <div className="flex-shrink-0 transition-transform duration-700 ease-in-out transform origin-left">
                      <svg 
                        width="137" 
                        height="133" 
                        viewBox="0 0 137 133" 
                        fill="none"
                        className="transition-transform duration-700"
                        style={{ width: '136.8px', height: '133px', flexShrink: 0 }}
                      >
                        <mask id="mask0_410_1443" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="137" height="133">
                          <path d="M0 1.52588e-05H136.8V133H0V1.52588e-05Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_410_1443)">
                          <path d="M77.2336 50.7728H75.5345V43.5914H79.388L77.2336 50.7728ZM76.8441 51.7908C76.7062 51.9452 76.5897 52.0996 76.4968 52.2412L76.4968 52.2414C76.4167 52.3642 76.352 52.4777 76.3009 52.5758H73.721C73.6194 52.381 73.464 52.1239 73.2409 51.8597L73.2407 51.8594C73.2213 51.8366 73.199 51.8136 73.1785 51.7908H76.8441ZM72.1731 41.5923C72.4704 41.1514 72.7301 40.7283 73.0331 40.3937L73.0334 40.3933C73.5207 39.8503 74.2577 39.5376 75.0057 39.5379H75.0058H75.0075C75.1333 39.538 75.2593 39.5467 75.3844 39.5644C75.794 39.6229 76.1485 39.7674 76.4735 39.9841C76.797 40.2004 77.0883 40.4913 77.3447 40.836C77.6066 41.1867 77.8594 41.5984 78.1663 42.0024C78.315 42.1976 78.4803 42.3909 78.6663 42.5734H71.3759C71.6991 42.2646 71.9491 41.922 72.1729 41.5926L72.1731 41.5923ZM72.701 50.7728L70.6266 43.5914H74.4875V50.7728H72.701ZM81.2757 80.1459H75.7234L75.7232 63.2785L81.2757 67.084V80.1459ZM67.4355 64.2406V80.146H62.0027L62.0028 53.888L67.4354 50.7162L67.4355 56.1865L67.4348 56.1858V60.9662V62.3361V64.2406H67.4355ZM75.7232 62.033L75.7232 53.5938H77.011L77.1357 53.2488C77.1385 53.2413 77.1492 53.2147 77.1663 53.1767C77.2267 53.042 77.3721 52.7566 77.6039 52.4896L77.6042 52.4893C77.7641 52.3039 77.9633 52.1273 78.1985 52.0006C78.436 51.8735 78.7048 51.7917 79.0462 51.7908L79.2003 51.7906V50.7728H78.3243L80.4787 43.5914H80.911C80.9371 43.5924 80.9704 43.5956 81.0116 43.5957C81.0572 43.5957 81.1016 43.5938 81.145 43.5914H82.0073V42.5734H80.9219C80.7684 42.5644 80.6077 42.5344 80.4478 42.4839C80.2553 42.4233 80.0633 42.3354 79.8897 42.2334C79.5519 42.0358 79.2748 41.7477 79.008 41.3969C78.7412 41.0477 78.4904 40.6398 78.1931 40.2393C77.8806 39.8196 77.5093 39.4414 77.0669 39.1454C76.625 38.8492 76.1105 38.6379 75.5348 38.557C75.4908 38.5507 75.4469 38.5479 75.4028 38.5434V35.9526H74.3557V38.5805C73.551 38.7197 72.7984 39.1101 72.2456 39.7227C71.8574 40.155 71.5781 40.6213 71.2984 41.0325L71.2983 41.0328C71.0191 41.4462 70.7425 41.8027 70.3934 42.0602C70.1918 42.2098 69.9584 42.3426 69.7202 42.4345C69.5094 42.5161 69.2949 42.5635 69.0913 42.5734H67.7512V43.5914H68.8757C68.9208 43.5939 68.9671 43.5958 69.0146 43.5958C69.0635 43.5958 69.1115 43.594 69.1588 43.5914H69.539L71.6133 50.7728H70.8216V51.7905L70.9757 51.7908C71.3224 51.7917 71.5946 51.8761 71.8347 52.0068C72.1905 52.2005 72.4651 52.5156 72.641 52.787L72.6413 52.7873C72.7296 52.9225 72.7941 53.0454 72.8345 53.1312C72.8549 53.1743 72.8694 53.208 72.8782 53.2293L72.8778 53.2282L72.8872 53.2517L72.8882 53.2544L72.8889 53.2565L73.0108 53.5938H74.676L74.6761 61.3154L68.4826 57.0709V48.9174L62.0028 52.7005V51.7785V51.2822V45.6245H60.9558V51.2822V51.7785V53.3119L54.4773 57.0943V81.1639H55.5243V57.6705L60.9558 54.4994V81.1639H67.9589H68.4826V62.1862H68.4818V61.1161H68.4826V60.965V58.3164L74.6762 62.5608L74.6763 81.1639H82.3227V66.5562L75.7232 62.033Z" fill="#DDB9A2"/>
                        </g>
                        <mask id="mask1_410_1443" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="137" height="133">
                          <path d="M0 1.52588e-05H136.8V133H0V1.52588e-05Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask1_410_1443)">
                          <path d="M42.4814 90.1728L41.7584 88.2291C41.5867 87.7597 41.4473 87.2976 41.3163 86.881H41.2928C41.1683 87.3026 41.0456 87.7696 40.8907 88.2208L40.1895 90.1728H42.4814ZM39.9224 91.2735L39.1626 93.5103H37.571L40.3773 85.7975H42.3489L45.2388 93.5103H43.5736L42.7568 91.2735H39.9224Z" fill="#DDB9A2"/>
                        </g>
                        <mask id="mask2_410_1443" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="137" height="133">
                          <path d="M0 1.52588e-05H136.8V133H0V1.52588e-05Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask2_410_1443)">
                          <path d="M50.6377 85.7975H52.1523V92.2792H55.7955V93.5103H50.6377V85.7975Z" fill="#DDB9A2"/>
                        </g>
                        <mask id="mask3_410_1443" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="137" height="133">
                          <path d="M0 1.52588e-05H136.8V133H0V1.52588e-05Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask3_410_1443)">
                          <path d="M61.196 85.7975H62.7106V92.2792H66.3538V93.5103H61.196V85.7975Z" fill="#DDB9A2"/>
                        </g>
                        <mask id="mask4_410_1443" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="137" height="133">
                          <path d="M0 1.52588e-05H136.8V133H0V1.52588e-05Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask4_410_1443)">
                          <path d="M73.2682 93.5103H71.7537V85.7975H73.2682V93.5103Z" fill="#DDB9A2"/>
                        </g>
                        <mask id="mask5_410_1443" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="137" height="133">
                          <path d="M0 1.52588e-05H136.8V133H0V1.52588e-05Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask5_410_1443)">
                          <path d="M79.2515 93.5103V85.7975H81.0723L83.3626 89.1138C83.9652 90.0163 84.4494 90.8769 84.8547 91.7458L84.8849 91.7359C84.769 90.7001 84.7573 89.7716 84.7573 88.6597V85.7975H86.1729V93.5103H84.5581L82.2447 90.0807C81.6676 89.1882 81.0824 88.2454 80.6385 87.3504L80.5966 87.3603C80.6554 88.3993 80.6671 89.3926 80.6671 90.5499V93.5103H79.2515Z" fill="#DDB9A2"/>
                        </g>
                        <mask id="mask6_410_1443" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="137" height="133">
                          <path d="M0 1.52588e-05H136.8V133H0V1.52588e-05Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask6_410_1443)">
                          <path d="M96.4719 90.1728L95.7489 88.2291C95.5772 87.7597 95.4378 87.2976 95.3068 86.881H95.2832C95.1588 87.3026 95.036 87.7696 94.8812 88.2208L94.1799 90.1728H96.4719ZM93.9128 91.2735L93.1531 93.5103H91.5615L94.3678 85.7975H96.3394L99.2293 93.5103H97.564L96.7473 91.2735H93.9128Z" fill="#DDB9A2"/>
                        </g>
                      </svg>
                    </div>
                    <div className="flex-1 transition-all duration-700 ease-in-out transform translate-x-0 opacity-100">
                      <p className="text-[#DDB9A2] text-sm font-normal leading-6 text-justify">
                        "Welcome to ALLINA, a trusted name in the streetlighting industry and a company with a vision to expand into multiple sectors. With a strong foundation in engineering, procurement, and construction (EPC) services, we specialize in delivering cutting-edge streetlighting solutions, including smart lighting technologies, GIS mapping, and IoT-enabled systems. Our commitment to quality, innovation, and sustainability drives us to create infrastructure that powers progress and enhances lives."
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className={`transition-all duration-700 ease-in-out absolute top-0 left-0 w-full h-full ${
              isExpanded ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
            }`}>
              {!isExpanded && (
                <div className="flex items-center justify-center h-full">
                  <svg 
                    width="137" 
                    height="133" 
                    viewBox="0 0 137 133" 
                    fill="none"
                    className="transition-transform duration-700"
                    style={{ width: '136.8px', height: '133px', flexShrink: 0 }}
                  >
                    <mask id="mask0_410_1443" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="137" height="133">
                      <path d="M0 1.52588e-05H136.8V133H0V1.52588e-05Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_410_1443)">
                      <path d="M77.2336 50.7728H75.5345V43.5914H79.388L77.2336 50.7728ZM76.8441 51.7908C76.7062 51.9452 76.5897 52.0996 76.4968 52.2412L76.4968 52.2414C76.4167 52.3642 76.352 52.4777 76.3009 52.5758H73.721C73.6194 52.381 73.464 52.1239 73.2409 51.8597L73.2407 51.8594C73.2213 51.8366 73.199 51.8136 73.1785 51.7908H76.8441ZM72.1731 41.5923C72.4704 41.1514 72.7301 40.7283 73.0331 40.3937L73.0334 40.3933C73.5207 39.8503 74.2577 39.5376 75.0057 39.5379H75.0058H75.0075C75.1333 39.538 75.2593 39.5467 75.3844 39.5644C75.794 39.6229 76.1485 39.7674 76.4735 39.9841C76.797 40.2004 77.0883 40.4913 77.3447 40.836C77.6066 41.1867 77.8594 41.5984 78.1663 42.0024C78.315 42.1976 78.4803 42.3909 78.6663 42.5734H71.3759C71.6991 42.2646 71.9491 41.922 72.1729 41.5926L72.1731 41.5923ZM72.701 50.7728L70.6266 43.5914H74.4875V50.7728H72.701ZM81.2757 80.1459H75.7234L75.7232 63.2785L81.2757 67.084V80.1459ZM67.4355 64.2406V80.146H62.0027L62.0028 53.888L67.4354 50.7162L67.4355 56.1865L67.4348 56.1858V60.9662V62.3361V64.2406H67.4355ZM75.7232 62.033L75.7232 53.5938H77.011L77.1357 53.2488C77.1385 53.2413 77.1492 53.2147 77.1663 53.1767C77.2267 53.042 77.3721 52.7566 77.6039 52.4896L77.6042 52.4893C77.7641 52.3039 77.9633 52.1273 78.1985 52.0006C78.436 51.8735 78.7048 51.7917 79.0462 51.7908L79.2003 51.7906V50.7728H78.3243L80.4787 43.5914H80.911C80.9371 43.5924 80.9704 43.5956 81.0116 43.5957C81.0572 43.5957 81.1016 43.5938 81.145 43.5914H82.0073V42.5734H80.9219C80.7684 42.5644 80.6077 42.5344 80.4478 42.4839C80.2553 42.4233 80.0633 42.3354 79.8897 42.2334C79.5519 42.0358 79.2748 41.7477 79.008 41.3969C78.7412 41.0477 78.4904 40.6398 78.1931 40.2393C77.8806 39.8196 77.5093 39.4414 77.0669 39.1454C76.625 38.8492 76.1105 38.6379 75.5348 38.557C75.4908 38.5507 75.4469 38.5479 75.4028 38.5434V35.9526H74.3557V38.5805C73.551 38.7197 72.7984 39.1101 72.2456 39.7227C71.8574 40.155 71.5781 40.6213 71.2984 41.0325L71.2983 41.0328C71.0191 41.4462 70.7425 41.8027 70.3934 42.0602C70.1918 42.2098 69.9584 42.3426 69.7202 42.4345C69.5094 42.5161 69.2949 42.5635 69.0913 42.5734H67.7512V43.5914H68.8757C68.9208 43.5939 68.9671 43.5958 69.0146 43.5958C69.0635 43.5958 69.1115 43.594 69.1588 43.5914H69.539L71.6133 50.7728H70.8216V51.7905L70.9757 51.7908C71.3224 51.7917 71.5946 51.8761 71.8347 52.0068C72.1905 52.2005 72.4651 52.5156 72.641 52.787L72.6413 52.7873C72.7296 52.9225 72.7941 53.0454 72.8345 53.1312C72.8549 53.1743 72.8694 53.208 72.8782 53.2293L72.8778 53.2282L72.8872 53.2517L72.8882 53.2544L72.8889 53.2565L73.0108 53.5938H74.676L74.6761 61.3154L68.4826 57.0709V48.9174L62.0028 52.7005V51.7785V51.2822V45.6245H60.9558V51.2822V51.7785V53.3119L54.4773 57.0943V81.1639H55.5243V57.6705L60.9558 54.4994V81.1639H67.9589H68.4826V62.1862H68.4818V61.1161H68.4826V60.965V58.3164L74.6762 62.5608L74.6763 81.1639H82.3227V66.5562L75.7232 62.033Z" fill="#DDB9A2"/>
                    </g>
                    <mask id="mask1_410_1443" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="137" height="133">
                      <path d="M0 1.52588e-05H136.8V133H0V1.52588e-05Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask1_410_1443)">
                      <path d="M42.4814 90.1728L41.7584 88.2291C41.5867 87.7597 41.4473 87.2976 41.3163 86.881H41.2928C41.1683 87.3026 41.0456 87.7696 40.8907 88.2208L40.1895 90.1728H42.4814ZM39.9224 91.2735L39.1626 93.5103H37.571L40.3773 85.7975H42.3489L45.2388 93.5103H43.5736L42.7568 91.2735H39.9224Z" fill="#DDB9A2"/>
                    </g>
                    <mask id="mask2_410_1443" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="137" height="133">
                      <path d="M0 1.52588e-05H136.8V133H0V1.52588e-05Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask2_410_1443)">
                      <path d="M50.6377 85.7975H52.1523V92.2792H55.7955V93.5103H50.6377V85.7975Z" fill="#DDB9A2"/>
                    </g>
                    <mask id="mask3_410_1443" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="137" height="133">
                      <path d="M0 1.52588e-05H136.8V133H0V1.52588e-05Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask3_410_1443)">
                      <path d="M61.196 85.7975H62.7106V92.2792H66.3538V93.5103H61.196V85.7975Z" fill="#DDB9A2"/>
                    </g>
                    <mask id="mask4_410_1443" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="137" height="133">
                      <path d="M0 1.52588e-05H136.8V133H0V1.52588e-05Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask4_410_1443)">
                      <path d="M73.2682 93.5103H71.7537V85.7975H73.2682V93.5103Z" fill="#DDB9A2"/>
                    </g>
                    <mask id="mask5_410_1443" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="137" height="133">
                      <path d="M0 1.52588e-05H136.8V133H0V1.52588e-05Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask5_410_1443)">
                      <path d="M79.2515 93.5103V85.7975H81.0723L83.3626 89.1138C83.9652 90.0163 84.4494 90.8769 84.8547 91.7458L84.8849 91.7359C84.769 90.7001 84.7573 89.7716 84.7573 88.6597V85.7975H86.1729V93.5103H84.5581L82.2447 90.0807C81.6676 89.1882 81.0824 88.2454 80.6385 87.3504L80.5966 87.3603C80.6554 88.3993 80.6671 89.3926 80.6671 90.5499V93.5103H79.2515Z" fill="#DDB9A2"/>
                    </g>
                    <mask id="mask6_410_1443" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="137" height="133">
                      <path d="M0 1.52588e-05H136.8V133H0V1.52588e-05Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask6_410_1443)">
                      <path d="M96.4719 90.1728L95.7489 88.2291C95.5772 87.7597 95.4378 87.2976 95.3068 86.881H95.2832C95.1588 87.3026 95.036 87.7696 94.8812 88.2208L94.1799 90.1728H96.4719ZM93.9128 91.2735L93.1531 93.5103H91.5615L94.3678 85.7975H96.3394L99.2293 93.5103H97.564L96.7473 91.2735H93.9128Z" fill="#DDB9A2"/>
                    </g>
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
