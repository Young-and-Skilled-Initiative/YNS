import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Mobilehero from "@/public/hero.svg";
import Mobilegrp from "@/public/mobilegrp.svg";
import Mobiletxt from "@/public/mobiletxt.svg";
import { Play } from "lucide-react"; // Importing Play from lucide-react

export default function Hero() {
  return (
    <div className="flex flex-col justify-between w-[100vw] relative md:px-[4em] pt-[1em] items-center mt-6">
      {/* text section */}
      <div className=" hidden md:flex md:flex-col gap-16">
        <div className="flex flex-col gap-8 z-[20] max-w-screen-md absolute -top-6">
          <h1 className="relative w-fit tracking-tight text-balance -mt-4 font-cocon font-[400px] !leading-tight text-black text-5xl md:text-[74.65px] lg:text-7xl">
            <span className="bg-six-color-gradient text-transparent bg-clip-text">
              Empowering
            </span>{" "}
            Students
            <span className="inline-block">
              <div className="flex flex-row -space-x-3">
                <Image
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  src="/images/image1.png"
                  width={58}
                  height={58}
                  alt="use image"
                />
                <Image
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  src="/images/image2.png"
                  width={58}
                  height={58}
                  alt="use image"
                />
                <Image
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  src="/images/image3.png"
                  width={58}
                  height={58}
                  alt="use image"
                />
                <Image
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  src="/images/image4.png"
                  width={58}
                  height={58}
                  alt="use image"
                />
              </div>
            </span>{" "}
            to Excel in the Dynamic World{" "}
          </h1>
          <p className="font-thin text-wrap text-[20px] leading-[26.19px] font-helvetica text-[#1A1A1A] pr-[10px] w-[26em]">
            Unlock your potential with learning programs designed for the
            leaders of tomorrow.
          </p>
          <div className="flex flex-row space-x-6">
            <Button
              variant="primary"
              className="hover:opacity-50 hover:text-slate-200 text-[18px] p-[2em] font-manrope"
            >
              Get started
            </Button>
            <Button
              variant="light"
              className="hover:opacity-70 hover:bg-slate-600 p-[2em] bg-gray-100 font-manrope text-[18px] hover:text-white transition ease-linear duration-100"
            >
              Join the Program
            </Button>
          </div>
        </div>

        <div className="relative flex flex-col gap-0">
          <Image
            src="/images/Star1.svg"
            alt="star1"
            width={100}
            height={100}
            className="absolute -right-12 -top-12"
          />
          <Image
            src="/images/hero.png"
            width={1300}
            height={622}
            alt="homepage image"
          />
          <Image
            src="/images/Star2.svg"
            width={100}
            height={100}
            className="absolute left-20 -bottom-12"
            alt="star2"
          />
          <Button
            asChild
            variant="light"
            className="absolute right-20 py-[2em] px-[2em] bottom-8"
          >
            <Link href="/" className="">
              <div className=" flex gap-4 justify-start ">
                <Image
                  src="/images/play.svg"
                  alt=""
                  className="w-[34px]"
                  width={60}
                  height={60}
                />
                <h1 className="text-[16px] text-black font-semibold font-helvetica my-auto flex leading-[16px]">
                  Our team
                </h1>
              </div>
            </Link>
          </Button>
        </div>
      </div>
      {/* mobile responsive screen */}
      <div className="flex flex-col ">
        <div className="flex">
          <div className="flex flex-col -mr-[9em] w-[em]">
            <h1 className="font-cocon text-black text-[23px] ">Empowering</h1>
            <h1 className="font-cocon text-black text-[23px] ">Students </h1>
            <h1 className="font-cocon text-black text-[23px] ">to excel in</h1>
            <h1 className="font-cocon text-black text-[23px] ">the dynamic</h1>
            <h1 className="font-cocon text-black text-[23px] ">world</h1>
          </div>
          <div className="w-[100%] mt-[em]">
            <Image src={Mobilehero} alt="hero" />
          </div>
        </div>
        {/* for the buttons */}
        <div></div>
      </div>
    </div>
  );
}
