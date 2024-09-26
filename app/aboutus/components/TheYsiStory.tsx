import Image from "next/image"
import { StaticImageData } from "next/image"
import {
  YsiPic1,
  YsiPic2,
  YsiTapStar,
  YsiStar,
} from "../../../public/images/ysiStory"
import React from "react"

const TheYsiStory = () => {
  return (
    <section className="bg-[#1A1A1A] pt-[4.8rem] pb-[5.5rem] px-[9rem] flex gap-[4.656rem] items-center justify-center ">
      <section>
        <figure className="relative h-[520px] w-[410px]">
          <div className="absolute z-10">
            <Founders pic={YsiPic1} name={"Fada Usk"} />
          </div>
          <div className="absolute left-[10px] top-[-8px]">
            <Founders pic={YsiPic2} name={"Fada Usk"} tilt={"rotate-2"} />
          </div>
          <div>
            <Image
              src={YsiTapStar}
              alt="tap star"
              className="absolute z-20 left-[-4.5rem] bottom-[-4rem]"
            />
          </div>
        </figure>
      </section>
      <section className="">
        <article className="relative w-[35.5rem]">
          <Image src={YsiStar} alt="star image" className="absolute right-0" />
          <h1 className="text-[#EF4C0D] text-[50px] font-medium font-[Cocon]">
            The YSI story
          </h1>
          <div className="text-[#F6DEAE] pt-[27px]">
            <p className="font-bold text-xl leading-8">
              The Spark That Ignited Young and Skilled
            </p>
            <p className="leading-8 font-medium text-justify">
              Growing up, I was fascinated by the endless possibilities of
              technology. I saw firsthand how it could empower individuals to
              achieve their dreams. However, I also noticed a significant gap in
              accessible, quality education, especially for young people in
              underserved communities.
              {" That's"} when the seed for Young and Skilled was planted. I
              wanted to create a platform that would provide young minds with
              the tools, knowledge, and support they needed to succeed in the
              digital age. I envisioned a place where they could explore their
              passions, develop in-demand skills, and build a brighter future
              for themselves. From humble beginnings, Young and Skilled has
              evolved into a thriving community of learners and educators. Our
              mission remains the same: to empower the next generation through
              education and innovation.
            </p>
          </div>
        </article>
      </section>
    </section>
  )
}

interface FoundersProps {
  pic: StaticImageData
  name: string
  tilt?: string
}

const Founders: React.FC<FoundersProps> = ({ pic, name, tilt }) => {
  return (
    <div className="relative h-[524px] w-[400px]">
      <Image src={pic} alt="Founders Image" />
      <div
        className={`absolute bottom-6 left-[18px] ${tilt} w-[364px] h-[79px] bg-[#F2A300] flex gap-5 rounded-[10px] items-center px-[17px]`}
      >
        <p className="font-[Cocon] font-medium text-[40px]">{name}</p>
        <p className="w-[144px] text-white text-xl leading-[21px]">
          Co-Founder <span className="font-bold"> YS initiative</span>
        </p>
      </div>
    </div>
  )
}

export default TheYsiStory
