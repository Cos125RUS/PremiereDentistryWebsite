import styles from "./page.module.css";
import {Values} from "@/app/components/pages/index/components/Values";

/** Главная страница сайта */
export default function Home() {
    return (
        <div className={styles.page}>
            <div className={styles.title}>
                <div className='max-width'>
                    <h2>Наши ценности</h2>
                </div>
            </div>
            <Values/>
        </div>
    );
}
