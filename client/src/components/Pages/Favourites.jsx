import React, { useEffect } from "react";
import UserCabinet from "./UserCabinet";
import { useSelector } from "react-redux";
import OneCard from "../Cards/OneCard";
import TstCOMP from "../test/TstCOMP";
export default function Favourites() {
  const { auth } = useSelector((state) => state);
  const { cards } = useSelector((state) => state);
  const all = cards?.filter((el) => el.fa);

  //console.log(cards);

  return (
    <>
      <UserCabinet>
      <div className="neContainer">
          {" "}
          {all.length ? (
            all.map((el) => (
              <TstCOMP
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
              />
            ))
          ) : (
            <p>В избранные ничего не добавлялось!</p>
          )}
        </div>
      </UserCabinet>
    </>
  );
}
{/* <OneCard
key={el.id}
myid={el.id}
favour={el.fa}
title={el.title}
about={el.about}
price={el.price}
image={el.image}
/> */}
// setModalId,
// setShow,
// myid,
// favour,
// about,
// quant,
// title,
// price,
// image,
// location,
// quantity,
// quantity_id,
// createdAt,
// isCabinet,
