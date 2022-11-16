import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import OneCard from '../Cards/OneCard';

export default function SearchCard() {
  const dispatch = useDispatch();
  const cards = useSelector((store) => store.cards)

  return (

    <div>
      {!!cards?.length && cards.map(el => <OneCard key={el.id} myid={el.id} favour={el.fa} title={el.title} about={el.about} price={el.price} image={el.image} location={el.location} quantuty={el.quantuty} quantuty_id={el.quantuty_id} createdAt={el.createdAt} />)}
    </div>
  )
  
}
