"use client";

import styles from "./FooterForm.module.scss";
import classNames from "classnames";
import {CheckSvg} from "@/components/ui/CheckSvg";
import {useState} from "react";
import {FooterInput} from "@/components/Footer/FooterInput";
import {useAppDispatch} from "@/utils/storage/store";
import {setAlert} from "@/utils/storage/slice/siteSlice";

/**
 * Форма для отправки заявок в подвале страницы
 * @constructor
 */
export const FooterForm = () => {
    const dispatch =useAppDispatch();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [comment, setComment] = useState('');
    const [success, setSuccess] = useState(false);

    /** Обработка отправки формы */
    const onSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setAlert('test'));

        //TODO добавить чекеры
        //TODO добавить отправку
    };

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.top}>
                <FooterInput value={name} setValue={setName} id='footer-form-name'
                             placeholder='Ваше имя' label="Имя"/>
                <FooterInput value={phone} setValue={setPhone} id='footer-form-phone'
                             placeholder='Ваш номер' type="tel" label="Телефон"/>
                <FooterInput value={mail} setValue={setMail} id='footer-form-mail'
                             placeholder='E-mail' type="email" label="Почта"/>
            </div>
            <div className={styles.middle}>
                <FooterInput value={comment} setValue={setComment} id='footer-form-comment'
                             placeholder='Сообщение' label="Комментарий"/>
            </div>
            <div className={classNames(styles.success, styles.bottom)}>
                <input type="submit" value="Отправить заявку"/>
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