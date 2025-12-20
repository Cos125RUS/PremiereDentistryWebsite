/** Проверка корректности ввода телефонного номера перед отправкой формы */
export const checkPhone = (phone: string) => {
    const pattern = /^\+7 \([0-9]{3}\) [0-9]{3} - [0-9]{2} - [0-9]{2}$/gi;
    return pattern.test(phone);
};
