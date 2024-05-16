import React from "react";

function About_Dina_Six() {
    return (
      <div className="flex flex-col md:flex-row">
        {/* D6 Productions Image */}
        <div className="flex flex-col items-center my-5 py-5 px-5 flex-1">
          <img
            className="object-cover w-3/4 rounded-t-lg h-auto md:h-auto sm:w-1/2 md:w-max md:rounded-none md:rounded-s-lg md:mr-5"
            src="/Six_Logo_With_Title.png"
            alt="D6 Productions Logo"
          />
        </div>
        {/* D6 Productions Text */}
        <div className="flex flex-col items-center my-5 py-5 px-5 flex-1">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            D6 Productions
          </h5>
          <span className="w-60 border-t-2 border-solid border-green-800 inline-block mb-3 mx-auto"></span>
          <p className="mb-3 font-normal text-gray-800  mx-auto">
            D6 Production is a woman-led production company that focuses on creativity above all else.
            We have a proven track record of creating
            award-winning films, such as{" "}
            <a href="https://www.amazon.com/Faith-Through-Storms-Francine-Cruz/dp/B07QL34VPL" className="text-amber-800 italic">
              Faith Through the Storms{" "}
            </a>
             on Amazon. We hope that this film warms your heart, and shows that God is always with us.
            <br />
            <br />
            Dina Six, the founder of D6 Productions, is an award-winning writer,
            with multiple MFAs in screenwriting, photography, and film
            production. Over the years she has set out to master multiple
            artistic mediums. A true free spirit, and follower of Christ, Dina
            has a unique perspective on life and storytelling. Join us on this
            journey as we bring you stories that will inspire and entertain.
          </p>
        </div>
        {/* Dina Six */}
        <div className="flex flex-col items-center my-5 py-5 px-5 flex-1">
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-40 h-50 mb-3 rounded-full shadow-lg border-green-800 border-8"
              src="/Dina_Six.jpg"
              alt="Photo of Dina Six"
            />
              <span className="w-40 border-t-2 border-solid border-green-800 inline-block mb-3"></span>
            <h5 className="mb-1 text-xl font-medium text-gray-900">
              Dina Six
            </h5>
            <span className="text-sm text-gray-800 ">
              Award-Winning Screenwriter
            </span>
            <div className="flex mt-4 md:mt-6">
              <a
                href="https://linktr.ee/dinasixproductions"
                className="py-2 px-4 ms-2 text-sm font-medium text-green-800 focus:outline-none rounded-lg border border-green-800 hover:bg-green-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 "
              >
                Check out her Link Tree
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default About_Dina_Six;
