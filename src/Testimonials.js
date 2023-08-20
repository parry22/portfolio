const people = [
    {
      name: 'Ammon Morris',
      email: 'Parry delivers fast! We worked together developing the UI for a new SPA application using Tailwind. Parry consistently delivered compelling designs with little direction on a very tight deadline. His thoughtful user-first approach helped steer the product in the right direction. Plus he is a joy to work with, I looked forward to seeing him on Zoom every day. Highly recommended.',
      role: 'Engineering Manager',
      imageUrl:
        'morris.jpeg',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Ifechukwu',
      email: 'He was very supportive throughout the project and he was acting more of a partner to the project and his advice was always helpful. I look forward to working with him on more projects. Please hire him and you would not regret it.',
      role: 'CEO/Founder',
      imageUrl:
        'ifechukwu.png',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Mudith Awasthi',
      email: 'Getting to work with Parry was great. He is one of those rare people who really knows design inside and out. One thing I really appreciate about Parry is how he handles feedback. It is one thing to be good at what you do but being able to take criticism and use it to make your work even better that is something special. Thats Parry. I am happy to recommend him to any team looking for a top-notch product designer.',
      role: 'Frontend Engineer',
      imageUrl:
        'mudith.jpeg',
      lastSeen: null,
    },
    {
      name: 'Karthiganesh Durai',
      email: 'Pravneet is extremely professional with his work and committed to the success of his clients. He has ensured all relevant information is collected and work is completed to our satisfaction. Pravneet is a very professional person, knows his job very well. Understands the requirements of its clients, provides suggestions and tries to bring the best in the industry. we wish him luck for his future work.',
      role: 'Chief Quantum Architecht',
      imageUrl:
        'durai.jpeg',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Mohammad Keyhani',
      email: 'Pravneet did great work on this project. A lot of research done in a relatively short amount of time, and I was particularly impressed with the quality of work he was able to do.',
      role: 'Director',
      imageUrl:
        'keyhani.jpeg',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
  ]
  
  export default function Testimonials() {
    return (
      <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-white">Testimonials</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-400">Some good words people said.</p>
      </div>
      <div>
        
      <ul role="list" className="divide-y divide-gray-800 mt-2">
        {people.map((person) => (
          <li key={person.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img className="h-12 w-12 flex-none rounded-full bg-gray-800" src={person.imageUrl} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-white">{person.name}</p>
                <p className="mt-1 italic text-sm leading-5 text-gray-400">{person.email}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-white">{person.role}</p>
              {person.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-400">
                  Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-400">Online</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      </div>
      </div>
    )
  }
  