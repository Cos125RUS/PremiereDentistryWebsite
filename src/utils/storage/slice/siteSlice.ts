import {createSlice} from "@reduxjs/toolkit";

interface AlertInterface {
    text: string;
    isShow: boolean
}

interface SiteSlice {
    alert: AlertInterface;
}

const initialState: SiteSlice = {
    alert: {
        text: '',
        isShow: false
    },
}

const siteSlice = createSlice({
    name: "siteSlice",
    initialState,
    reducers: {
        /** Установить уведомление */
        setAlert: (state, action: {payload: string}) => {
            state.alert = {text: action.payload, isShow: true};
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
