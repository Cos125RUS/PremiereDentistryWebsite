import {checkPhone} from "@/app/utils/checkers/checkPhone";

/**
 * Проверка валидности ввода
 * @param name
 * @param phone
 * @param mail
 * @param success индикатор согласия на обработку персональных данных
 * @retutn string
 */
export const check = (name: string, phone: string, mail: string, success: boolean) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) {
        return 'Не заполнено поле "имя"';
    }

    if (!phone.trim()) {
        return 'Не заполнено поле "телефон"';
    }

    if (!mail.trim()) {
        return 'Не заполнено поле "электронная почта"';
    }

    if (name.trim().match(/^[а-яА-Я\s\-]$/gi)?.length) {
        return 'Имя указано некорректно';
    }

    if (!checkPhone(phone.trim())) {
        return 'Телефон введён некорректно';
    }

    if (!emailPattern.test(mail.trim())) {
        return 'Электронная почта указанна некорректно';
    }

    if (!success) {
        return 'Необходимо согласие на обработку персональных данных';
    }

    return '';
};