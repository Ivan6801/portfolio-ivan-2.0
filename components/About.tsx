/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import IvanGonzalezAbout from "../assets/images/IvanGonzalezImage.jpeg";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 style={{ top: "-40px"}} className="absolute uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
      >
        <Image
          className="-mb-20 md:mb-0 flex-shrink-0 rounded-full w-56 h-56 object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
          width={450}
          height={600}
          src={IvanGonzalezAbout}
          alt="Ivan Gonzalez"
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio,
          incidunt. Modi facilis quam maiores voluptatem optio adipisci,
          perspiciatis excepturi sapiente, neque quidem provident, sint aliquam
          consequuntur cumque eligendi laudantium. Autem. 🚀
        </p>
      </div>
    </div>
  );
}
