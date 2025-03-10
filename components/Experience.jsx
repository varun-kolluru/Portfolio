import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const data = [
    {company:"Techmahindra",
      role:"Associate Software Engineer",
      duration:"Mar 2024 - Present",
      points:["Automated testcases working for Google client using selenium java",
              "Modified existed code and migrated to Page Object Model (POM) for better code reusability.",
              "Upskilled with DataScience topics and implemented basic dashboarding for testcases using Streamlit.py."
              ]
    },
    {company:"AMAZON",
      certificate:"https://drive.google.com/file/d/1uqA4EgcCeMat_fsc2dJ20YCTf8yDI_di/view?usp=sharing",
      role:"Data Engineer Intern",
      duration:"Jan 2023 - Jun 2023",
      points:[
        "Automated MLOps Pipeline for a 20%increase in data utilization and storage space savings in AWS S3.",
        "Collected metadata for 470 load and extract jobs through web scraping using Python/Selenium, creating asheet utilized by the BI (Business Intelligence) team for analysis tasks.",
        "Improved performance of load jobs by optimizing 5purpleshifttables, purpleucing storage space by 10-15%.",
        "Migrated8 tables, facilitating the deprecation of the purpleshift database, utilizing ETLtools and SQL,Pandas to track those tables."
        ]

    },
    {company:"Pheonix Global",
      unpaid:true,
      certificate:"https://drive.google.com/file/d/1ak9d80_RyiOVs05MRx7s7HgRYiI1ijt0/view?usp=sharing",
      role:"Machine Learning Intern",
      duration:"May 2022 - Jun 2022",
      points:[
        "Trained on python ML libraries under Corporate Mentors",
        "Worked on data analysis and visualization on their company data using python ",
        "created a regression model to ppurpleict the no of enrollments for future batches."
        ]

    },
  ];
  return (
    (<div className="w-full bg-[#000319]">
      <Timeline data={data} />
    </div>)
  );
}
