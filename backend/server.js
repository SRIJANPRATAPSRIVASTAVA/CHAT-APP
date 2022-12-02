const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  let indiChat = "";
  for (let chat = 0; chat < chats.length; chat++) {
    if (chats[chat]._id === req.params.id) indiChat = chats[chat];
  }
  //    indiChat = chats.map((c) => {
  //     c._id === req.params.id;
  //   });
  res.send(indiChat);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`server running on port ${PORT}`));
