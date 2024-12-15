"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Star1,
  Star2,
  Star3,
  Group1,
  Group2,
  Group3,
  Sticker1,
  Sticker2,
  Sticker3,
} from "@/public/icons"; // Assuming your SVGs are in the public/icons directory
import { content } from "@/data";


const textVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

const AboutHero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const rotateContent = (i: number) => content[(index + i) % content.length];

  return (
    <div className="font-cocon div flex flex-col gap-10 sm:gap-16 pt-10 lg:pt-0 xl:px-9 lg:pb-16">
      <h1 className="text-center text-7xl">
        Who are{" "}
        <span className="bg-clip-text text-transparent bg-eight-color-block">
          We?
        </span>
      </h1>
      <section className="lg:flex lg:flex-row flex-wrap lg:flex-nowrap sm:grid grid-cols-2 justify-center space-y-2 relative items-center lg:-space-x-2 p-4">
        {/* First Card */}
        <div className="relative bg-orange-500 lg:w-[380px] h-[410px] rounded-xl text-white p-4 lg:p-7 flex flex-col gap-14 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={rotateContent(0).title + rotateContent(0).highlight}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center"
            >
              <h1 className="text-5xl lg:text-[3.25rem] font-medium  leading-[64px]">
                {rotateContent(0).title}{" "}
                <span className='text-light-green'>
                  {rotateContent(0).highlight}
                </span>
              </h1>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-8 px-7 flex w-full justify-between">
            <Image
              src={Group1}
              alt="Group1"
              className="xl:w-auto lg:w-[140px]"
            />
            <Image
              src={Sticker1}
              alt="Sticker1"
              className="xl:w-[105px] w-[100px]"
            />
          </div>
          <Image
            alt="Star1"
            src={Star1}
            className="absolute right-9 top-2 animate-spin-slow"
          />
        </div>

        {/* Middle Card */}
        <div className="relative bg-green-900 lg:w-[420px] lg:h-[440px] xl:w-[480px] xl:h-[500px] z-10 scale-105 rounded-xl text-white p-4 lg:p-7 flex flex-col gap-10 items-">
          <AnimatePresence mode="wait">
            <motion.div
              key={rotateContent(1).title + rotateContent(1).highlight}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="flex flex-col items-start"
            >
              <h1 className="text-5xl lg:text-[3.5rem] max-w-[280px] font-medium leading-[64px]">
                {rotateContent(1).title}{" "}
                <span className='text-light-green'>
                  {rotateContent(1).highlight}
                </span>
              </h1>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-10 lg:pr-14 flex w-full  justify-between">
            <Image
              src={Group2}
              alt="Group2"
              className="xl:w-56 w-[160px]"
            />
            <Image
              src={Sticker2}
              alt="Sticker2"
              className="xl:w-[120px] w-[90px]"
            />
          </div>
          <Image
            alt="Star2"
            src={Star2}
            className="absolute right-6 top-16 lg:top-[160px] animate-spin-slow"
          />
        </div>

        {/* Third Card */}
        <div className="relative bg-green-300 lg:w-[380px] h-[410px] rounded-xl text-white p-4 lg:p-7 flex flex-col gap-14 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={rotateContent(2).title + rotateContent(2).highlight}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center"
            >
              <h1 className="text-5xl lg:text-[3.25rem] font-medium  leading-[64px]">
                {rotateContent(2).title}{" "}
                <span className='text-dark-green'>
                  {rotateContent(2).highlight}
                </span>
              </h1>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-8 lg:px-7 flex w-full justify-between ">
            <Image
              src={Group3}
              alt="Group3"
              className="xl:w-auto lg:w-[140px]"
            />
            <Image
              src={Sticker3}
              alt="Sticker3"
              className="xl:w-[100px] lg:w-[100px]"
            />
          </div>
          <Image
            alt="Star3"
            src={Star3}
            className="absolute right-9 top-2 animate-spin-slow"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
