import {clearPhoneNumber} from "@/app/utils/converters/replacePhoneNumber";

/** Проверка валидности ввода телефона */
export const checkInputPhone = (value: string) => {
    const pattern = /[^0-9]/gi;
    const phone = clearPhoneNumber(value);

    if (phone.length > 10) {
        return false;
    }

    return !pattern.test(phone);
};
