import {createAsyncThunk} from "@reduxjs/toolkit";
import {newsRequest} from "@/app/utils/requests/newsRequest";
import {News} from "@/app/types/news/News.interface";

/** Загрузчик новостей */
export const newsLoader = createAsyncThunk(
    'newsLoader',
    (args: {page: number}, {rejectWithValue}) => newsRequest(args.page)
        .then(result => result.data as News[])
        .catch(rejectWithValue),
);