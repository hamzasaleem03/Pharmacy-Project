import React from 'react'
import Storemain from '../reusableUI/heromain/index'
import Storedetailsecondsection from './storedetailsecondsection'
import Map from './map/index'
import Storedetailswiper from './storedetailswiper/index'
import Pharma from '../reusableUI/pharma/index'
function index() {
  return (
    <>
    <Storemain
    storename={"ヱド川薬局 店舗情報"}
    storesubname={"ページの解説文がここに入ります"}
    />
    <div className='container mx-auto'>
    <p className="text-xs">ホーム - 店舗一覧 - ヱド川薬局</p>
    </div>
    <Storedetailsecondsection/>
    <Map/>
    <Storedetailswiper/>
    <Pharma/>
    </>
  )
}

export default index