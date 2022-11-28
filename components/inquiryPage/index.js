import React from 'react'
import Storemain from '../reusableUI/heromain/index'
import Qasection from '../reusableUI/qasection/index'
import Contact from './contactform/index'
function index() {
  return (
    <>
    <Storemain
    storename={"お問い合わせ"}
    storesubname={"ページの解説文がここに入ります。"}
    />
    <div className='container mx-auto'>
    <p className="text-xs">ホーム - お問い合わせ</p>
    </div>
    <Qasection/>
    <Contact/>
    </>
  )
}

export default index