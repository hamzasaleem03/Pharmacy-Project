import React from "react";

function index() {
  return (
    <>
      <section className="flex flex-col items-center justify-center mt-20 xl:mt-16 md:mt-0 ">
        <div className="relative flex flex-col justify-center items-center mt-24 xl:flex-row xl:items-end xl:h-[280px]  md:h-[850px] w-full gap-y-10">
          <div className="group">
            <div className="w-[335px] h-[280px] group-hover:h-[320px]   left-0 bottom-0  overflow-hidden  duration-700 ease-in-out  border border-gray-300 px-[32px] py-[28px]   bg-gray-100 group cursor-pointer group-hover:bg-white group-hover:rounded-tl-lg group-hover:rounded-tr-lg ">
              <div className="flex flex-col items-start justify-start ">
                {/* <div className="flex items-center justify-center w-8 h-8 bg-blue-600 border border-blue-600 rounded group-hover:bg-white bg-opacity-20">
                  <Icon icon="mobile" />
                </div> */}
                {/* <h3 className="mt-4 text-xl font-semibold leading-5 text-center text-gray-900 group-hover:text-gray-700">Component Rich UI Library</h3> */}
                <p className="mt-4 text-lg font-bold group-hover:text-gray-700">
                  「やさしい人達に囲まれて楽しく働いています。」
                </p>
                <p className="text-base leading-6   md:duration-300 ease-in-out  overflow-hidden tracking-3 mt-3 text-left text-gray-600 group-hover:text-gray-700">
                  ○○薬局 未経験薬剤師
                  <br />
                  20代 丹羽さん
                </p>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="w-[335px] h-[280px] group-hover:h-[320px]   left-0 bottom-0  overflow-hidden  duration-700 ease-in-out  border border-gray-300  px-[32px] py-[28px]   bg-gray-100 group cursor-pointer group-hover:bg-white group-hover:rounded-tl-lg group-hover:rounded-tr-lg ">
              <div className="flex flex-col items-start justify-start ">
                {/* <div className="flex items-start justify-start w-8 h-8 bg-blue-600 border border-blue-600 rounded group-hover:bg-white bg-opacity-20">
                  <Icon icon="accessibility" />
                </div> */}
                <h3 className="mt-4 text-xl font-semibold leading-5 text-center text-gray-900 group-hover:text-gray-700">
                  「マネジメントを経験してよかったです」
                </h3>
                <p className="text-base leading-6   md:duration-300 ease-in-out  overflow-hidden tracking-3 mt-3 text-left text-gray-600 group-hover:text-gray-700">
                  ○○薬局 未経験薬剤師
                  <br />
                  30代 丹羽さん
                </p>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="w-[335px] h-[280px] group-hover:h-[320px]   left-0 bottom-0  overflow-hidden  duration-700 ease-in-out  border border-gray-300  px-[32px] py-[28px]   bg-gray-100 group cursor-pointer group-hover:bg-white group-hover:rounded-tl-lg group-hover:rounded-tr-lg ">
              <div className="flex flex-col items-start justify-start ">
                {/* <div className="flex items-center justify-center w-8 h-8 bg-blue-600 border border-blue-600 rounded group-hover:bg-white bg-opacity-20">
                  <Icon icon="drop" />
                </div> */}
                <h3 className="mt-4 text-xl font-semibold leading-5 text-center text-gray-900 group-hover:text-gray-700">
                  「子育てしながらでも時間の調整ができました」
                </h3>
                <p className="text-base leading-6   md:duration-300 ease-in-out  overflow-hidden tracking-3 mt-3 text-left text-gray-600 group-hover:text-gray-700">
                  ○○薬局 未経験薬剤師
                  <br />
                  40代 丹羽さん
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white lg:max-w-[1005px] w-full border border-gray-300 border-t-0 mx-auto container lg:px-10 md:px-6 px-4 py-20">
        <div className="bg-gray-100 px-8 py-8">
          <p className="text-2xl font-bold mb-4">
            先輩からの就職活動アドバイス！
          </p>
          <p className="text-lg lg:max-w-[537px] w-full">
            回答がここに入ります。サンプル文章〜〜〜サンプル文章〜〜〜サンプル文章〜〜〜サンプル文章〜〜〜サンプル文章〜〜〜サンプル文章〜〜〜
          </p>
        </div>
        <div className="mt-14 px-4 py-4 bg-gray-300 rounded-3xl lg:max-w-[420px] w-full">
          <p className="text-2xl text-center font-bold">
            現在の仕事の内容を教えて下さい
          </p>
        </div>
        <p className="text-lg mt-7 lg:max-w-[537px] w-full">
          回答がここに入ります。サンプル文章〜〜〜サンプル文章〜〜〜サンプル文章〜〜〜サンプル文章〜〜〜サンプル文章〜〜〜サンプル文章〜〜〜
        </p>

        <div className="mt-8 px-4 py-4 bg-gray-300 rounded-3xl lg:max-w-[540px] w-full">
          <p className="text-2xl text-center font-bold">
            仕事のやりがいやエピソードを教えて下さい
          </p>
        </div>
        <p className="text-lg mt-7 lg:max-w-[537px] w-full">
          回答がここに入ります。サンプル文章〜〜〜サンプル文章〜〜〜サンプル文章〜〜〜サンプル文章〜〜〜サンプル文章〜〜〜サンプル文章〜〜〜
        </p>

        <div className="mt-8 px-4 py-4 bg-gray-300 rounded-3xl lg:max-w-[380px] w-full">
          <p className="text-2xl text-center font-bold">
            失敗したことはありますか？
          </p>
        </div>
        <p className="text-lg mt-7 lg:max-w-[537px] w-full">
          回答がここに入ります。サンプル文章〜〜〜サンプル文章〜〜〜サンプル文章〜〜〜サンプル文章〜〜〜サンプル文章〜〜〜サンプル文章〜〜〜
        </p>

        <div className="mt-8 px-4 py-4 bg-gray-300 rounded-3xl lg:max-w-[780px] w-full">
          <p className="text-2xl text-center font-bold">
            これからヱド川薬局へ入社したい人へのメッセージをお願いします
          </p>
        </div>
        <p className="text-lg mt-7 lg:max-w-[537px] w-full">
          回答がここに入ります。サンプル文章〜〜〜サンプル文章〜〜〜サンプル文章〜〜〜サンプル文章〜〜〜サンプル文章〜〜〜サンプル文章〜〜〜
        </p>
      </section>
    </>
  );
}

export default index;
