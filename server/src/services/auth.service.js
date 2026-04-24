const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require('../models/user.model');

const signup = async (username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        password: hashedPassword
    });

    return {
        id: user.id,
        username: user.username,
        role: user.role,
    };
}

const login = async (username, password) => {
    const user = await User.findOne({where: {username}});
    if(!user) throw new Error("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) throw new Error("Invalid credentials");

    const token = jwt.sign(
        { id: user.id, role: user.role, username:user.username },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    return {token, user}
};

module.exports = {signup, login};