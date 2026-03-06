import styles from './styles.module.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from 'react-router-dom';

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


            <div className={styles.UltimasPromocoes}>

                <h2>Nossas últimas promoções!</h2>
                
                <Swiper spaceBetween={80} slidesPerView={3}>
                    <SwiperSlide>
                        <a href="#">
                            <img src="./imagens_homepage/mulher_pijama.svg" />
                        </a>
                    </SwiperSlide>

                    <SwiperSlide>
                        <a href="#">
                            <img src="./imagens_homepage/mulher_pijama.svg" />
                        </a>
                    </SwiperSlide>

                    <SwiperSlide>
                        <a href="#">
                            <img src="./imagens_homepage/mulher_pijama.svg"/>
                        </a>
                    </SwiperSlide>

                </Swiper>

            </div>


            <div className={styles.Feedback}>

                <h2>Feedbacks</h2>


                    <Swiper modules= {[Navigation]} navigation  spaceBetween={50}   slidesPerView={3}   loop={true}>

                        <SwiperSlide>
                            <div className={styles.CardFeedback}>

                            <h3>Beltrano Souza</h3>

                            <div className={styles.Estrela}>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>☆</span>
                            </div>

                            <p>
                                Lorem ipsum dolor sit amet. Et voluptatem officia ad sint voluptate qui
                                voluptas sunt non fugiat labore et consequatur voluptatem sed optio
                                veniam aut perferendis delectus!
                            </p>

                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className={styles.CardFeedback}>

                            <h3>Fulano da Silva</h3>

                            <div className={styles.Estrela}>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>☆</span>
                            </div>

                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam,
                                iste voluptatum perferendis architecto quas natus recusandae minus 
                                autem nam nulla delectus nemo cum, maiores mollitia cupiditate provident optio iure ducimus!
                            </p>

                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className={styles.CardFeedback}>

                            <h3>Ciclano Mendes</h3>

                            <div className={styles.Estrela}>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>

                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Blanditiis odio iste adipisci eos asperiores! Asperiores repellat, vel veniam dolorum,
                                iste, mollitia voluptatum vero cumque iusto laboriosam nam enim? Eum, veritatis!
                            </p>

                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className={styles.CardFeedback}>

                            <h3>Chiquinho Bahia</h3>

                            <div className={styles.Estrela}>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, officiis explicabo sunt quas, veniam, repellat necessitatibus deserunt rerum voluptatibus magnam cumque voluptatum aperiam aliquam itaque natus accusamus sint ratione obcaecati.
                            </p>

                            </div>
                        </SwiperSlide>

                    </Swiper>

                <Link to="./feedback" className={styles.BotaoFeedback}>
                    Também quero dar um feedback!
                </Link>

            </div>
        </div>
    )
}