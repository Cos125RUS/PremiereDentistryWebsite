import {createSlice} from "@reduxjs/toolkit";

type lvl = 'error' | 'warning' | 'success';

interface AlertInterface {
    text: string;
    isShow: boolean;
    lvl: lvl;
}

interface SiteSlice {
    alert: AlertInterface;
}

const initialState: SiteSlice = {
    alert: {
        text: '',
        lvl: 'error',
        isShow: false,
    },
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
});

export const {
    setAlert,
    clearAlertIndicator,
    clearAlertText,
} = siteSlice.actions;

export const siteReducer = siteSlice.reducer;
