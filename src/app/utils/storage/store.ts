import { configureStore } from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {siteReducer} from "@/app/utils/storage/slice/siteSlice";
import {userReducer} from "@/app/utils/storage/slice/userSlice";

export interface RootState {
    site: ReturnType<typeof siteReducer>;
    user: ReturnType<typeof userReducer>;
}

export const makeStore = () => {
    return configureStore({
        reducer: {
            site: siteReducer,
            user: userReducer,
        }
    });
};

export const store = makeStore();
export type AppDispatch = typeof store.dispatch;


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;