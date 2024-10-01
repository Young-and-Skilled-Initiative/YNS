// Values.tsx
import React from "react";
import { coreValues } from "@/data";
import { CoreValue } from "@/types";

const Values: React.FC = () => {
  return (
    <section className="p-6 pr-11 font-cocon bg-white w-full">
      <h1>Core Values</h1>
      <div className="flex flex-wrap lg:flex-nowrap gap-5 lg:justify-between  items-center w-ull">
        {coreValues.map((value: CoreValue) => (
          <div
            key={value.id}
            className={`relative w-[220px] h-[215px] xl:w-[295px] xl:h-[265px] px-6 ${value.backgroundColor} ${value.padding} flex items-end justify-center text-white font-medium text-3xl xl:text-[40px] xl:leading-[48px] rounded-[10px]`}
          >
            <p>{value.title}</p>
            <img
              src={value.sticker}
              alt="sticker"
              className="absolute top-[-27px] right-[-15px] w-[100px] h-[100px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
