import { Circle, CircleDot } from "lucide-react";
import React from "react";

export const Description = () => {
  return (
    <div className="flex flex-col">
      <div className="h-[66px] w-full bg-gradient-to-b from-white via-white to-[#F6F6F8]"></div>
      <div className="flex flex-col gap-[15px] bg-[#F6F6F8] px-[205px]">
        <p className="text-7xl font-bold leading-[120%] tracking-[0%] text-[#0D1017]">
          Multi-Agent Automation Plans.
        </p>
        <p className="inline-flex h-[93px] w-[995px] items-start justify-start text-2xl font-normal leading-[150%] tracking-[0%] text-[#0D1017]">
          From your first agent to automating your entire enterprise, SmythOS
          has plans that meet your current and future needs.
        </p>
        <div className="inline-flex items-center gap-[59px]">
          <div className="inline-flex items-center">
            <Circle />
            <p className="ml-[10px] text-2xl font-normal leading-[150%] tracking-[0%] text-[#565656]">
              Pay monthly
            </p>
          </div>
          <div className="inline-flex items-center">
            <CircleDot color="#37C785" />
            <p className="ml-[10px] text-2xl font-normal leading-[150%] tracking-[0%] text-[#37C785]">
              Pay yearly (Save 33%)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
