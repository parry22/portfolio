export default function Example() {
  return (
    <div>
      <div className="relative isolate">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="py-24 sm:py-32 lg:pb-10">
          <div className="hidden sm:mt-32 sm:flex lg:mt-16"></div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:-mt-20 sm:text-4xl">
            The solution we brainstormed - USSD Screens
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            After a lot of brainstorming and talking to some of the relatives of
            our users from rural areas (Most of our target users in rural areas
            didn’t have an internet connection), We decided to bring School
            Integral through the mediums they use, which is cellular phones.
            This was a bit of a challenge for me, as I’ve never designed
            anything remotely close to it, nor I had any proper resources for
            these kinds of screens. Although Mr. Ifechukwu had experience using
            one of the cellular phones so they provided any assistance they
            could (The wireframes on the left are designed by Mr. Ifechukwu).
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6"></div>
        </div>
        <img
          src="USSD.png"
          alt="App screenshot"
          width={2432}
          height={1442}
          className="-mt-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-10"
        />
      </div>
    </div>
  );
}
