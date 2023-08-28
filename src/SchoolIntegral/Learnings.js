import { LockOpenIcon, BanknotesIcon, CodeBracketIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import React from 'react'
const features = [
    {
      name: 'Designing for security',
      description:
        'Designing for better security simply involves teaching users about the security measures through the design itself.',
        icon: LockOpenIcon,
    },
    {
      name: 'Monetisation strategies',
      description:
        'Creating monetisation strategies for a product without hindering user experience is an exciting challenge to tackle.',
        icon: BanknotesIcon,
    },
    {
      name: 'Bank APIs',
      description:
        'I learned a lot about bank APIs because much of the displayed information on the interface came from them.',
        icon: CodeBracketIcon,
    },
  ]
  const stats = [
    { name: 'Days spent on project', value: '24' },
    { name: 'Reduced task success time', value: '3.65', unit: 'mins' },
    { name: 'Clicks reduced', value: '6' },
    { name: 'Error rate reduced', value: '60%' },
  ]


function Challenges() {
  return (
        <div className="bg-gray-900 py-24 sm:py-32">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto lg:mx-0">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">What I learned & acheived</h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
        So that's all it took to ship my designs. Fantasia will be available to download on Play Store soon and hopefully will be solving all the problems it intended to solve.
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

      <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl mt-10 sm:-ml-8">
        <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
              <p className="text-sm font-medium leading-6 text-gray-400">{stat.name}</p>
              <p className="mt-2 flex items-baseline gap-x-2">
                <span className="text-4xl font-semibold tracking-tight text-white">{stat.value}</span>
                {stat.unit ? <span className="text-sm text-gray-400">{stat.unit}</span> : null}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    </div>
  </div>
  )
}
export default Challenges