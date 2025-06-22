import React from 'react';

export const ContactInfo: React.FC = () => {
  return (
    <section className="w-full bg-[#E7DED7] py-12 sm:py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        {/* General Inquiries Section */}
        <div className="mb-16 sm:mb-20">
          <h2 
            className="text-[#06153A] mb-4"
            style={{
              width: '300px',
              height: '38px',
              position: 'relative',
              top: '-100px',
 
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
              fontWeight: 600,
              fontSize: '32px',
              lineHeight: '100%',
              letterSpacing: '0.02em'
            }}
          >
            General Inquiries
          </h2>
          <p 
            className="text-[#06153A] mb-8"
            style={{
              width: '1360px',
              height: '70px',
              position: 'relative',
              top: '-100px',
              
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '35px',
              letterSpacing: '0.01em'
            }}
          >
            For direct inquiries, feel free to contact us via phone or email or visit us at any of our office locations. Our team is available to assist you during business hours.
          </p>

        {/* Contact Cards */}
        <div style={{
          width: '1361px',
          height: '200px',
          display: 'flex',
          flexDirection: 'row',
          position: 'relative',
          marginTop: '-100px',
          marginBottom: '48px',
          maxWidth: '100%'
        }}>
          {/* Call Us Directly */}
          <div style={{
            width: '454px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}>
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '50%',
              transform: 'translateX(-50%)'
            }}>
              <div className="w-20 h-20 bg-[#DDB9A2] rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-[#06153A]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
            </div>
            <div style={{
              position: 'absolute',
              top: '120px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100%'
            }}>
              <h3 className="text-[#06153A] text-xl font-semibold mb-2">
                Call Us Directly
              </h3>
              <div className="text-base" style={{ color: '#7B7B7B' }}>
                <p>+91-9643437391</p>
              </div>
            </div>
          </div>

          {/* Email Support */}
          <div style={{
            width: '454px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            marginLeft: '-1px'
          }}>
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '50%',
              transform: 'translateX(-50%)'
            }}>
              <div className="w-20 h-20 bg-[#DDB9A2] rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-[#06153A]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
            </div>
            <div style={{
              position: 'absolute',
              top: '120px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100%'
            }}>
              <h3 className="text-[#06153A] text-xl font-semibold mb-2">
                Email Support
              </h3>
              <div className="text-base" style={{ color: '#7B7B7B' }}>
                <p>
                  <a href="mailto:info@allina.co.in" className="hover:underline" style={{ color: '#7B7B7B' }}>
                    info@allina.co.in
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Visit Our Office */}
          <div style={{
            width: '454px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}>
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '50%',
              transform: 'translateX(-50%)'
            }}>
              <div className="w-20 h-20 bg-[#DDB9A2] rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-[#06153A]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
            </div>
            <div style={{
              position: 'absolute',
              top: '120px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100%'
            }}>
              <h3 className="text-[#06153A] text-xl font-semibold mb-2">
                Visit Our Office
              </h3>
              <div className="text-base space-y-1" style={{ color: '#7B7B7B' }}>
                <p>Joda Section 36, Faridabad,</p>
                <p>Haryana - 121003</p>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Why Contact ALLINA Section */}
        <div>
          <h2 className="text-[#06153A] mb-12"
              style={{
                width: '600px',
                height: '54px',
                position: 'relative',
                
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                fontWeight: 550,
                fontSize: '45px',
                lineHeight: '100%',
                letterSpacing: '0.02em',
                color: '#06153A'
              }}>
            Why Contact ALLINA?
          </h2>

          {/* Cards Container */}
          <div style={{
            width: '1361px',
            height: '393px',
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
            marginBottom: '48px',
            maxWidth: '100%'
          }}>
            {/* Card 1 - Prompt Responses */}
            <div style={{
              height: '393px',
              width: '454px',
              border: '1px solid #d5d5d5',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#fff',
              boxSizing: 'border-box',
              textAlign: 'center'
            }}>
              <div style={{
                position: 'absolute',
                top: '50px',
                left: '50%',
                transform: 'translateX(-50%)'
              }}>
                <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.9674 56.8762L49.1393 37.5012H36.6393L38.9049 19.7668L24.4518 40.6262H35.3111L32.9674 56.8762ZM31.7291 43.7512H22.4025C21.5531 43.7512 20.939 43.3817 20.5603 42.6426C20.1817 41.9035 20.2369 41.1934 20.726 40.5121L38.3158 15.0309C38.6366 14.5825 39.0333 14.2851 39.5057 14.1387C39.9786 13.9924 40.4775 14.0155 41.0025 14.2082C41.527 14.4004 41.9075 14.7168 42.1439 15.1575C42.3804 15.5981 42.4666 16.0809 42.4025 16.6059L40.2033 34.3762H51.4111C52.2846 34.3762 52.9046 34.7749 53.2713 35.5723C53.6374 36.3697 53.5382 37.1088 52.9736 37.7895L33.4002 61.2395C33.0674 61.6358 32.6648 61.8882 32.1924 61.9965C31.7195 62.1049 31.2525 62.0567 30.7916 61.852C30.3312 61.6478 29.9796 61.3384 29.7369 60.9239C29.4947 60.5093 29.4057 60.0395 29.4697 59.5145L31.7291 43.7512Z" fill="#06153A"/>
                  </svg>
              </div>
              
              <div style={{
                position: 'absolute',
                top: '170px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                fontSize: '25px',
                fontWeight: 400,
                color: '#000',
                letterSpacing: '0.25px',
                lineHeight: '30px',
                whiteSpace: 'nowrap'
              }}>
                  Prompt Responses
              </div>
              
              <p style={{
                position: 'absolute',
                top: '225px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '370px',
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                fontSize: '19px',
                fontWeight: 400,
                color: '#7B7B7B',
                letterSpacing: '0.19px',
                lineHeight: '30px',
                textAlign: 'center'
              }}>
                We're committed to addressing your inquiries quickly and efficiently with dedicated support.
              </p>
            </div>

            {/* Card 2 - Dedicated Support (Dark) */}
            <div style={{
              height: '393px',
              width: '454px',
              border: '1px solid #d5d5d5',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(6, 21, 58, 1)',
              boxSizing: 'border-box',
              marginLeft: '-1px',
              marginRight: '-1px',
              textAlign: 'center'
            }}>
              <div style={{
                position: 'absolute',
                top: '50px',
                left: '50%',
                transform: 'translateX(-50%)'
              }}>
                <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.9674 56.8762L49.1393 37.5012H36.6393L38.9049 19.7668L24.4518 40.6262H35.3111L32.9674 56.8762ZM31.7291 43.7512H22.4025C21.5531 43.7512 20.939 43.3817 20.5603 42.6426C20.1817 41.9035 20.2369 41.1934 20.726 40.5121L38.3158 15.0309C38.6366 14.5825 39.0333 14.2851 39.5057 14.1387C39.9786 13.9924 40.4775 14.0155 41.0025 14.2082C41.527 14.4004 41.9075 14.7168 42.1439 15.1575C42.3804 15.5981 42.4666 16.0809 42.4025 16.6059L40.2033 34.3762H51.4111C52.2846 34.3762 52.9046 34.7749 53.2713 35.5723C53.6374 36.3697 53.5382 37.1088 52.9736 37.7895L33.4002 61.2395C33.0674 61.6358 32.6648 61.8882 32.1924 61.9965C31.7195 62.1049 31.2525 62.0567 30.7916 61.852C30.3312 61.6478 29.9796 61.3384 29.7369 60.9239C29.4947 60.5093 29.4057 60.0395 29.4697 59.5145L31.7291 43.7512Z" fill="#FFFFFF"/>
                  </svg>
              </div>
              
              <div style={{
                position: 'absolute',
                top: '170px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                fontSize: '25px',
                fontWeight: 400,
                color: '#fff',
                letterSpacing: '0.25px',
                lineHeight: '30px',
                whiteSpace: 'nowrap'
              }}>
                  Dedicated Support
              </div>
              
              <p style={{
                position: 'absolute',
                top: '225px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '370px',
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                fontSize: '19px',
                fontWeight: 400,
                color: '#FFFFFF',
                letterSpacing: '0.19px',
                lineHeight: '30px',
                textAlign: 'center'
              }}>
                Our team is here to assist you with any questions, comments, or feedback you may have.
              </p>
            </div>

            {/* Card 3 - Multiple Channels */}
            <div style={{
              height: '393px',
              width: '454px',
              border: '1px solid #d5d5d5',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#fff',
              boxSizing: 'border-box',
              textAlign: 'center'
            }}>
              <div style={{
                position: 'absolute',
                top: '45px',
                left: '50%',
                transform: 'translateX(-50%)'
              }}>
                <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.1373 68.3168C26.7415 68.3168 24.6433 67.591 22.8428 66.1394C21.0417 64.6883 19.8006 62.8281 19.1193 60.5588C18.4865 61.6132 17.6123 62.42 16.4967 62.9793C15.3805 63.5385 14.2055 63.8182 12.9717 63.8182C10.7962 63.8182 8.95033 63.0564 7.43418 61.5329C5.91751 60.0094 5.15918 58.1651 5.15918 55.9999C5.15918 54.0793 5.82819 52.3303 7.16621 50.7531C8.50423 49.1754 10.193 48.3764 12.2326 48.356C11.1826 47.3939 10.3521 46.2362 9.74121 44.8832C9.13027 43.5301 8.8248 42.1218 8.8248 40.6582C8.8248 39.291 9.11934 37.9739 9.7084 36.7069C10.2975 35.4398 11.1407 34.3494 12.2381 33.4357C12.535 33.0948 12.8868 32.9012 13.2936 32.8548C13.6998 32.8089 14.0732 32.9343 14.4139 33.2309C14.7545 33.5274 14.941 33.8793 14.9732 34.2863C15.005 34.6934 14.8727 35.0674 14.5764 35.4082C13.7269 36.1056 13.0899 36.9135 12.6654 37.8319C12.2404 38.7498 12.0279 39.7179 12.0279 40.7364C12.0279 43.8757 13.1568 45.9264 15.4146 46.8885C17.6725 47.8507 20.0433 48.5744 22.5271 49.0597C22.7433 49.1238 22.9235 49.21 23.0678 49.3185C23.212 49.4269 23.3482 49.5632 23.4764 49.7274C23.6045 49.8915 23.6615 50.069 23.6475 50.2598C23.6334 50.45 23.5883 50.6536 23.5123 50.8704C22.9514 52.3975 22.5248 53.7066 22.2326 54.7975C21.9399 55.8879 21.7936 56.8962 21.7936 57.8224C21.7936 59.7868 22.5037 61.4959 23.924 62.9496C25.3443 64.4027 27.062 65.1293 29.0771 65.1293C31.1048 65.1293 32.7975 64.4306 34.1553 63.0332C35.5136 61.6358 36.6464 59.926 37.5537 57.9037C38.4615 55.8808 39.1829 53.7407 39.7178 51.4833C40.2527 49.2259 40.6962 47.2372 41.0482 45.5172C41.1649 44.9924 41.4074 44.5824 41.7756 44.2874C42.1443 43.9929 42.5451 43.9158 42.9779 44.056C43.4623 44.1962 43.8058 44.487 44.0084 44.9285C44.2105 45.3695 44.2475 45.8524 44.1193 46.3772C43.6907 48.4944 43.1618 50.8279 42.5326 53.3777C41.904 55.928 41.0378 58.3097 39.9342 60.5228C38.83 62.7359 37.4175 64.588 35.6967 66.0792C33.9764 67.5709 31.7899 68.3168 29.1373 68.3168ZM46.6436 68.377C46.1868 68.3369 45.7993 68.1675 45.4811 67.8688C45.1623 67.5702 45.023 67.1983 45.0631 66.7531C45.1032 66.308 45.2824 65.9262 45.6006 65.6078C45.9193 65.2888 46.3011 65.1494 46.7459 65.1895C48.773 65.1895 50.5066 64.4627 51.9467 63.009C53.3873 61.5558 54.1076 59.821 54.1076 57.8044C54.1076 56.838 53.9482 55.8105 53.6295 54.7216C53.3113 53.6334 52.8657 52.2933 52.2928 50.7015C52.2287 50.5373 52.1967 50.376 52.1967 50.2176C52.1967 50.0591 52.2607 49.9038 52.3889 49.7516C52.517 49.5989 52.6412 49.4816 52.7615 49.3998C52.8818 49.3174 53.03 49.2442 53.2061 49.1801C55.742 48.6948 58.1639 47.9542 60.4717 46.9581C62.7795 45.9616 63.9334 43.8817 63.9334 40.7184C63.9334 38.1926 63.0449 36.3201 61.2678 35.101C59.4912 33.8824 57.491 33.2731 55.267 33.2731C53.3644 33.2731 51.1649 33.5756 48.6686 34.1808C46.1727 34.7864 43.3282 35.6045 40.135 36.6349C39.6105 36.7751 39.1217 36.7762 38.6686 36.6381C38.216 36.4994 37.9196 36.1877 37.7795 35.703C37.6394 35.2177 37.7196 34.7747 38.0201 34.3739C38.3201 33.9725 38.7126 33.7018 39.1975 33.5616C42.3584 32.5593 45.217 31.7193 47.7732 31.0418C50.3295 30.3642 52.7133 30.0254 54.9248 30.0254C58.0779 30.0254 60.8883 30.9537 63.3561 32.8102C65.8243 34.6663 67.0584 37.3023 67.0584 40.7184C67.0584 42.182 66.7628 43.5601 66.1717 44.8527C65.5811 46.1458 64.7607 47.3136 63.7107 48.356C65.7503 48.4165 67.4391 49.2155 68.7771 50.7531C70.1152 52.2907 70.7842 54.0396 70.7842 55.9999C70.7842 58.1249 70.0258 59.9594 68.5092 61.5032C66.993 63.0465 65.1472 63.8182 62.9717 63.8182C61.7378 63.8182 60.5628 63.5385 59.4467 62.9793C58.3311 62.42 57.4568 61.6132 56.824 60.5588C56.1428 62.8161 54.8847 64.6805 53.0498 66.1519C51.2149 67.6233 49.0795 68.365 46.6436 68.377ZM30.442 46.3772C26.6316 42.9294 23.5485 39.8102 21.1928 37.0196C18.837 34.229 17.6592 31.1939 17.6592 27.9145C17.6592 24.9675 18.6678 22.4847 20.685 20.466C22.7021 18.4473 25.1831 17.438 28.1279 17.438C28.6967 17.438 29.2094 17.4711 29.6662 17.5373C30.123 17.6035 30.5558 17.6968 30.9646 17.8172C30.7162 17.3361 30.5199 16.8449 30.3756 16.3435C30.2313 15.842 30.1592 15.3047 30.1592 14.7313C30.1592 12.5667 30.9204 10.7224 32.4428 9.19836C33.9652 7.67484 35.8081 6.91309 37.9717 6.91309C40.1352 6.91309 41.9782 7.67484 43.5006 9.19836C45.023 10.7224 45.7842 12.5667 45.7842 14.7313C45.7842 15.3047 45.712 15.8389 45.5678 16.3341C45.4235 16.8292 45.2271 17.3176 44.9787 17.7992C45.3516 17.6788 45.7844 17.5884 46.2771 17.5279C46.7699 17.468 47.2826 17.438 47.8154 17.438C49.5701 17.438 51.1696 17.8469 52.6139 18.6647C54.0581 19.4825 55.2412 20.563 56.1631 21.9061C56.4511 22.2272 56.5771 22.5941 56.5412 23.0069C56.5053 23.4197 56.3271 23.7705 56.0068 24.0593C55.686 24.348 55.3193 24.4744 54.9068 24.4385C54.4943 24.4025 54.1438 24.224 53.8553 23.9029C53.2141 22.8845 52.3766 22.0737 51.3428 21.4707C50.3094 20.8671 49.1337 20.5653 47.8154 20.5653C45.9482 20.5653 44.4469 21.0443 43.3115 22.0023C42.1756 22.9608 40.7261 24.4525 38.9631 26.4775C38.823 26.6297 38.6568 26.7438 38.4646 26.8199C38.2725 26.896 38.0881 26.934 37.9115 26.934C37.7355 26.934 37.5581 26.896 37.3795 26.8199C37.2014 26.7438 37.0423 26.6297 36.9021 26.4775C35.1271 24.3603 33.6678 22.8456 32.524 21.9335C31.3803 21.0214 29.9149 20.5653 28.1279 20.5653C26.0206 20.5653 24.2699 21.263 22.8756 22.6582C21.4813 24.0535 20.7842 25.8056 20.7842 27.9145C20.7842 30.224 21.8227 32.6547 23.8998 35.2065C25.9774 37.7584 28.8811 40.7445 32.6107 44.1647C33.0196 44.5092 33.2891 44.927 33.4193 45.4179C33.5495 45.9094 33.4425 46.3275 33.0982 46.672C32.7415 47.029 32.3118 47.1583 31.8092 47.0598C31.3061 46.9618 30.8503 46.7343 30.442 46.3772ZM12.9717 60.6909C14.2576 60.6909 15.3605 60.2309 16.2803 59.311C17.1995 58.3905 17.6592 57.2868 17.6592 55.9999C17.6592 54.713 17.1995 53.6094 16.2803 52.6889C15.3605 51.769 14.2576 51.309 12.9717 51.309C11.6857 51.309 10.5829 51.769 9.66309 52.6889C8.74382 53.6094 8.28418 54.713 8.28418 55.9999C8.28418 57.2868 8.74382 58.3905 9.66309 59.311C10.5829 60.2309 11.6857 60.6909 12.9717 60.6909ZM37.9717 19.4223C39.2576 19.4223 40.3605 18.9623 41.2803 18.0424C42.1995 17.1224 42.6592 16.0187 42.6592 14.7313C42.6592 13.4444 42.1995 12.341 41.2803 11.4211C40.3605 10.5006 39.2576 10.0404 37.9717 10.0404C36.6857 10.0404 35.5829 10.5006 34.6631 11.4211C33.7438 12.341 33.2842 13.4444 33.2842 14.7313C33.2842 16.0187 33.7438 17.1224 34.6631 18.0424C35.5829 18.9623 36.6857 19.4223 37.9717 19.4223ZM63.0498 60.6909C64.3357 60.6909 65.4256 60.2309 66.3193 59.311C67.2126 58.3905 67.6592 57.2868 67.6592 55.9999C67.6592 54.713 67.1995 53.5963 66.2803 52.6498C65.3605 51.7038 64.2576 51.2308 62.9717 51.2308C61.6857 51.2308 60.5829 51.6908 59.6631 52.6107C58.7438 53.5312 58.2842 54.6349 58.2842 55.9217C58.2842 57.2086 58.7568 58.3253 59.7021 59.2719C60.648 60.2179 61.7639 60.6909 63.0498 60.6909Z" fill="black"/>
                  </svg>
              </div>
              
              <div style={{
                position: 'absolute',
                top: '170px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                fontSize: '25px',
                fontWeight: 400,
                color: '#000',
                letterSpacing: '0.25px',
                lineHeight: '30px',
                whiteSpace: 'nowrap'
              }}>
                  Multiple Channels
              </div>
              
              <p style={{
                position: 'absolute',
                top: '225px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '370px',
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                fontSize: '19px',
                fontWeight: 400,
                color: '#7B7B7B',
                letterSpacing: '0.19px',
                lineHeight: '30px',
                textAlign: 'center'
              }}>
                Reach out via phone, email, or visit us - whatever works best for you and your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 