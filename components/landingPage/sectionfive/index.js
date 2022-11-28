// export default index
import React, { useRef, useState } from "react";

// eslint-disable-next-line
import "swiper/css/bundle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Autoplay, Pagination]);

function index() {
  return (
    <>
      <div className="mx-auto container px-4 mt-[117px]">
        <p className="text-2xl font-bold text-center">おすすめ記事</p>
        <div className="relative py-12">
          <div className="py-14">
            <div className="">
              <div className="py-7">
                <div className="swiper mySwiper">
                  <Swiper
                    slidesPerView={"auto"}
                    slidesPerGroupSkip={3}
                    grabCursor={true}
                    autoplay={true}
                    loopFillGroupWithBlank={true}
                    loop={true}
                    navigation={{
                      prevEl: ".swiper-button-prev",
                      nextEl: ".swiper-button-next",
                    }}
                    // If we need pagination
                    pagination={{
                      el: ".swiper-pagination",
                      clickable: true,
                    }}
                    breakpoints={{
                      // when window width is >= 320px
                      320: {
                        slidesPerView: 1,
                        spaceBetween: 24,
                      },
                      // when window width is >= 480px
                      480: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                      },
                      // when window width is >= 640px
                      640: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                      },
                      1024: {
                        slidesPerView: 4,
                        spaceBetween: 32,
                        slidesPerGroup: 1,
                      },
                      1336: {
                        slidesPerView: 4,
                        spaceBetween: 32,
                      },
                    }}
                    className="swiper mySwiper"
                  >
                    <SwiperSlide className="swiper-slide relative ">
                      <div className="">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sectionfive25545.png"
                          alt="one"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide relative ">
                      <div className="">
                        <img
                          className=""
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sectionfive25545.png"
                          alt="one"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide relative">
                      <div className="">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sectionfive25545.png"
                          alt="one"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide relative">
                      <div className="">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sectionfive25545.png"
                          alt="one"
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="px-8 py-2.5 bg-white border rounded-lg border-gray-700 text-lg text-center text-gray-700 transform duration-300 ease-in-out hover:bg-gray-700 hover:text-white">
            もっと読む
          </button>
        </div>

        <style>
          {`
               .swiper-slide {
                text-align: center;
                font-size: 18px;
                /* Center slide text vertically */
                display: -webkit-box;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                -webkit-justify-content: center;
                justify-content: center;
                -webkit-box-align: center;
                -webkit-align-items: center;
                align-items: center;
                
            }
            .swiper-slide img {
                object-fit: cover;
            }
        `}
        </style>
      </div>
    </>
  );
}

export default index;
