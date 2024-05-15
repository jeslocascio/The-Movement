import React from "react";

function Carousel() {
  return (
    <div
      id="default-carousel"
      className="relative w-full mt-28 mb-10 sm:my-20"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Item 1 */}
        <div className="hidden duration-1000 ease-in-out" data-carousel-item>
        <img
            src="/Hollywood_Boulevard.jpg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-80 md:h-auto"
            alt="Photo of Hollywood Boulevard"
          />
          <img 
            src="/THE_MOVEMENT.png"
            className="absolute block mt-5 top-1/3 w-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 "
            alt="The Movement"
            />
          <div className="absolute font-semibold drop-shadow-lg top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded sm:font-normal md:font-light  text-white text-sm sm:text-md md:text-2xl">
            An award-winning screenplay by Dina Six
          </div>
        </div>
        {/* Item 2 */}
        <div className="hidden duration-1000 ease-in-out" data-carousel-item>
        <img
            src="/Ranch_With_Mountains.jpg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-80 md:h-auto"
            alt="Photo of a Ranch with Mountains in the Background"
          />
          <div className="absolute font-semibold drop-shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl  sm:text-2xl sm:font-normal md:font-light md:text-3xl lg:text-4xl">
            Experience the power of the holy spirit, in a story inspired by the life of Lonnie Frisbee.
          </div>
        </div>
        {/* Item 3 */}
        <div className="hidden duration-1000 ease-in-out" data-carousel-item>
        <img
            src="/California_Desert.jpg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-80 md:h-auto"
            alt="Photo of a California Desert"
          />
          <div className="absolute font-light top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white border-gray-300 text-sm md:top-1/2 sm:text-xl md:text-3xl lg:text-4xl">
            "Will you not revive us again, that your people may rejoice in you? Show us your steadfast love, O Lord, and grant us your salvation."
          </div>
          <div className="absolute font-light top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs sm:text-lg md:text-xl">
            Psalm 85:6-7
          </div>
        </div>
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

export default Carousel;
