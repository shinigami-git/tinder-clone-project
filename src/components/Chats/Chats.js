import React from 'react'
import Chat from '../Chat/Chat'
import "./chats.css"

const Chats = () => {
    return (
        <div className="chats">
            <Chat
                name="Demo"
                message="Hey waddup!"
                timestamp="30 seconds ago"
                profilePic="https://wallpapercave.com/wp/nLMaWkX.jpg"
            />
        </div>
    )
}

export default Chats
