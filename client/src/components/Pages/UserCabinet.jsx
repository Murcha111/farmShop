import React, { useEffect, useState } from "react";
import "./pages.style.module.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import GorMenu from "./GorMenu";
import style from './UserCabinet.css'
import VerticalMenu from "./VerticalMenu";

export default function UserCabinet({ children }) {
  const [title, setTitle] = useState("");
  const location = useLocation();

  // useEffect(() => {
  //   const log = location.pathname;
  //  // console.log(log)
  //   switch (log) {
  //     case "name":
  //       setTitle('Личная контакная инфа');
  //       break;

  //     default:
  //       break;
  //   }
  // }, []);

  return (
   
    
    <div className='mainCabinet'>
    <GorMenu />
      {/* <VerticalMenu/> */}
      <div className="imageCabinet">
     
      </div>
      <div className="cabinet_conteiner">{children}</div>

      {/* <div className="cabinet_user_footer">
        Футорок страницы,какойнибудь контентик!
      </div> */}
    </div>

  );
}
