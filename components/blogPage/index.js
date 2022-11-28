import React from 'react'
import Storemain from '../reusableUI/heromain/index'
import Blogimages from './blogimages/index'
function index() {
  return (
    <>
    <Storemain
    storename={"最新記事一覧"}
    storesubname={"ページの解説文がここに入ります。"}
    />
    <div className='container mx-auto'>
    <p className="text-xs">ホーム - ブログ一覧</p>
    </div>
    <Blogimages/>
    </>
  )
}

export default index