import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row gap-10">
<div className="flex pt-36 flex-col gap-16 mx-12 z-[20]">
     <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-[500px] text-[74.65px] leading-[82.11px] ">Empowering students
      <span className="text-black ">
      <div className="flex  -space-x-4">
            <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/asset/image1.png" width={58} height={58} alt="use image"/>
            <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/asset/image2.png"  width={58} height={58} alt="use image"/>
            <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/asset/image3.png"  width={58} height={58} alt="use image"/>
            <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/asset/image4.png"  width={58} height={58}  alt="use image"/>
      </div>
      </span> to Excel in the Dynamic world</h1>


     <p className="font-medium text-[18px] leading-[26.19px] font-serif">Unlock your potential with innovative learning programs designed for the leaders of tommorrow.</p>
    </div>
    <div >
      <Image fill src="/asset/hero.png" alt="homepage image "/>
    </div>
    </div>
    
  );
}
