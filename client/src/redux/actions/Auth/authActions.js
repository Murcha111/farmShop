import axios from "axios";
import { $authHost } from ".";
import jwt_decode from "jwt-decode";

export const registration = (userName, email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/register`,
      { userName, email, password }
    );
    // console.log(data);
    const result = jwt_decode(data.token);
    localStorage.setItem('token', data.token)
    dispatch({
      type: "REG_AUTH",
      payload: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      {  email, password }
    );
    // console.log(data);
    const result = jwt_decode(data.token);
    localStorage.setItem('token', data.token)
    dispatch({
      type: "LOG_AUTH",
      payload: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// const $authHost = axios.create({
//   baseURL: process.env.REACT_APP_API_URL
// })


 
export const check = () => async (dispatch) => {
  try {
  
  const {data} = await $authHost.get()
  const result = jwt_decode(data.token);
  result.isAuth = true
   localStorage.setItem('token', data.token)
  dispatch({
    type: "CHECK_AUTH",
    payload: result,
  });
} 
 catch (err) {
 console.log(err);
}
};


export const logOut = () => async (dispatch) => {
  localStorage.removeItem('token')
  dispatch({
    type: "LOG_OUT",
  });
};

// const logOut = () => { user.setUser({}); user.setIsAuth(false); user.setIsAdmin(false); } 










