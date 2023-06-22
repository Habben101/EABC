import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Image from 'next/image';
import useDimensions from 'react-cool-dimensions';
import arrayCeil from './../../../lib/arrayCeil';
import { BiChevronRight } from 'react-icons/bi';
import Link from 'next/link';
import FadeInWhenVisible,{ FadeInWhenVisibleX, FadeInWhenVisibleY, WidthWhenVisible } from "./../Animations/animations";

export default function Hero() {
  const [heroImage, setHeroImage] = useState('hero-1920.jpg');
  const [logoImage, setLogoImage] = useState('eabc-350.png');
  const imageSizes = [600, 1280, 1920];
  const bannerImageSizes = [250, 350];

  const { observe, unobserve, width, height, entry } = useDimensions({
    onResize: ({ observe, unobserve, width, height, entry }) => {
      setHeroImage(`hero-${arrayCeil(imageSizes, width)}.jpg`);
      setLogoImage(`eabc-${arrayCeil(bannerImageSizes, width)}.png`);

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });

  const fadeAnimation = {
    hidden : { opacity: 0, y: -20 },
    visible : { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 1 } }
  };

  return (
    <div
      ref={observe}
      className="w-full h-screen flex justify-center items-center overflow-hidden relative sectionHero"
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.47) 0%, rgb(2 20 63 / 83%) 90.62%), url("/images/${heroImage}")`,
      }}
    >
      <div className="flex flex-col justify-center items-center px-3">
        <FadeInWhenVisibleY delay={0.6}>
          <Image src={`/images/logo_whitee.png`} alt="Hero Image" width={300} height={300} />
        </FadeInWhenVisibleY>
        <FadeInWhenVisibleY delay={0.4}>
            <h1
            className="text-center pt-[1rem] text-7xl md:text-7xl text-white font-bold drop-shadow-lg"
            >
            Stream smarter
            </h1>
        
        <p
          className="mt-5 text-center text-lg text-white opacity-90"
        >
          Uncover the wonders of East Africa and beyond
        </p>
        </FadeInWhenVisibleY>
        <FadeInWhenVisibleY delay={0.4}>
        <Link href="/live">
          <button
            className="btn btn-primary flex flex-row justify-center content-center text-white shadow p-2 px-6 m-8 border-4"
            type="submit"
          >
            Get Started <BiChevronRight />
          </button>
        </Link>
        </FadeInWhenVisibleY>
      </div>
    </div>
  );
}
