"use client";

import { companies, testimonials } from "@/constants";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";
const Clients = () => {
  return (
    <>
      <div className="mb-10 mt-24" id="testimonials">
        <TextGenerateEffect
          words="a small selection of recent projects"
          className="text-center text-4xl lg:text-5xl capitalize"
        />
      </div>
      <div className="flex flex-col ">
        <div className="flex flex-col">
          <div className="antialiased ">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 my-8 max-lg:mt-10">
        {companies.map((company) => {
          return (
            <div key={company.img} className="flex md:max-w-60 max-w-32 gap-2">
              <Image
                src={company.img}
                alt={company.name}
                width={5}
                height={10}
                className="md:w-10 w-5"
              />
              <Image
                src={company.nameImg}
                alt={company.name}
                width={company.id === 4 || company.id === 5 ? 100 : 150}
                height={10}
                className="md:w-24 w-20"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Clients;
