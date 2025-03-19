"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import ColourfulText from "@/components/ui/colourful-text";
import { motion } from "motion/react";

export function About() {
  return (
    <div className="pb-10">
      <div className="hidden md:block"><Spotlight/></div>
      <div className="hidden md:block"><Spotlight/></div>
      <div className="hidden md:block"><Spotlight/></div>

      <div className="flex flex-col justify-center items-center py-16 md:py-32 text-center">
      <motion.div initial={{opacity:0.5, scale:0.5, transform: "translateY(-100px)"}} whileInView={{opacity: 1 , scale:1, transform: "translateY(0px)" }} transition={{duration:4, type: "spring"}}>
        <p className="text-xs md:text-sm">Made with NEXT.JS</p>
        <p className="text-2xl md:text-6xl font-bold">Hey Everyone,</p>
        <p className="text-2xl md:text-6xl font-bold">
          I am <span className="text-purple-300"><ColourfulText text="Varun Kolluru" /></span>
        </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{duration: 3,scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },}}>
        <div className="mt-10">
          <img className="size-50 rounded-full" src="/Images/my_pic3.png"/>
        </div>
        </motion.div>
      </div>
      
      <div className="px-4 md:px-64">
        <motion.div initial={{opacity:0.5, scale:0.5, transform: "translateX(-200px)"}} whileInView={{opacity: 1 , scale:1, transform: "translateX(0px)" }} transition={{duration:4, type: "spring"}}>
        <h1 className="font-bold text-2xl md:text-4xl py-3"> <span className="text-purple-300">About</span> me</h1>
        <p className="text-base md:text-xl">
          I am a passionate Computer Science Engineer with 1.5+ years of professional work experience in Software development Engineering and Data Science. I am proficient in Data Structures and Algorithms and an ML/AI enthusiast with a strong understanding of ML mathematics, algorithms and hands-on experience in Data analysis and Data Engineeing.
        </p>
        </motion.div>
        <motion.div initial={{opacity:0.5, scale:0.5, transform: "translateX(200px)"}} whileInView={{opacity: 1 , scale:1, transform: "translateX(0px)" }} transition={{duration:4, type: "spring"}}>
        <h1 className="font-bold text-2xl md:text-4xl py-3 mt-3"> <span className="text-purple-300">Education</span></h1>
        <p>Computer Science and Engineering at Gandhi Institute of Technology and Management (2019 - 2023)</p>
        </motion.div>
      </div>

    </div>
  );
}