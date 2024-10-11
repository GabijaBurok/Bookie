const userModel = require('../models/userModel');

//Get all users
const getAllUsers = async (res) => {
    try {
        const users = await userModel.getAllUsers();
        
        res.json(users);
    } catch (err) {
        resizeBy.status(500).json({message: 'Server error', error: err.message});
    }
};

module.exports = {
    getAllUsers,
};