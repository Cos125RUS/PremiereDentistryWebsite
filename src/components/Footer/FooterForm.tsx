import styles from "./FooterForm.module.scss";

export const FooterForm = () => {

    return (
        <form action="/order" className={styles.form}>
            <div className={styles.top}>
                <div className={styles.item}>
                    <label htmlFor="footer-form-name">Имя</label>
                    <input type="text" id='footer-form-name' name='footer-form-name' placeholder='Ваше имя'/>
                </div>
                <div className={styles.item}>
                    <label htmlFor="footer-form-phone">Телефон</label>
                    <input type="tel" id='footer-form-phone' name='footer-form-phone' placeholder='Ваш номер'/>
                </div>
                <div className={styles.item}>
                    <label htmlFor="footer-form-mail">Почта</label>
                    <input type="email" id='footer-form-mail' name='footer-form-mail' placeholder='E-mail'/>
                </div>
            </div>
            <div className={styles.item}>
                <label htmlFor="footer-form-comment">Комментарий</label>
                <input type="text" id='footer-form-comment' name='footer-form-comment' placeholder='Сообщение'/>
            </div>
            <div className={styles.success}>
                <input type="submit" value="Отправить заявку"/>
                <label><input type="checkbox" name="success" id="footer-form-success"/>Заполняя и отправляя данную форму я соглашаюсь на обработку персональных данных в соответствии с политикой конфиденциальности сервиса</label>
            </div>
        </form>
    );
};