import React from 'react'
import Storemain from '../../reusableUI/heromain/index'
function index() {
  return (
    <>
    <Storemain
    storename={"店舗一覧"}
    storesubname={"ページの解説文がここに入ります"}
    />
    <div className='container mx-auto'>
    <p className="text-xs">ホーム - 店舗一覧</p>
    </div>
    </>
  )
}

export default index