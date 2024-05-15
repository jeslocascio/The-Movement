import React from 'react'

function Meet_The_Cast() {
  return (
    <>
    <div className="text-xl font-medium uppercase mb-4">Meet the Lead Roles</div>
    <span className="w-60 border-t-2 border-solid border-red-800 inline-block mb-3"></span>
    

    <div className="md:flex md:flex-wrap md:-mx-4 mt-6 md:mt-12">
      
    <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
      <span className="w-20 border-t-2 border-solid border-red-800 inline-block mb-3"></span>
      <h5 className="text-xl font-medium uppercase mb-4">Sam Simon</h5>
      <p className="text-gray-800">Rock Star, and lead singer of the <i>The Gunsmen</i>. During a show performed in the Los Angeles desert, he experiences the Holy Spirit like never before.</p>
    </div>

    <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
      <span className="w-20 border-t-2 border-solid border-amber-900 inline-block mb-3"></span>
      <h5 className="text-xl font-medium uppercase mb-4">Melissa Burkes</h5>
      <p className="text-gray-800">A street punk who gets by through stealing, drugs, and alcohol. Through the Lord's light, she tries to turn her life around one more time.</p>
    </div>

    <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
      <span className="w-20 border-t-2 border-solid border-orange-600 inline-block mb-3"></span>
      <h5 className="text-xl font-medium uppercase mb-4">Dee Simon Walton</h5>
      <p className="text-gray-800">Sam's younger sister, a wife, and mother of two children. After their father's passing, she reaches out to Sam with the hope of finally reuniting.</p>
    </div>

  </div>
  </>
  )
}

export default Meet_The_Cast
