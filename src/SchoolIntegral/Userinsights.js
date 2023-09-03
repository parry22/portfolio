import {
  AdjustmentsVerticalIcon,
  FolderOpenIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/20/solid";
import React from "react";
const features = [
  {
    name: "User segmentation",
    description:
      "During onboarding, users should be segmented into government, students, parents, teachers, and non-governmental organisations (NGOs) for a more tailored experience.",
    icon: AdjustmentsVerticalIcon,
  },
  {
    name: "Information prioritisation",
    description:
      "Due to the abundance of information, the primary dashboard page should provide access to only the relevant information while leaving the rest of the information on  separate pages.",
    icon: FolderOpenIcon,
  },
  {
    name: "Non-Digital Proficiency",
    description:
      "Given that most of our users lacked technical expertise, the interface had to be straightforward and free from unnecessary technical complexity.",
    icon: DevicePhoneMobileIcon,
  },
];

function Challenges() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Some of my research findings
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Usually, I look forward to conducting initial user and market
            research but when Mr. Ifechukwu approached me, they already
            provided me the initial market and user research conducted by themselves, enough to
            start with synthesising research results. While walking through the
            research insights, so these were the main solutions I came up with.
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
      </div>
    </div>
  );
}
export default Challenges;
