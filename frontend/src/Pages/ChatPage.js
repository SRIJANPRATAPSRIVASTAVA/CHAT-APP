import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setchats] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get("/api/chat");
    console.log(data);
    setchats(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {chats.map((chat, index) => (
        <div key={index}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
