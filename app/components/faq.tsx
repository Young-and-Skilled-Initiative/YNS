import Section from "@/components/layout/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Define the type for the props, making `className` optional
interface FAQProps {
  className?: string; // className is optional
}

const FAQ: React.FC<FAQProps> = ({ className }) => {
  const faq_list = [
    {
      question: "What is Young & Skilled?",
      answer:
        " Young and Skilled Initiative, where we believe that every student has the potential to achieve greatness. Our mission is to provide high-quality learning experiences that equip young minds with the skills and knowledge they need to thrive in an ever-changing world.",
    },
    {
      question: "What courses do you offer?",
      answer:
        "We offer a wide range of courses across various fields, including technology, business, healthcare, arts, and more. Visit our courses page to explore the full list. ",
    },
    {
      question: "How do I enroll in a course?",
      answer:
        "Enrolling is simple! Just create an account, browse our course offerings, and click the Enroll Now button on the course page.",
    },
    {
      question: "Do I receive a certificate after completing a course?",
      answer:
        " Absolutely! Upon successful completion of a course, you will receive a certificate that you can share with potential employers.",
    },
    {
      question: "Can I access the courses on my mobile device?",
      answer:
        " Yes, our e-learning platform is fully optimized for mobile devices, so you can learn on the go.",
    },
  ];

  return (
    <Section id="faq" className={`  ${className}`}>
      <div className="w-full flex flex-col lg:flex-row items-start justify-between lg:gap-[100px]">
        <div className="w-full lg:w-[50%]">
          <h2 className="text-[30px] lg:text-[50px] font-bold font-cocon leading-[50px]">
            Frequently Asked <span className="text-[#00000099]">Questions</span>
          </h2>
          <p className="mt-[16px] w-full md:w-[65%] leading-[32px] font-manrope text-[16px] font-normal text-[#00000099]">
            Find quick answers to common queries in our FAQs section, designed
            to address your most pressing questions and provide you with the
            information you need.
          </p>
        </div>

        <div className="w-full mt-[32px] lg:mt-0 lg:w-[50%]">
          {faq_list.map(({ question, answer }) => (
            <Accordion
              className="mb-[16px] lg:mb-[34px] outline-none"
              key={question}
              type="single"
              collapsible
            >
              <AccordionItem
                className="lg:w-full bg-[#F6F6F6] border-none rounded-[10px] px-[32px] transition-colors duration-200 ease-in-out hover:bg-[#1A1A1A] hover:text-white"
                value={question}
              >
                <AccordionTrigger className="no-underline hover:no-underline text-[9.8px] lg:text-[16px] font-cocon font-medium">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-[9.8px] lg:text-[16px]">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
