"use client";
import React, { useEffect, useState, useCallback } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Carrusel = () => {
  const slides = [
    {
      title: "Servidor 1",
      videoUrl:
        "https://player.vimeo.com/external/288299338.sd.mp4?s=ce4e1834ba4818528be42b6271d21e0c64376de8&profile_id=164&oauth2_token_id=57447761",
    },
    {
      title: "Servidor 2",
      url: "https://images.pexels.com/photos/1753689/pexels-photo-1753689.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "Servidor 3",
      url: "https://images.pexels.com/photos/14772276/pexels-photo-14772276.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "Servidor 4",
      videoUrl:
        "https://player.vimeo.com/external/434851977.sd.mp4?s=0d286dc73dfdceb2458dda6576db83f2d00b11db&profile_id=164&oauth2_token_id=57447761",
    },
    {
      title: "Servidor 5",
      url: "https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "Servidor 6",
      url: "https://images.pexels.com/photos/414247/pexels-photo-414247.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "Servidor 7",
      videoUrl:
        "https://player.vimeo.com/external/434854822.sd.mp4?s=b7fa3a0513f214a8ddccb1b2269a78b6ff8d9edb&profile_id=164&oauth2_token_id=57447761",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  // CAMBIO DE IMAGEN AUTO
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentIndex, nextSlide]);
  return (
    <div className="z-0 h-[780px] w-full relative group">
      {/* Background */}
      {slides[currentIndex].url ? (
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="bg-fixed w-full h-full bg-center bg-cover duration-1000"
        ></div>
      ) : (
        <video
          src={slides[currentIndex].videoUrl}
          autoPlay
          muted
          className="absolute top-0 left-0 object-cover w-full h-full duration-1000"
        />
      )}

      {/* DATA */}
      <div className="absolute top-[40%] left-[10%] max-w-xs font-sans text-white sm:max-w-sm">
        <h1 className="text-4xl font-extrabold underline dark:text-white">
          {slides[currentIndex].title}
        </h1>
        <p className="my-4 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          corporis non ipsam error vero quasi voluptatem asperiores inventore
          animi, ad quibusdam nisi dignissimos quia esse consequuntur.
        </p>
        <a
          href="#"
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-black/50 rounded-lg hover:bg-white/60 hover:text-black hover:ring-2 hover:ring-black/30 focus:ring-black"
        >
          Ver Mas
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="absolute inset-x-0 bottom-0 flex  justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-3xl cursor-pointer"
          >
            <RxDotFilled className="hover:text-white" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
