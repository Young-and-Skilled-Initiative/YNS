const Hero: React.FC = () => {
  const float: string =
    "py-5 px-6 border-[#8E9BAE] border-[1px] font-lato rounded-[44.98px] text-center text-[#8E9BAE] absolute"
  return (
    <section className=" grid place-content-center relative">
      <div className={`${float} left-[183px] top-[23px] rotate-[-9.3deg] `}>
        Collaboration
      </div>
      <div
        className={`${float} left-[131.62px] top-[186.4px] rotate-[3.14deg]`}
      >
        Future-Ready
      </div>
      <div
        className={`${float} left-[190.36px] bottom-[111.47px] rotate-[16.06deg]`}
      >
        Skill Building
      </div>
      <main className="w-[45.063rem] pt-[49px] pb-[158.03px]">
        <h1 className="font-cocon font-medium text-[74.65px] leading-[90.77px] text-center ">
          Partnerships that Drive Innovation
        </h1>
        <p className="font-manrope pt-4 text-center text-[#00000099]">
          Partnerships empower us to expand our impact and deliver rich learning
          experiences.
        </p>
        <div className="flex justify-center">
          <button className="mt-12 px-10 py-5 font-lato text-xl rounded-[44.98px] text-[#FFFFFF] bg-[#1A1A1A]">
            Become a partner today
          </button>
        </div>
      </main>
      <div className={`${float} right-[120.7px] top-5 rotate-[21.45deg]`}>
        Opportunity
      </div>
      <div className={`${float} right-[146.63px] top-[200px] rotate-[-2.9deg]`}>
        Innovation
      </div>
      <div
        className={`${float} right-[229.14px] bottom-[108px] rotate-[-16.01deg]`}
      >
        Empowerment
      </div>
    </section>
  )
}

export default Hero
