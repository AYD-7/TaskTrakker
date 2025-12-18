import React, { useState, useEffect } from 'react';
import { services } from '../../../data/home-services';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleServices, setVisibleServices] = useState(services.slice(0, 3));

  // Handling Next slide
  const handleNext = () => {
    if (currentIndex < services.length - 3) {
      setCurrentIndex((prev) => prev + 1);
      setVisibleServices(services.slice(currentIndex + 1, currentIndex + 4));
    } else {
      setCurrentIndex(0);
      setVisibleServices(services.slice(0, 3)); // corrected here
    }
  };

  // Handling Prev slide
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setVisibleServices(services.slice(currentIndex - 1, currentIndex + 2));
    } else {
      setCurrentIndex(services.length - 3);
      setVisibleServices(services.slice(services.length - 3, services.length));
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000); // set to every 5 seconds
    return () => clearInterval(intervalId); // corrected here
  }, [currentIndex]);

  return (
    <div className='relative -top-[7rem]'>
      <section aria-label="Services" className='absolute top-0'>
        {/* Row */}
        <div className="relative mt-[2%]">
          {/* Carousel Wrapper */}
          <div className="flex items-center ">
            {/* Prev button */}
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
              onClick={handlePrev}
            >
              <ChevronLeft size={24} />
            </button>
            {/* Services Items */}
            <div className="flex items-center justify-center space-x-4 px-6">
              {/* Each Item */}
              {visibleServices.map((item) => (
                <div
                  key={item.id}
                  className="min-h-70 w-1/3 bg-[url('/assets/images/service-item-bg.jpg')] bg-no-repeat bg-cover bg-center rounded-[20px] text-center text-white p-10 flex flex-col items-center  gap-5 "
                >
                  <span className="text-[#f5a425] border-[1.5px] border-[#f5a425] flex items-center justify-center h-14.5 w-14.5 rounded-full ">
                    <item.icon size={36} />
                  </span>
                  {/* Text Content */}
                  <div className='flex flex-col gap-2 mt-4'>
                    <h4 className='text-[18px] font-semibold '>{item.title}</h4>
                    <p className='text-[13px]'>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Next button */}
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
              onClick={handleNext}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;