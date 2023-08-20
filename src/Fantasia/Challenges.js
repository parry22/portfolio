import { ArchiveBoxIcon, ArrowsPointingInIcon, BookOpenIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import React from 'react'
const features = [
    {
      name: 'Points Management Challenge',
      description:
        'Managing credit card offers and reward points is a major inconvenience for many users.',
        icon: ArchiveBoxIcon,
    },
    {
      name: 'Problematic flows',
      description:
        'Flow for redeeming `reward or mile points with most credit cards is often problematic.',
        icon: ArrowsPointingInIcon,
    },
    {
      name: 'Less Education.',
      description:
        'Multiple credit cardholders lacked proper education on optimizing their credit card usage.',
        icon: BookOpenIcon,
    },
  ]


function Challenges() {
  return (
        <div className="bg-gray-900 py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our challenges</h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
        These were the challenges that we were facing prior to the project start and initial research and we tried to focus in our initial brief.
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

