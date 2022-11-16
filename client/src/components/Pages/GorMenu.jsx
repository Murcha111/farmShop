import React from 'react'
import { Link, useLocation } from "react-router-dom";
import './gor.css'
const link = '/user/cabinet/menu/'
export default function GorMenu() {
  return (
    <div className="navbarCabinet">
    <ul className="nav justify-content-center">
       <li className="nav-item">
        <Link to={`${link}info`}  className="nav-link active text123" aria-current="page" >Личные данные</Link>
       </li>
       <li className="nav-item">
        <Link to={`${link}cards`}  className="nav-link active  text123" aria-current="page" >Ваши объявления</Link>
       </li>
       <li className="nav-item">
        <Link to={`${link}favourites`} className="nav-link " >Избранное</Link>
       </li>
       {/* <li className="nav-item">
        <Link to={`/user/cabinet/menu/${link}`} className="nav-link text-white" >Сделки</Link>
       </li>
       <li className="nav-item">
        <Link to={`/user/cabinet/menu/${link}`} className="nav-link text-white" >Контракты</Link>
       </li>
       <li className="nav-item">
        <Link to={`/user/cabinet/menu/${link}`} className="nav-link text-white" >Покупки</Link>
       </li> */}
       {/* <li className="nav-item">
       <Link className="nav-link" to={`/user/cabinet/menu/${link}`}> Юридическая информация</Link>  
       </li> */}
    </ul>
  </div>
  )
}


