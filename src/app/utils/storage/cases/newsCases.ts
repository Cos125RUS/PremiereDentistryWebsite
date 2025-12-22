import {newsLoader} from "@/app/utils/storage/loaders/newsLoader";
import {News} from "@/app/types/news/News.interface";
import {ActionReducerMapBuilder, WritableDraft} from "@reduxjs/toolkit";
import {SiteSlice} from "@/app/utils/storage/slice/siteSlice";

/** Кейсы загрузки статей */
export const newsCases = (builder: ActionReducerMapBuilder<SiteSlice>) => {
    builder
        .addCase(newsLoader.pending, (state: WritableDraft<SiteSlice>) => {
            state.loading.news = true;
        })
        .addCase(newsLoader.fulfilled, (state: WritableDraft<SiteSlice>, action: {payload: News[]}) => {
            if (!action.payload.length) {
                state.isFinishedNews = true;
            } else {
                state.news = [...state.news, ...action.payload];
            }
            state.loading.news = false;
        })
        .addCase(newsLoader.rejected, (state: WritableDraft<SiteSlice>, action) => {
            state.errors.news = action.error.message as string || "Произошла ошибка при загрузке новостей";
            state.loading.news = false;
        })

    return builder;
};