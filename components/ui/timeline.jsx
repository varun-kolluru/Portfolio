"use client";;
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({
  data
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (

    <div
      className="w-full bg-[#000319] "
      ref={containerRef}>
      <div className="max-w-7xl mx-auto pt-10 px-4 md:px-8 lg:px-10">
        <p className="text-2xl md:text-4xl font-bold">
          Professional Work <span className="text-purple-400">Experience</span>
        </p>
        <p
          className=" text-sm md:text-base">
          I have work experience in wide range of tools and technologies related to software development and Data Science .
        </p>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto">
      {data.map((item, index) => (
        <div key={index} className="pt-8 md:pt-12">
          <div className="flex ml-2.5 md:ml-8 items-start">
            <div className="relative top-1 flex-shrink-0 size-5 mx-1.5 rounded-full z-40 bg-white" />

            <div>
              <div className="flex">
              <p className="text-xl font-bold md:text-2xl text-purple-400">{item.company}</p>
                {item.unpaid && (<p className="ml-2">(unpaid internship)</p>)}
                {item.certificate && (
                 <a href={item.certificate} className="ml-4 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-400 font-medium rounded-lg text-sm px-2 py-1 focus:outline-none">certificate</a>
                  )}
              </div>
              <span className="text-xl font-bold text-white">
                {item.role} <span className="text-base">({item.duration})</span>
              </span>
              <ul className="list-disc ml-5">
                {item.points?.map((point, i) => (
                  <li key={i} className="pt-2">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}

        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-6 md:left-12 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-400 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
    </div>
  );
};
