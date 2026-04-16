const authService = require('../services/auth.service');

const signup = async (req, res) => {
    try{
        const {username, password} = req.body;
        const user = await authService.signup(username, password);

        res.json({
            success: true,
            message: "User Created",
            data: user,
        });
    } catch(err){
        console.error(err);
        if(err.name === "SequelizeUniqueConstraintError"){
            return res.status(400).json({
                success: false,
                message: "Username already exists",
            });
        }

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

        res.json({
            success: true,
            message: "Login Successful",
            data: result,
        });
    } catch(err){
        console.error(err);
        res.status(401).json({
            success: false,
            message: err.message,
        });
    }
};

module.exports = {signup, login};