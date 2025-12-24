import axios from "axios";
import {NewsCountResponse} from "@/app/types/news/NewsCountResponse.type";

/** Запрос количества новостей на странице новостей */
export const newsCountRequest = () =>
    axios.get(`/api/news/count`)
        .then((response) => response.data as NewsCountResponse);
