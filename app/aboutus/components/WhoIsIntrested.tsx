import React from 'react'
import inStar1 from "@/public/images/inStar1.svg";
import inStar2 from "@/public/images/inStar2.svg";
import inStar3 from "@/public/images/inStar3.svg";
import { cn } from '@/lib/utils';
import Image from 'next/image';

const IntrestedData = [
    { title: "Gaining new skills", text: "Whether you're looking to upskill for your current job or start a new career, we can help.", image: inStar1},
    { title: "Gaining new skills", text: "Whether you're looking to upskill for your current job or start a new career, we can help.", image: inStar2},
    { title: "Gaining new skills", text: "Whether you're looking to upskill for your current job or start a new career, we can help.", image: inStar3},
]
const WhoIsIntrested = () => {
  return (
    <div className='w-full h-full bg-white'>
        <div className='pt-10 flex flex-col gap-8'>
            <div className='w-full md:max-w-[803px] flex flex-col gap-5'>
                <h1 className='font-cocon text-[30px] md:text-[40px] '>Who we are interested in?</h1>
                <p className='font-manrope leading-[32px] text-[16px] font-normal'>We're looking for curious, motivated individuals who are passionate about learning and growth. If you're interested in</p>
            </div>
            <div className='flex flex-col justify-between md:flex-row gap-1'>
                {
                    IntrestedData.map((item, i) => (
                    <div key={i} className={cn(`w-[400px] h-[377px] relative  rounded-[10px]`, i === 0 ? "bg-[#74bc6dfa]" : " bg-[#114F3C]", i === 2 ? "bg-[#EF4C0D]" : "bg-[#98BC6D]")}>
                        <div className='px-8 py-10 flex flex-col gap-3'>
                            <h1 className='font-bold text-[40px] leading-[44px] font-cocon text-white'>{item.title}</h1>
                            <p className='text-[16px] text-white  font-normal leading-[32px] font-manrope'>{item.text}</p>
                            <Image src={item.image} width={76} height={76} alt="star image" className='absolute right-4 bottom-16'/>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default WhoIsIntrested
