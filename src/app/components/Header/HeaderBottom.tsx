"use client";

import styles from "@/app/components/Header/Header.module.scss";
import Link from "next/link";
import {LogoSvg} from "@/app/components/ui/icon/LogoSvg";
import {SearchSvg} from "@/app/components/ui/icon/SearchSvg";
import {EnvelopeSvg} from "@/app/components/ui/icon/EnvelopeSvg";
import {useState} from "react";
import classNames from "classnames";
import {LogoSmallSvg} from "@/app/components/ui/icon/LogoSmallSvg";
import {HeaderMenu} from "@/app/components/Header/HeaderMenu";

export const HeaderBottom = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.bottom}>
            <div className="max-width">
                <Link href='/public' className={styles.logo}>
                    <LogoSvg/>
                    <LogoSmallSvg/>
                </Link>
                <HeaderMenu/>
                <div className={styles.contacts}>
                    <a href="tel:+74232658950">+7 (423) 265-89-50</a>
                    <span></span>
                    <Link href='/search'><SearchSvg/></Link>
                    <button onClick={() => setIsOpen(true)}>
                        <EnvelopeSvg/>
                        <span>Записаться</span>
                    </button>
                </div>
                <div className={classNames(styles.modal, isOpen && styles.modal__open)}>
                    <h3>Модальное окно для записи</h3>
                    <button onClick={() => setIsOpen(false)}>X</button>
                </div>
            </div>
        </div>
    );
};