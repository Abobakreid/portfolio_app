"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

const RecentProject = () => {
  return (
    <div className="w-full lg:w-[40%] flex items-center justify-center mt-20">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
        className=" w-full"
        containerClassName=" w-full mt-40"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-full">
          <h2>/ui.aceternity.com</h2>
        </div>
      </PinContainer>
    </div>
  );
};

export default RecentProject;
