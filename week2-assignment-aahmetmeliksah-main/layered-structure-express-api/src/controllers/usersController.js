const users = require("../data/users.json"); // imported user data

// return all users
function getAllUsers() {
  return users;
}

// filter through users that matches with user.id and userId is req.params.userId
function getUserById(userId) {
  return users.filter((user) => user.id == userId);
}

// export modules/ functions
module.exports = { getAllUsers, getUserById };
