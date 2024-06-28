const axios = require("axios");
// Вызываем переменную с токенов из .env
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
// Создаем подключение клиента
const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL + "/api",
    headers: {
        Authorization: 'Bearer ' + API_TOKEN,
    }
});

// API - запросы
const getArt = () => axiosClient.get('/arts?populate=*');
const getConnection = (data: Record<string, any>) => axiosClient.post('/connections', data);

export default {
    getArt,
    getConnection,
}