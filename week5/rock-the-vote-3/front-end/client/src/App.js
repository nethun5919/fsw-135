import React,{useContext}from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Issues from './components/Issues'
import {UserContext} from './context/UserProvider.js'
import './App.css';


export default function App() {
  const {token} = useContext(UserContext)
  return (
    
    <header className="App-header">
        <h1>Rock the Vote</h1>
    
       {/* <div className="App">
       <Routes>
         <Route
         exact path="/"
         element={ token ? <Navigate to= '/profile'/> :<Auth/>}
         />
         <Route
         path='/profile'
         element={ <Profile/>}
         />
         <Route
         path = 'Issues'
        element={ <Issues/>}
      />
      </Routes>
      </div> */}
    </header>
  )
}


