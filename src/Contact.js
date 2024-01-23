import React from 'react';

function MyIframe() {
  return (
   <>
    <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-white">
          Contact me
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-400">
          Reach out to me for any queries .
        </p>
      </div>
    <iframe className='mt-5'
      src="https://tally.so/embed/w5jQdZ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      width="100%"
      height="580"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      title="Contact form"
      loading="lazy"
    ></iframe>
    </>
  );
}

export default MyIframe;
