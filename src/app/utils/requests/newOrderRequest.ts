import axios from "axios";
import {OrderForm} from "@/app/types/order/OrderForm.interface";
import {OrderResponse} from "@/app/types/order/OrderResponse.type";

/** Запрос на создание заявки */
export const newOrderRequest = (formData: OrderForm) =>
    axios.post(`${process.env.NEXT_PUBLIC_APP_API_URL}/orders`,
        {...formData},
        {withCredentials: true}
    ).then((response) => response.data as OrderResponse);