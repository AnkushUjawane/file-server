const fs = require("fs");
const path = require("path");

const configPath = path.join(__dirname, "../config/store.json");

const saveToken = (token) => {
    fs.writeFileSync(configPath, JSON.stringify({token}));
};

const getToken = () => {
    if(fs.existsSync(configPath)) return null;

    const data = JSON.parse(fs.readFileSync(configPath));
    return data.token;
};

module.exports = {
    saveToken,
    getToken
};