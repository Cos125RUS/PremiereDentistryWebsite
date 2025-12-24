import {createAsyncThunk} from "@reduxjs/toolkit";
import {newsCountRequest} from "@/app/utils/requests/newsCountRequest";

/** Загрузчик количества новостей */
export const newsCountLoader = createAsyncThunk(
    'newsCountLoader',
    (_, {rejectWithValue}) =>
        newsCountRequest()
            .catch(rejectWithValue)
);