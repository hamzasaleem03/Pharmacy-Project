import React, { useState } from "react";

function index({ question, answer,height }) {
  const [showQ, setShowQ] = useState(false);

  return (
    <div className="py-10 border-t border-gray-300">
      <div className="flex items-center justify-between w-full  cursor-pointer " onClick={() => setShowQ(!showQ)}>
        <p className="text-base leading-6 text-gray-700 md:text-2xl md:leading-6 font-normal tracking-[-0.03em]">{question}</p>

        <svg className={`duration-300 flex-shrink-0  flex ease-in-out ${showQ ? ` rotate-45 ` : `opacity-100 `}`}  xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line  x1={12} y1={5} x2={12} y2={19} />
          <line  x1={5} y1={12} x2={19} y2={12} />
        </svg>
      </div>
      <div className={` overflow-hidden flex items-center justify-start  duration-300 ease-in-out ${showQ ? ` mt-4 h-[${height}px] duration-400 lg:h-[6rem]  ` : `h-0 `}`}>
        <p className={`text-sm leading-6 text-gray-700 py-6 px-1 xl:pr-60`}>{answer}</p>
      </div>
    </div>
  );
}

export default index;
