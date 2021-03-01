import React, { useState } from "react";
import "./chatScreen.css";
import Avatar from "@material-ui/core/Avatar";

const ChatScreen = () => {
    const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: "Demo",
      image: "https://wallpapercave.com/wp/nLMaWkX.jpg",
      message: "Hey!",
    },
    {
      name: "Demo",
      image: "https://wallpapercave.com/wp/nLMaWkX.jpg",
      message: "Waddup?",
    },
    {
      message: "Hey Back!",
    },
  ]);

  const handleSend =e=>{
      e.preventDefault();
      setMessages([...messages,{message:input}]);
      setInput("");
  }

  return (
    <div>
      <p className="chatScreen-timestamp">YOU MATCHED WITH DEMO ON 23/02/21</p>
      {messages.map((message,i) =>
        message.name ? (
          <div className="chatScreen-message" key={i}>
            <Avatar
              className="chatScreen-image"
              alt={message.name}
              src={message.image}
              
            />
            <p className="chatScreen-text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen-message" key={i}>
            <p className="chatScreen-textUser">{message.message}</p>
          </div>
        )
      )}
      
        <form className="chatScreen-input">
          <input
          value={input}
          onChange={e=>setInput(e.target.value)}
            className="chatScreen-inputField"
            placeholder="Type a message..."
            type="text"
          />
          <button className="chatScreen-inputButton" onClick={handleSend}>SEND</button>
        </form>
      
    </div>
  );
};

export default ChatScreen;
