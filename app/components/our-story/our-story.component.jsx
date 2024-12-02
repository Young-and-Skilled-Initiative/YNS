const OurStory = () => {
  return (
    <div className="w-full mt-[75px]">
      <div className="text-center">
        <div className="inline-block px-6 py-2 bg-[#FAFAFA] rounded-full w-[129px] ">
          <h3 className="text-[#8E9BAE] font-medium font-manrope text-[16px]">
            Gallery
          </h3>
        </div>
        <h2 className="text-[40px] leading-[48.64px] font-medium mt-[30px] font-cocon ">
          Our Stories
        </h2>
        <p className="mt-4 text-[#00000099] text-base leading-[32px] px-[86px] mx-auto font-manrope ">
          Our learning programs are designed to nurture creativity, critical
          thinking, and collaboration, helping students to become the
          <br />
          changemakers of tomorrow.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-3 gap-4 items-center">
        <div className="space-y-4">
          <img
            src="/images/story-1.svg"
            alt="Story 1"
            className="w-full h-[354px] object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/story-2.svg"
            alt="Story 2"
            className="w-full h-[354px] object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/story-3.svg"
            alt="Story 2"
            className="w-full h-[354px] object-cover rounded-lg shadow-md"
          />
        </div>

        <div>
          <img
            src="/images/story-4.svg"
            alt="Story 3"
            className="w-full h-[1106px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-4">
          <img
            src="/images/story-5.svg"
            alt="Story 4"
            className="w-full h-[541px] object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/story-6.svg"
            alt="Story 5"
            className="w-full h-[541px] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
