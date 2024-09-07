import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type TestimonialDetails = {
  quote: string;
  company: string;
  description: string;
  name: string;
  position: string;
  image: string;
  bgColor: string;
};

const testimonials: TestimonialDetails[] = [
  {
    quote: "Platform's flexibility allowed me to learn at my own pace",
    company: "Young and Skilled Initiative",
    description:
      "Young and Skilled Initiative gave me the skills and confidence I needed to land my dream job. The platform's flexibility allowed me to learn at my own pace, and the mentorship was invaluable.",
    name: "Maria Obioma",
    position: "Digital Marketing Graduate, Young & Skilled",
    image: "/path/to/image1.jpg",
    bgColor: "#114F3C", // Light beige
  },
  {
    quote: "I've gained the confidence to lead my school's environmental club",
    company: "Google",
    description:
      "Thanks to the mentorship and support, I've gained the confidence to lead my school's environmental club and work on sustainable projects.",
    name: "David Oluah",
    position: "Product Designer, Google",
    image: "/path/to/image2.jpg",
    bgColor: "#98BC6D", // Light blue
  },
  {
    quote: "The mentorship was invaluable.",
    company: "Amazon",
    description:
      "Amazon provided me with the tools to not only excel in my career but also to take control of my future.",
    name: "Chika Nwoke",
    position: "Software Engineer, Amazon",
    image: "/path/to/image3.jpg",
    bgColor: "#EF4C0D", // Light pink
  },
  // Add more testimonials here...
];

export function Testimonial() {
  return (
    <div className="w-full py-10 flex flex-col gap-14">
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
            <CarouselItem key={index} className="basis-1/3 ">
              <Card className="bg-white shadow-lg  h-full">
                <CardContent className="p-0 h-full">
                  <div
                    className="rounded-[20px] p-7 text-white"
                    style={{ backgroundColor: testimonial.bgColor }}
                  >
                    <blockquote className="text-lg font-semibold">
                      {testimonial.quote}
                    </blockquote>
                    <p className="text-sm mt-2">{testimonial.company}</p>
                  </div>
                  <div className="bg-[#F6F6F6] rounded-[20px] py-7 px-5 h-full">
                    <p className="mt-4">{testimonial.description}</p>
                    <div className="mt-6 flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full"
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
