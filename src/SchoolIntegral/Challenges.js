import {
  DocumentMagnifyingGlassIcon,
  PuzzlePieceIcon,
  AcademicCapIcon,
} from "@heroicons/react/20/solid";
import React from "react";
const features = [
  {
    name: "Records management",
    description:
      "The absence of a general repository of information framework to enable real-time access to student records in relation to number, gender distribution, enrolment, etc.",
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    name: "Data integration",
    description:
      "Inability to integrate data and data systems in a way that makes it available to support monitoring, regulation, and evaluation for policy analysis.",
    icon: PuzzlePieceIcon,
  },
  {
    name: "Malpractices",
    description:
      "Challenges related to examination malpractice have been posing significant issues for external examination bodies such as WAEC.",
    icon: AcademicCapIcon,
  },
];

function Challenges() {
  return (
    <div id="case-study" className="bg-gray-900 py-6 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
            What issues we were facing...
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            My role in the project was primarily in product design and research. I worked
            with stakeholders and developers to create a product that would be
            intuitive and user-friendly for educators and students in Africa.
            The goal was to make education more accessible to a broader
            population, and these were the challenges that arised during our
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
      </div>
    </div>
  );
}
export default Challenges;
