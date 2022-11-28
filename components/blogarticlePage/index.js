import React from 'react'
import Storemain from '../reusableUI/heromain/index'
import Detailimages from './detailimages/index'
function index() {
  return (
    <>
    <Storemain
    storename={"ブログ記事タイトル"}
    storesubname={"カテゴリー： ○○ タグ： ＃○○　＃○○"}
    />
    <div className='container mx-auto'>
    <p className="text-xs">ホーム - ブログ一覧</p>
    </div>
    <Detailimages/>
    </>
  )
}

export default index