import styles from "@/components/Header/Header.module.scss";
import Link from "next/link";
import {LogoSvg} from "@/components/ui/LogoSvg";
import {DropDownMenu} from "@/components/wigets/DropDownMenu";
import {servicesMock} from "@/mock/services.mock";

export const HeaderBottom = () => {

    return (
        <div className={styles.bottom}>
            <Link href='/public'>
                <LogoSvg/>
            </Link>
            <div>
                <DropDownMenu label='Услуги'>
                    {servicesMock.map((service) => (
                        <li key={`service-${service.id}`}></li>
                    ))}
                </DropDownMenu>
            </div>
        </div>
    );
};