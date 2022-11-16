import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import OneCard from '../Cards/OneCard';




export default function Search() {

  const [state, setState] = useState('')

  const allCards = useSelector((state) => state.cards)
  console.log('all cards', allCards )


  // const dispatch = useDispatch()вспахать
  // const params = useParams()

  function mySearch() {

    const userCards = allCards.filter((element) => element.title.toLowerCase() === state.toLowerCase())
    console.log(userCards, "userCards");
    // userCards положить в стейт?

  }
  // console.log('вне функции', state);

  return (

    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Поиск"
        className="me-2"
        aria-label="Search"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <Button onClick={ mySearch} variant="outline-success">Найти</Button>
    </Form>


  )
}
