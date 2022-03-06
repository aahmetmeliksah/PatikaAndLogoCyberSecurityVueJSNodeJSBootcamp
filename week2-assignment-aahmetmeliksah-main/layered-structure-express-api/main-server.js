const express = require("express"); // imported express

const app = express(); // created an app

// import controllers
const albumsController = require("./src/controllers/albums-controller");
const commentsController = require("./src/controllers/commentsController");
const usersController = require("./src/controllers/usersController");

// getting everything from albums, comments and users
app.get("/albums", (req, res) => {
  let albums = albumsController.getAllAlbums();
  res.send(albums);
});

app.get("/comments", (req, res) => {
  let comments = commentsController.getAllComments();
  res.send(comments);
});

app.get("/users", (req, res) => {
  let users = usersController.getAllUsers();
  res.send(users);
});

// get params from albums, comments and users
app.get("/albums/:albumId", (req, res) => {
  let album = albumsController.getAlbumById(req.params.albumId);
  res.send(album);
});

app.get("/comments/:commentId", (req, res) => {
  let comment = commentsController.getCommentById(req.params.commentId);
  res.send(comment);
});

app.get("/users/:userId", (req, res) => {
  let user = usersController.getUserById(req.params.userId);
  res.send(user);
});

// Started server at port at 5000
app.listen(5000);
