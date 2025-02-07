import { mySkills } from "@/constants";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <section className="bod mb-64" id="skills">
      <h2 className="font-semibold text-center text-[clamp(2rem,2.5rem,3rem)] mb-40 ">
        Making App With Modern technologies
      </h2>
      <div className="flex flex-row flex-wrap justify-center gap-3 mt-10">
        {mySkills.map((skill) => (
          <Image
            key={skill.id}
            src={skill.img}
            alt={skill.img}
            width={100}
            height={100}
            className="object-contain size-14 lg:size-20"
          />
        ))}
      </div>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default Skills;
