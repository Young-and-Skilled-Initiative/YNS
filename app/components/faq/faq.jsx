import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { faq_list } from "./faq-list";
const FAQ = () => {
  return (
    <>
      <div className="w-full mt-[135px] mb-[40px] ">
        <div className="w-full flex items-start justify-between gap-[100px]">
          <div className="w-[50%]">
            <h2 className="lg:text-[50px]  font-bold leading-[50px]">
              Frequently Asked <span className=" text-[#00000099]"></span>
              Questions
            </h2>
            <p className="mt-[16px] text-[#00000099] lg:text-[16px] font-normal leading-[32px] ">
              Find quick answers to common queries in our FAQs section, designed
              to address your most pressing questions and provide you with the
              information you need.
            </p>
          </div>

          <div className="w-[50%]">
            {faq_list.map(({ question, answer }) => (
              <Accordion
                className="mb-[34px]"
                key={question}
                type="single"
                collapsible
              >
                <AccordionItem
                  className="lg:w-full bg-[#F6F6F6] border-none rounded-[10px] px-[32px] "
                  value={question}
                >
                  <AccordionTrigger className="no-underline hover:no-underline text-[16px] font-medium ">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
