import {clearPhoneNumber} from "@/app/utils/converters/replacePhoneNumber";

/** Преобразователь номера телефона к красивому виду */
export const convertPhoneNumber = (value: string) => {
    let result = '+7';
    const phone = clearPhoneNumber(value);

    if (phone.length > 0) {
        result += ' (';
    }

    if (phone.length <= 3) {
        return result + ' ' + phone;
    } else {
        result += phone.slice(0, 3) + ') ';
    }

    if (phone.length > 6) {
        result += phone.slice(3, 6) + ' - ';
    } else {
        return result + phone.slice(3);
    }

    if (phone.length > 8) {
        result += phone.slice(6, 8) + ' - ' + phone.slice(8);
    } else {
        return result + phone.slice(6);
    }

    return result;
};
