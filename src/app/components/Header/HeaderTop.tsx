import styles from "@/app/components/Header/Header.module.scss";
import {GlassesSvg} from "@/app/components/ui/icon/GlassesSvg";
import {MaxSvg} from "@/app/components/ui/icon/MaxSvg";

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