import axios from "axios";

export interface NewOrderResponseInterface {
    status: "success" | "failed";
    message?: string;
    order: {
        id: string;
        name: string;
        phone: string;
        mail: string;
    };
}

/** Запрос на создание заявки */
export const newOrderRequest = (formData: OrderFormInterface) =>
    axios.post(`${process.env.NEXT_PUBLIC_APP_API_URL}/orders`,
        {...formData},
        {withCredentials: true}
    ).then((response) => response.data as NewOrderResponseInterface);