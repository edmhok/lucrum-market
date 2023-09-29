import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import WavyBackground from "./WavyBackground";


const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
    <div className="home_hero_section">
      <div
        className="w-full max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
        id="about"
        >
        <ScrollAnimationWrapper>
            <motion.div
              className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-4 py-3 sm:py-5"
              variants={scrollAnimation}>
              <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-white-500 leading-normal">
                  Want anything to be easy with <strong>Lucrum Market</strong>.
                </h1>
                <p className="text-white-500 mt-6 mb-6">
                  Provide a network for all your needs with ease and fun using
                  Lucrum Market discover interesting features from us.
                </p>
                <ButtonPrimary>Get Started</ButtonPrimary>
              </div>
              <div className="flex w-full">
                <motion.div className="h-full w-full" variants={scrollAnimation}>
                    <Image
                      src="/assets/Illustration1.png"
                      alt="Cp-Lucrum"
                      quality={100}
                      width={990}
                      height={601}
                      layout="responsive"
                      />
                </motion.div>
              </div>
             
            </motion.div>
        
        </ScrollAnimationWrapper>
      </div>
    </div>
    
    <WavyBackground />
    
    </>
  );
};

export default Hero;
