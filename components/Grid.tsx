import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "@/constants";

const Grid = () => {
  return (
    <BentoGrid className="max-w-7xl mx-auto">
      {gridItems.map((item) => (
        <BentoGridItem
          className={item.className}
          key={item.id}
          title={item.title}
          description={item.description}
          id={item.id}
          img={item.img}
          imgClassName={item.imgClassName}
          spareImg={item.spareImg}
          titleClassName={item.titleClassName}
        />
      ))}
    </BentoGrid>
  );
};

export default Grid;
