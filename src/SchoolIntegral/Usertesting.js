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
          <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                </div>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:-mt-20 sm:text-4xl">
                  Can't be the judge of my designs
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                Once I was done with my designs, I tested my designs with few of my users to find if there are any usability issues that I might have missed, turns out - there were! So, once I got familar with the issues that could hinder usability of the platform, I made these changes in my design accordingly.<br>
                </br><br></br>1. I noticed users wanted to view all booking details from affiliate websites. After talking with my developers, we decided to redirect them to the affiliate websites' booking details page. I then redesigned the Bookings page, making it easy for users to find their booking information on the respective booking websites.<br></br>
                <br></br>2. The offers screen had a confusing UI for filtering cards. Initially, I thought placing user cards as filters would be visually appealing. However, after user testing, I discovered users didn't realize they could click on those cards to filter. They mistook them for a UI display. To address this, I resolved the problem by using a conventional select menu to eliminate any confusion.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                </div>
              </div>
              <img
                src="FantasiaUserTesting.png"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="-mt-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-10"
              />
            </div>
            
          </div>
    )
            }