import axios from "axios";

/** Запрос страницы новостей */
export const newsRequest = (page: number = 1) =>
    axios.get(`/data/${page}/news.data.json`)
        .then((res) => res.data);