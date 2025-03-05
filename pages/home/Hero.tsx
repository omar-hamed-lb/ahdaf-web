"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Hero = () => {
  return (
    <section
      className="relative py-20 px-4 sm:px-8 md:px-16 text-center bg-cover bg-center pb-0 pr-0 md:pr-0"
      style={{ backgroundImage: "url('/backgrounds/hero_bg.png')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-cblue opacity-90"></div>

      {/* Content Wrapper */}
      <div className="relative flex flex-col md:flex-row items-center justify-between text-white space-y-8  md:space-y-0">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-100 leading-tight md:mb-10 mr-4">
            EMPOWERING CHANGE <br className="hidden md:block" /> THROUGH GIVING
          </h1>
          <h2 className="text-xl lg:text-2xl font-bold text-cgreen mt-3 md:mt-4 md:mb-10 ">
            AHDAF CHARITY ENDOWMENT
          </h2>
          <p className="mt-3 md:mt-4 text-d md:text-2xl text-gray-100 leading-relaxed mb-4 mr-4">
            We are a diverse group of individuals from Northern Lebanon, united
            by vision to positively transform society. Our members include
            educators, business professionals, and workers from various fields,
            all driven by a genuine aspiration to create meaningful change in
            our community and beyond.
          </p>
        </div>

        {/* Right Side - Slider with Mask */}
        <div className="w-full md:w-1/2 flex justify-end">
          <div
            className="relative w-full max-w-sm md:max-w-full h-[500px] sm:h-[300px] md:h-[calc(100vh-60px)] "
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
