const fs = require("fs");
const path = require("path");
const os = require("os");

const configDir = path.join(os.homedir(), ".fileserver");
const configPath = path.join(configDir, "config.json");

const ensureConfigDir = () => {
    if (!fs.existsSync(configDir)) {
        fs.mkdirSync(configDir, {recursive: true});
    }
}

const saveToken = (token) => {
    ensureConfigDir();
    fs.writeFileSync(configPath, JSON.stringify({ token }));
};

const getToken = () => {
    if (!fs.existsSync(configPath)) return null;

    const data = JSON.parse(fs.readFileSync(configPath));
    return data.token;
};

const clearToken = () => {
    if (fs.existsSync(configPath)) {
        fs.unlinkSync(configPath);
    }
}
module.exports = {
    saveToken,
    getToken,
    clearToken
};