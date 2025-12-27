import styles from "@/app/components/Header/Header.module.scss";
import {HamburgerSvg} from "@/app/components/ui/icon/HamburgerSvg";
import {DropDownMenu} from "@/app/components/wigets/DropDownMenu";
import {dropDownItemsMock} from "@/app/mock/dropDownItems.mock";
import Link from "next/link";

/**
 * Меню хедера
 * @constructor
 */
export const HeaderMenu = () => {
    return (
        <div className={styles.headerMenu}>
            <label htmlFor='mobile-header-menu'>
                <HamburgerSvg/>
            </label>
            <input type='checkbox' id='mobile-header-menu'/>
            <menu className={styles.links}>
                <DropDownMenu label='Услуги'>
                    {dropDownItemsMock.map((item) => (
                        <li key={`service-${item.id}`}>
                            <Link href={item.link}>{item.label}</Link>
                        </li>
                    ))}
                </DropDownMenu>
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
            </menu>
        </div>
    );
};