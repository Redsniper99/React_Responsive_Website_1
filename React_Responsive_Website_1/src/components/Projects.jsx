import { React, useState } from "react";
import {RxDotFilled} from 'react-icons/rx'
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import "swiper/css";

const CardDeal = () => {
  const slides = [
    {
      id:1,
      url: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      id:2,
      url: "https://images.unsplash.com/photo-1621511075938-f03482369feb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      id:3,
      url: "https://images.unsplash.com/photo-1630061712710-2539eb457c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1aWxkaW5nJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id:4,
      url: "https://images.unsplash.com/photo-1601074231509-dce351c05199?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      id:5,
      url: "https://images.unsplash.com/photo-1527335988388-b40ee248d80c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1aWxkaW5nJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="max-w-[1400px] h-[700px] w-full m-auto py-16 px-1 relative">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] left-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
        <BsChevronCompactLeft onClick={prevSlide} sixe={30} />
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] right-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
        <BsChevronCompactRight onClick={nextSlide} sixe={30} />
      </div>
      <div className="flex top-4 justify-center py-4">
        {slides.map((slide,slideIndex) =>(
          <div className="text-2xl cursor-pointer">
            <RxDotFilled/>
          </div> 
        ))}

      </div>
    </div>
  );
};

export default CardDeal;
