import UserCabinet from "./UserCabinet";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./pages.style.module.css";
import axios from "axios";
import OneCard from "../Cards/OneCard";
import Pustoy from "../Cards/Pustoy";
import TstCOMP from "../test/TstCOMP";

export default function AuthorCards(props) {
 
  const { auth } = useSelector((state) => state);
  const { cards } = useSelector((state) => state);
  const [show, setShow] = useState(false)
  const [modalId, setModalId] = useState(null)
  const all = cards?.filter((el) => el.user_id === auth.id);
  /*{setShow}*///в пропсы на 9
   


  
  return (
    <UserCabinet>
      <div className={style.author_cards}>
        <div className="neContainer">
        {all.length ?
          all.map((el) => (   
            <TstCOMP
              setShow={setShow}
              key={el.id}
              myid={el.id}
              favour={el.fa}
              title={el.title}
              about={el.about}
              price={el.price}
              image={el.image}
              location={el.location}
              quantity={el.quantity}
              quant={el.quant}
              createdAt={el.createdAt}
              setModalId={setModalId}
              isCabinet={props}
            />
          )) :
          <p>Объявлений еще не создавалось!</p>
          }
          {show? <Pustoy setShow={setShow} modalId={modalId}  setModalId={setModalId} /> : <></> }
      </div> 
      </div>
    </UserCabinet>
  );
}

{/* <OneCard
setShow={setShow}
key={el.id}
myid={el.id}
favour={el.fa}
title={el.title}
about={el.about}
price={el.price}
image={el.image}
setModalId={setModalId}
isCabinet={props}
/> */}
