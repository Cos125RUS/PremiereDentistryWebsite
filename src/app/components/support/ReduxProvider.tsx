'use client';

import { Provider } from 'react-redux';
import {makeStore, store} from "@/app/utils/storage/store";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
}