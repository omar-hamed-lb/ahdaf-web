"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Hero = () => {
  return (
    <section
      className="relative py-12 px-4 sm:px-8 md:px-16 text-center bg-cover bg-center pb-0 pr-0 md:pr-0"
      style={{ backgroundImage: "url('/backgrounds/hero_bg.png')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#0D1321] opacity-90"></div>

      {/* Content Wrapper */}
      <div className="relative flex flex-col-reverse md:flex-row items-center justify-between text-white space-y-8  md:space-y-0">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-500 leading-tight md:-mt-20 md:mb-10">
            EMPOWERING CHANGE <br className="hidden md:block" /> THROUGH GIVING
          </h1>
          <h2 className="text-sm sm:text-lg md:text-xl font-semibold text-red-500 mt-3 md:mt-4 md:mb-10">
            AHDAF CHARITY ENDOWMENT
          </h2>
          <p className="mt-3 md:mt-4 text-d sm:text-sm md:text-2xl text-gray-300 leading-relaxed mb-4">
            We are a diverse group of individuals from Northern Lebanon, united
            by vision to positively transform society. Our members include
            educators, business professionals, and workers from various fields,
            all driven by a genuine aspiration to create meaningful change in
            our community and beyond.
          </p>
        </div>

        {/* Right Side - Slider with Mask */}
        <div className="w-full md:w-1/2 flex justify-center sm:justify-end xs:justify-end">
          <div
            className="relative w-full max-w-sm md:max-w-full h-[500px] sm:h-[300px] md:h-[calc(100vh-60px)]"
            style={{
              maskImage: "url('/images/mask.svg')",
              WebkitMaskImage: "url('/images/mask.svg')",
              maskSize: "cover",
              WebkitMaskSize: "cover",
            }}
          >
            {/* Swiper Slider */}
            <Swiper
              loop
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="w-full h-full"
            >
              <SwiperSlide>
                <Image
                  src="/images/slide1.png"
                  alt="Slide 1"
                  fill
                  className="object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/slide2.png"
                  alt="Slide 2"
                  fill
                  className="object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/slide3.png"
                  alt="Slide 3"
                  fill
                  className="object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
