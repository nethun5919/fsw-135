import React, {userContext} from 'react'
import {link} from 'react-router-dom'
import {UserContext} from '../context/UserProvider.js'

export default function Navebar(){
    const {logout} = userContext(UserContext)
    return (
        <div className="navbar">
            <link to= "/profile">Profile</link>
            <link to= "/Issues">Issues</link>
            <link to="/Auth">Auth</link>
            <button onClick={logout}>Logout</button>
        </div>
    )
}