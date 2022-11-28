import React from 'react'
import Storemain from '../reusableUI/heromain/index'
import Privacytextsection from './privacytextsection/index'
function index() {
  return (
    <>
    <Storemain
    storename={"プライバシーポリシー"}
    // storesubname={"カテゴリー： ○○ タグ： ＃○○　＃○○"}
    />
    <div className='container mx-auto'>
    <p className="text-xs">ホーム - プライバシーポリシー</p>
    </div>
    <Privacytextsection/>
    </>
  )
}

export default index