// import { Map } from '@pbe/react-yandex-maps'
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCards, setOneCard } from "../../redux/actions/cardActions";
import { SET_CARDS, SET_ONE_CARD } from "../../redux/types";
import MyCarousel from "../Carousel/Carousel";
import CategoriesOneList from "../Categories/CategoriesOneList";
import CategoryList from "../Categories/CategoryList";
import Map1 from "../YandexMap/Map1";

import './styles/CardDetail.css'

import ButtonGroupCategories from "./ButtonGroupCategories";


const CardDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cards  = useSelector((store) => store.cards)
  const [card, setCard] = useState({})
  console.log(cards, 'cards 13 store');
  useEffect(() => {
     axios.get(`${process.env.REACT_APP_API_URL}/cards/detail/${id}`)
     .then((res) => setCard(res.data))
    
    // dispatch(setOneCard(id))
  }, [])
  // const myDate = cards.createdAt.substring(0, 10)


  return (
    <div className="aboutMain"> 
      <div className="imageGoodParent">
        <div className="aboutImage">
          <img className="imgDitale" src={card.image}/>
        </div>
        <div className="aboutGood">
        <div className="ItemAbout" >
            <p>Название</p>
            <p>{card.title}</p>
          </div>
        
          <div className="ItemAbout">
            <p>Розничная цена</p>
            <p>{card.price}</p>
          </div>
          <div className="ItemAbout">
            <p>Оптовая цена</p>
            <p>{card.price}</p>
          </div>
          <div className="ItemAbout">
            <p>Доступное количество для заказа</p>
            <p>{card.quantity}</p>
          </div>
          <div className="ItemAbout">
            <p>Расположение:</p>
            <p>{card.location}</p>
          </div>
          <div className="ItemAbout">
            <p>Контакты:</p>
            <a href={card.contacts}>{card.contacts}</a>
            
          </div>
          <div className="ItemAbout">
            <p>Описание</p>
          <p>{card.about}</p>
           </div>
        </div>
      </div>
      <div className="mapReviewsParent">
        {/* <div className="aboutReviews">{}</div> */}
        <div className="aboutMap">
          <div className="imageGoodParent">
            <MyCarousel />
          </div>
          {/* <div className="aboutImage">
          <img src="../../../../../public/images/leaf.jpeg"></img>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
