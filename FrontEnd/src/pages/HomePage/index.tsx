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


            <div className={styles.PubliContainer}>

                <div className={styles.Publi}>
                    <img src="./imagens_homepage/pijama.svg" alt="Pijamas de alta tecnologia" />
                    <p>Pijamas confortáveis <br/>
                    e com tecnologia</p>
                </div>

                <div className={styles.Publi}>
                    <img src="./imagens_homepage/people.svg" alt="Todos os tamanhos" />
                    <p>Modelos para todas as <br/>
                    idades e tamanhos</p>
                </div>

                <div className={styles.Publi}>
                    <img src="./imagens_homepage/delivery.svg" alt="Frete grátis" />
                    <p>Frete grátis em todo o <br/>
                    Brasil e exterior</p>
                </div>

            </div>
            </div>
        </div>
    )
}