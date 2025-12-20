"use client";

import styles from "./FooterForm.module.scss";
import classNames from "classnames";
import {CheckSvg} from "@/app/components/ui/icon/CheckSvg";
import {useState} from "react";
import {FooterInput} from "@/app/components/Footer/FooterInput";
import {RootState, useAppDispatch, useAppSelector} from "@/app/utils/storage/store";
import {setAlert} from "@/app/utils/storage/slice/siteSlice";
import {check} from "@/app/components/Footer/utils/check";
import {newOrderRequest} from "@/app/utils/requests/newOrderRequest";
import {convertPhoneNumber} from "@/app/utils/converters/convertPhoneNumber";
import {addOrder, setValue} from "@/app/utils/storage/slice/userSlice";
import {LoadSvg} from "@/app/components/ui/icon/LoadSvg";
import {checkInputPhone} from "@/app/utils/checkers/checkInputPhone";

/**
 * Форма для отправки заявок в подвале страницы
 * @constructor
 */
export const FooterForm = () => {
    const dispatch =useAppDispatch();
    const personData = useAppSelector((state: RootState) => state.user.personData);
    const [name, setName] = useState(personData.name ?? '');
    const [phone, setPhone] = useState(personData.phone ?? '');
    const [mail, setMail] = useState(personData.mail ?? '');
    const [comment, setComment] = useState('');
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    /** Обработка отправки формы */
    const onSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const error = check(name, phone, mail, success);

        if (error) {
            dispatch(setAlert({text: error as string}));
        } else {
            //Сохранение введённых данных
            dispatch(setValue({key: 'name', value: name}));
            dispatch(setValue({key: 'phone', value: phone}));
            dispatch(setValue({key: 'mail', value: mail}));

            setIsLoading(true);
            newOrderRequest({name, phone, mail, comment, success})
                .then(data => {
                    if (data.status === 'success') {
                        dispatch(addOrder(data.order));
                        dispatch(setAlert({text: 'Ваша заявка успешно отправлена', lvl: 'success'}));
                    } else {
                        dispatch(setAlert({text: data.message}));
                    }
                })
                .catch(console.error)
                .finally(() => setIsLoading(false));
        }
    };

    const enterPhone = (value: string) => {
        if (checkInputPhone(value)) {
            setPhone(convertPhoneNumber(value))
        }
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.top}>
                <FooterInput value={name} setValue={setName} id='footer-form-name'
                             placeholder='Ваше имя' label="Имя"/>
                <FooterInput value={phone} setValue={(value) => enterPhone(value)} id='footer-form-phone'
                             placeholder='Ваш номер' type="tel" label="Телефон"/>
                <FooterInput value={mail} setValue={setMail} id='footer-form-mail'
                             placeholder='E-mail' type="email" label="Почта"/>
            </div>
            <div className={styles.middle}>
                <FooterInput value={comment} setValue={setComment} id='footer-form-comment'
                             placeholder='Сообщение' label="Комментарий"/>
            </div>
            <div className={classNames(styles.success, styles.bottom)}>
                {!isLoading
                    ? <input type="submit" value="Отправить заявку"/>
                    : <div><span>Отправить заявку</span><LoadSvg/></div>
                }
                <label>
                    <input type="checkbox" name="success" id="footer-form-success"
                           checked={success}
                           onChange={() => setSuccess(prev => !prev)}/>
                    <span><CheckSvg/></span>
                    Заполняя и отправляя данную форму я соглашаюсь на обработку персональных данных в соответствии с
                    политикой конфиденциальности сервиса
                </label>
            </div>
        </form>
    );
};