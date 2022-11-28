import React from 'react'
import Storemain from '../reusableUI/heromain/index'
import Sectiontwo from './sectiontwo/index'
import Qrcode from '../reusableUI/qrcode/index'
function index() {
  return (
    <>
    <Storemain
    storename={"先輩からのメッセージ"}
    storesubname={"ページの解説文がここに入ります。"}
    />
    <div className='container mx-auto'>
    <p className="text-xs">ホーム - 先輩からのメッセージ</p>
    </div>
    <Sectiontwo/>
    <Qrcode/>
    </>
  )
}

export default index