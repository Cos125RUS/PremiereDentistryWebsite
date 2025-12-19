import { configureStore } from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {siteReducer} from "@/utils/storage/slice/siteSlice";

export const makeStore = (): ReturnType<typeof configureStore> => {
    return configureStore({
        reducer: {
            site: siteReducer,
        }
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;