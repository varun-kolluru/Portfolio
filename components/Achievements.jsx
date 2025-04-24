"use client";

import Carousel from "@/components/ui/carousel";
import { motion } from "framer-motion";

export function Achievements() {
  const slideData = [
    {
      des: "Participated and secured Special certificate in AI hackathon conducted by mercor.com",
      btn_title: "Certificate",
      btn_src:"https://drive.google.com/file/d/1iIfZiEkLasGUxfYt9OmlZ6-QqLkbN_jH/view?usp=sharing",
      img_src: "https://mercor.com/name-logo-white.png",
    },
    {
      des: "Amoung top 4% coders in Leetcode",
      btn_title: "profile",
      btn_src:"https://leetcode.com/u/vk_21/",
      img_src: "https://miro.medium.com/v2/resize:fit:1008/1*0HMd3UBqpu478hk_HbhEaA.png",
    },
    {
      des: "In LeetCode achieved Contest Rating 1900+ and Solved 500+ problems",
      btn_title: "profile",
      btn_src:"https://leetcode.com/u/vk_21/",
      img_src: "https://miro.medium.com/v2/resize:fit:1008/1*0HMd3UBqpu478hk_HbhEaA.png",
    },
    {
      des: "Achieved Gold 5-star python badge in Hacker Rank",
      btn_title: "profile",
      btn_src:"https://www.hackerrank.com/profile/varun_kolluru",
      img_src: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    },
    {
      des: "Achieved Gold 5-star Problem Solving badge in Hacker Rank ",
      btn_title: "profile",
      btn_src:"https://www.hackerrank.com/profile/varun_kolluru",
      img_src: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    }
  ];
  return (
    (
    <div>
    <div className="relative w-full h-full py-10">
      <motion.div  initial={{ opacity: 0.5, translateX:200 }}
        whileInView={{ opacity: 1 , translateX:0}}
        transition={{
          delay: 0.5,
          duration: 1,
          ease: "easeInOut",
        }}>
        <div className="flex justify-center items-center py-10"><p className="font-bold text-2xl md:text-4xl text-purple-300"> Achievements</p></div>
      <Carousel slides={slideData} />
      </motion.div>

    </div>

    <div className="flex justify-center mt-10">
    <motion.div initial={{opacity:0.5, scale:0.5, transform: "translateX(-200px)"}} whileInView={{opacity: 1 , scale:1, transform: "translateX(0px)" }} transition={{duration:4, type: "spring"}}>
        <h1 className="font-bold text-2xl md:text-4xl py-3 mt-3">Achievements in <span className="text-purple-300">Academics</span></h1>
        <ul className="list-disc ml-4">
          <li>All India Rank 535 in GATE 2025 Data Science and Artificial Intelligence</li>
          <li>Qualified GATE 2025 Computer Science</li>
          <li>Qualified JEE mains 2019 with 93 percentile</li>
        </ul>
    </motion.div>
    </div>
    </div>
    )
  );
}
