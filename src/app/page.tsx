import styles from "./page.module.css";
import {Values} from "@/app/components/pages/index/components/Values";
import {LoadNews} from "@/app/components/pages/index/components/LoadNews";

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
            <div className={styles.title}>
                <div className='max-width'>
                    <h2>Новости и блог</h2>
                </div>
            </div>
            <LoadNews/>
        </div>
    );
}
