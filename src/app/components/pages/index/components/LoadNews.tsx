"use client";

import {NewsBox} from "@/app/components/pages/index/components/NewsBox";
import {RootState, useAppDispatch, useAppSelector} from "@/app/utils/storage/store";
import {useEffect} from "react";
import {newsLoader} from "@/app/utils/storage/loaders/newsLoader";

/** Загрузка новостей */
export const LoadNews = () => {
    const dispatch = useAppDispatch();
    const news = useAppSelector((state: RootState) => state.site.news);

    useEffect(() => {
        dispatch(newsLoader({page: 1}));
    }, [dispatch]);

    if (!news) {
        return "Loading...";//TODO добавить прелоадер
    }

    return <NewsBox/>;
};