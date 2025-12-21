import styles from "./Footer.module.scss";
import {FooterForm} from "@/app/components/Footer/FooterForm";

export const Footer = () => {

    return (
        <footer className={styles.container}>
            <div className='max-width'>
                <div className={styles.left}>
                    <h3>Запишитесь к нам на прием</h3>
                    <p>Просто свяжитесь с нашим администратором.<br/>Он быстро предоставит вам все необходимые данные и
                        ответит на ваши вопросы.</p>
                </div>
                <div className={styles.right}>
                    <FooterForm/>
                </div>
            </div>
        </footer>
    );
};