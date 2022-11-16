import { ADD_CARD, EDIT_CARD, SET_CARDS, SET_ONE_CARD } from "../types";
import axios from 'axios'




 export const getCards = () => async(dispatch) => {
  try {
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/cardList`)
    //console.log('RESULTAAALLLLcards',result.data)
    dispatch({
      type: SET_CARDS,
      payload: result.data
    })
  } catch (error) {
    console.log(error)
  }
 }

 export const addFavourite = (authid,myid) => async(dispatch) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_API_URL}/users/cabinet/favouritecards`,
      {
        user_id: authid,
        card_id: myid,
      }
    );
   // console.log('RESULTFAV',result)
    dispatch({
      type: "ADD_FAVOURITE",
      payload: result.data
    })
  } catch (error) {
    console.log(error)
  }
 }

 export const deleteFavourite = (myid) => async(dispatch) => {
  try {
    const result = await axios.delete(
      `${process.env.REACT_APP_API_URL}/users/cabinet/favouritecards/${myid}`
    );
   // console.log('RESULTDELETE',result)
    dispatch({
      type: "DEL_FAVOURITE",
      payload: result.data
    })
  } catch (error) {
    console.log(error)
  }
 }


 export const deleteCard = (myid) => async(dispatch) => {
  try {
    const result = await axios.delete(
      `${process.env.REACT_APP_API_URL}/users/cabinet/cards/${myid}`
    );
    console.log('RESULTDELETE',result)
    dispatch({
      type: "DEL_CARD",
      payload: myid
    })
  } catch (error) {
    console.log(error)
  }

 }


//  export const editCard = (id, edit) => async(dispatch) => {
//   try {
//     // const result = await axios.patch(`${process.env.REACT_APP_API_URL}/cards/edit/${id}`, {id, edit})
   
//     dispatch({
//       type: EDIT_CARD,
//       // payload: result.data
//     })
//   } catch (error) {
//     console.log(error);
//   }
//  }

// export const editOneCard = (id) => async(dispatch) => {
//   try {
//     const result = await axios.get(`${process.env.REACT_APP_API_URL}/cards/edit/${id}`)
//       console.log('RESULT 24',result.data )
//       dispatch({
//         type: SET_ONE_CARD,
//         payload: result.data
//       })
    
//   } catch (error) {
//     console.log(error)
    
//   }
 
// }
