import React from 'react'
import Chat from '../Chat/Chat'
import "./chats.css"
import {chats} from "../../db"

const Chats = () => {


    return (
        <div className="chats">
            {/* <Chat
                name="Demo"
                message="Hey waddup!"
                timestamp="30 seconds ago"
                profilePic="https://wallpapercave.com/wp/nLMaWkX.jpg"
            /> */}
            {
                chats.map((chat)=>(
                    <Chat
                    name={chat.name}
                message={chat.message}
                timestamp={chat.timestamp}
                profilePic={chat.profilePic}
                key={chat.name}
                    />
                ))
            }
        </div>
    )
}

export default Chats
