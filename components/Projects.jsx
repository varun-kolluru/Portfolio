"use client"
import { HoverEffect } from "./ui/card-hover-effect";

export function Projects() {
  return (
    (
    <div className="mt-30 ">
        <p className="flex justify-center text-2xl md:text-4xl font-bold">Personal 
            <span className="text-purple-300 mx-2">Projects</span>
        </p>
        <p className="flex justify-center text-sm pt-10">(click on cards for GitHub code)</p>
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    </div>
    )
  );
}
export const projects = [
  {
    title: "PGconnect (FullStack App)",
    description:
      "A Mobile app for managing hostel/PG data with social networking features. Tech Stack used: React Native (mobile app), django (backend), postgreesql(database), Security standards:- JWT (authentication), SSL (https requests), Socket programming (chating application), purpleis (cache for quick response), AWS Ec2,RDS (cloud), Figma (designs)",
    link: "https://github.com/varun-kolluru/PGconnect_frontend",
  },
  {
    title: "Data Analyser Web App (with integrated Large Language Model)",
    description:
      "Tech used: Streamlit and pandas.User can perform Data Analysis and Data Visualizations with Interactive Plots, Integrated with OpenAi's LLM to auto generate answers for the queries related to uploaded File.",
    link: "https://github.com/varun-kolluru/Data_Analysis_webapp_with_chatgpt_api",
  },
  {
    title: "MultiClass ChestX-ray Image Classification Using CNNs",
    description:
      "Built a Deep Learning classification model using Tensorflow and compapurple my model performence with different pre-existing models",
    link: "https://github.com/varun-kolluru/Covid_pneumonia_classification",
  },
  {
    title: "Spam Mail Classifier",
    description:
      "",
    link: "https://github.com/varun-kolluru/Spam_mail_classifier",
  },
  {
    title: "UberFare Prediction",
    description:
      "",
    link: "https://github.com/varun-kolluru/uber_fare_Prediction_mobile_app",
  },
  {
    title: "Sentiment Analysis model performace Analysis",
    description:
      "",
    link: "https://github.com/varun-kolluru/sentiment_analysis_model_performance_analysis",
  },
  {
    title: "BigBasket products recommendations",
    description:
      "",
    link: "https://github.com/varun-kolluru/Bigbasket_products_clustering_recommendations",
  }
];
