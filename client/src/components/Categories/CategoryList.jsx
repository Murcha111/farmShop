import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCards } from '../../redux/actions/cardActions'
import ButtonGroupCategories from '../Cards/ButtonGroupCategories'
import OneCard from '../Cards/OneCard'
import TstCOMP from '../test/TstCOMP'


const CategoryList = () => {
  const dispatch = useDispatch();
  const cards = useSelector((store) => store.cards)
  // console.log(cards)

  return (
    <div className='neContainer'>
      {!!cards?.length && cards.map(el =>  <TstCOMP key={el.id} myid={el.id} favour={el.fa} title={el.title} about={el.about} price ={el.price} image={el.image} location={el.location} quantuty={el.quantuty} quantuty_id={el.quantuty_id} createdAt={el.createdAt} />)}
    </div>
  )
}

export default CategoryList

// {!!cards?.length && cards.map(el =>  <OneCard key={el.id} myid={el.id} favour={el.fa} title={el.title} about={el.about} price ={el.price} image={el.image} location={el.location} quantuty={el.quantuty} quantuty_id={el.quantuty_id} createdAt={el.createdAt} />)}
