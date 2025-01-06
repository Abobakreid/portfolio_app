import { workExperience } from "@/constants";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Button } from "./ui/moving-border";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="px-4">
      <TextGenerateEffect
        words="a small selection of recent projects"
        className="text-center text-4xl lg:text-5xl capitalize mb-16"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {workExperience.map((exp) => {
          return (
            <Button
              key={exp.desc}
              borderRadius="1.75rem"
              className=" bg-white w-full dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              containerClassName="lg:col-span-6"
            >
              <div className="flex flex-row flex-wrap px-4 py-8">
                <div>
                  <Image
                    src={exp.thumbnail}
                    alt={exp.title}
                    width={100}
                    height={100}
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <h2>{exp.title}</h2>
                  <p>{exp.desc}</p>
                </div>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
