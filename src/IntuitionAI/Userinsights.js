import { PlayIcon, CogIcon, PresentationChartBarIcon } from '@heroicons/react/20/solid'
import React from 'react'
const features = [
    {
      name: 'Gamification',
      description:
        'Proper gamification in the user journey was severely lacking for an Initiative engagement platform.',
        icon: PlayIcon,
    },
    {
      name: 'Confusing filters',
      description:
        'Previous videos and challenges navigation filters were quite confusing for most users on the platform.',
        icon: CogIcon,
    },
    {
      name: 'Insufficient data',
      description:
        'Many HR reps were complaining that data provided by previous platform was insufficient.',
        icon: PresentationChartBarIcon,
    },
  ]


function Challenges() {
  return (
        <div className="bg-gray-900 py-24 sm:py-32">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto lg:mx-0">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">Synthesizing the results</h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
        After watching all the complaints users have on a regular basis and users journey, which design features they most prefer, where they gets most confused, I synthesized my findings accordingly.
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