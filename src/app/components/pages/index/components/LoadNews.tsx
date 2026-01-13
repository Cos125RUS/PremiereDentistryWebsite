"use client";

import {NewsBox} from "@/app/components/pages/index/components/NewsBox";
import {RootState, useAppDispatch, useAppSelector} from "@/app/utils/storage/store";
import {useEffect, useState} from "react";
import {newsLoader} from "@/app/utils/storage/loaders/newsLoader";
import {newsCountLoader} from "@/app/utils/storage/loaders/newsCountLoader";

/** Загрузка новостей */
export const LoadNews = () => {
    const dispatch = useAppDispatch();
    const news = useAppSelector((state: RootState) => state.site.news);
    const [dots, setDots] = useState<string>('');

    /** Загрузка */
    useEffect(() => {
        dispatch(newsLoader({page: 1}));
        dispatch(newsCountLoader());
    }, [dispatch]);

    /** Анимация загрузки */
    useEffect(() => {
        let timer: NodeJS.Timeout | number;

        if (!news.length) {
            timer = setTimeout(() => {
                setDots(prev => prev !== '...' ? prev + '.' : '');
            }, 1000);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [dots, news.length]);

    if (!news.length) {
        return <p className="max-width" style={{minHeight: 800, display: 'flex', justifyContent: 'center'}}>Загрузка{dots}</p>;
    }

    return <NewsBox/>;
};