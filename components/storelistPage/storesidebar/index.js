import React from "react";
import { useRouter } from "next/router";
function index() {
  const router = useRouter();
  return (
    <>
      <div className="mt-10 container mx-auto px-4">
        <div className="flex justify-center items-start gap-8 lg:flex-row flex-col">
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
          </div>
          <div className="lg:max-w-[883px] w-full">
            <div className="lg:max-w-[883px] w-full p-8 bg-gray-100">
              <div className="flex items-center gap-4">
                <div aria-label="image">
                  <picture>
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/store0349.png"
                      alt="one"
                    />
                  </picture>
                </div>
                <div aria-label="text">
                  <p className="text-sm font-demilight">東京都 / 江戸川区</p>
                  <p className="text-2xl font-bold">ヱド川薬局</p>
                  <div className="flex items-center gap-3">
                    <svg
                      width={30}
                      height={47}
                      viewBox="0 0 30 47"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.969 38.168V38.789H14.532V38.168H9.969ZM10.14 39.968V40.58H14.343V39.968H10.14ZM9.69 41.858V42.488H14.658V41.858H9.69ZM11.868 38.384V44.72H12.525V38.384H11.868ZM13.479 36.431C13.317 36.908 13.011 37.61 12.777 38.042L13.299 38.231C13.56 37.826 13.866 37.196 14.136 36.647L13.479 36.431ZM10.356 36.692C10.644 37.178 10.932 37.835 11.031 38.258L11.616 38.024C11.508 37.61 11.211 36.971 10.905 36.494L10.356 36.692ZM6.765 39.167V39.707H9.447V39.167H6.765ZM6.81 36.764V37.304H9.429V36.764H6.81ZM6.765 40.373V40.913H9.447V40.373H6.765ZM6.342 37.943V38.501H9.762V37.943H6.342ZM7.089 41.588V42.146H8.853V43.649H7.089V44.216H9.447V41.588H7.089ZM6.756 41.588V44.63H7.341V41.588H6.756ZM20.886 37.439V43.874H21.489V37.439H20.886ZM19.104 37.16V44.612H19.716V37.79H22.731V44.54H23.361V37.16H19.104ZM19.437 40.283V40.904H23.01V40.283H19.437ZM19.437 43.496V44.117H22.983V43.496H19.437ZM16.863 40.679V44.711H17.466V40.679H16.863ZM16.773 36.44C16.539 37.043 16.116 37.916 15.765 38.438L16.242 38.654C16.593 38.15 17.034 37.349 17.376 36.683L16.773 36.44ZM17.88 37.475C17.385 38.429 16.512 39.77 15.819 40.562L16.242 40.805C16.935 40.031 17.826 38.753 18.456 37.754L17.88 37.475ZM15.333 38.366C15.81 38.78 16.368 39.392 16.602 39.806L16.962 39.284C16.719 38.897 16.161 38.321 15.675 37.916L15.333 38.366ZM17.628 39.536C18.015 40.13 18.402 40.931 18.546 41.435L19.086 41.174C18.933 40.67 18.537 39.896 18.141 39.311L17.628 39.536ZM15.27 40.418L15.369 41.039C16.242 40.958 17.394 40.85 18.519 40.751L18.51 40.202C17.304 40.292 16.089 40.373 15.27 40.418ZM17.79 41.714C18.042 42.272 18.285 43.01 18.366 43.487L18.933 43.298C18.825 42.821 18.573 42.101 18.312 41.552L17.79 41.714ZM15.828 41.579C15.729 42.371 15.558 43.181 15.261 43.73C15.414 43.784 15.684 43.91 15.801 43.982C16.08 43.406 16.296 42.533 16.413 41.687L15.828 41.579Z"
                        fill="black"
                      />
                      <circle cx={15} cy={15} r={15} fill="#D9D9D9" />
                      <path
                        d="M13.5147 19.6H14.0294V15.65H13.5147C13.2304 15.65 13 15.4052 13 15.1031V13.7969C13 13.4948 13.2304 13.25 13.5147 13.25H16.3971C16.6813 13.25 16.9118 13.4948 16.9118 13.7969V19.6H17.4265C17.7107 19.6 17.9412 19.8448 17.9412 20.1469V21.4531C17.9412 21.7552 17.7107 22 17.4265 22H13.5147C13.2304 22 13 21.7552 13 21.4531V20.1469C13 19.8448 13.2304 19.6 13.5147 19.6ZM15.4706 8C14.4472 8 13.6176 8.88143 13.6176 9.96875C13.6176 11.0561 14.4472 11.9375 15.4706 11.9375C16.494 11.9375 17.3235 11.0561 17.3235 9.96875C17.3235 8.88143 16.4939 8 15.4706 8Z"
                        fill="#404040"
                      />
                    </svg>
                    <svg
                      width={30}
                      height={47}
                      viewBox="0 0 30 47"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.48089 44H10.3269V38.105H12.3159V37.403H7.49189V38.105H9.48089V44ZM13.5006 44H17.3976V43.298H14.3376V40.886H16.8306V40.175H14.3376V38.105H17.2986V37.403H13.5006V44ZM18.8004 44H22.5174V43.298H19.6374V37.403H18.8004V44Z"
                        fill="black"
                      />
                      <circle cx={15} cy={15} r={15} fill="#D9D9D9" />
                      <path
                        d="M21.7427 18.9665L18.5481 16.062C18.3971 15.9247 18.1987 15.8515 17.9947 15.8578C17.7908 15.8641 17.5972 15.9495 17.455 16.0958L15.5744 18.0298C15.1218 17.9433 14.2117 17.6597 13.275 16.7253C12.3382 15.7877 12.0545 14.8753 11.9704 14.4258L13.9029 12.5444C14.0494 12.4023 14.1348 12.2087 14.1411 12.0047C14.1474 11.8007 14.0741 11.6022 13.9367 11.4513L11.0329 8.25752C10.8954 8.10613 10.7043 8.0143 10.5002 8.00153C10.2961 7.98877 10.095 8.05607 9.93974 8.18915L8.23441 9.65165C8.09854 9.78801 8.01745 9.9695 8.00651 10.1617C7.99472 10.3581 7.76996 15.0121 11.3787 18.6223C14.5269 21.7697 18.4703 22 19.5564 22C19.7152 22 19.8126 21.9953 19.8385 21.9937C20.0307 21.983 20.2121 21.9015 20.3478 21.765L21.8095 20.0589C21.9431 19.9041 22.0109 19.7032 21.9984 19.4991C21.9859 19.295 21.8942 19.1039 21.7427 18.9665Z"
                        fill="#404040"
                      />
                    </svg>
                    <svg
                      width={30}
                      height={47}
                      viewBox="0 0 30 47"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.9 44H7.656V40.355C7.656 39.779 7.593 38.987 7.548 38.402H7.584L8.106 39.905L9.357 43.343H9.915L11.166 39.905L11.688 38.402H11.733C11.688 38.987 11.625 39.779 11.625 40.355V44H12.399V37.403H11.391L10.14 40.94C9.987 41.39 9.843 41.849 9.681 42.317H9.645C9.483 41.849 9.33 41.39 9.168 40.94L7.899 37.403H6.9V44ZM13.3307 44H14.1767L15.3377 40.31C15.5807 39.572 15.7877 38.852 16.0037 38.087H16.0397C16.2557 38.852 16.4627 39.572 16.6967 40.31L17.8577 44H18.7307L16.4987 37.403H15.5627L13.3307 44ZM14.5007 41.984H17.5427V41.327H14.5007V41.984ZM19.6793 44H20.5163V41.381H21.5963C23.0453 41.381 24.0353 40.733 24.0353 39.347C24.0353 37.898 23.0363 37.403 21.5603 37.403H19.6793V44ZM20.5163 40.706V38.087H21.4523C22.6223 38.087 23.2073 38.384 23.2073 39.347C23.2073 40.283 22.6493 40.706 21.4973 40.706H20.5163Z"
                        fill="black"
                      />
                      <circle cx={15} cy={15} r={15} fill="#D9D9D9" />
                      <path
                        d="M14.7647 8C11.581 8 9 10.3627 9 13.2773C9 14.2521 9.2084 15.2588 9.80646 15.9844L14.7647 22L19.723 15.9844C20.2662 15.3253 20.5294 14.1602 20.5294 13.2773C20.5294 10.3627 17.9485 8 14.7647 8ZM14.7647 11.0565C16.1043 11.0565 17.1906 12.051 17.1906 13.2773C17.1906 14.5037 16.1043 15.4982 14.7647 15.4982C13.4251 15.4982 12.3388 14.5037 12.3388 13.2773C12.3388 12.051 13.4251 11.0565 14.7647 11.0565Z"
                        fill="#404040"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-white p-3">
                <div className="flex justify-between xl:items-center gap-4 xl:flex-row flex-col">
                  <div>
                    <p className="text-sm font-demilight text-gray-700 mb-6">
                      店舗情報
                    </p>
                    <div className="flex items-center gap-4">
                      <p className="text-sm font-demilight text-gray-700">
                        住所
                      </p>
                      <div>
                        <p className="text-sm font-demilight text-gray-700">
                          〒133-0051
                        </p>
                        <p className="text-sm font-demilight text-gray-700">
                          東京都江戸川区北小岩4-6-1
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 my-5">
                      <p className="text-sm font-demilight text-gray-700">
                        TEL
                      </p>
                      <p className="text-sm font-demilight text-gray-700">
                        03-5694-2240
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-sm font-demilight text-gray-700">
                        TEL
                      </p>
                      <p className="text-sm font-demilight text-gray-700">
                        03-5694-2240
                      </p>
                    </div>
                    <div className="text-left mt-4">
                      <button onClick={()=> router.push("/storedetail")} className="px-6 py-2.5 bg-white border rounded-lg border-gray-700 text-lg text-center text-gray-700 transform duration-300 ease-in-out hover:bg-gray-700 hover:text-white">
                        店舗詳細を見る
                      </button>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-100 lg:max-w-[375px] w-full h-[204px]">
                    <p className="text-sm font-demilight text-gray-700">
                      営業時間
                    </p>
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/eqw1212.png"
                      alt="sq"
                    />
                    <p className="text-sm font-demilight text-gray-700">
                      ※水曜日は9:00～17:00、日曜日と祝日はお休みです。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:max-w-[883px] w-full p-8 bg-gray-100 my-5">
              <div className="flex items-center gap-4">
                <div aria-label="image">
                  <picture>
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/store0349.png"
                      alt="one"
                    />
                  </picture>
                </div>
                <div aria-label="text">
                  <p className="text-sm font-demilight">東京都 / 江戸川区</p>
                  <p className="text-2xl font-bold">ヱド川薬局</p>
                  <div className="flex items-center gap-3">
                    <svg
                      width={30}
                      height={47}
                      viewBox="0 0 30 47"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.969 38.168V38.789H14.532V38.168H9.969ZM10.14 39.968V40.58H14.343V39.968H10.14ZM9.69 41.858V42.488H14.658V41.858H9.69ZM11.868 38.384V44.72H12.525V38.384H11.868ZM13.479 36.431C13.317 36.908 13.011 37.61 12.777 38.042L13.299 38.231C13.56 37.826 13.866 37.196 14.136 36.647L13.479 36.431ZM10.356 36.692C10.644 37.178 10.932 37.835 11.031 38.258L11.616 38.024C11.508 37.61 11.211 36.971 10.905 36.494L10.356 36.692ZM6.765 39.167V39.707H9.447V39.167H6.765ZM6.81 36.764V37.304H9.429V36.764H6.81ZM6.765 40.373V40.913H9.447V40.373H6.765ZM6.342 37.943V38.501H9.762V37.943H6.342ZM7.089 41.588V42.146H8.853V43.649H7.089V44.216H9.447V41.588H7.089ZM6.756 41.588V44.63H7.341V41.588H6.756ZM20.886 37.439V43.874H21.489V37.439H20.886ZM19.104 37.16V44.612H19.716V37.79H22.731V44.54H23.361V37.16H19.104ZM19.437 40.283V40.904H23.01V40.283H19.437ZM19.437 43.496V44.117H22.983V43.496H19.437ZM16.863 40.679V44.711H17.466V40.679H16.863ZM16.773 36.44C16.539 37.043 16.116 37.916 15.765 38.438L16.242 38.654C16.593 38.15 17.034 37.349 17.376 36.683L16.773 36.44ZM17.88 37.475C17.385 38.429 16.512 39.77 15.819 40.562L16.242 40.805C16.935 40.031 17.826 38.753 18.456 37.754L17.88 37.475ZM15.333 38.366C15.81 38.78 16.368 39.392 16.602 39.806L16.962 39.284C16.719 38.897 16.161 38.321 15.675 37.916L15.333 38.366ZM17.628 39.536C18.015 40.13 18.402 40.931 18.546 41.435L19.086 41.174C18.933 40.67 18.537 39.896 18.141 39.311L17.628 39.536ZM15.27 40.418L15.369 41.039C16.242 40.958 17.394 40.85 18.519 40.751L18.51 40.202C17.304 40.292 16.089 40.373 15.27 40.418ZM17.79 41.714C18.042 42.272 18.285 43.01 18.366 43.487L18.933 43.298C18.825 42.821 18.573 42.101 18.312 41.552L17.79 41.714ZM15.828 41.579C15.729 42.371 15.558 43.181 15.261 43.73C15.414 43.784 15.684 43.91 15.801 43.982C16.08 43.406 16.296 42.533 16.413 41.687L15.828 41.579Z"
                        fill="black"
                      />
                      <circle cx={15} cy={15} r={15} fill="#D9D9D9" />
                      <path
                        d="M13.5147 19.6H14.0294V15.65H13.5147C13.2304 15.65 13 15.4052 13 15.1031V13.7969C13 13.4948 13.2304 13.25 13.5147 13.25H16.3971C16.6813 13.25 16.9118 13.4948 16.9118 13.7969V19.6H17.4265C17.7107 19.6 17.9412 19.8448 17.9412 20.1469V21.4531C17.9412 21.7552 17.7107 22 17.4265 22H13.5147C13.2304 22 13 21.7552 13 21.4531V20.1469C13 19.8448 13.2304 19.6 13.5147 19.6ZM15.4706 8C14.4472 8 13.6176 8.88143 13.6176 9.96875C13.6176 11.0561 14.4472 11.9375 15.4706 11.9375C16.494 11.9375 17.3235 11.0561 17.3235 9.96875C17.3235 8.88143 16.4939 8 15.4706 8Z"
                        fill="#404040"
                      />
                    </svg>
                    <svg
                      width={30}
                      height={47}
                      viewBox="0 0 30 47"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.48089 44H10.3269V38.105H12.3159V37.403H7.49189V38.105H9.48089V44ZM13.5006 44H17.3976V43.298H14.3376V40.886H16.8306V40.175H14.3376V38.105H17.2986V37.403H13.5006V44ZM18.8004 44H22.5174V43.298H19.6374V37.403H18.8004V44Z"
                        fill="black"
                      />
                      <circle cx={15} cy={15} r={15} fill="#D9D9D9" />
                      <path
                        d="M21.7427 18.9665L18.5481 16.062C18.3971 15.9247 18.1987 15.8515 17.9947 15.8578C17.7908 15.8641 17.5972 15.9495 17.455 16.0958L15.5744 18.0298C15.1218 17.9433 14.2117 17.6597 13.275 16.7253C12.3382 15.7877 12.0545 14.8753 11.9704 14.4258L13.9029 12.5444C14.0494 12.4023 14.1348 12.2087 14.1411 12.0047C14.1474 11.8007 14.0741 11.6022 13.9367 11.4513L11.0329 8.25752C10.8954 8.10613 10.7043 8.0143 10.5002 8.00153C10.2961 7.98877 10.095 8.05607 9.93974 8.18915L8.23441 9.65165C8.09854 9.78801 8.01745 9.9695 8.00651 10.1617C7.99472 10.3581 7.76996 15.0121 11.3787 18.6223C14.5269 21.7697 18.4703 22 19.5564 22C19.7152 22 19.8126 21.9953 19.8385 21.9937C20.0307 21.983 20.2121 21.9015 20.3478 21.765L21.8095 20.0589C21.9431 19.9041 22.0109 19.7032 21.9984 19.4991C21.9859 19.295 21.8942 19.1039 21.7427 18.9665Z"
                        fill="#404040"
                      />
                    </svg>
                    <svg
                      width={30}
                      height={47}
                      viewBox="0 0 30 47"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.9 44H7.656V40.355C7.656 39.779 7.593 38.987 7.548 38.402H7.584L8.106 39.905L9.357 43.343H9.915L11.166 39.905L11.688 38.402H11.733C11.688 38.987 11.625 39.779 11.625 40.355V44H12.399V37.403H11.391L10.14 40.94C9.987 41.39 9.843 41.849 9.681 42.317H9.645C9.483 41.849 9.33 41.39 9.168 40.94L7.899 37.403H6.9V44ZM13.3307 44H14.1767L15.3377 40.31C15.5807 39.572 15.7877 38.852 16.0037 38.087H16.0397C16.2557 38.852 16.4627 39.572 16.6967 40.31L17.8577 44H18.7307L16.4987 37.403H15.5627L13.3307 44ZM14.5007 41.984H17.5427V41.327H14.5007V41.984ZM19.6793 44H20.5163V41.381H21.5963C23.0453 41.381 24.0353 40.733 24.0353 39.347C24.0353 37.898 23.0363 37.403 21.5603 37.403H19.6793V44ZM20.5163 40.706V38.087H21.4523C22.6223 38.087 23.2073 38.384 23.2073 39.347C23.2073 40.283 22.6493 40.706 21.4973 40.706H20.5163Z"
                        fill="black"
                      />
                      <circle cx={15} cy={15} r={15} fill="#D9D9D9" />
                      <path
                        d="M14.7647 8C11.581 8 9 10.3627 9 13.2773C9 14.2521 9.2084 15.2588 9.80646 15.9844L14.7647 22L19.723 15.9844C20.2662 15.3253 20.5294 14.1602 20.5294 13.2773C20.5294 10.3627 17.9485 8 14.7647 8ZM14.7647 11.0565C16.1043 11.0565 17.1906 12.051 17.1906 13.2773C17.1906 14.5037 16.1043 15.4982 14.7647 15.4982C13.4251 15.4982 12.3388 14.5037 12.3388 13.2773C12.3388 12.051 13.4251 11.0565 14.7647 11.0565Z"
                        fill="#404040"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-white p-3">
                <div className="flex justify-between xl:items-center gap-4 xl:flex-row flex-col">
                  <div>
                    <p className="text-sm font-demilight text-gray-700 mb-6">
                      店舗情報
                    </p>
                    <div className="flex items-center gap-4">
                      <p className="text-sm font-demilight text-gray-700">
                        住所
                      </p>
                      <div>
                        <p className="text-sm font-demilight text-gray-700">
                          〒133-0051
                        </p>
                        <p className="text-sm font-demilight text-gray-700">
                          東京都江戸川区北小岩4-6-1
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 my-5">
                      <p className="text-sm font-demilight text-gray-700">
                        TEL
                      </p>
                      <p className="text-sm font-demilight text-gray-700">
                        03-5694-2240
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-sm font-demilight text-gray-700">
                        TEL
                      </p>
                      <p className="text-sm font-demilight text-gray-700">
                        03-5694-2240
                      </p>
                    </div>
                    <div className="text-left mt-4">
                      <button onClick={()=> router.push("/storedetail")}  className="px-6 py-2.5 bg-white border rounded-lg border-gray-700 text-lg text-center text-gray-700 transform duration-300 ease-in-out hover:bg-gray-700 hover:text-white">
                        店舗詳細を見る
                      </button>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-100 lg:max-w-[375px] w-full h-[204px]">
                    <p className="text-sm font-demilight text-gray-700">
                      営業時間
                    </p>
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/eqw1212.png"
                      alt="sq"
                    />
                    <p className="text-sm font-demilight text-gray-700">
                      ※水曜日は9:00～17:00、日曜日と祝日はお休みです。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:max-w-[883px] w-full p-8 bg-gray-100">
              <div className="flex items-center gap-4">
                <div aria-label="image">
                  <picture>
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/store0349.png"
                      alt="one"
                    />
                  </picture>
                </div>
                <div aria-label="text">
                  <p className="text-sm font-demilight">東京都 / 江戸川区</p>
                  <p className="text-2xl font-bold">ヱド川薬局</p>
                  <div className="flex items-center gap-3">
                    <svg
                      width={30}
                      height={47}
                      viewBox="0 0 30 47"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.969 38.168V38.789H14.532V38.168H9.969ZM10.14 39.968V40.58H14.343V39.968H10.14ZM9.69 41.858V42.488H14.658V41.858H9.69ZM11.868 38.384V44.72H12.525V38.384H11.868ZM13.479 36.431C13.317 36.908 13.011 37.61 12.777 38.042L13.299 38.231C13.56 37.826 13.866 37.196 14.136 36.647L13.479 36.431ZM10.356 36.692C10.644 37.178 10.932 37.835 11.031 38.258L11.616 38.024C11.508 37.61 11.211 36.971 10.905 36.494L10.356 36.692ZM6.765 39.167V39.707H9.447V39.167H6.765ZM6.81 36.764V37.304H9.429V36.764H6.81ZM6.765 40.373V40.913H9.447V40.373H6.765ZM6.342 37.943V38.501H9.762V37.943H6.342ZM7.089 41.588V42.146H8.853V43.649H7.089V44.216H9.447V41.588H7.089ZM6.756 41.588V44.63H7.341V41.588H6.756ZM20.886 37.439V43.874H21.489V37.439H20.886ZM19.104 37.16V44.612H19.716V37.79H22.731V44.54H23.361V37.16H19.104ZM19.437 40.283V40.904H23.01V40.283H19.437ZM19.437 43.496V44.117H22.983V43.496H19.437ZM16.863 40.679V44.711H17.466V40.679H16.863ZM16.773 36.44C16.539 37.043 16.116 37.916 15.765 38.438L16.242 38.654C16.593 38.15 17.034 37.349 17.376 36.683L16.773 36.44ZM17.88 37.475C17.385 38.429 16.512 39.77 15.819 40.562L16.242 40.805C16.935 40.031 17.826 38.753 18.456 37.754L17.88 37.475ZM15.333 38.366C15.81 38.78 16.368 39.392 16.602 39.806L16.962 39.284C16.719 38.897 16.161 38.321 15.675 37.916L15.333 38.366ZM17.628 39.536C18.015 40.13 18.402 40.931 18.546 41.435L19.086 41.174C18.933 40.67 18.537 39.896 18.141 39.311L17.628 39.536ZM15.27 40.418L15.369 41.039C16.242 40.958 17.394 40.85 18.519 40.751L18.51 40.202C17.304 40.292 16.089 40.373 15.27 40.418ZM17.79 41.714C18.042 42.272 18.285 43.01 18.366 43.487L18.933 43.298C18.825 42.821 18.573 42.101 18.312 41.552L17.79 41.714ZM15.828 41.579C15.729 42.371 15.558 43.181 15.261 43.73C15.414 43.784 15.684 43.91 15.801 43.982C16.08 43.406 16.296 42.533 16.413 41.687L15.828 41.579Z"
                        fill="black"
                      />
                      <circle cx={15} cy={15} r={15} fill="#D9D9D9" />
                      <path
                        d="M13.5147 19.6H14.0294V15.65H13.5147C13.2304 15.65 13 15.4052 13 15.1031V13.7969C13 13.4948 13.2304 13.25 13.5147 13.25H16.3971C16.6813 13.25 16.9118 13.4948 16.9118 13.7969V19.6H17.4265C17.7107 19.6 17.9412 19.8448 17.9412 20.1469V21.4531C17.9412 21.7552 17.7107 22 17.4265 22H13.5147C13.2304 22 13 21.7552 13 21.4531V20.1469C13 19.8448 13.2304 19.6 13.5147 19.6ZM15.4706 8C14.4472 8 13.6176 8.88143 13.6176 9.96875C13.6176 11.0561 14.4472 11.9375 15.4706 11.9375C16.494 11.9375 17.3235 11.0561 17.3235 9.96875C17.3235 8.88143 16.4939 8 15.4706 8Z"
                        fill="#404040"
                      />
                    </svg>
                    <svg
                      width={30}
                      height={47}
                      viewBox="0 0 30 47"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.48089 44H10.3269V38.105H12.3159V37.403H7.49189V38.105H9.48089V44ZM13.5006 44H17.3976V43.298H14.3376V40.886H16.8306V40.175H14.3376V38.105H17.2986V37.403H13.5006V44ZM18.8004 44H22.5174V43.298H19.6374V37.403H18.8004V44Z"
                        fill="black"
                      />
                      <circle cx={15} cy={15} r={15} fill="#D9D9D9" />
                      <path
                        d="M21.7427 18.9665L18.5481 16.062C18.3971 15.9247 18.1987 15.8515 17.9947 15.8578C17.7908 15.8641 17.5972 15.9495 17.455 16.0958L15.5744 18.0298C15.1218 17.9433 14.2117 17.6597 13.275 16.7253C12.3382 15.7877 12.0545 14.8753 11.9704 14.4258L13.9029 12.5444C14.0494 12.4023 14.1348 12.2087 14.1411 12.0047C14.1474 11.8007 14.0741 11.6022 13.9367 11.4513L11.0329 8.25752C10.8954 8.10613 10.7043 8.0143 10.5002 8.00153C10.2961 7.98877 10.095 8.05607 9.93974 8.18915L8.23441 9.65165C8.09854 9.78801 8.01745 9.9695 8.00651 10.1617C7.99472 10.3581 7.76996 15.0121 11.3787 18.6223C14.5269 21.7697 18.4703 22 19.5564 22C19.7152 22 19.8126 21.9953 19.8385 21.9937C20.0307 21.983 20.2121 21.9015 20.3478 21.765L21.8095 20.0589C21.9431 19.9041 22.0109 19.7032 21.9984 19.4991C21.9859 19.295 21.8942 19.1039 21.7427 18.9665Z"
                        fill="#404040"
                      />
                    </svg>
                    <svg
                      width={30}
                      height={47}
                      viewBox="0 0 30 47"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.9 44H7.656V40.355C7.656 39.779 7.593 38.987 7.548 38.402H7.584L8.106 39.905L9.357 43.343H9.915L11.166 39.905L11.688 38.402H11.733C11.688 38.987 11.625 39.779 11.625 40.355V44H12.399V37.403H11.391L10.14 40.94C9.987 41.39 9.843 41.849 9.681 42.317H9.645C9.483 41.849 9.33 41.39 9.168 40.94L7.899 37.403H6.9V44ZM13.3307 44H14.1767L15.3377 40.31C15.5807 39.572 15.7877 38.852 16.0037 38.087H16.0397C16.2557 38.852 16.4627 39.572 16.6967 40.31L17.8577 44H18.7307L16.4987 37.403H15.5627L13.3307 44ZM14.5007 41.984H17.5427V41.327H14.5007V41.984ZM19.6793 44H20.5163V41.381H21.5963C23.0453 41.381 24.0353 40.733 24.0353 39.347C24.0353 37.898 23.0363 37.403 21.5603 37.403H19.6793V44ZM20.5163 40.706V38.087H21.4523C22.6223 38.087 23.2073 38.384 23.2073 39.347C23.2073 40.283 22.6493 40.706 21.4973 40.706H20.5163Z"
                        fill="black"
                      />
                      <circle cx={15} cy={15} r={15} fill="#D9D9D9" />
                      <path
                        d="M14.7647 8C11.581 8 9 10.3627 9 13.2773C9 14.2521 9.2084 15.2588 9.80646 15.9844L14.7647 22L19.723 15.9844C20.2662 15.3253 20.5294 14.1602 20.5294 13.2773C20.5294 10.3627 17.9485 8 14.7647 8ZM14.7647 11.0565C16.1043 11.0565 17.1906 12.051 17.1906 13.2773C17.1906 14.5037 16.1043 15.4982 14.7647 15.4982C13.4251 15.4982 12.3388 14.5037 12.3388 13.2773C12.3388 12.051 13.4251 11.0565 14.7647 11.0565Z"
                        fill="#404040"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-white p-3">
                <div className="flex justify-between xl:items-center gap-4 xl:flex-row flex-col">
                  <div>
                    <p className="text-sm font-demilight text-gray-700 mb-6">
                      店舗情報
                    </p>
                    <div className="flex items-center gap-4">
                      <p className="text-sm font-demilight text-gray-700">
                        住所
                      </p>
                      <div>
                        <p className="text-sm font-demilight text-gray-700">
                          〒133-0051
                        </p>
                        <p className="text-sm font-demilight text-gray-700">
                          東京都江戸川区北小岩4-6-1
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 my-5">
                      <p className="text-sm font-demilight text-gray-700">
                        TEL
                      </p>
                      <p className="text-sm font-demilight text-gray-700">
                        03-5694-2240
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-sm font-demilight text-gray-700">
                        TEL
                      </p>
                      <p className="text-sm font-demilight text-gray-700">
                        03-5694-2240
                      </p>
                    </div>
                    <div className="text-left mt-4">
                      <button onClick={()=> router.push("/storedetail")}  className="px-6 py-2.5 bg-white border rounded-lg border-gray-700 text-lg text-center text-gray-700 transform duration-300 ease-in-out hover:bg-gray-700 hover:text-white">
                        店舗詳細を見る
                      </button>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-100 lg:max-w-[375px] w-full h-[204px]">
                    <p className="text-sm font-demilight text-gray-700">
                      営業時間
                    </p>
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/eqw1212.png"
                      alt="sq"
                    />
                    <p className="text-sm font-demilight text-gray-700">
                      ※水曜日は9:00～17:00、日曜日と祝日はお休みです。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
