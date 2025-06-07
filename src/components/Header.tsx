import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <header className="relative w-full h-[133px]">
      <nav className="fixed w-full h-[133px] top-0 left-0 bg-[#E7DED7] dark:bg-black transition-colors duration-700 z-50">
        <div className="max-w-[1440px] mx-auto relative h-full px-8">
          {/* Logo Section */}
          <div className="absolute w-[137px] h-[133px] top-0 left-0">
            <div className="relative h-[118px] top-[15px]">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="137" 
                height="118" 
                viewBox="0 0 137 118" 
                fill="none"
                className="absolute w-[137px] h-[118px] top-0 left-0"
              >
                <mask id="mask0_410_1068" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="-15" width="137" height="133">
                  <path d="M0 -15H136.8V118H0V-15Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_410_1068)">
                  <path d="M77.2336 35.7728H75.5345V28.5914H79.388L77.2336 35.7728ZM76.8441 36.7908C76.7062 36.9452 76.5897 37.0996 76.4968 37.2412L76.4968 37.2414C76.4167 37.3642 76.352 37.4777 76.3009 37.5758H73.721C73.6194 37.381 73.464 37.1239 73.2409 36.8597L73.2407 36.8594C73.2213 36.8366 73.199 36.8136 73.1785 36.7908H76.8441ZM72.1731 26.5923C72.4704 26.1514 72.7301 25.7283 73.0331 25.3937L73.0334 25.3933C73.5207 24.8503 74.2577 24.5376 75.0057 24.5379H75.0058H75.0075C75.1333 24.538 75.2593 24.5467 75.3844 24.5644C75.794 24.6229 76.1485 24.7674 76.4735 24.9841C76.797 25.2004 77.0883 25.4913 77.3447 25.836C77.6066 26.1867 77.8594 26.5984 78.1663 27.0024C78.315 27.1976 78.4803 27.3909 78.6663 27.5734H71.3759C71.6991 27.2646 71.9491 26.922 72.1729 26.5926L72.1731 26.5923ZM72.701 35.7728L70.6266 28.5914H74.4875V35.7728H72.701ZM81.2757 65.1459H75.7234L75.7232 48.2785L81.2757 52.084V65.1459ZM67.4355 49.2406V65.146H62.0027L62.0028 38.888L67.4354 35.7162L67.4355 41.1865L67.4348 41.1858V45.9662V47.3361V49.2406H67.4355ZM75.7232 47.033L75.7232 38.5938H77.011L77.1357 38.2488C77.1385 38.2413 77.1492 38.2147 77.1663 38.1767C77.2267 38.042 77.3721 37.7566 77.6039 37.4896L77.6042 37.4893C77.7641 37.3039 77.9633 37.1273 78.1985 37.0006C78.436 36.8735 78.7048 36.7917 79.0462 36.7908L79.2003 36.7906V35.7728H78.3243L80.4787 28.5914H80.911C80.9371 28.5924 80.9704 28.5956 81.0116 28.5957C81.0572 28.5957 81.1016 28.5938 81.145 28.5914H82.0073V27.5734H80.9219C80.7684 27.5644 80.6077 27.5344 80.4478 27.4839C80.2553 27.4233 80.0633 27.3354 79.8897 27.2334C79.5519 27.0358 79.2748 26.7477 79.008 26.3969C78.7412 26.0477 78.4904 25.6398 78.1931 25.2393C77.8806 24.8196 77.5093 24.4414 77.0669 24.1454C76.625 23.8492 76.1105 23.6379 75.5348 23.557C75.4908 23.5507 75.4469 23.5479 75.4028 23.5434V20.9526H74.3557V23.5805C73.551 23.7197 72.7984 24.1101 72.2456 24.7227C71.8574 25.155 71.5781 25.6213 71.2984 26.0325L71.2983 26.0328C71.0191 26.4462 70.7425 26.8027 70.3934 27.0602C70.1918 27.2098 69.9584 27.3426 69.7202 27.4345C69.5094 27.5161 69.2949 27.5635 69.0913 27.5734H67.7512V28.5914H68.8757C68.9208 28.5939 68.9671 28.5958 69.0146 28.5958C69.0635 28.5958 69.1115 28.594 69.1588 28.5914H69.539L71.6133 35.7728H70.8216V36.7905L70.9757 36.7908C71.3224 36.7917 71.5946 36.8761 71.8347 37.0068C72.1905 37.2005 72.4651 37.5156 72.641 37.787L72.6413 37.7873C72.7296 37.9225 72.7941 38.0454 72.8345 38.1312C72.8549 38.1743 72.8694 38.208 72.8782 38.2293L72.8778 38.2282L72.8872 38.2517L72.8882 38.2544L72.8889 38.2565L73.0108 38.5938H74.676L74.6761 46.3154L68.4826 42.0709V33.9174L62.0028 37.7005V36.7785V36.2822V30.6245H60.9558V36.2822V36.7785V38.3119L54.4773 42.0943V66.1639H55.5243V42.6705L60.9558 39.4994V66.1639H67.9589H68.4826V47.1862H68.4818V46.1161H68.4826V45.965V43.3164L74.6762 47.5608L74.6763 66.1639H82.3227V51.5562L75.7232 47.033Z" className="fill-[#06153A] dark:fill-[#E7DED7] transition-colors duration-700"/>
                </g>
                <mask id="mask1_410_1068" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="-15" width="137" height="133">
                  <path d="M0 -15H136.8V118H0V-15Z" fill="white"/>
                </mask>
                <g mask="url(#mask1_410_1068)">
                  <path d="M42.4813 75.1727L41.7583 73.2291C41.5866 72.7597 41.4472 72.2976 41.3162 71.881H41.2926C41.1682 72.3026 41.0454 72.7696 40.8906 73.2208L40.1893 75.1727H42.4813ZM39.9222 76.2735L39.1625 78.5102H37.5709L40.3772 70.7974H42.3488L45.2387 78.5102H43.5734L42.7567 76.2735H39.9222Z" className="fill-[#06153A] dark:fill-[#E7DED7] transition-colors duration-700"/>
                </g>
                <mask id="mask2_410_1068" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="-15" width="137" height="133">
                  <path d="M0 -15H136.8V118H0V-15Z" fill="white"/>
                </mask>
                <g mask="url(#mask2_410_1068)">
                  <path d="M50.6378 70.7975H52.1524V77.2792H55.7956V78.5102H50.6378V70.7975Z" className="fill-[#06153A] dark:fill-[#E7DED7] transition-colors duration-700"/>
                </g>
                <mask id="mask3_410_1068" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="-15" width="137" height="133">
                  <path d="M0 -15H136.8V118H0V-15Z" fill="white"/>
                </mask>
                <g mask="url(#mask3_410_1068)">
                  <path d="M61.1959 70.7975H62.7105V77.2792H66.3537V78.5102H61.1959V70.7975Z" className="fill-[#06153A] dark:fill-[#E7DED7] transition-colors duration-700"/>
                </g>
                <mask id="mask4_410_1068" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="-15" width="137" height="133">
                  <path d="M0 -15H136.8V118H0V-15Z" fill="white"/>
                </mask>
                <g mask="url(#mask4_410_1068)">
                  <path d="M73.2682 78.5102H71.7537V70.7975H73.2682V78.5102Z" className="fill-[#06153A] dark:fill-[#E7DED7] transition-colors duration-700"/>
                </g>
                <mask id="mask5_410_1068" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="-15" width="137" height="133">
                  <path d="M0 -15H136.8V118H0V-15Z" fill="white"/>
                </mask>
                <g mask="url(#mask5_410_1068)">
                  <path d="M79.2515 78.5102V70.7975H81.0723L83.3626 74.1138C83.9652 75.0163 84.4494 75.8768 84.8547 76.7458L84.8849 76.7359C84.769 75.7001 84.7573 74.7716 84.7573 73.6596V70.7975H86.1729V78.5102H84.5581L82.2447 75.0807C81.6676 74.1881 81.0824 73.2454 80.6385 72.3504L80.5966 72.3602C80.6554 73.3992 80.6671 74.3925 80.6671 75.5498V78.5102H79.2515Z" className="fill-[#06153A] dark:fill-[#E7DED7] transition-colors duration-700"/>
                </g>
                <mask id="mask6_410_1068" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="-15" width="137" height="133">
                  <path d="M0 -15H136.8V118H0V-15Z" fill="white"/>
                </mask>
                <g mask="url(#mask6_410_1068)">
                  <path d="M96.4718 75.1727L95.7488 73.2291C95.5771 72.7597 95.4377 72.2976 95.3066 71.881H95.283C95.1587 72.3026 95.0359 72.7696 94.8811 73.2208L94.1798 75.1727H96.4718ZM93.9127 76.2735L93.153 78.5102H91.5614L94.3676 70.7974H96.3393L99.2292 78.5102H97.5639L96.7471 76.2735H93.9127Z" className="fill-[#06153A] dark:fill-[#E7DED7] transition-colors duration-700"/>
                </g>
              </svg>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="absolute w-[573px] h-16 top-[35px] left-[138px] hidden md:block">
            {/* Underline for hover effect */}
            <div className="absolute w-[60px] h-[3px] top-[54px] left-[81px] bg-[#06153A] dark:bg-[#E7DED7] rounded-[3px] transition-colors duration-700"></div>
            
            <ul className="flex w-[573px] items-start gap-16 p-2.5 absolute top-0 left-0 list-none">
              <li className="inline-flex items-center justify-center gap-2.5 p-2.5 relative">
                <a 
                  href="#projects" 
                  className="relative w-fit -mt-[1px] text-[#06153A] dark:text-[#E7DED7] text-center text-xl font-normal tracking-[3.2px] whitespace-nowrap transition-colors duration-700"
                  style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}
                >
                  PROJECTS
                </a>
              </li>
              <li className="inline-flex items-center justify-center gap-2.5 p-2.5 relative">
                <button 
                  className="relative w-fit -mt-[1px] text-[#06153A] dark:text-[#E7DED7] text-center text-xl font-normal tracking-[3.2px] whitespace-nowrap bg-none border-none cursor-pointer p-0 transition-colors duration-700"
                  style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}
                  aria-haspopup="true" 
                  aria-expanded="false"
                >
                  SERVICES +
                </button>
              </li>
              <li className="inline-flex items-center justify-center gap-2.5 p-2.5 relative">
                <Link 
                  to="/about"
                  className="relative w-fit -mt-[1px] text-[#06153A] dark:text-[#E7DED7] text-center text-xl font-normal tracking-[3.2px] whitespace-nowrap bg-none border-none cursor-pointer p-0 transition-colors duration-700"
                  style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}
                >
                  ABOUT +
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex w-[242px] items-center gap-16 p-2.5 absolute top-[35px] right-0 hidden md:flex">
            <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative">
              <a 
                href="#contact" 
                className="relative w-fit -mt-[1px] text-[#06153A] dark:text-[#E7DED7] text-center text-xl font-normal tracking-[3.2px] whitespace-nowrap transition-colors duration-700"
                style={{ fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif' }}
              >
                CONTACT
              </a>
            </div>
            <div className="relative w-[22px] h-[22px]">
              <div className="relative w-[23px] h-[23px]">
                <div className="absolute w-5 h-5 top-0 left-0 rounded-[9.93px] border-[1.74px] border-[#06153A] dark:border-[#E7DED7] rotate-180 transition-colors duration-700"></div>
                <svg 
                  className="absolute w-[7px] h-[7px] top-4 left-4" 
                  viewBox="0 0 7 7" 
                  fill="none"
                >
                  <path d="M1 1L6 6M6 1L1 6" stroke="#06153A" className="stroke-[#06153A] dark:stroke-[#E7DED7] transition-colors duration-700" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute top-[50px] right-4 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-[#06153A] dark:bg-[#E7DED7] transition-all duration-700 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[#06153A] dark:bg-[#E7DED7] mt-1 transition-all duration-700 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[#06153A] dark:bg-[#E7DED7] mt-1 transition-all duration-700 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-[#E7DED7] dark:bg-black border-t border-[#06153A] dark:border-[#E7DED7] z-40 transition-colors duration-700">
              <nav className="flex flex-col p-4 space-y-4">
                <button className="text-[#06153A] dark:text-[#E7DED7] text-lg font-normal tracking-[2px] text-left hover:opacity-80 transition-all duration-700">
                  PROJECTS
                </button>
                <button className="text-[#06153A] dark:text-[#E7DED7] text-lg font-normal tracking-[2px] text-left hover:opacity-80 transition-all duration-700">
                  SERVICES
                </button>
                <Link 
                  to="/about"
                  className="text-[#06153A] dark:text-[#E7DED7] text-lg font-normal tracking-[2px] text-left hover:opacity-80 transition-all duration-700"
                >
                  ABOUT
                </Link>
                <button className="text-[#06153A] dark:text-[#E7DED7] text-lg font-normal tracking-[2px] text-left hover:opacity-80 transition-all duration-700">
                  CONTACT
                </button>
              </nav>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
