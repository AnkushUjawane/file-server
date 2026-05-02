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

const getConfig = () => {
  if (!fs.existsSync(configPath)) return {};
  return JSON.parse(fs.readFileSync(configPath, "utf-8"));
};

const saveConfig = (data) => {
  ensureConfigDir();
  fs.writeFileSync(configPath, JSON.stringify(data, null, 2));
};

const updateConfig = (newData) => {
  const existing = getConfig();
  const updated = { ...existing, ...newData };
  saveConfig(updated);
};

const saveToken = (token) => {
    updateConfig({token});
};

const getToken = () => {
    return getConfig().token || null;
};

const clearToken = () => {
    const config = getConfig();
    delete config.token;
    saveConfig(config);
}

const setBaseURL = (url) => {
    updateConfig({baseURL: url});
}

const getBaseURL = () => {
    return getConfig().baseURL || "https://fileserver-anfjf6gehwetcrcg.southeastasia-01.azurewebsites.net/api";
}
module.exports = {
    saveToken,
    getToken,
    clearToken,
    setBaseURL,
    getBaseURL,
    getConfig
};