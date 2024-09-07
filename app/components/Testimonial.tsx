import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type TestimonialDetails = {
  quote: string;
  company: string;
  description: string;
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
    company: "/young_and_skilled_testimonial.svg",
    description:
      "Young and Skilled Initiative gave me the skills and confidence I needed to land my dream job. The platform's flexibility allowed me to learn at my own pace, and the mentorship was invaluable.",
    name: "Maria Obioma",
    position: "Digital Marketing Graduate, Young & Skilled",
    image: "/Maria Obioma.svg",
    bgColor: "#114F3C",
    extra: "/Star 2.svg",
    companyWidth: 80,
    companyHeight: 44,
    extraWidth: 100,
    extraHeight: 100,
  },
  {
    quote: "I've gained the confidence to lead my school's environmental club",
    company: "/testimonial_google.svg",
    description:
      "Thanks to the mentorship and support, I've gained the confidence to lead my school's environmental club and work on sustainable projects.",
    name: "David Oluah",
    position: "Product Designer, Google",
    image: "/David Oluah.svg",
    bgColor: "#98BC6D",
    extra: "/Star.svg",
    companyWidth: 114,
    companyHeight: 37,
    extraWidth: 76,
    extraHeight: 76,
  },
  {
    quote: "Young and Skilled Initiative opened my eyes to new possibilities",
    company: "/testimonial_microsoft.svg",
    description:
      "Young and Skilled Initiative opened my eyes to new possibilities. The skills I learned here have helped me launch my own app!",
    name: "Sarah Macklin",
    position: "Program Alumna, Microsoft",
    image: "/Sarah Macklin.svg",
    bgColor: "#EF4C0D",
    extra: "/Semicircle.svg",
    companyWidth: 135,
    companyHeight: 29,
    extraWidth: 65,
    extraHeight: 32,
  },
  // Add more testimonials here...
];

export function Testimonial() {
  return (
    <div className="bg-white *:w-full py-10 flex flex-col gap-14">
      <div className="flex flex-col gap-7">
        <p className="font-medium text-base leading-4 text-center bg-[#FAFAFA] text-[#8E9BAE] rounded-[30px] py-2 px-6 w-fit ">
          Our Success Stories
        </p>

        <p className="text-[#2F2F2F] text-[50px] leading-[55px] font-medium">
          What's your excuse now?
        </p>
        <p className="text-base leading-7">
          Hear from students who have transformed their futures with the Young
          and Skilled Initiative. Our program has helped students secure jobs,
          launch businesses, and pursue further education with confidence.
        </p>
      </div>

      {/* Carousel Section */}
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="basis-1/3 bg-none ">
              <Card className="border-none bg-none  shadow-lg  h-full">
                <CardContent className="p-0 h-full w-[620px]">
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
                    <p className="mt-4">{testimonial.description}</p>
                    <div className="mt-6 flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full"
                      />
                      <div className="ml-4">
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
