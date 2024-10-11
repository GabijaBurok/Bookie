const sql = require('mssql');

//Function to create a new user
const createUser = async (user) => {
    const query = `INSERT INTO [dbo].[Users] ([id], [yearly_goal], [username], [password])
                    VALUES (@id, @yearly_goal, @username, @password);`;

    const request = new sql.Request();
    request.input('id', sql.NVarChar, user.id);
    request.input('yearly_goal', sql.Int, user.yearly_goal);
    request.input('username', sql.NVarChar, user.username);
    request.input('password', sql.NVarChar, user.password);

    const result = await request.query(query);
};

//Function to get all users
const getAllUsers = async () => {
    const query = `SELECT * FROM [dbo].[Users]`;

    const request = new sql.Request();
    
    const result = await request.query(query);
    return result;
};

//Function to get user by username
const getUserByUsername = async (username) => {
    const query = `SELECT * FROM [dbo].[Users]
                    WHERE [username] = @username`;
    
    const request = new sql.Request();
    request.input('username', sql.NVarChar, username);

    const result = await request.query(query);
    return result.recordset[0];
};

//Function to get user by id
const getUserById = async (id) => {
    const query = `SELECT * FROM [dbo].[Users] WHERE [id] = @id`;

    const request = new sql.Request();
    request.input('id', sql.NVarChar, id);

    const result = await request.query(query);
    return result.recordset[0];
};

//Function to update user
const updateUser = async (id, updatedUser) => {
    const query = `UPDATE [dbo].[Users]
                    SET yearly_goal = @yearly_goal, username = @username, password = @password
                    WHERE id = @id`;

    const request = new sql.Request();
    request.input('id', sql.NVarChar, id);
    request.input('yearly_goal', sql.Int, updatedUser.yearly_goal);
    request.input('username', sql.NVarChar, updatedUser.username);
    request.input('password', sql.NVarChar, updatedUser.password);

    await request.query(query);
};

//Function to delete user
const deleteUser = async (id) => {
    const query = `DELETE FROM [dbo].[Users] WHERE id = @id`;

    const request = new sql.Request();
    request.input('id', sql.NVarChar, id);

    await request.query(query);
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    getUserByUsername,
    updateUser,
    deleteUser,
};