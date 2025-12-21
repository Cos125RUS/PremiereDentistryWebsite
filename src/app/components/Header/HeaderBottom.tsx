"use client";

import styles from "@/app/components/Header/Header.module.scss";
import Link from "next/link";
import {LogoSvg} from "@/app/components/ui/icon/LogoSvg";
import {DropDownMenu} from "@/app/components/wigets/DropDownMenu";
import {dropDownItemsMock} from "@/app/mock/dropDownItems.mock";
import {SearchSvg} from "@/app/components/ui/icon/SearchSvg";
import {EnvelopeSvg} from "@/app/components/ui/icon/EnvelopeSvg";
import {useState} from "react";
import classNames from "classnames";

export const HeaderBottom = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.bottom}>
            <div>
                <Link href='/public'>
                    <LogoSvg/>
                </Link>
                <div>
                    <DropDownMenu label='Услуги'>
                        {dropDownItemsMock.map((item) => (
                            <li key={`service-${item.id}`}>
                                <Link href={item.link}>{item.label}</Link>
                            </li>
                        ))}
                    </DropDownMenu>
                </div>
                <div className={styles.links}>
                    <DropDownMenu label='О клинике'>
                        {dropDownItemsMock.map((item) => (
                            <li key={`about-${item.id}`}>
                                <Link href={item.link}>{item.label}</Link>
                            </li>
                        ))}
                    </DropDownMenu>
                    <Link href='/team'>Команда</Link>
                    <Link href='/price'>Цены</Link>
                    <Link href='/result'>Результаты работ</Link>
                    <Link href='/events'>Акции</Link>
                    <Link href='/contacts'>Контакты</Link>
                </div>
                <div className={styles.contacts}>
                    <a href="tel:+74232658950">+7 (423) 265-89-50</a>
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