import React, { useState } from 'react'
import axios from 'axios'
export const UserContext = React.createContext()

const userAxios = axios.create()
userAxios.interceptors.request.use(config =>{
    const token = localStorage.getItem('token')
    config.headers.Authorization = 'Bearer ${token}'
    return config
})

export default function UserProvider(props) {
    //  const initState= {
    //      user: JSON.parse(localStorage.getItem('user'))||{},
    //      token: localStorage.getItem('token') ||""
    //  }
    //  const [userState, setUserState]= useState(initState)
    //  function signup(credentials) {
    //      axios.post('/auth/signup', credentials)
    //      .then (res => {
    //         const {user,token} = res.date
    //         localStorage.setItem('token',token)
    //         localStorage.setItem('user', JSON.stringify(user))
    //         setUserState(prevUserState => ({
    //             ...prevUserState, 
    //             user,
    //             token
    //         }))
    //      })
    //      .catch(err => console.log(err.response.date.errMsg))
    //  } 
       
    //  function login(credentials){
    //      axios.post('/auth/login', credentials)
    //      .then (res => {
    //         const {user,token} = res.date
    //         localStorage.setItem('token',token)
    //         localStorage.setItem('user', JSON.stringify(user))
    //         setUserState(prevUserState => ({
    //             ...prevUserState, 
    //             user,
    //             token
    //         }))
    //      })
    //      .catch(err => console.log(err.response.data.errMsg))
    // }
    //  function logout(){
    //      localStorage.removeItem('token')
    //      localStorage.remvoeItem('user')
    //      setUserState({user: {},token:""})
    //  }

    //  function addIssue(newIssue){
    //     userAxios.post('/api/todo', newIssue)
    //     .then (res => console.log(res))
    //     .catch(err => console.log(err.response.data.errMsg))
    // }
         return (
        <UserContext.Provider
        //  value={{...userState,signup,login, logout, addIssue}}
         >
             { props.children}
        </UserContext.Provider>
    )

}