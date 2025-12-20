"use client";

import {RootState, useAppDispatch, useAppSelector} from "@/app/utils/storage/store";
import {useEffect} from "react";
import {clearAlertIndicator, clearAlertText} from "@/app/utils/storage/slice/siteSlice";
import styles from "./Alert.module.scss";
import classNames from "classnames";

/**
 * Всплывающее уведомление об ошибке
 * @constructor
 */
export const Alert = () => {
    const dispatch = useAppDispatch();
    const {text, isShow} = useAppSelector((state: RootState) => state.site.alert);

    /** Сброс индикатора показа */
    useEffect(() => {
        if (!isShow) return;

        const timer = setTimeout(() => {
            dispatch(clearAlertIndicator());
        }, 5000);

        return () => {
            clearTimeout(timer);
        }
    }, [isShow, dispatch]);

    /** Сброс текста уведомления */
    useEffect(() => {
        if (!text) return;

        const timer = setTimeout(() => {
            dispatch(clearAlertText());
        }, 5600);

        return () => {
            clearTimeout(timer);
        }
    }, [text, dispatch]);

    return <p className={classNames(styles.alert, isShow && styles.alert__show)}>{text}</p>;
};