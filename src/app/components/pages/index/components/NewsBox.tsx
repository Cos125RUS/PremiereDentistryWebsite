import {CheckSvg} from "@/app/components/ui/icon/CheckSvg";
import styles from "./News.module.scss";
import {RootState, useAppSelector} from "@/app/utils/storage/store";
import classNames from "classnames";
import {NewsItem} from "@/app/components/pages/index/components/NewsItem";
import Link from "next/link";

/** Блок новостей */
export const NewsBox = () => {
    const news = useAppSelector((state: RootState) => state.site.news);
    const newsCounter = 10;//TODO заменить на загрузку

    return (
        <div className={classNames("max-width", styles.container)}>
            <ul className={classNames(styles.newsList)}>
                {news.map((item, index) => <li key={`news-${index}`}>
                    <NewsItem news={item}/>
                </li>)}
            </ul>
            <button className={styles.RightScrollBtn}><CheckSvg/></button>
            <div className={styles.linkNewsBox}>
                <Link href='/news' className={styles.linkNewsBtn}>Все публикации <span>({newsCounter})</span></Link>
            </div>
        </div>
    );
};