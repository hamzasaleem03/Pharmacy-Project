import React from 'react'
import FAQ from "../../reusableUI/faq/index";

function index() {
  let faq = [
    {
      question: "2022.08.01   お盆休みについて",
      answer: "ここに本文が入ります。サンプル文章。ここに本文が入ります。サンプル文章。ここに本文が入ります。サンプル文章。",
      height: "120"
    },
    {
      question: "2022.08.01   お盆休みについて",
      answer: "ここに本文が入ります。サンプル文章。ここに本文が入ります。サンプル文章。ここに本文が入ります。サンプル文章。",
      height: "120"
    },
    {
      question: "2022.08.01   お盆休みについて",
      answer: "ここに本文が入ります。サンプル文章。ここに本文が入ります。サンプル文章。ここに本文が入ります。サンプル文章。",
      height: "120"
    },
  ];
  return (
    <>
      {/* {faq.map((data, index) => {
        return ( */}
          <section  className="mx-auto container  flex flex-col items-center justify-center mt-24">
            <div className="w-full bg-white 2xl:px-4 xl:px-10 px-4 ">
              {/* <h2 className="lg:text-6xl md:text-3xl text-2xl font-bold leading-[32px] text-gray-800 mb-6 text-center">{data.heading}</h2>
              <p className="text-xl leading-[30px] text-center text-gray-600 mb-[40px] lg:max-w-[630px] w-full mx-auto">{data.text}</p> */}
              {faq.map((data) => {
                // console.log(data)
                return (
                  <div key={Math.random(1000)}>
                    <FAQ question={data.question} answer={data.answer} height={data.height}/>
                  </div>
                );
              })}
            <hr className="bg-gray-300 border "/>
            </div>
          </section>
        {/* );
      })} */}
    </>
    )
}

export default index