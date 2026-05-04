const authService = require('../services/auth.service');

const signup = async (req, res, next) => {
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

        next(err);
    }
};

const login = async (req, res, next) => {
    try{
        const {username, password} = req.body;
        const result = await authService.login(username, password);

        res.json({
            success: true,
            message: "Login Successful",
            data: result,
        });
    } catch(err){
        next(err);
    }
};

exports.getMe = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized"
      });
    }

    const user = await User.findByPk(req.user.id, {
      attributes: ["id", "username", "createdAt"]
    });

    res.json({
      success: true,
      data: user
    });

  } catch (err) {
    console.error("GET ME ERROR:", err); 

    res.status(500).json({
      success: false,
      message: "Failed to fetch user"
    });
  }
};

module.exports = {signup, login, getMe};