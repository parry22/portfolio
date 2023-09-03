import {
  DocumentChartBarIcon,
  ArrowPathIcon,
  PaintBrushIcon,
} from "@heroicons/react/20/solid";
import React from "react";
const features = [
  {
    name: "Data prioritisation",
    description:
      "I gained insights into customer intelligence and mastered data prioritization for both customer analytics and business enhancement.",
    icon: DocumentChartBarIcon,
  },
  {
    name: "Agile experience",
    description:
      "In an agile setting, organizing sprints and joining daily standup calls boosted my adaptability and added value to the business.",
    icon: ArrowPathIcon,
  },
  {
    name: "Designing for AI",
    description:
      "This was the first product I designed for AI. Designing an experience for AI & machine learning was one of the best challenge.",
    icon: PaintBrushIcon,
  },
];
const stats = [
  { name: "Days spent on project", value: "68" },
  { name: "Increased CTR", value: "39.65%", unit: "" },
  { name: "User retention increased", value: "42.08%" },
  { name: "Churn rate reduced", value: "60%" },
];

function Challenges() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
            What I learned & acheived
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            I had a lot of new acheivements and experiences in this company. New
            tech stacks discovered, worked with a diverse groups of people
            throughout the diffrent continents and had a lot of laughs in my
            journey.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>

                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6"></p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="bg-gray-900">
          <div className="mx-auto max-w-7xl mt-10 sm:-ml-8">
            <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.name}
                  className="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8"
                >
                  <p className="text-sm font-medium leading-6 text-gray-400">
                    {stat.name}
                  </p>
                  <p className="mt-2 flex items-baseline gap-x-2">
                    <span className="text-4xl font-semibold tracking-tight text-white">
                      {stat.value}
                    </span>
                    {stat.unit ? (
                      <span className="text-sm text-gray-400">{stat.unit}</span>
                    ) : null}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Challenges;
