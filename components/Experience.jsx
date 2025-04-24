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
        "Built and automated MLOps Pipeline using Airflow, which is used for estimating delivery date of orders and Optimized S3 storage using python scripts.",
        "WebScrapped meta data of 470 ETL jobs using Python/Selenium, creating a sheet utilized by the BI (Business Intelligence) team for analysis tasks.",
        "Improved performance of load jobs by optimizing 5 Redshift tables, reducing storage space by 10-15%.",
        "Migrated 8 tables, facilitating the deprecation of the Redshift database, utilizing ETLtools and SQL,Pandas to track those tables."
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
        "created a spam mail classifier model which gave an accuracy of 98% on test set."
        ]

    },
  ];
  return (
    (
    <div className="w-full bg-[#000319]">
      <Timeline data={data} />
    </div>)
  );
}
