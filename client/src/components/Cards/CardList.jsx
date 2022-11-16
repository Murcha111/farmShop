import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'
import { getCards } from '../../redux/actions/cardActions';
import OneCard from './OneCard';
import style from './styles/CardStyle.css'
import TstCOMP from '../test/TstCOMP';


const CardList = () => {
  const dispatch = useDispatch();
  const cards = useSelector((store) => store.cards)
  const [card, setCard] = useState(null)
  //  console.log(cards, 'CARDLIST');

useEffect(() => {
  dispatch(getCards())
},[])


  return (
    <>
    <div className="before"> 
    <p>Товары и услуги, которые Вы можете приобрести</p>
    </div>
    <div className='neContainer'>
    {!!cards?.length && cards.map(el =>  <TstCOMP className='oneCard' key={el.id}   myid={el.id} favour={el.fa} title={el.title} about={el.about} price ={el.price} image={el.image} location={el.location} quantity={el.quantity} contacts={el.contacts} quantity_id={el.quantity_id} createdAt={el.createdAt} quant={el['Quantity.quantity_title']}/> )} 
    </div>
    </>
  )
}

export default CardList
//{!!cards?.length && cards.map(el => <div key={el.id} className='oneCardBox'> <OneCard className='oneCard'   myid={el.id} favour={el.fa} title={el.title} about={el.about} price ={el.price} image={el.image} location={el.location} quantity={el.quantity} contacts={el.contacts} quantity_id={el.quantity_id} createdAt={el.createdAt} quant={el['Quantity.quantity_title']}/> </div>)} 
