import Nav from 'react-bootstrap/Nav';
import React from 'react'
import {Link} from 'react-router-dom'
import './pages.style.module.css'
export default function VerticalMenu() {
  const link = 'compContent'
  return (
    <Nav defaultActiveKey="/home" className="flex-column align-text-top x-large">
       <h1>ТУТ БЛОК С ИНФОЙ О ПОЛЬЗОВАТЕЛЕ</h1>
      <Nav.Link  className="a" as={Link} to={`/user/cabinet/menu/${link}`}> <p> Имя фамилия </p></Nav.Link>
      <Nav.Link as={Link} to={`/user/cabinet/menu/${link}`}><p> Локация </p></Nav.Link>
      <Nav.Link as={Link} to={`/user/cabinet/menu/${link}`}><p> Ваши объявления </p></Nav.Link>
      <Nav.Link as={Link} to={`/user/cabinet/menu/${link}`}> <p> Сделки </p></Nav.Link>
      <Nav.Link as={Link} to={`/user/cabinet/menu/${link}`}><p> Избранное </p></Nav.Link>
      <Nav.Link as={Link} to={`/user/cabinet/menu/${link}`}><p> Контракты </p></Nav.Link>  
      <Nav.Link as={Link} to={`/user/cabinet/menu/${link}`}><p> Покупки </p></Nav.Link>  
      <Nav.Link as={Link} to={`/user/cabinet/menu/${link}`}><p> Юридическая информация</p></Nav.Link>  
    </Nav>
  )
}

