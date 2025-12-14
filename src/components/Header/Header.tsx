import styles from "./Header.module.scss";
import {HeaderTop} from "@/components/Header/HeaderTop";
import {HeaderBottom} from "@/components/Header/HeaderBottom";

export const Header = () => {
    return (
        <header className={styles.header}>
            <HeaderTop/>
            <HeaderBottom/>
        </header>
    );
};