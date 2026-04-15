const authService = require('../services/auth.service');

const signup = async (req, res) => {
    try{
        const {username, password} = req.body;
        const user = await authService.signup(username, password);

        req.json({
            success: true,
            message: "User Created",
            data: user,
        });
    } catch(err){
        res.status(400).json({
            success: false,
            message: err.message,
        });
    }
};

const login = async (req, res) => {
    try{
        const {username, password} = req.body;
        const result = await authService.login(username, password);

        req.json({
            success: true,
            message: "Login Successful",
            data: result,
        });
    } catch(err){
        res.status(401).json({
            success: false,
            message: err.message,
        });
    }
};

module.exports = {signup, login};