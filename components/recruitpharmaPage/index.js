import React from 'react'
import Storemain from '../reusableUI/heromain/index'
import Sectiontwo from './sectiontwo/index'
import Sectionthree from './sectionthree/index'
import Sectionsevenreuse from '../reusableUI/sectionsevenreuse/index'
import Sectionfive from './sectionfive/index'
import Qasection from '../reusableUI/qasection/index'
import Sectionseven from './sectionseven/index'
import Qrcode from '../reusableUI/qrcode/index'
function index() {
  return (
    <>
    <Storemain
    storename={"薬剤師（正社員・パート）募集"}
    storesubname={"ページの解説文がここに入ります"}
    />
    <div className='container mx-auto'>
    <p className="text-xs">ホーム - 薬剤師（正社員・パート）募集</p>
    </div>
    <Sectiontwo/>
    <Sectionthree/>
    <Sectionsevenreuse/>
    <Sectionfive/>
    <Qasection/>
    <Sectionseven/>
    <Qrcode/>
    </>
  )
}

export default index