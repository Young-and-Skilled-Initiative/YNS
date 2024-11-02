import Image from "next/image";

interface HeroPageProps {
    className: string;
}

const HeroPage: React.FC<HeroPageProps> = ({ className }) => {
    return (
        <div className={`bg-[url('/images/greenbackground.svg')] h-[60vh] flex flex-col justify-center items-center ${className}`}>
            <h1 className="text-white text-[60px] font-cocon py-4">
                Let&apos;s Get In <span className="bg-touch-color-gradient text-transparent bg-clip-text">Touch</span>
            </h1>
            <p className="text-white font-manrope text-[16px] w-[35%] leading-loose tracking-wide text-center font-light">
                We&apos;re thrilled to hear from you! Whether you have a question about Young & Skilled Initiative, need assistance, or just want to say hello, we&apos;re here and ready to help.
            </p>

            <Image src="/images/Star1.svg" width={100} height={100} alt="arrow image" className="absolute top-20 left-80 animate-spin-slow" />
            <Image src="/images/male_one_illustration.svg" width={69.13} height={100} alt="arrow image" className="absolute bottom-28 right-96" />
            <Image src="/images/female_one_illustration.svg" width={92.63} height={100} alt="arrow image" className="absolute top-32 right-48" />
            <Image src="/images/male_two_illustration.svg" width={78.45} height={100} alt="arrow image" className="absolute bottom-28 left-72" />
            <Image src="/images/female_two_illustration.svg" width={80.51} height={100} alt="arrow image" className="absolute top-48 left-48" />
        </div>
    );
};

export default HeroPage;
