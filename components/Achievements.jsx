"use client";

import Carousel from "@/components/ui/carousel";
export function Achievements() {
  const slideData = [
    {
      des: "Participated and secupurple Special Top50 certificate in AI hackathon conducted by mercor.com",
      btn_title: "Certificate",
      btn_src:"https://drive.google.com/file/d/1iIfZiEkLasGUxfYt9OmlZ6-QqLkbN_jH/view?usp=sharing",
      img_src: "https://mercor.com/name-logo-white.png",
    },
    {
      des: "In LeetCode achieved Contest Rating 1900+ and solved 500+ problems",
      btn_title: "profile",
      btn_src:"https://leetcode.com/u/vk_21/",
      img_src: "https://miro.medium.com/v2/resize:fit:1008/1*0HMd3UBqpu478hk_HbhEaA.png",
    },
    {
      des: "Achieved Gold 5-star badge in Python",
      btn_title: "profile",
      btn_src:"https://www.hackerrank.com/profile/varun_kolluru",
      img_src: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    },
    {
      des: "Achieved Gold 5-star badge in Problem Solving",
      btn_title: "profile",
      btn_src:"https://www.hackerrank.com/profile/varun_kolluru",
      img_src: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    }
  ];
  return (
    (<div className="relative w-full h-full py-10">
        <div className="flex justify-center items-center py-10"><p className="font-bold text-2xl md:text-4xl text-purple-400"> Achievements</p></div>
      <Carousel slides={slideData} />
    </div>)
  );
}
