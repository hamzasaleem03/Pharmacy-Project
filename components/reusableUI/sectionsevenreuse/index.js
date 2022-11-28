import React from 'react'
function index() {
  return (
    <>
    <div className='mx-auto container px-4 mt-[140px] flex justify-between items-start gap-8 lg:flex-row flex-col'>
    <div className='w-full'>
      <picture>
            <img  className='object-cover hover:scale-105 transition-all duration-700 ease-in-out w-full' src='https://tuk-cdn.s3.amazonaws.com/can-uploader/sectionsix-09.png' alt='six'/>
      </picture>
        </div>
        <div className='w-full mt-2'>
        <p className="text-3xl font-bold">何でも相談できる薬局を目指しています。</p>
        <p className="text-lg my-5 lg:max-w-[537px] w-full">社長からの挨拶文がここに入ります。サンプル文章〜〜〜サンプル文章〜〜〜サンプル 文章〜〜〜サンプル文章〜〜〜サンプル文章〜〜〜サンプル文章〜〜〜</p>
        <p className="text-lg text-right lg:max-w-[537px] w-full">代表取締役社長 ○○ ○○</p>
        <div className="mt-10">
          <button className="px-8 py-2.5 bg-white border rounded-lg border-gray-700 text-lg text-center text-gray-700 transform duration-300 ease-in-out hover:bg-gray-700 hover:text-white">
            もっと読む
          </button>
        </div>
        </div>
    </div>
    </>
  )
}

export default index