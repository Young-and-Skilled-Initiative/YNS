import React from 'react'
import Arrow from "../../../public/abtarrow.svg"
import Image from "next/image"
import Circle from "../../../public/circles.svg"

const interest = () => {
  return (
    <div className=' flex  py-[4em] px-[3em] bg-[#F6DEAE] '>
        <div className=' mx-auto flex gap-[6em]'>
        <div className=' bg-[#114F3C] flex flex-col font-cocon text-white  p-[4em] justify-between  w-[24em] rounded-3xl'>
            <h1 className='text-[40px] px-3'>what we do?</h1>
            <Image src={Arrow} alt="" />

        </div>
        <div className='flex justify-between bg-[#98BC6D] gap-[5em] rounded-[2.5em]'>
            <div className='w-[31em] pl-[3em] py-[3em] flex flex-col gap-[1em] justify-around'>
                <h1 className='font-cocon  font-[500] text-[50px] text-[#114f3c]'>
                Offer a wide range of courses:
                </h1>
                <p className='text-wrap text-white text-[16px] font-manrope font-[400] leading-[32px]'>
                From tech skills like web development, data analysis, and artificial intelligence to creative arts like graphic design, music production, and writing, we have something for everyone. Whether you're looking to upskill for your current job, start a new career, or simply explore your passions, we have courses to suit your interests and goals.
                </p>
            </div>
            <div className='p-3'>
                <Image src={Circle} className='h-full' alt='arrow image'/>
            </div>


        </div>

        </div>
       
      
    </div>
  )
}

export default interest
