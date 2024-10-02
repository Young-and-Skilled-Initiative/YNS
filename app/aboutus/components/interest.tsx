import React from 'react'
import Arrow from "../../../public/abtarrow.svg"
import Image from "next/image"
import Circle from "../../../public/circles.svg"

const interest = () => {
  return (
    <div className=' flex  py-[2em] md:py-[4em] px-[2em] md:px-[3em] bg-[#F6DEAE] '>
        <div className=' mx-auto flex flex-col lg:flex-row gap-[3em] md:gap-[6em]  '>
        <div className=' bg-[#114F3C] flex flex-col font-cocon text-white  md:p-[4em] p-[2em] gap-[1em] justify-between items-center  md:w-[24em] rounded-3xl mx-auto w-full'>
            <h1 className='text-[40px] px-3'>what we do?</h1>
            <Image src={Arrow} alt="" />

        </div>
        <div className='flex flex-col md:flex-row justify-between bg-[#98BC6D] gap-[1em] md:gap-[2em] lg:gap-[5em] rounded-[2.5em]'>
            <div className='md:w-[25em] md:pl-[2em] p-[2em] md:py-[2em] flex flex-col gap-[1em] justify-around '>
                <h1 className='font-cocon  font-[500] text-[25px] md:text-[30px] text-[#114f3c]'>
                Offer a wide range of courses:
                </h1>
                <p className='text-wrap text-white text-[16px] md:text-[14px] font-manrope font-[400] leading-[32px]'>
                From tech skills like web development, data analysis, and artificial intelligence to creative arts like graphic design, music production, and writing, we have something for everyone. Whether you're looking to upskill for your current job, start a new career, or simply explore your passions, we have courses to suit your interests and goals.
                </p>
            </div>
            <div className='p-3 hidden lg:block '>
                <Image src={Circle} className='h-full' alt='arrow image'/>
            </div>


        </div>

        </div>
       
      
    </div>
  )
}

export default interest
