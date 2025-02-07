import { Spotlight } from "./ui/Spotlight";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <div id="about">
      <div>
        <Spotlight className="-top-40" fill="white" />
        <Spotlight className="-top-50 -left-40" fill="white" />

        <Spotlight className="-top-40 left-full " fill="white" />
        <Spotlight className="top-20 left-[90%]" fill="white" />
      </div>
      <div className="h-screen w-full absolute top-0 left-0 dark:bg-black bg-white dark:bg-grid-white/5 bg-grid-black/[0.2]  flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="relative h-screen w-full flex justify-center items-center">
        <div className="flex flex-col gap-y-8 justify-center items-center">
          <p className="uppercase tracking-widest text-xs text-center font-semibold text-blue-100 text-[clamp(0.5rem,1rem,2rem)]">
            Dynamic Web Magic with Next.js
          </p>
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[clamp(1.25rem,2rem,4rem)]"
          />
          <p className="text-center md:tracking-wider mb-4 text-[clamp(1rem,1.5rem,2rem)]">
            Hi! I&apos;m Abobakr, a Web Developer based in Egypt.
          </p>
          <a href="#projects">
            <ButtonsCard
              title="Show My Work"
              position="right"
              icon={
                <svg
                  style={{
                    fill: "white",
                    width: 16,
                    height: 16,
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                </svg>
              }
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
