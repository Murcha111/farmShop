import { ADD_CARD, EDIT_CARD, SET_CARDS, SET_ONE_CARD, GET_CARDS } from "../types";

function cardsReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {

    case SET_CARDS: {
      return payload;
    }
    case GET_CARDS: {
      return payload
    }
    case EDIT_CARD: {
      const editedCard = [...state].map(el => el.id === payload.id ? payload : el)
      return editedCard
     
     }
     case ADD_CARD: {
      return [ ...state, payload.newCard]
     }
    case "DEL_CARD": {
     return state.filter((el) => el.id !== payload);

    }
    case "ADD_FAVOURITE": {
      // return console.log(payload)
      return [...state].map((el) => {
        if (el.id === payload.card_id) {
          return { ...el, fa: payload.fawor };
        } else {
          return el;
        }
      });
    }

    case "DEL_FAVOURITE": {
      console.log(payload);
      return [...state].map((el) => {
        if (el.id === payload.id) {
          return { ...el, fa: payload.fawor };
        } else {
          return el;
        }
      });
    }
    default: {
      return state;
    }
  }
}

export default cardsReducer;
