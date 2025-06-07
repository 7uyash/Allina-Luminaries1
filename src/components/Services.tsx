
import React from 'react';

export const Services: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="inline-flex p-2.5 justify-center items-center gap-2.5 text-[#06153A] dark:text-white text-center text-xl md:text-2xl font-normal tracking-[4px] mb-16 w-full">
          GLIMPSE TO OUR SERVICES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bcecd24dc0f2db59d5bc48665dae30b00c1e536?placeholderIfAbsent=true"
            alt="Service 1"
            className="w-full h-64 md:h-80 object-cover rounded-[20px] transition-transform duration-300 cursor-pointer hover:scale-105"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/705b571ddf0b00bbe95bbd35ad06fe99444869c7?placeholderIfAbsent=true"
            alt="Service 2"
            className="w-full h-64 object-cover rounded-[20px] transition-transform duration-300 cursor-pointer hover:scale-105"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/126f85fcbdbb859a35317e0be72044b90ebc5601?placeholderIfAbsent=true"
            alt="Service 3"
            className="w-full h-64 object-cover rounded-[20px] transition-transform duration-300 cursor-pointer hover:scale-105"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc0f620d41f12e424538178f7b05db18bc5395b7?placeholderIfAbsent=true"
            alt="Service 4"
            className="w-full h-48 object-cover rounded-[20px] transition-transform duration-300 cursor-pointer hover:scale-105 md:col-span-2"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/36a9f71c893e9fc9b0dee30c1f639521042b9bba?placeholderIfAbsent=true"
            alt="Service 5"
            className="w-full h-48 object-cover rounded-[20px] transition-transform duration-300 cursor-pointer hover:scale-105"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1096c87e583d04f8da84cd522b9793c15513308d?placeholderIfAbsent=true"
            alt="Service 6"
            className="w-full h-48 object-cover rounded-[20px] transition-transform duration-300 cursor-pointer hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};
