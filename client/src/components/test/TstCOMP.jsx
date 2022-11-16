import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import style from './style.module.css'
import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import StarIcon from "@mui/icons-material/Star";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import {IconButton,CardActions} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, deleteCard, deleteFavourite } from '../../redux/actions/cardActions';
import { Link } from 'react-router-dom';


export default function TstCOMP({
  setModalId,
  setShow,
  myid,
  favour,
  about,
  quant,
  title,
  price,
  image,
  location,
  quantity,
  quantity_id,
  createdAt,
  isCabinet,
}) {

  const dispatch = useDispatch();
  const  { idForEdit } = useSelector((state) => state)

  const [favActive, setFavActive] = useState(favour);
  const [shown, setShown] = useState(false);
  const { auth } = useSelector((state) => state);


  const modalActiveHandler = () => {
    setModalId(myid)
    setShow(true)
    console.log(idForEdit, 'idForEdit');
    
  }
  const handleActiveClick = () => {
    if (auth.isAuth) {
      setFavActive(!favActive);
      if (!favActive) {
        dispatch(addFavourite(auth.id, myid));
      } else {
        dispatch(deleteFavourite(myid));
      }
    }
  };



  return (
    <>
    <CardGroup className={style.contener}>
      <Card >
        <Card.Img className={style.img} variant="top" src={image} onClick={() => setShown(true)}/>
        <Card.Body className={style.bod}>
          <Card.Title className={style.title}><Link to={`/cards/detail/${myid}`}>{title}</Link> </Card.Title>
          <Card.Text>
          {about}
          </Card.Text>
          <CardActions disableSpacing>
        <IconButton fontSize="large" aria-label="add to favorites" onClick={handleActiveClick}>
          {favActive ? <StarIcon style={{ color: "red" }} /> : <StarIcon />}
        </IconButton>
      
      { isCabinet && ( <><IconButton fontSize="large" aria-label="delete card" onClick={()=> dispatch(deleteCard(myid))}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={modalActiveHandler}>
          <CreateIcon fontSize="large"/>
        </IconButton></> )}
        </CardActions>
        </Card.Body>
      </Card>  
    </CardGroup>
    <Modal
    show={shown}
    onHide={() => setShown(false)}
    dialogClassName="modal-110w"
    aria-labelledby="example-custom-modal-styling-title"
    className="Modal1"
   >

      <img src={image} alt='Обложка'/>
      <div className="Modal1">
      <h1 >{title}</h1>
      <h6 >Цена : {price}</h6>
      <h6 >Доступное количество : {quantity}({quant})</h6>
      <h5> Локация : {location} </h5>
      <h6> Дата объявления  : {(createdAt.slice(0,10))} </h6>
      </div>
      <br/>
      <br/>
  </Modal>
  </>
  )
}

