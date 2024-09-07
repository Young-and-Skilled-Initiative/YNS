import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/testimonialCarousel";
import Image from "next/image";
import Quote from "../../public/testimonial_quote.svg";

type TestimonialDetails = {
  quote: string;
  company: string;
  description: string;
  quoteImage: string;
  name: string;
  position: string;
  image: string;
  bgColor: string;
  extra: string;
  companyWidth: number;
  companyHeight: number;
  extraWidth: number;
  extraHeight: number;
};

const testimonials: TestimonialDetails[] = [
  {
    quote: "Platform's flexibility allowed me to learn at my own pace",
    company: "/testimonial_young_and_skilled.svg",
    quoteImage: "/testimonial_ellipse.svg",
    description:
      "Young and Skilled Initiative gave me the skills and confidence I needed to land my dream job. The platform's flexibility allowed me to learn at my own pace, and the mentorship was invaluable.",
    name: "Maria Obioma",
    position: "Digital Marketing Graduate, Young & Skilled",
    image: "/testimonial_maria_obioma.svg",
    bgColor: "#114F3C",
    extra: "/testimonial_star_2.svg",
    companyWidth: 80,
    companyHeight: 44,
    extraWidth: 100,
    extraHeight: 100,
  },
  {
    quote: "I've gained the confidence to lead my school's environmental club",
    company: "/testimonial_google.svg",
    quoteImage: "/testimonial_ellipse.svg",
    description:
      "Thanks to the mentorship and support, I've gained the confidence to lead my school's environmental club and work on sustainable projects.",
    name: "David Oluah",
    position: "Product Designer, Google",
    image: "/testimonial_david_oluah.svg",
    bgColor: "#98BC6D",
    extra: "/testimonial_star.svg",
    companyWidth: 114,
    companyHeight: 37,
    extraWidth: 76,
    extraHeight: 76,
  },
  {
    quote: "Young and Skilled Initiative opened my eyes to new possibilities",
    company: "/testimonial_microsoft.svg",
    quoteImage: "/testimonial_ellipse.svg",
    description:
      "Young and Skilled Initiative opened my eyes to new possibilities. The skills I learned here have helped me launch my own app!",
    name: "Sarah Macklin",
    position: "Program Alumna, Microsoft",
    image: "/testimonial_sarah_macklin.svg",
    bgColor: "#EF4C0D",
    extra: "/testimonial_semicircle.svg",
    companyWidth: 135,
    companyHeight: 29,
    extraWidth: 65,
    extraHeight: 32,
  },
  // Add more testimonials here...
];

export function Testimonial() {
  return (
    <Carousel className="w-full bg-white  py-10 flex flex-col gap-14 relative">
      <div className="flex flex-col gap-7">
        <p className="font-medium text-base leading-4 text-center bg-[#FAFAFA] text-[#8E9BAE] rounded-[30px] py-2 px-6 w-fit ">
          Our Success Stories
        </p>

        <div className="flex ">
          <div className="w-[70%] flex flex-col gap-7">
            {" "}
            <p className="text-[#2F2F2F] text-[50px] leading-[55px] font-medium">
              What's your excuse now?
            </p>
            <p className="text-base leading-7">
              Hear from students who have transformed their futures with the
              Young and Skilled Initiative. Our program has helped students
              secure jobs, launch businesses, and pursue further education with
              confidence.
            </p>
          </div>
          <div className="w-[30%]  flex justify-end">
            <CarouselPrevious  />
            <CarouselNext />
          </div>
        </div>
      </div>
      <CarouselContent className="-ml-2 md:-ml-4">
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="basis-1/2 ">
            <Card className="border-none   h-full">
              <CardContent className="p-0 h-full w-[520px]">
                <div
                  className="rounded-[20px] p-7 text-white h-[200px] flex flex-col justify-between "
                  style={{ backgroundColor: testimonial.bgColor }}
                >
                  <blockquote className="text-lg font-medium">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className=" flex justify-between">
                    <Image
                      src={testimonial.company}
                      alt={testimonial.description}
                      width={testimonial.companyWidth} // Use custom width
                      height={testimonial.companyHeight} // Use custom height
                    />
                    <Image
                      src={testimonial.extra}
                      alt={testimonial.description}
                      width={testimonial.extraWidth} // Use custom width
                      height={testimonial.extraHeight} // Use custom height
                    />
                  </div>
                </div>
                <div className="bg-[#F6F6F6] rounded-[20px] py-7 px-5 h-[284px] flex flex-col justify-between">
                  <div className=" flex gap-3">
                    <p
                      className="font-bold text-5xl text-white p-2 h-11 leading-none w-14 flex  justify-center
                      rounded-full "
                      style={{ backgroundColor: testimonial.bgColor }}
                    >
                      <Image
                        src={Quote}
                        alt={""}
                        width={23} 
                        height={54} 
                      />
                    </p>{" "}
                    <div className="flex gap-7 flex-col">
                      <p className="mt-4 text-base">
                        {testimonial.description}
                      </p>
                      <div className="mt-6 flex items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full"
                        />
                        <div className="ml-4">
                          <p className="font-medium text-base ">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
