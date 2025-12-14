
interface Props {
    label: string;
    children: React.ReactNode;
}

/**
 * Раскрывающееся меню
 * @param label текст на кнопке
 * @param children список элементов раскрывающегося списка
 * @constructor
 */
export const DropDownMenu: React.FC<Props> = ({label, children}) => {

    return (<>
        <button>
            <span>{label}</span>

        </button>
        <ul>
            {children}
        </ul>
    </>);
};