import React, { useState } from "react";
import brTea from "../assets/brown-tea.png";
import grTea from "../assets/green-tea.png";
import orTea from "../assets/orange-tea.png";
import piTea from "../assets/pink-tea.png";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDot, RxDotFilled } from "react-icons/rx";
import "../App.css";

const slides = [{ url: brTea }, { url: grTea }, { url: piTea }, { url: orTea }];
const colorTheme = ["#582D0A", "#04A72A", "#FF5C93", "#F27D0C"];
const types = ["Chocolate", "Avocado", "Strawberry", "Orange"];

const Hero = () => {
  const [currentIndex, SetCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    SetCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    SetCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    SetCurrentIndex(slideIndex);
  };

  console.log(colorTheme[currentIndex]);

  return (
    <div className="w-full h-full">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-16">
        <div className="text-black text-5xl flex-1">
          <div className="text-4xl mb-10">
            This{" "}
            <span
              style={{
                color: colorTheme[currentIndex],
              }}
              className=""
            >
              {types[currentIndex]}
            </span>{" "}
            bubble milk tea uses authentic ingredients for maximum flavor.
          </div>
          <div
            style={{
              backgroundColor: colorTheme[currentIndex],
            }}
            className="text-xl w-40 p-4 text-ground rounded-full m-auto lg:m-0"
          >
            ORDER NOW
          </div>
        </div>
        <div className="flex-1">
          <div className="max-w-[1440px] w-full px-4 py-4 relative">
            <img className="w-full" src={slides[currentIndex].url} alt="" />
            <div
              style={{
                backgroundColor: colorTheme[currentIndex],
              }}
              className="absolute top-52 left-5 rounded-full p-2 text-white cursor-pointer"
            >
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div
              style={{
                backgroundColor: colorTheme[currentIndex],
              }}
              className="absolute top-52 right-5 rounded-full p-2 text-white cursor-pointer"
            >
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

            <div className="flex justify-center py-2 absolute bottom-50 right-0 top-50 left-0">
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className="text-5xl cursor-pointer"
                >
                  {slideIndex == currentIndex ? (
                    <RxDotFilled
                      style={{
                        color: colorTheme[currentIndex],
                      }}
                    />
                  ) : (
                    <RxDot
                      style={{
                        color: colorTheme[currentIndex],
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
