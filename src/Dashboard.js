import React from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { Chart } from 'react-chartjs-2';

const stats = [
  { name: 'User Retention (Enterprise)', stat: '92.24%', previousStat: '67.08%', change: '37.42%', changeType: 'increase' },
  { name: 'Monthly Churn Rate', stat: '3.17%', previousStat: '16.56%', change: '80.81%', changeType: 'decrease' },
  { name: 'User Engagement', stat: '63.57%', previousStat: '27.62%', change: '130.27%', changeType: 'increase' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (

    <div>
    <div className="px-4 sm:px-0">
      <h3 className="text-base font-semibold leading-7 text-white">Dashboard</h3>
      <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-400">Aggregrated success metrics I have acheived over the years.</p>
    </div>
    <div>
    <div>
   <div className=" ml-72 md:flex md:items-center md:justify-between">
</div>
     
      <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-700 overflow-hidden rounded-lg bg-white/5 shadow md:grid-cols-3 md:divide-x md:divide-y-0">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-white">{item.name}</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-500">
                {item.stat}
                <span className="ml-2 text-sm font-medium text-gray-400">from {item.previousStat}</span>
              </div>

              <div
                className={classNames(
                  item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                  'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0'
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon
                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowDownIcon
                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                    aria-hidden="true"
                  />
                )}

                <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                {item.change}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
    
    </div>
    
    </div>
    
  )
}

  
