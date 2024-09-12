import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, PlayCircle, PlayCircleIcon } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div  className="flex flex-col justify-between w-[100vw] relative px-[4em] pt-[1em] items-center ">
      {/* text section  */}
  <div className="flex flex-col gap-16">
    <div className="flex flex-col gap-16 z-[20] absolute -top-6">
     <h1 className=" font-[500px] text-[64.65px] whitespace-normal leading-[82.11px] font-cocon"> 
    <span className="bg-six-color-gradient inline-block text-transparent bg-clip-text">Empowering</span> students
    <div className="">
    <div className="flex  flex-row -space-x-4">
            <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/images/image1.png" width={58} height={58} alt="use image"/>
            <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/images/image2.png"  width={58} height={58} alt="use image"/>
            <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/images/image3.png"  width={58} height={58} alt="use image"/>
            <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/images/image4.png"  width={58} height={58}  alt="use image"/>
      </div>
    </div>

    to Excel in the<br/> Dynamic world</h1>
     <p className="font-thin text-[16px] leading-[26.19px] font-helvetica text-[#1A1A1A]">Unlock your potential with innovative learning programs designed<br/> for the leaders of tommorrow.</p>
     <div className="flex flex-row space-x-6 -mt-9">
    <Button variant="primary" className="hover:opacity-50 hover:text-slate-200">Get started</Button>
    <Button variant="light" className="hover:opacity-70 hover:bg-slate-600">Join the Program</Button>
     </div>
    </div>
    <div className="relative flex flex-col gap-0">
          <Image src="/images/Star1.svg" alt="star1" width={100} height={100} className=" absolute -right-12 -top-12"/>
      <Image  src="/images/hero.png" width={1300} height={622} alt="homepage image"/>
      <Image src="/images/Star2.svg" width={100} height={100} className="absolute left-20 -bottom-12" alt="star2" />
      <Button asChild variant="light" className="absolute right-20 bottom-8">
        <Link href="/" className="">
        <div className=" flex space-x-4 justify-between items-center">
        <div className="px-1 py-1 flex items-center  rounded-full bg-slate-200">
      <Play className="w-4 h-4 text-black"/>
          </div>
      <h1 className="text-[16px] text-black font-thin font-helvetica leading-[16px]">
        Our team
      </h1>
        </div>
        </Link>
      </Button>
    </div>
    <div className="flex flex-col md:flex-row justify-between ">
    <h1 className="text-[16px] leading-[32px] md:font-manrope text-[#606060] font-helvetica">
    Partnership companies worldwide to<br/> empower students
    </h1>
    <div className="w-[80px] h-[80px] rounded-[24px] bg-[#114F3C] flex items-center justify-center -top-8">
    <Image src="/images/smile.png" width={39} height={39} alt="smaleImage" />
    </div>
    </div>
    </div>
    </div>
    
    
  );
}
