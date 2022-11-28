import React from "react";
function index() {
  return (
    <>
      <div className="mt-10 container mx-auto px-4 lg:max-w-[1340px] w-full">
      <p className="text-2xl font-bold text-center mb-10">薬剤師（正社員・パート）求人情報一覧</p>
        <div className="flex justify-center items-start gap-8 xl:flex-row flex-col lg:max-w-[1340px] w-full">
          <div className="bg-gray-100 lg:max-w-[427px] w-full lg:h-[1143px] p-8 ">
            <div aria-label="one">
              <div className="lg:max-w-[360px] w-full p-5 bg-gray-300">
                <p className="text-lg font-bold mb-4">エリア</p>
                <div className="flex gap-12 items-center">
                  <div aria-label="one">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 border rounded-sm border-gray-700" />
                      <p className="text-sm">東京都（9）</p>
                    </div>
                    <div className="flex items-center gap-2 my-4">
                      <div className="w-3 h-3 border rounded-sm border-gray-700" />
                      <p className="text-sm">埼玉県（2）</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 border rounded-sm border-gray-700" />
                      <p className="text-sm">福島県（1）</p>
                    </div>
                  </div>
                  <div aria-label="two">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 border rounded-sm border-gray-700" />
                      <p className="text-sm">千葉県（9）</p>
                    </div>
                    <div className="flex items-center gap-2 my-4">
                      <div className="w-3 h-3 border rounded-sm border-gray-700" />
                      <p className="text-sm">栃木県（1）</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 border rounded-sm border-gray-700" />
                      <p className="text-sm">沖縄県（1）</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="lg:max-w-[360px] w-full p-5 bg-gray-300">
                <p className="text-lg font-bold mb-4">店舗名</p>
                <div className="flex gap-12 items-center">
                  <div aria-label="one">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 border rounded-sm border-gray-700" />
                      <p className="text-sm">北松戸薬局</p>
                    </div>
                    <div className="flex items-center gap-2 my-4">
                      <div className="w-3 h-3 border rounded-sm border-gray-700" />
                      <p className="text-sm">ながれやま薬局</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 border rounded-sm border-gray-700" />
                      <p className="text-sm">ヒロ薬局</p>
                    </div>
                  </div>
                  <div aria-label="two">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 border rounded-sm border-gray-700" />
                      <p className="text-sm">ポワール薬局</p>
                    </div>
                    <div className="flex items-center gap-2 my-4">
                      <div className="w-3 h-3 border rounded-sm border-gray-700" />
                      <p className="text-sm">ハート薬局</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 border rounded-sm border-gray-700" />
                      <p className="text-sm">フリューぜ薬局</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right mt-4">
                      <button  className="px-4 py-2.5 bg-gray-700 border rounded-lg border-gray-700 text-lg text-center text-white transform duration-300 ease-in-out hover:bg-white hover:text-gray-700">
                      リセット
                      </button>
                    </div>
          </div>
          <div aria-label="boxes" className="lg:max-w-[880px] w-full">
          <div className="flex gap-4 lg:flex-row flex-col ">
          <div className="bg-gray-100 rounded-3xl lg:max-w-[425px] w-full p-7">
          <p className="text-base font-bold text-gray-700 mb-2">募集要項</p>
          <p className="text-sm text-gray-700">千葉県 / 松戸市</p>
          <p className="text-2xl font-bold text-gray-700">○○薬局</p>
          <p className="text-lg font-bold text-gray-700 my-2">薬剤師（正社員）</p>
          <p className="text-base font-medium text-gray-700 mb-3">月給 ○○万円〜</p>
          <p className="text-lg font-bold text-gray-700 mb-2">勤務日時</p>
          <p className="w-96 text-base text-gray-700">月・火・水・金　9：00～18：30</p>
          <p className="w-96 text-base text-gray-700">土　9：00～18：30</p>
          <p className="w-96 text-base text-gray-700">木・日　休み</p>
          <p className="text-lg font-bold text-gray-700 mt-2">諸手当</p>
          <p className="text-base text-gray-700">通勤手当 / 家族手当 / 住宅手当</p>
          <p className="text-lg font-bold text-gray-700 mt-2">福利厚生</p>
          <p className="w-64 text-base text-gray-700">社会保険完備 / 労働保険加入 / 退職</p>
          <p className="w-64 text-base text-gray-700">金制度あり / 育児休暇制度あり</p>
          </div>
          <div className="bg-gray-100 rounded-3xl lg:max-w-[425px] w-full p-7">
          <p className="text-base font-bold text-gray-700 mb-2">募集要項</p>
          <p className="text-sm text-gray-700">千葉県 / 松戸市</p>
          <p className="text-2xl font-bold text-gray-700">○○薬局</p>
          <p className="text-lg font-bold text-gray-700 my-2">薬剤師（パート）</p>
          <p className="text-base font-medium text-gray-700 mb-3">時給 2,000円〜</p>
          <p className="text-lg font-bold text-gray-700 mb-2">勤務日時</p>
          <p className="w-96 text-base text-gray-700">月・火・水・金　9：00～18：30</p>
          <p className="w-96 text-base text-gray-700">土　9：00～18：30</p>
          <p className="w-96 text-base text-gray-700">木・日　休み</p>
          <p className="text-lg font-bold text-gray-700 mt-2">諸手当</p>
          <p className="text-base text-gray-700">通勤手当 / 家族手当 / 住宅手当</p>
          <p className="text-lg font-bold text-gray-700 mt-2">福利厚生</p>
          <p className="w-64 text-base text-gray-700">社会保険完備 / 労働保険加入 / 退職</p>
          <p className="w-64 text-base text-gray-700">金制度あり / 育児休暇制度あり</p>
          </div>
          </div>
          <div className="bg-gray-100 rounded-3xl lg:max-w-[425px] w-full p-7 mt-8">
          <p className="text-base font-bold text-gray-700 mb-2">募集要項</p>
          <p className="text-sm text-gray-700">千葉県 / 松戸市</p>
          <p className="text-2xl font-bold text-gray-700">○○薬局</p>
          <p className="text-lg font-bold text-gray-700 my-2">薬剤師（正社員）</p>
          <p className="text-base font-medium text-gray-700 mb-3">月給 ○○万円〜</p>
          <p className="text-lg font-bold text-gray-700 mb-2">勤務日時</p>
          <p className="w-96 text-base text-gray-700">月・火・水・金　9：00～18：30</p>
          <p className="w-96 text-base text-gray-700">土　9：00～18：30</p>
          <p className="w-96 text-base text-gray-700">木・日　休み</p>
          <p className="text-lg font-bold text-gray-700 mt-2">諸手当</p>
          <p className="text-base text-gray-700">通勤手当 / 家族手当 / 住宅手当</p>
          <p className="text-lg font-bold text-gray-700 mt-2">福利厚生</p>
          <p className="w-64 text-base text-gray-700">社会保険完備 / 労働保険加入 / 退職</p>
          <p className="w-64 text-base text-gray-700">金制度あり / 育児休暇制度あり</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
