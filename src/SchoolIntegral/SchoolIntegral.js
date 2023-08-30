import Challenges from './Challenges'
import Prelimresearch from './Prelimresearch'
import Userinsights from './Userinsights'
import Feasibility from './Feasibility'
import Userjourney from './Userjourney'
import Design from './Design'
import Usertesting from './Usertesting'
import Finaldesigns from './Finaldesigns'
import Learnings from './Learnings'
import Testimonial from './Testimonial'

export default function Example() {
  

  return (
  <div>

      <div className="relative isolate">
        <div
className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="py-24 sm:py-32 lg:pb-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-2">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                School Integral
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
              Fantasia gets you closer to your travel dreams. It helps you make the most of travel credit cards or any other cards you've got. You get better deals on flight points, hotels, and travel insurance. Fantasia also teach you all about what your cards can really do.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://www.schoolintegral.com/"
                  target="_blank"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Visit School Integral
                </a>
                <a href="#case-study" className="text-sm font-semibold leading-6 text-white"
                onClick={(event) => {
                  event.preventDefault(); // Prevent default anchor behavior
                  const target = document.getElementById('case-study');
                  if (target) {
                    const yOffset = -60; // Adjust this value to control the final scroll position
                    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
              
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
              >
                  See case study <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              width={2432}
              height={1442}
              className="mt-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24"
            />
          </div>
          
        </div>
       <Challenges></Challenges>
       <Prelimresearch></Prelimresearch>
       <Userinsights></Userinsights>
       <Feasibility></Feasibility>
       <Userjourney></Userjourney>
       <Design></Design>
       <Usertesting></Usertesting>
       <Finaldesigns></Finaldesigns>
       <Learnings></Learnings>
       <Testimonial></Testimonial>

    </div>
  </div>

    
  )
}
