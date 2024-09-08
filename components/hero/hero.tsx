import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div  className="flex justify-between w-[100vw] relative px-[4em] pt-[1em] items-center ">
      {/* text section  */}
  <div className="flex flex-col">
    <div className="flex flex-col gap-16 z-[20] absolute -top-6">
     <h1 className=" font-[500px] text-[64.65px] leading-[62.11px] font-cocon"> 
    <span className="bg-six-color-gradient inline-block text-transparent bg-clip-text ">Empowering</span> students
    <br/>
      <div className="flex  -space-x-4">
            <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/asset/image1.png" width={58} height={58} alt="use image"/>
            <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/asset/image2.png"  width={58} height={58} alt="use image"/>
            <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/asset/image3.png"  width={58} height={58} alt="use image"/>
            <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/asset/image4.png"  width={58} height={58}  alt="use image"/>
      </div>
    to Excel in the<br/> Dynamic world</h1>
     <p className="font-thin text-[16px] leading-[26.19px] font-helvetica text-[#1A1A1A]">Unlock your potential with innovative learning programs designed<br/> for the leaders of tommorrow.</p>
     <div className="flex flex-row space-x-6">
    <Button variant="primary" className="hover:opacity-50 hover:text-slate-200">Get started</Button>
    <Button variant="light" className="hover:opacity-70 hover:bg-slate-600">Join the Program</Button>
     </div>
    </div>
    <div className="absolute ">
      <Image  src="/asset/hero.png" width={1300} height={622} alt="homepage image"/>
    </div>
    </div>
    </div>
    
    
  );
}
