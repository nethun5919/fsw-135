import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

export default function UserProvider(props) {

    return (
        <UserContext.Provider>

            { props.children}
        </UserContext.Provider>
    )

}