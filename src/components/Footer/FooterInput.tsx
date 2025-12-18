import styles from "@/components/Footer/FooterForm.module.scss";

interface Props {
    value: string;
    setValue: (value: string) => void;
    id: string;
    label: string;
    placeholder: string;
    type?: string;
}

/**
 * Текстовое поле ввода в форме отправки заявки в подвате страницы
 * @param value переменная
 * @param setValue сеттер переменной
 * @param id идентификатор инпута
 * @param label заголовок поля
 * @param placeholder заполнитель
 * @param type тип поля
 * @constructor
 */
export const FooterInput: React.FC<Props> = ({value, setValue, id, label, placeholder, type = 'text'}) => {
    return (
        <div className={styles.item}>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={id}
                   placeholder={placeholder} value={value}
                   onChange={e => setValue(e.target.value)}/>
        </div>
    );
};