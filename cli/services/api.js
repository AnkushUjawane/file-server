const axios = require("axios");
const { getToken, getBaseURL } = require("../utils/config");

const api = axios.create({
    baseURL: getBaseURL(),
});

api.interceptors.request.use((config) => {
    const token = getToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

module.exports = api;