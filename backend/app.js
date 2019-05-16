const express = require("express");

const app = express();

app.use("/posts", (req, res, next) => {
  const posts = [
    {
      id: "loitrtuiruori",
      title: "First server-side post",
      content: "This is coming from the server"
    },
    {
      id: "kfgjhlfgjhlfj",
      title: "Second server-side post",
      content: "This is coming from the server"
    }
  ];
  res.status(200).json({
    message: "Posts fetched succesfully",
    posts: posts
  });
});

module.exports = app;
