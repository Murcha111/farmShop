import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SET_CARDS } from '../../redux/types';
import './styles/ButtonStyle.css'

export default function ButtonGroupCategories({title, id}) {
  const dispatch = useDispatch()
 
  const params = useParams()

  function filterCategoryHandler() {
   axios.get(`${process.env.REACT_APP_API_URL}/${id}`)
    .then((res) => dispatch({
      type: SET_CARDS,
      payload: res.data
    }))
   
   
  }
  return (
  
    <Stack spacing={2} direction="row" >
      <Button className="custom-btn btn-1 "  onClick={filterCategoryHandler} variant="text"><Link to={`cards/category/${id}`}>{title}</Link> </Button>
    </Stack>
    
  );
}
