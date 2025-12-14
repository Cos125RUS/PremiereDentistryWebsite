import styles from "@/components/Header/Header.module.scss";
import {GlassesSvg} from "@/components/ui/GlassesSvg";
import {MaxSvg} from "@/components/ui/MaxSvg";

export const HeaderTop = () => {
    return (
        <div className={styles.top}>
            <button className={styles.topButton}>
                <GlassesSvg/>
                <span>Версия для слабовидящин</span>
            </button>
            <a className={styles.topButton} href="https://max.vk.me/username"
               target="_blank" rel="noopener noreferrer">
                <MaxSvg/>
                <span>Канал - MAX</span>
            </a>
        </div>
    );
};