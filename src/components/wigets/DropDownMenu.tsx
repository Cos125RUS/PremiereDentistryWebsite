"use client";

import {AngleSvg} from "@/components/ui/AngleSvg";
import {useState} from "react";
import styles from "./DropDownMenu.module.scss";
import classNames from "classnames";

interface Props {
    label: string;
    children: React.ReactNode;
}

/**
 * Раскрывающееся меню
 * @param label текст на кнопке
 * @param children список элементов раскрывающегося списка
 * @constructor
 */
export const DropDownMenu: React.FC<Props> = ({label, children}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (<nav className={styles.container}>
        <button onClick={() => setIsOpen(!isOpen)}
                className={classNames(styles.btn, isOpen && styles.btn__open)}>
            <span>{label}</span>
            <AngleSvg/>
        </button>
        <ul className={classNames(styles.list, isOpen && styles.list__open)}>
            {children}
        </ul>
    </nav>);
};