import React from "react";

function index() {
  return (
    <>
      <div className="mx-auto container px-4 mt-28">
        <p className="text-2xl font-bold text-center text-gray-700 lg:max-w-[432px] w-full mx-auto">
          一緒に働く正社員・パートの薬剤師さんを募集しています！
        </p>
        <div className="mt-12 flex justify-center items-center gap-4 lg:flex-row flex-col">
          <button className="lg:max-w-[222px] w-full px-4 py-2.5 bg-white border rounded-lg border-gray-700 text-lg text-center text-gray-700 transform duration-300 ease-in-out hover:bg-gray-700 hover:text-white">
            求人情報一覧を見る
          </button>
          <button className="lg:max-w-[222px] w-full px-4 py-2.5 bg-white border rounded-lg border-gray-700 text-lg text-center text-gray-700 transform duration-300 ease-in-out hover:bg-gray-700 hover:text-white">
            今すぐ応募する
          </button>
        </div>
      </div>
    </>
  );
}

export default index;
