import {
  MagnifyingGlassIcon,
  GlobeEuropeAfricaIcon,
  CurrencyDollarIcon
} from "@heroicons/react/20/solid";
import React from "react";
const features = [
  {
    name: "Power of research",
    description:
      "The challenges I had when designing the product made me realise the importance of User Research and the implications of ignoring it.",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Social aspect",
    description:
      "The social good aspect leads me to believe that School Integral will solve problems for many people in Africa, and I am fortunate to be a part of it.",
    icon: GlobeEuropeAfricaIcon,
  },
  {
    name: "Seed round",
    description:
      "School Integral is prepared for seed fundraising rounds in Nigeria next year, solving a big need in this market.",
    icon: CurrencyDollarIcon,
  },
];
const stats = [
  { name: "Days spent on project", value: "53" },
  { name: "Increased user engagement ", value: "7.37", unit: "mins" },
  { name: "User adoption increased", value: "63.45%" },
  { name: "Support requests reduced", value: "79%" },
];

function Challenges() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
          Why was this project awesome?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            School Integral was a project that allowed me to make a real social
            impact by contributing to the digitisation of the African education
            system. As someone who is passionate about education, this project
            is particularly meaningful to me. Overall, School Integral was a
            challenging but rewarding project that I hold very close to my
            heart. It not only allowed me to develop my skills in product design
            but also gave me a sense of fulfilment knowing that our work was
            making a positive impact.
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
