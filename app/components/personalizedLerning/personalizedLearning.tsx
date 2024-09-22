import Image from 'next/image';
import React from 'react';

const PersonalizedLearning = () => {
  return (
    <div className='mb-60'>
    <div className="  bg-black w-[100vw] h-[50vw] mx-auto relative pt-[1em] mt-6">
      <div className='my-8 text-white px-[4em] flex flex-col md:flex-row justify-between items-center'>
      <h1 className='leading-[48.64px] text-[40px] font-cocon'> Personalized <span className='text-[#D2D2D2]'>Learning</span></h1>
     <Image src="/images/star3.svg" alt="star3"  width={50} height={50}/>
      <p className='font-manrope leading-[32px] text-[16px] max-w-[403px] text-[#D2D2D2]'>
        Our programs are tailored to meet the unique needs and interests of each student, ensuring a personalized and impactful learning experience.
      </p>
     
      </div>
    {/* video display */}
    <div className='absolute flex flex-col px-[4em] items-center pt-12 top-48'>
      <video  autoPlay className='border border-transparent rounded-xl'>
        <source src="/learn1.mp4" width={500} height={450} />
      </video>
    </div>
    <Image src="/images/tapStar.svg" width={150} height={150} alt='tabstar' className='z-[9999px]  bottom-32 absolute'/>
    <Image src="/images/logoCurved.svg" width={150} height={150} alt='tabstar' className='z-[9999px]  top-48 right-5 absolute'/>
    </div>
    </div>
  )
}

export default PersonalizedLearning