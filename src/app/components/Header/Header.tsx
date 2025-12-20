import styles from "./Header.module.scss";
import {HeaderTop} from "@/app/components/Header/HeaderTop";
import {HeaderBottom} from "@/app/components/Header/HeaderBottom";

export const Header = () => {
    return (
        <header className={styles.header}>
            <HeaderTop/>
            <HeaderBottom/>
        </header>
    );
};