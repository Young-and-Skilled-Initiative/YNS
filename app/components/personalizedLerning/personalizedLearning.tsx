import Image from 'next/image';
import React from 'react';

const PersonalizedLearning = () => {
  return (
    <div className='mb-96'>
    <div className="  bg-black w-[335px] md:w-[100vw] flex flex-col h-[100vw] gap-12 md:h-[50vw]  relative pt-[1em] mt-6">
      <div className='my-8 text-white px-[4em] relative flex flex-col md:flex-row justify-between items-center'>
      <h1 className='leading-[48.64px] text-[36px] md:text-[40px] font-cocon 2xl:text-6xl'> Personalized <span className='text-[#D2D2D2]'>Learning</span></h1>
     <Image src="/images/star3.svg" alt="star3"  width={50} height={50} className='absolute top-[] md:relative'/>
      <p className='font-manrope  text-[16px] max-w-[35%] 2xl:text-3xl text-[#D2D2D2]'>
        Our programs are tailored to meet the unique needs and interests of each student, ensuring a personalized and impactful learning experience.
      </p>
     
      </div>
    {/* video display */}
    <div className=' flex justify-center items-center pt-12 '>
      <video muted loop  autoPlay className='border w-screen mx-6 border-transparent rounded-xl'>
        <source src="/learn1.mp4" className=''/>
      </video>
    </div>
    {/* end of video display */}
    <Image src="/images/tapStar.svg" width={150} height={150} alt='tabstar' className='z-[9999px]  bottom-32 absolute hidden md:flex'/>
    <Image src="/images/logoCurved.svg" width={150} height={150} alt='tabstar' className='z-[9999px]  top-48 right-5 absolute hidden md:flex'/>
    </div>
    </div>
  )
}

export default PersonalizedLearning