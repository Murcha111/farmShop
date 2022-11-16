// import { $host,$authHost } from ".";
// import jwt_decode from "jwt-decode";
// // export const registration = async (userName,email,password) => {
// //   const {data} =  await $host.post(`${process.env.REACT_APP_API_URL}/auth/register`,{userName,email,password})
// //   console.log(data)
// //   localStorage.setItem('token', data.token)
// //   return jwt_decode(data.token)
// // }

// export const login = async (email,password) => {
//   const {data} = await $host.post( `${process.env.REACT_APP_API_URL}/auth/login`,{email,password})
//   console.log(data)
//   localStorage.setItem('token', data.token)
//   return jwt_decode(data.token)
//  }

//  export const check = async () => {
//   const response = await $host.get(`${process.env.REACT_APP_API_URL}/auth`)
//   return response
//  }
