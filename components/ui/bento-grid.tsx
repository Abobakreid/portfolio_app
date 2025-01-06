import { cn } from "@/lib/utils";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./background-gradient-animation";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 px-5 md:grid-cols-3  md:grid-rows-4   gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  spareImg,
  titleClassName,
}: {
  className?: string;
  title?: string;
  description?: string;
  id: number;
  img: string;
  imgClassName: string;
  spareImg: string;
  titleClassName: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl max-md:h-72 relative overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-center flex flex-col space-y-4",
        className,
        `${id === 1 || id === 5 ? "md:col-span-2 md:row-span-2" : ""}`
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div
        className={cn(
          `flex ${
            id !== 3 ? "justify-center" : "justify-center "
          }  h-full items-center`
        )}
      >
        <div className="flex justify-center w-full h-full absolute top-0 left-0">
          {img && (
            <Image
              src={`${img}`}
              alt={`${description}`}
              width={100}
              height={100}
              className={cn(imgClassName, "!w-full !h-full object-cover")}
            />
          )}
        </div>
        <div className="flex justify-center w-full h-full absolute -bottom-10 -right-10 opacity-80">
          {spareImg && (
            <Image
              src={`${spareImg}`}
              alt={`${spareImg}`}
              width={100}
              height={100}
              className="!w-full !h-full object-contain "
            />
          )}
        </div>
        <div className="flex justify-center w-full h-full absolute top-0 left-0">
          {id === 6 && (
            <BackgroundGradientAnimation>
              <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
            </BackgroundGradientAnimation>
          )}
        </div>
        <div
          className={cn(
            "relative left-0 z-10 flex flex-col gap-3 ",
            titleClassName
          )}
        >
          <div className="font-sans font-bold h-full  text-neutral-600 dark:text-neutral-200">
            {title}
          </div>
          <div className="font-sans font-normal h-full text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
        </div>
        {id === 3 && (
          <div className="flex flex-col gap-2 mr-8">
            {["typescript ", "react", "nextjs", "reactNative"].map((tech) => (
              <span
                key={tech}
                className="flex py-2 px-1 justify-center bg-slate-300/15 rounded-2xl"
              >
                {tech}
              </span>
            ))}
            <span className="flex py-2 px-1 bg-slate-300/15 rounded-2xl"></span>
          </div>
        )}
        {id === 3 && (
          <div className="flex flex-col gap-2 absolute -right-12">
            <span className="flex py-2 px-1  bg-slate-300/15 rounded-2xl"></span>
            {["typescript ", "react", "nextjs", "reactNative"].map((tech) => (
              <span
                key={tech}
                className="flex py-2 px-1 justify-center bg-slate-300/15 rounded-2xl"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
