import { socialMedia } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-7  w-full mt-20 shadow-md shadow-white">
      <div className="flex flex-col lg:flex-row justify-between items-center container mx-auto">
        <h2>All rights reserved © 2025 Abobakr.</h2>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <Link
              href={info.link}
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
