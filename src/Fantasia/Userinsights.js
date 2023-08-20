import { MoonIcon, ReceiptPercentIcon, LockClosedIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import React from 'react'
const features = [
    {
      name: 'Dark patterns',
      description:
        'Users who have tried redeeming their rewards or mile points through their credit cards feels deceived when they see advertised offer was more than actual offer.',
        icon: MoonIcon,
    },
    {
      name: 'Overwhelming options',
      description:
        'Most users feel overwhelmed by the numerous rewards and benefits offered by their credit cards, leading them to often overlook redeeming these benefits when needed.',
        icon: ReceiptPercentIcon,
    },
    {
      name: 'Security concerns.',
      description:
        'Many users have security concerns while giving their financial and credit card information to an app which leads to less adoption of product.',
        icon: LockClosedIcon,
    },
  ]


function Challenges() {
  return (
        <div className="bg-gray-900 py-24 sm:py-64">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Some sweet user insights</h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
        I aimed to connect with regular travelers who use travel credit cards monthly. To truly understand their credit card ussage issues and influence my designs, I chose to engage in-person during my vacation rather than solely relying on online research.
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