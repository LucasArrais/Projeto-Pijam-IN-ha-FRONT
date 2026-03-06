import styles from './styles.module.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function HomePage() {
    return (
        <div className={styles.Container}>
            

            <div className={styles.Slogan}>

                <img className={styles.Logo} src="./imagens_homepage/logo.svg"  alt="Logo Pijam {IN} ha" />

                <p>Se os lobos soubessem desse conforto, <br/>
                    nem sompravam casas, iam dormir!</p>
            </div>


            <div className={styles.PromocaoNatalina}>
                <img src="./imagens_homepage/banner.svg"    alt="Promoção de Natal" />
            </div>
        </div>
    )
}