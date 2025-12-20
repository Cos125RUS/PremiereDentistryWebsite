import {Order} from "@/app/types/order/Order.interface";

export type OrderResponse = {
    status: "success";
    order: Order;
} | {
    status: "failed";
    message: string;
};