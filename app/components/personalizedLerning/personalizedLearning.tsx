import Image from 'next/image';
import React from 'react';

const PersonalizedLearning = () => {
  return (
    <div className=" bg-black w-[100vw] relative pt-[1em] items-center mt-6">
      <div className='my-8 text-white px-[4em] flex flex-col md:flex-row justify-between items-center'>
      <div>
          <h1 className='leading-[48.64px] text-[40px] font-cocon'> Personalized <span className='text-[#D2D2D2]'>Learning</span></h1>
      </div>
     <div>
     <Image src="/images/star3.svg" alt="star3"  width={50} height={50}/>
     </div>
      <div>
      <p className='font-manrope leading-[32px] text-[16px] max-w-[403px] text-[#D2D2D2]'>
        Our programs are tailored to meet the unique needs and interests of each student, ensuring a personalized and impactful learning experience.
      </p>
      </div>
      </div>
    {/* video display */}
    <div className='absolute border boreder-transparent'>
      <video src='/assets'/>
    </div>
    </div>
  )
}

export default PersonalizedLearning