import React from "react";
function index() {
  return (
    <>
      <p className="text-2xl font-bold text-center mt-[120px] mb-8">
        インタビュー
      </p>
      <div className="mx-auto container px-4  flex justify-between items-start gap-8 lg:flex-row flex-col">
        <div className="w-full mt-2">
          <p className="text-3xl font-bold">Q.面接時に緊張しませんでしたか？</p>
          <p className="text-lg mt-10 lg:max-w-[537px] w-full">
            先輩からのインタビュー回答分がここに入ります。
            面接の方がとっても優しくてお話しやすく安心しました。
            働き方も家庭との両立がしやすい時間帯・勤務日数の相談にも乗って頂いたので長く続けられそうです。
            サンプル文章
          </p>
        </div>
        <div className="w-full">
          <picture>
            <img
              className="object-cover hover:scale-105 transition-all duration-700 ease-in-out w-full"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sectionsix-09.png"
              alt="six"
            />
          </picture>
        </div>
      </div>
    </>
  );
}

export default index;
