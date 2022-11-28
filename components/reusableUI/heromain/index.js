import React from "react";

function index({ storename, storesubname }) {
  return (
    <>
      <div className="bg-gray-300 py-14 flex justify-center items-center lg:mt-0 mt-10 px-4 ">
        <div className="mx-auto container lg:px-8 px-4 bg-white lg:max-w-[427px] w-full lg:h-[222px] py-5">
          <p className="text-2xl font-bold text-center text-gray-700">
            {storename}
          </p>
          <div className="w-64 h-0.5 bg-black mx-auto mt-3 mb-6"></div>
          <p className="text-base text-left">{storesubname}</p>
          <p className="text-base text-left">〜〜〜〜〜〜〜〜〜〜</p>
        </div>
      </div>
    </>
  );
}

export default index;
