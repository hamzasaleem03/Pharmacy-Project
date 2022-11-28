import React from 'react'
import Storemain from '../reusableUI/heromain/index'
import Textsection from './textsection/index'
function index() {
  return (
    <>
    <Storemain
    storename={"会社概要"}
    storesubname={"ページの解説文がここに入ります。"}
    />
    <div className='container mx-auto'>
    <p className="text-xs">ホーム - 会社概要</p>
    </div>
    <Textsection/>
    </>
  )
}

export default index