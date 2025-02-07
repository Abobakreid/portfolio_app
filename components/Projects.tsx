"use client";
import { projects } from "@/constants";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Projects = () => {
  return (
    <div className="sm:my-24" id="projects">
      <div>
        <TextGenerateEffect
          words="a small selection of recent projects"
          className="text-center text-4xl lg:text-5xl capitalize"
        />
      </div>
      <div className="w-full flex max-lg:flex-col sm:gap-y-36  flex-row flex-wrap  justify-between container mx-auto">
        {projects.map((project) => {
          return (
            <PinContainer
              key={project.id}
              title={project.title}
              href={project.link}
              className=" w-full overflow-hidden"
              containerClassName=" w-full mt-44 lg:w-[45%]"
            >
              <div className="flex basis-full relative flex-col  p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-full min-h-80">
                <Image
                  src={"/bg.png"}
                  alt={project.des}
                  width={100}
                  height={100}
                  className="absolute top-0 left-0 size-full"
                />
                <div>
                  <Image
                    src={project.img}
                    alt={project.des}
                    width={100}
                    height={100}
                    className="!w-full !h-full rotate-2 rounded-lg skew-x-1"
                  />
                </div>
                <div className="mt-2">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p>{project.des}</p>
                </div>
                <div className="flex flex-row justify-between items-center mt-3">
                  <div className="flex flex-row gap-1">
                    {project.iconLists.map((icon) => {
                      return (
                        <Image
                          key={icon}
                          src={icon}
                          alt={icon}
                          width={24}
                          height={24}
                        />
                      );
                    })}
                  </div>
                  <div>
                    <h2>Check Live Site</h2>
                  </div>
                </div>
              </div>
            </PinContainer>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(Projects);
