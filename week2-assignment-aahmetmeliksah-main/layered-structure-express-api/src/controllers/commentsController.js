const comments = require("../data/comments.json"); // imported album data

// return all comments
function getAllComments() {
  return comments;
}

/* 
filter through comments and return only the one that matches comment.id to commentId. commentId = req.params.commentId 
*/
function getCommentById(commentId) {
  return comments.filter((comment) => comment.id == commentId);
}

// export modules/ functions
module.exports = { getAllComments, getCommentById };
