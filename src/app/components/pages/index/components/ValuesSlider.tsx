import styles from "./ValuesSlider.module.scss";

interface Props {
    length: number;
}

/** Слайдер блока ценностей */
export const ValuesSlider: React.FC<Props> = ({length}) => {
    return (
        <ul className={styles.container}>
            {Array(length).fill(false).map((_, i) => (
                <li key={`slider-${i}`} className={styles.item}></li>
            ))}
        </ul>
    );
};