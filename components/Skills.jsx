"use client";

import { Tabs } from "@/components/ui/tabs";

export function Skills() {
  const tabs = [
    {
      title: "Languages",
      value: "Languages",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-2 text-xl md:text-xl text-white bg-gradient-to-br from-purple-500 to-purple-500">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">Python</p>
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">SQL</p>
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">Java</p>
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">JavaScript</p>
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">C</p>
        </div>
        </div>
      ),
    },
    {
      title: "Web Dev",
      value: "Web Dev",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-2xl text-white bg-gradient-to-br from-purple-500 to-purple-500">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">HTML</p>
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">Tailwind CSS</p>
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">React.JS</p>
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">Next.JS</p>
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">FastAPI</p>
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">Django</p>
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">REST apis</p>
        </div>
        </div>
      ),
    },
    {
      title: "ML",
      value: "ML",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl text-white bg-gradient-to-br from-purple-500 to-purple-500">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">Pandas, Numpy, math.plot.lib</p>
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">Regression, Classification algorithms</p>
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">Clustering algorithms</p>
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">Dimensionality reduction</p>
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">In depth Math behind ML algorithms</p>
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">TensorFlow</p>
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">DeepLearning</p>
            </div>
        </div>
      ),
    },
    {
      title: "Other tools/technologies",
      value: "Other tools/technologies",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl text-white bg-gradient-to-br from-purple-500 to-purple-500">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">AWS (EC2,S3,redshift,RDS,Elastic Cache)</p>
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">Git/GitHub</p>
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">ETL</p>
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">PostgreeSQL</p>
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">Apache Airflow</p>
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">Web Socket programming</p>
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">Postman</p>
            <p className="bg-white/20 p-2 rounded text-sm font-bold text-center">Selenium</p>
            </div>
        </div>
      ),
    },
  ];

  return (
    (
    <div
      className="h-[25rem] md:h-[20rem] [perspective:1000px] relative b flex flex-col mx-auto items-start justify-start mt-15 mb-30 px-4 md:px-64">
      <p className="pb-8 font-bold text-2xl md:text-4xl">My <span className=" text-purple-400">Skills</span></p>
      <Tabs tabs={tabs} />
    </div>)
  );
}

