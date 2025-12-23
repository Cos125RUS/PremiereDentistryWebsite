import {News} from "@/app/types/news/News.interface";
import Image from "next/image";
import styles from "./News.module.scss";

interface Props {
    news: News;
}

/** Новость */
export const NewsItem: React.FC<Props> = ({news}) => {
    return (
        <div className={styles.news}>
            <div className={styles.img}>
                <Image width={399} height={470} src={news.img} alt={news.title}/>
                <button>Новость</button>
            </div>
            <div>
                <p>{news.date}</p>
                <h6>{news.title}</h6>
                <p>{news.description}</p>
            </div>
        </div>
    );
};