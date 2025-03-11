"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import ColourfulText from "@/components/ui/colourful-text";

export function About() {
  return (
    <div className="pb-10">
      <div className="hidden md:block"><Spotlight/></div>
      <div className="hidden md:block"><Spotlight/></div>
      <div className="hidden md:block"><Spotlight/></div>
      <div className="flex flex-col justify-center items-center py-16 md:py-32 text-center">
        <p className="text-xs md:text-sm">Made with NEXT.JS</p>
        <p className="text-2xl md:text-6xl font-bold">Hey Everyone,</p>
        <p className="text-2xl md:text-6xl font-bold">
          I am <span className="text-purple-400"><ColourfulText text="Varun Kolluru" /></span>
        </p>
        <div className="mt-10">
          <img className="size-50 rounded-full" src="/Images/my_pic3.png"/>
        </div>
      </div>
      <div className="px-4 md:px-64">
        <h1 className="font-bold text-2xl md:text-4xl py-3"> <span className="text-purple-400">About</span> me</h1>
        <p className="text-base md:text-xl">
          I am a passionate Computer Science Engineer with 1.5+ years of professional work experience in Software development Engineering and Data Science. I am proficient in Data Structures and Algorithms and an ML/AI enthusiast with a strong understanding of ML mathematics, algorithms and hands-on experience in Data analysis and Data Engineeing.
        </p>
        <h1 className="font-bold text-2xl md:text-4xl py-3 mt-3"> <span className="text-purple-400">Education</span></h1>
        <p>Computer Science and Engineering at Gandhi Institute of Technology and Management (2019 - 2023)</p>
        <p>CGPA: 8.77 / 10</p>
      </div>

    </div>
  );
}