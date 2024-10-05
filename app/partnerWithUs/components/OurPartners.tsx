"use client"

import Image from "next/image"
import {
  Corywise,
  Microsoft,
  Autocheck,
  Flutterwave,
  EvolveCredit,
  Kuda,
  Stripe,
} from "../../../public/images/partnerWithUs"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay" // Import the correct autoplay plugin
import { EmblaOptionsType } from "embla-carousel"

type PropType = {
  options?: EmblaOptionsType
}

const OurPartners: React.FC<PropType> = ({ options }) => {
  const autoplayOptions = Autoplay({
    delay: 3000, // 3 seconds delay
    stopOnInteraction: false, // Keep autoplay running even after user interaction
    stopOnMouseEnter: true, // Stops when the user hovers over the carousel
  })

  const [emblaRef] = useEmblaCarousel(options, [autoplayOptions]) // Pass the autoplay plugin to the Embla carousel

  return (
    <section className="">
      <h1 className="ml-[106px] text-[40px] text-[#2F2F2F] font-lato leading-[44px]">
        Our Partners
      </h1>

      <div className="embla pt-[40px]">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex gap-[80px]">
            <div className="embla__slide">
              <Image src={Corywise} alt="Corywise Logo" />
            </div>
            <div className="embla__slide">
              <Image src={Microsoft} alt="Microsoft Logo" />
            </div>
            <div className="embla__slide">
              <Image src={Autocheck} alt="Autocheck Logo" />
            </div>
            <div className="embla__slide">
              <Image src={Flutterwave} alt="Flutterwave Logo" />
            </div>
            <div className="embla__slide">
              <Image src={EvolveCredit} alt="EvolveCredit Logo" />
            </div>
            <div className="embla__slide">
              <Image src={Kuda} alt="Kuda Logo" />
            </div>
            <div className="embla__slide">
              <Image src={Stripe} alt="Stripe Logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurPartners
