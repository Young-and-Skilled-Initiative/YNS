import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Group } from "@/public";
import { Hero_Mobile } from "@/public/icons";
import Section from "@/components/layout/Section";

export default function Hero() {
  return (
    <Section
      id="hero"
      className="flex flex-col justify-between gap-5 w-full relative  items-center "
    >
      {/* text section  */}
      <div className="flex flex-col gap-16 w-full">
        <div className="flex flex-col justify-between w-full relative  items-center sm:mt-6">
          {/* text section */}
          <div className=" flex flex-col gap-16 w-full">
            <div className="flex flex-col justify-center sm:gap-3 lg:gap-6 xl:gap-8 z-20 w-full sm:max-w-screen-md absolute sm:-top-7">
              <h1
                className="relative w-fit sm:tracking-tight sm:text-balance  sm:mt-3 
              lg:-mt-3 xl:-mt-5 font-cocon font-medium sm:!leading-[48px] text-3xl 
              leading-8 lg:!leading-[64px] xl:!leading-[84px] text-black sm:text-4xl 
              xl:text-[74.65px] lg:text-[58px] max-w-52 sm:max-w-md lg:max-w-[800px]"
              >
                <span className="bg-six-color-gradient text-transparent bg-clip-text">
                  Empowering
                </span>{" "}
                Students
                <span className="inline-flex sm:hidden lg:inline-flex px-2 sm:p-0">
                  <Image
                    src={Group}
                    alt=""
                    width={140}
                    className="xl:w-44 sm:w-36 lg:h-14 w-14 h-5 "
                  />
                </span>{" "}
                to Excel in the <br className="hidden md:block" /> Dynamic{" "}
                <br className="hidden sm:lock lg:hidden" /> World{" "}
              </h1>
              <p
                className="font-normal leading-5 h-full text-xs sm:text-lg sm:leading-7 font-helvetica text-primary 
              max-w-32 sm:max-w-60 lg:max-w-96 xl:max-w-xl"
              >
                Unlock your potential with learning programs designed for the
                leaders of <br className="block sm:hidden" /> tomorrow.
              </p>
              <div className=" hidden lg:flex flex-row gap-3.5">
                <Button
                  variant="primary"
                  className="hover:opacity-50 lg:!w-28 xl:!w-48 hover:text-slate-200 text-base font-manrope"
                >
                  Get started
                </Button>
                <Button
                  variant="light"
                  className="hover:opacity-70 lg:!w-44 xl:!w-48 hover:bg-slate-600 text-dark-green bg-gray-100 font-manrope text-lg hover:text-white transition ease-linear duration-100"
                >
                  Join the Program
                </Button>
              </div>
            </div>

            <div className="relative sm:flex flex-col gap-0 hidden ">
              <Image
                src="/images/Star1.svg"
                alt="star1"
                width={100}
                height={100}
                className="absolute -right-12 -top-12 hidden sm:block animate-spin-slow"
              />
              <Image
                src="/icons/hero.svg"
                width={2000}
                height={672}
                alt="homepage image"
              />
              <Image
                src="/images/Star2.svg"
                width={100}
                height={100}
                className="absolute left-20 -bottom-12 hidden lg:block animate-spin-slow"
                alt="star2"
              />
              <Button
                asChild
                variant="light"
                className="absolute right-6 xl:right-10 py-8 !w-36 lg:!w-36 bottom-8"
              >
                <Link href="/aboutus" className="flex items-center">
                  <div className=" flex gap-2 justify-center items-center">
                    <Image
                      src="/images/play.svg"
                      alt=""
                      className="w-8"
                      width={60}
                      height={60}
                    />
                    <h1 className="text-sm lg:text-base text-black font-semibold font-helvetica">
                      Our team
                    </h1>
                  </div>
                </Link>
              </Button>
            </div>
            <Image src={Hero_Mobile} alt="" className="block sm:hidden" />
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-4 lg:hidden w-full">
        <Button
          variant="primary"
          className="hover:opacity-50 !w-full hover:text-slate-200 text-base font-manrope"
        >
          Get started
        </Button>
        <Button
          variant="light"
          className="hover:opacity-70 !w-full hover:bg-slate-600 text-dark-green bg-gray-100 font-manrope text-lg hover:text-white transition ease-linear duration-100"
        >
          Join the Program
        </Button>
      </div>
    </Section>
  );
}
