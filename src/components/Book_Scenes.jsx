import React from "react";

function Book_Scenes() {
  return (
    <>
      <div className="mt-10 flex flex-col md:flex-row  bg-orange-50">
        <img
          src="/Holy_Light.jpg"
          alt="Image of sky with holy light shining down. There is a cross shape in the light rays."
          className="w-full md:w-1/2 border-4 border-yellow-400"
        />
        <div className=" text w-full md:w-1/2 border-4 border-yellow-400">
          <h2 className=" mt-5 sm:mt-10 text-md text-center sm:text-xl md:text-2xl px-10 md:mb-2 text-amber-900">
            "I don't know man. I was jamming to the music. This light man...
            This light comes over the stage. Sam Simon drops to his knees. He
            starts to sing this song. No song I ever heard him sing. then the
            wind picks up... The sand swirls. It was insane. It was dope. I hit
            my knees. I was like overwhelmed with emotion."
          </h2>
          <p className="text-orange-600 italic mb-5 text-md sm:text-lg md:bg-0">Tommy, page 16</p>
        </div>
      </div>
      <div className="mt-10 flex flex-col md:flex-row  bg-orange-50">
        <div className=" text w-full md:w-1/2 border-4 border-orange-600">
          <h2 className=" mt-5 sm:mt-10 lg:mt-20 text-md text-center sm:text-xl md:text-2xl md:mb-2 px-10 text-amber-900">
           She begins to cry. Out of breathe and exhausted she cries harder. <br /><br /> Melissa screams, "I can't take it anymore." She puts her head on her knees. She's hysterical. Melissa looks up. "If there is a God? Please, please help me.""
          </h2>
          <p className="text-orange-600 italic mb-5 sm:mb-10 text-md sm:text-lg md:bg-0">Page 50-51</p>
        </div>
        <img
          src="/Melissa_Alley.jpg"
          alt="Photo of an orange tinted alleyway at night."
          className="w-full md:w-1/2 border-4 border-orange-600"
        />
      </div>
    </>
  );
}

export default Book_Scenes;
