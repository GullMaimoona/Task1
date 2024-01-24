import Image from "next/image";
import logo from "/public/logo.png";
import React from "react";

export const Header = () => {
  return (
    <div className="flex flex-row items-center justify-start h-16 px-[162.28px] bg-[#FFFFFF]">
      <Image src={logo} alt="logo" width={140} height={37.94} />
    </div>
  );
};
