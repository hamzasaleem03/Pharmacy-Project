import React from 'react'

function index() {
  return (
    <>
      <div className='mt-[110px] mx-auto container flex justify-between items-center gap-4 lg:flex-row flex-col px-4'>
        <div className='w-full'>
        <p className="text-2xl font-bold ">薬剤師募集</p>
        <p className="my-5 text-2xl font-bold ">キャッチフレーズがここに入ります</p>
        <p className="text-base ">簡単な紹介文がここに入ります。</p>
        <div className='flex justify-start items-center gap-4 mt-28 md:flex-row flex-col'>
        <button className="lg:max-w-[222px] w-full xl:px-5 px-4 py-2.5 text-white border rounded-lg bg-gray-700 text-lg text-center transform duration-300 ease-in-out hover:bg-white hover:text-gray-700">
        薬剤師の方はこちら
          </button>
          <button className="lg:max-w-[222px] w-full xl:px-5 px-4 py-2.5 text-white border rounded-lg bg-gray-700 text-lg text-center transform duration-300 ease-in-out hover:bg-white hover:text-gray-700">
        医療事務の方はこちら
          </button>
        </div>
        </div>
        <div className='w-full'>
            <picture>
            <img className='object-cover hover:scale-105 transition-all duration-700 ease-in-out w-full' src='https://tuk-cdn.s3.amazonaws.com/can-uploader/sectionsix2323.png' alt='six'/>
            </picture>
        </div>
    </div>
    </>
  )
}

export default index