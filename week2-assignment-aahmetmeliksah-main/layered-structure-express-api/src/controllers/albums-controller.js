const albums = require("../data/albums.json"); // imported album data

// return all albums
function getAllAlbums() {
  return albums;
}

// filter through albums that matches with album.id and albumId is req.params.albumId
function getAlbumById(albumId) {
  return albums.filter((album) => album.id == albumId);
}

// export modules/ functions
module.exports = { getAllAlbums, getAlbumById };
