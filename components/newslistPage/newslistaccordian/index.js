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
      question: "2022.07.25   サンプル文章が入ります。",
      answer: "ここに本文が入ります。サンプル文章。ここに本文が入ります。サンプル文章。ここに本文が入ります。サンプル文章。",
      height: "120"
    },
    {
      question: "2022.07.25   サンプル文章が入ります。",
      answer: "ここに本文が入ります。サンプル文章。ここに本文が入ります。サンプル文章。ここに本文が入ります。サンプル文章。",
      height: "120"
    },
    {
      question: "2022.08.01   お盆休みについて",
      answer: "ここに本文が入ります。サンプル文章。ここに本文が入ります。サンプル文章。ここに本文が入ります。サンプル文章。",
      height: "120"
    },
    {
      question: "2022.07.25   サンプル文章が入ります。",
      answer: "ここに本文が入ります。サンプル文章。ここに本文が入ります。サンプル文章。ここに本文が入ります。サンプル文章。",
      height: "120"
    },
    {
      question: "2022.07.25   サンプル文章が入ります。",
      answer: "ここに本文が入ります。サンプル文章。ここに本文が入ります。サンプル文章。ここに本文が入ります。サンプル文章。",
      height: "120"
    },
  ];
  return (
    <>
          <section  className="mx-auto container  flex flex-col items-center justify-center mt-24">
            <div className="w-full bg-white 2xl:px-4 xl:px-10 px-4 ">
              {faq.map((data) => {
                return (
                  <div key={Math.random(1000)}>
                    <FAQ question={data.question} answer={data.answer} height={data.height}/>
                  </div>
                );
              })}
            <hr className="bg-gray-300 border "/>
            </div>
          </section>
    </>
    )
}

export default index