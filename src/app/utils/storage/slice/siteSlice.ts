import {createSlice} from "@reduxjs/toolkit";
import {News} from "@/app/types/news/News.interface";
import {newsCases} from "@/app/utils/storage/cases/newsCases";

type lvl = 'error' | 'warning' | 'success';

interface AlertInterface {
    text: string;
    isShow: boolean;
    lvl: lvl;
}

export interface SiteSlice {
    alert: AlertInterface;
    news: News[];
    isFinishedNews: boolean;
    loading: {
        news: boolean;
    },
    errors: {
        news: string;
    }
}

const initialState: SiteSlice = {
    alert: {
        text: '',
        lvl: 'error',
        isShow: false,
    },
    news: [],
    isFinishedNews: false,
    loading: {
        news: true,
    },
    errors: {
        news: '',
    }
};

const siteSlice = createSlice({
    name: "site",
    initialState,
    reducers: {
        /** Установить уведомление */
        setAlert: (state, action: {payload: { text: string, lvl?: lvl}}) => {
            state.alert = {text: action.payload.text, lvl: action.payload.lvl ?? 'error', isShow: true};
        },
        /** Снять уведомление */
        clearAlertIndicator: (state) => {
            state.alert.isShow = false;
        },
        /** Снять уведомление */
        clearAlertText: (state) => {
            state.alert.text = '';
        },
    },
    extraReducers: (builder) => {
        newsCases(builder);
    }
});

export const {
    setAlert,
    clearAlertIndicator,
    clearAlertText,
} = siteSlice.actions;

export const siteReducer = siteSlice.reducer;
