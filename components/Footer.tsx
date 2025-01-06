import { socialMedia } from "@/constants";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="py-7" id="contact">
      <div className="flex flex-col justify-center items-center">
        <TextGenerateEffect
          words="Ready to take 
          presence to the next level?"
          className="text-center text-4xl lg:text-5xl capitalize"
        />
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <ButtonsCard
          title="Let's get in touch"
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
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <h2>All rights reserved © 2025 Abobakr.</h2>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
