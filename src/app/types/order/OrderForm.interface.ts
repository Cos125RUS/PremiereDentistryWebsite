/** Форма создания новой заявки */
export interface OrderForm {
    name: string;
    phone: string;
    mail: string;
    comment: string;
    success: boolean;
}