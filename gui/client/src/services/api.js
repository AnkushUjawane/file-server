import axios from "axios";

const api = axios.create({
    baseURL: "https://fileserver-anfjf6gehwetcrcg.southeastasia-01.azurewebsites.net/api",
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    if(token && !config.url.includes("/auth")){
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;