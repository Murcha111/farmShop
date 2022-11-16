import React from 'react'
import CategoriesOneList from '../Categories/CategoriesOneList'
import MainInfo from '../MainPage/MainInfo'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import style from '../Main/style.module.css'
import MainReg from '../Auth/MainReg'


export default function Main() {
  return (
    <div className={style.container}>
      <VideoPlayer />
      <CategoriesOneList />
      <MainInfo />
      
      <MainReg />
    </div>
  )
}

