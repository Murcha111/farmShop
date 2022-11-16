import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Link,
  Box
} from "@mui/material";
import { red } from "@mui/material/colors";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarIcon from "@mui/icons-material/Star";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import style from "./styles/Image.css"
import {
  addFavourite,
  deleteCard,
  deleteFavourite,
  editCard 
} from "../../redux/actions/cardActions";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function OneCard({
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
  const { auth } = useSelector((state) => state);
  const { cards } = useSelector((state) => state);
  const  { idForEdit } = useSelector((state) => state)
  const [modalActive, setModalActive] = useState(false)
  // const [show, setShow] = useState(false);//Asan
  const [favActive, setFavActive] = useState(favour);
  const [expanded, setExpanded] = useState(false);
  const [isUser, setIsUser] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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

 
   const modalActiveHandler = () => {
    setModalId(myid)
    setShow(true)
    console.log(idForEdit, 'idForEdit');
    
  }


  

  return (
    
    <>
    {/* <Box m={2} pt={3}> */}
    <Card sx={{ width: "100%" }} >
      {/* <Modal active={modalActive} id={myid} setActive={setModalActive}/> */}
      <CardHeader
        avatar={
          <Avatar  sx={{ bgcolor: red[500] }} aria-label="recipe">
            <Link href={`/cards/detail/${myid}`}>🧺</Link>
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={title}
      />
      {/* <Link href={`/cards/detail/${myid}`}>{title}</Link> */}
      
      <CardMedia image={image}
        component="img"
        width="250px" 
        height="250px"
        alt="pic's not available"
       
      /> 
      {/* <img className='image'src={image} /> */}
      <CardContent  >
        <Typography variant="body2" color="text.secondary">
          {about}
          {/* {myid} */}
        </Typography>
      </CardContent>
      <CardContent>
          <Typography paragraph>Цена : {price}</Typography>
          {/* <Typography paragraph>Доступное количество : {quantity}({quant})</Typography> */}
          {/* <Typography paragraph>Ед. измерения</Typography> */}
          <Typography paragraph>
            {/* {quantity_id} */}
            
          </Typography>
          {/* <Typography paragraph>Локация : {location}</Typography> */}
      
        </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleActiveClick}>
          {favActive ? <StarIcon style={{ color: red[500] }} /> : <StarIcon />}
        </IconButton>
        {/* <IconButton aria-label="add to likes">
          <FavoriteIcon></FavoriteIcon>
        </IconButton> */}
      { isCabinet && ( <><IconButton aria-label="delete card" onClick={()=> dispatch(deleteCard(myid))}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={modalActiveHandler}>
          <CreateIcon />
        </IconButton></> )} 
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> 
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
     
      </Collapse>
    </Card>

    {/* </Box> */}
</>
  );
}
