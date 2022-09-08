const User = require("./user.model");

const getRecentLoggedInUsers = async (req, res) => {
  try {
    const users = await User.getRecentLoggedInUsers();
    
    return res.status(200).send(users);
  } catch (e) {
    return res.status(400).send(e.toString());
  }
};

const getRecentRegisteredUsers = async (req, res) => {
  try {
    const users = await User.getRecentRegisteredUsers();
    return res.status(200).send(users);
  } catch (e) {
    return res.status(400).send(e.toString());
  }
};

const getNearbyUsers = async (req, res) => {
  try {
    const { lat: latitude, lng: longitude } = req.body;

    const users = await User.getNearbyUsers(latitude, longitude);

    return res.status(200).send(users);
  } catch (e) {
    return res.status(400).send(e.toString());
  }
};

const searchUsers = async (req, res) => {
  try {
    const filters = req.query;

    const users = await User.getSearchResult(filters);

    return res.status(200).send(users);
  } catch (e) {
    return res.status(400).send(e.toString());
  }
};

module.exports = {
  getRecentLoggedInUsers,
  getRecentRegisteredUsers,
  getNearbyUsers,
  searchUsers,
};
