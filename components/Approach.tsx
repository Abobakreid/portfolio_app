import { workExperience } from "@/constants";
import { Button } from "./ui/moving-border";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Approach = () => {
  return (
    <div className="my-5 px-3">
      <div className="my-5">
        <TextGenerateEffect
          words="My Approach"
          className="text-center text-4xl lg:text-5xl capitalize"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {workExperience.map((exp) => {
          return (
            <Button
              key={exp.desc}
              borderRadius="1.75rem"
              className=" bg-white w-full dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              containerClassName="lg:col-span-6 h-96"
            >
              <div className="flex flex-row flex-wrap px-4 py-8 text-center">
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

export default Approach;
