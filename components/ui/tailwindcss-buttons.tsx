"use client";
import React from "react";

export const ButtonsCard = ({
  title,
  icon,
  position,
  handleClick,
}: {
  title: React.ReactNode;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
}) => {
  return (
    <button
      onClick={handleClick}
      className="relative inline-flex overflow-hidden h-12 md:w-60 p-1 rounded-lg"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex cursor-pointer gap-2 w-full items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {position == "left" && icon}
        {title}
        {position == "right" && icon}
      </span>
    </button>
  );
};
