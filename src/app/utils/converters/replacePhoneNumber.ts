/** Убрать всё лишнее из строки номера телефона */
export const clearPhoneNumber = (value: string) => {
    return value.replace('+7', '').replace('(', '').replace(')', '').split('-').join('').split(' ').join('');
};
