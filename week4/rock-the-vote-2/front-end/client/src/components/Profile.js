import React from 'react'
import {UserContext} from '../context/UserProvider.js'

export default function Profile() {
    const { user: {username} } =userContext(UserCopntext)
    return (
        <div className="profile">
            <h1>Welcome @{username}!</h1>

        </div>
    )
}