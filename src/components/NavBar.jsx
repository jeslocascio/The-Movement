import React from "react";

function NavBar() {
  return (
    <>
      <nav className="bg-white  fixed w-full top-0 start-0 border-b border-gray-200  z-40">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center mb-2 space-x-3 rtl:space-x-reverse sm:mx-0 mx-auto">
            <img
              src="/Six_Logo.png"
              className="h-8"
              alt="D6 Productions Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-800">
              D6 Productions
            </span>
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse sm:mx-0 mx-auto">
            <a
              type="button"
              href="https://www.amazon.com/Movement-Dina-Six/dp/B0CW747GVQ/"
              className="text-amber-900 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Get the Printed Screenplay
            </a>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:text-red-00 md:p-0 hover:text-red-800"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#meet_the_leads"
                  className="block py-2 px-3 text-gray-900 rounded hover:text-red-800 md:hover:bg-transparent md:hover:text-red-800 md:p-0 "
                >
                  Meet The Leads
                </a>
              </li>
              <li>
                <a
                  href="#about_dina_six"
                  className="block py-2 px-3 text-gray-900 rounded hover:text-red-800 md:hover:bg-transparent md:hover:text-red-800 md:p-0"
                >
                  About D6 Productions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
