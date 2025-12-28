"use client";

import {valuesData} from "@/app/components/pages/index/data/values.data";
import styles from "./Values.module.scss";
import Image from "next/image";
import classNames from "classnames";
import {useEffect, useRef, useState} from "react";

/** Блок ценностей */
export const Values = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const elementWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStartPosition, setTouchStartPosition] = useState(0);
    const [touchOffset, setTouchOffset] = useState(0);
    const components: React.ReactNode[] = [];

    /** Определение ширины перелистываемого элемента */
    useEffect(() => {
        if (window.innerWidth < 481 && containerRef.current) {
            elementWidth.current = containerRef.current.children?.[0]?.clientWidth;
        }
    }, []);

    /** Перелистывание свайпом */
    const swipe = (index: number) => {
        setCurrentIndex(index);
        if (containerRef.current) {
            containerRef.current.scrollLeft = elementWidth.current * index;
        }
    };

    /** Отслеживание касания */
    const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setTouchStartPosition(e.touches[0].clientX);
    };

    /** Отслеживание перемещения пальца */
    const touchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        setTouchOffset(e.touches[0].clientX - touchStartPosition);
    };

    /** Отпускание пальца */
    const touchStop = () => {
        const swipeLength = elementWidth.current / touchOffset;
        //Сдвиг влево
        if (swipeLength > 0 && swipeLength < 5 && currentIndex > 0) {
            swipe(currentIndex - 1);
        }
        //Сдвиг вправо
        if (swipeLength < 0 && swipeLength > -5 && currentIndex < components.length - 1) {
            swipe(currentIndex + 1);
        }
    };

    for (let i = 0; i < valuesData.length; i = i + 2) {
        const numberLeft = i < 9 ? `0${i + 1}` : i + 1;
        const numberRight = i < 10 ? `0${i + 2}` : i + 2;
        const leftComponent = <div className={styles.card}>
            <div>
                <p>{numberLeft}</p>
                <div className={styles.textContent}>
                    <h6 className={styles.label}>{valuesData[i].label}</h6>
                    <p className={styles.paragraph}>{valuesData[i].text}</p>
                </div>
            </div>
            <Image width="274" height="278" src={valuesData[i].img} alt={valuesData[i].alt}/>
        </div>;

        components.push(<div key={`value-${i}`} className={classNames(styles.box, "max-width")}>
            {leftComponent}
            {!!valuesData[i + 1] && <div className={styles.card}>
                <div>
                    <p>{numberRight}</p>
                    <div className={styles.textContent}>
                        <h6 className={styles.label}>{valuesData[i + 1].label}</h6>
                        <p className={styles.paragraph}>{valuesData[i + 1].text}</p>
                    </div>
                </div>
                <Image width="274" height="278" src={valuesData[i + 1].img} alt={valuesData[i + 1].alt}/>
            </div>}
        </div>);
    }

    return <>
        <div className={styles.container} ref={containerRef}
             onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchStop}>
            {components.map((component, index) => (
                <div key={`value-${index}`} className={styles.row}>
                    {component}
                </div>
            ))}
        </div>
        <ul className={styles.slider}>
            {Array(components.length).fill(false).map((_, i) => (
                <li key={`slider-${i}`}
                    className={classNames(styles.item, i === currentIndex && styles.item__active)}></li>
            ))}
        </ul>
    </>
};