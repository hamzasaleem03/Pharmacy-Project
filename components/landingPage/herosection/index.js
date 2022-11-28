import React from 'react'
// import image from "/public/static/images/jal.png"
// eslint-disable-next-line
function index() {
  return (
    <>
    <div id='top' className='w-full h-full mt-7 lg:pr-4 md:px-0 px-4'>
      {/* <picture> */}
        <img className='w-full object-cover' src='https://tuk-cdn.s3.amazonaws.com/can-uploader/herosectionimage1232.png' alt='home'/>
        {/* <img className='w-full object-cover' src="/jal.png" alt='home'/> */}
      {/* </picture> */}
    </div>
    </>
  )
}

export default index