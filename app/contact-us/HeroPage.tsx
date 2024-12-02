import Image from "next/image";

interface HeroPageProps {
    className: string;
}

const HeroPage: React.FC<HeroPageProps> = ({ className }) => {
    return (
        <div className={`bg-[url('/images/greenbackground.svg')] w-full h-[60vh] flex flex-col md:justify-center md:items-center border px-8 ${className}`}>
            <h1 className="text-white text-[40px] w-[210px] md:w-full md:text-center md:text-[60px] font-cocon py-4 md:leading-[32px] mt-6 leading-[40px]">
                Let&apos;s Get In <span className="bg-touch-color-gradient text-transparent bg-clip-text">Touch</span>
            </h1>
            <p className="text-white font-manrope text-[16px] md:mt-0 md:w-[35%] w-[335px] leading-loose tracking-wide md:text-center text-left font-light">
                We&apos;re thrilled to hear from you! Whether you have a question about Young & Skilled Initiative, need assistance, or just want to say hello, we&apos;re here and ready to help.
            </p>

            <Image src="/images/Star1.svg" width={100} height={100} alt="arrow image" className="absolute md:top-20 left-80 animate-spin-slow md:w-[100] md:h-[100] w-[56px] h-[56px] top-2" />
            <Image src="/images/male_one_illustration.svg" width={69.13} height={100} alt="arrow image" className="absolute md:bottom-28 md:right-96 md:w-[69.13px] md:h-[100px] w-[48.15px] h-[48.15px] bottom-36 right-48" />
            <Image src="/images/female_one_illustration.svg" width={92.63} height={100} alt="arrow image" className="absolute md:top-32 md:right-48 md:w-[92.63px] md:h-[100px] w-[64.51px] h-[64.51px] bottom-28 right-8" />
            <Image src="/images/male_two_illustration.svg" width={78.45} height={100} alt="arrow image" className="absolute md:bottom-28 bottom-10 left-24 md:left-72 md:w-[78.45] md:h-[100px] w-[55.06px] h-[55.06px]" />
            <Image src="/images/female_two_illustration.svg" width={80.51} height={100} alt="arrow image" className="absolute md:top-48 md:left-48 bottom-28 left-2 md:w-[80.51] md:h-[100px] w-[56.5px] h-[56.5px]" />
        </div>
    );
};

export default HeroPage;
