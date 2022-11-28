import React from "react";
import { useRouter } from "next/router";
function index() {
  const router = useRouter();
  return (
    <>
      <div className="bg-gray-100 mt-24">
        <div className="mx-auto contianer px-4 py-14 flex flex-col justify-center items-center">
          <p className="text-2xl font-bold text-center text-gray-700">
            （有）ヱド川薬局は東京・千葉を中心に地域密着型の調剤薬局を展開しています。
          </p>
          <p className="text-base lg:max-w-[654px] w-full mx-auto mt-10 ">
            お薬をお渡しするばかりでなく、お薬や健康のことを何でも相談できる「かかりつけ薬局」として、地域医療に貢献します。説明が入ります。〜〜〜〜〜〜〜〜〜。サンプル文章。薬局の説明が入ります。〜〜〜〜〜〜〜〜〜。サンプル文章。薬局の説明が入ります。〜〜〜〜〜〜〜〜〜。サンプル文章。一緒に働いてみませんか？
          </p>
          <div className="text-center mt-10">
            <button onClick={()=> router.push("/recruitmessage")} className="lg:max-w-[240px] w-full px-4 py-2.5 bg-gray-700 border rounded-lg border-gray-700 text-lg text-center text-white transform duration-300 ease-in-out hover:bg-white hover:text-gray-700">
              先輩からのメッセージ
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 mx-auto contianer px-4">
        <p className="text-2xl font-bold text-center">経営理念</p>
        <p className="text-base lg:max-w-[654px] w-full mx-auto mt-12">
          経営理念説明が入ります。〜〜〜〜〜〜〜〜〜。サンプル文章。薬局の説明が入ります。〜〜〜〜〜〜〜〜〜。サンプル文章。薬局の説明が入ります。〜〜〜〜〜〜〜〜〜。サンプル文章。
        </p>
      </div>
    </>
  );
}

export default index;
