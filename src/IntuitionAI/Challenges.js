import { EyeDropperIcon, ClockIcon, CpuChipIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import React from 'react'
const features = [
    {
      name: 'Accessibility issues',
      description:
        'Users had a lot of accessibility issues, little to no context for challenges & scores, the Colour scheme was not meeting WCAG standards, and a lot of in-design challenges which I needed to tackle.',
        icon: EyeDropperIcon,
    },
    {
      name: 'Tight deadline',
      description:
        'A crucial challenge was the impending January deadline for launching V2 of the platform. Collaborating with my PM, I prioritized upgrades and determined which should be included in the backlog.',
        icon: ClockIcon,
    },
    {
      name: 'Machine learning introduced',
      description:
        'Machine learning was used to suggest personalized videos and challenges to users. I had to design a new, user-friendly experience to make it understandable for both new and existing users.',
        icon: CpuChipIcon,
    },
  ]


function Challenges() {
  return (
        <div  id="case-study"  className="bg-gray-900 py-6 sm:py-32">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto lg:mx-0">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">Constraints and challenges</h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
        When I joined Intuition AI (then known as Ten Spot), it was in the process of rebranding and revamping its current platform. 
        At the time, there was no designer, and I was the sole designer in charge of all design decisions made at the organisation and tackle all these challenges.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p className="flex-auto">{feature.description}</p>
                <p className="mt-6">
                  
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
  )
}
export default Challenges

