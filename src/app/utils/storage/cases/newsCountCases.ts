import {ActionReducerMapBuilder, WritableDraft} from "@reduxjs/toolkit";
import {SiteSlice} from "@/app/utils/storage/slice/siteSlice";
import {newsCountLoader} from "@/app/utils/storage/loaders/newsCountLoader";
import {NewsCountResponse} from "@/app/types/news/NewsCountResponse.type";

/** Кейсы загрузки новостей */
export const newsCountCases = (builder: ActionReducerMapBuilder<SiteSlice>) => {
    builder
        .addCase(newsCountLoader.pending, (state: WritableDraft<SiteSlice>) => {
            state.loading.newsCount = true;
        })
        .addCase(newsCountLoader.fulfilled, (state: WritableDraft<SiteSlice>, action: { payload: NewsCountResponse }) => {
            if (action.payload.status === 'success') {
                state.newsCount = action.payload.count;
            } else {
                state.newsCount = 0;
                state.errors.newsCount = action.payload.message;
            }
            state.loading.newsCount = false;
        })
        .addCase(newsCountLoader.rejected, (state: WritableDraft<SiteSlice>, action) => {
            state.newsCount = 10;//TODO Заглушка
            state.loading.newsCount = false;
            state.errors.newsCount = action.error.message as string;
        });

    return builder;
};