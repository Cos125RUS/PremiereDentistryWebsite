"use client";

import {CheckSvg} from "@/app/components/ui/icon/CheckSvg";
import styles from "./News.module.scss";
import {RootState, useAppSelector} from "@/app/utils/storage/store";
import classNames from "classnames";
import {NewsItem} from "@/app/components/pages/index/components/NewsItem";
import Link from "next/link";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";

//Ширина карточки новостей
const NEWS_CARD_WIDTH = 399;

/** Блок новостей */
export const NewsBox = () => {
    const {news, newsCount} = useAppSelector((state: RootState) => state.site);
    const listRef = useRef<HTMLUListElement | null>(null);
    const [offset, setOffset] = useState(0);
    const cardWidth = useRef(NEWS_CARD_WIDTH);
    const offsetLength = useMemo(() => news.length - 4, [news.length]);

    /** Определение единицы смещения */
    useEffect(() => {
        if (news.length && listRef.current) {
            cardWidth.current = listRef.current.children?.[0]?.clientWidth ?? NEWS_CARD_WIDTH;
        }
    }, [news.length]);

    /** Прокрутка новостей */
    const scrollNews = useCallback((arg: number) => {
        if (listRef.current) {
            let newOffset = (offset + arg);
            if (newOffset > offsetLength) {
                newOffset = 0;
            } else if (newOffset < 0) {
                newOffset = offsetLength;
            }

            listRef.current.scrollLeft = (cardWidth.current + 8) * newOffset;
            setOffset(newOffset);
        }
    }, [offset, offsetLength, listRef]);

    return (
        <div className={classNames("max-width", styles.container)}>
            <ul className={classNames(styles.newsList)} ref={listRef}>
                {news.map((item, index) => <li key={`news-${index}`}>
                    <NewsItem news={item}/>
                </li>)}
            </ul>
            {/*Второй скроллбар для перемещения в обратную сторону*/}
            {/*<button className={styles.leftScrollBtn} onClick={() => scrollNews(-1)}>*/}
            {/*    <CheckSvg/>*/}
            {/*</button>*/}
            <button className={styles.rightScrollBtn} onClick={() => scrollNews(1)}>
                <CheckSvg/>
            </button>
            <div className={styles.linkNewsBox}>
                <Link href='/news' className={styles.linkNewsBtn}>Все публикации {!!newsCount && <span>({newsCount})</span>}</Link>
            </div>
        </div>
    );
};