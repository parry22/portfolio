export default function Example() {
  return (
    <div>
      <div className="py-24  sm:py-6 lg:pb-10">
        <div className="hidden sm:mt-32 sm:flex lg:mt-16"></div>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:-mt-20 sm:text-4xl">
          So who are my users?
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          To create a tailored experience for each user, I first needed to
          become acquainted with them. Using all of the preliminary research
          provided by Mr. Ifechukwu, I constructed four personas based on our
          user needs and pain points.
        </p>
        <div className="-mt-16 flex items-center justify-center gap-x-6 sm:mt-6"></div>
      </div>
      <img
        src="SIpersonas.png"
        alt="App screenshot"
        width={2432}
        height={1442}
        className="mt-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-10"
      />
    </div>
  );
}
