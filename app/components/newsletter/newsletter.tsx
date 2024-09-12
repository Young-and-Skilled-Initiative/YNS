"use client";
import "./newsletter.css"

const newsletter = () => {
  return (
    <div className="newsletter flex flex-col    rounded-3xl p-[2em] justify-between ">
      <div className=" flex flex-col ">
        <h1 className="font-cocon text-white text-[50px]">Join the Movement</h1>
        <p className="font-manrope text-white ">Are you ready to take the next step in your learning journey? Sign up  </p>
        <p className="font-manrope text-white ">now and start exploring a world of opportunities with Young and</p>
        <p className="font-manrope text-white font-th">Skilled Initiative. Your future begins here!</p>
      </div> 
      <div className="flex gap-[2em]">
        <input type="text" className="bg-white p-[1em] rounded-full  w-[30em]" placeholder="Enter your Email" />
        <button type="submit" className="bg-black py-[1em] px-[2em] text-white text-manrope text-[20px] rounded-full "  >Join Waitlist</button>
        <button className="bg-slate-300 p-[1em] rounded-full text-whit">Browse Courses</button>

      </div>
      
    </div>
  )
}

export default newsletter
