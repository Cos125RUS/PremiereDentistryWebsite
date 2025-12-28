"use client";

import {valuesData} from "@/app/components/pages/index/data/values.data";
import styles from "./Values.module.scss";
import Image from "next/image";
import classNames from "classnames";

/** Блок ценностей */
export const Values = () => {
    const components: React.ReactNode[] = [];

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

    return <div className={styles.container}>
        {components.map((component, index) => (
            <div key={`value-${index}`} className={styles.row}>
                {component}
            </div>
        ))}
    </div>
};