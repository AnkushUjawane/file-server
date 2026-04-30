const axios = require("axios");
const { getToken } = require("../utils/config");

const api = axios.create({
    baseURL: "https://fileserver-anfjf6gehwetcrcg.southeastasia-01.azurewebsites.net/api"
});

api.interceptors.request.use((config) => {
    const token = getToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

module.exports = api;