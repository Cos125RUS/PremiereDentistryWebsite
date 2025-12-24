"use client";

import {NewsBox} from "@/app/components/pages/index/components/NewsBox";
import {RootState, useAppDispatch, useAppSelector} from "@/app/utils/storage/store";
import {useEffect} from "react";
import {newsLoader} from "@/app/utils/storage/loaders/newsLoader";
import {newsCountLoader} from "@/app/utils/storage/loaders/newsCountLoader";

/** Загрузка новостей */
export const LoadNews = () => {
    const dispatch = useAppDispatch();
    const news = useAppSelector((state: RootState) => state.site.news);

    /** Загрузка */
    useEffect(() => {
        dispatch(newsLoader({page: 1}));
        dispatch(newsCountLoader());
    }, [dispatch]);

    if (!news.length) {
        return <p className="max-width" style={{minHeight: 800}}>Loading...</p>;//TODO добавить прелоадер
    }

    return <NewsBox/>;
};