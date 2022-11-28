import React from 'react'

function index() {
  return (
    <>
    <div className='mx-auto container px-4 mt-40 w-full'>
     <div class="lg:max-w-[542px] w-full mx-auto">
        <form class="bg-gray-100 shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <input
              class="appearance-none border w-70 bg-white rounded-lg border-gray-300 w-full py-4 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="ふりがな"
              type="text"
              placeholder="ふりがな"
            />
          </div>
          <div class="mb-4">
            <input
              class="appearance-none border w-70 bg-white rounded-lg border-gray-300 w-full py-4 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="ふりがな"
              type="text"
              placeholder="ふりがな"
            />
          </div>
          <div class="mb-4">
            <input
              class="appearance-none border w-70 bg-white rounded-lg border-gray-300 w-full py-4 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="メールアドレス"
              type="text"
              placeholder="メールアドレス"
            />
          </div>
          <div class="mb-4">
            <input
              class="appearance-none border w-70 bg-white rounded-lg border-gray-300 w-full py-4 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="電話番号"
              type="text"
              placeholder="電話番号"
            />
          </div>
          <div class="flex justify-center">
            <button className="lg:max-w-[100px] w-full xl:px-2 px-2 py-2.5 text-white border rounded-lg bg-gray-700 text-lg text-center transform duration-300 ease-in-out hover:bg-white hover:text-gray-700">
            送信
          </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default index