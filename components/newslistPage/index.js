import React from 'react'
import Storemain from '../reusableUI/heromain/index'
import Newslistaccordian from './newslistaccordian/index'
function index() {
  return (
    <>
    <Storemain
    storename={"お知らせ"}
    storesubname={"ページの解説文がここに入ります。"}
    />
    <div className='container mx-auto'>
    <p className="text-xs">ホーム - お知らせ一覧</p>
    </div>
    <Newslistaccordian/>
    </>
  )
}

export default index