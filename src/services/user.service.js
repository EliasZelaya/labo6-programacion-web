const {save, User, getUsers} = require('../models/user.model');

const addNewUser = (name, lastname, email) => {
  const newUser = new User(name, lastname, email);
  return save (newUser);
}

const showAllUsers = () => {
  return getUsers( );
}

module.exports = {
  addNewUser,
  getUsers,
  showAllUsers
}