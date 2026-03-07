import styles from "./styles.module.css"
import FilterButton from "../../components/FilterButton"
import { useState } from "react"

export default function PijamasPage() {
    type FilterType = "gender" | "type" | "season"

    const [openFilter, setOpenFilter] = useState<FilterType | null>(null)

    function toggleFilter(filterName: FilterType) {
        if (openFilter === filterName) {
            setOpenFilter(null)
        } else {
            setOpenFilter(filterName)
        }
    }

    return (
        <>
        <div className={styles.background}>

            <section className={styles.searchAndFilters}>

                <div className={styles.searchbarAndLupa}>
                    <input type="text" placeholder="Pesquise pelo produto..." />
                    <button className={styles.searchButton}></button>
                </div>

                <div className={styles.filtersBox}>
                    
                    <FilterButton
                        title="Gênero"
                        isOpen={openFilter === "gender"}
                        onToggle={() => toggleFilter("gender")}
                        options={[
                        { label: "Todos", link: "/pijamas" },
                        { label: "Masculino", link: "/pijamas/filter?gender=MASCULINO" },
                        { label: "Feminino", link: "/pijamas/filter?gender=FEMININO" },
                        { label: "Unissex", link: "/pijamas/filter?gender=UNISSEX" }
                        ]}
                    />

                    <FilterButton
                        title="Tipo"
                        isOpen={openFilter === "type"}
                        onToggle={() => toggleFilter("type")}
                        options={[
                        { label: "Todos", link: "/pijamas" },
                        { label: "Adulto", link: "/pijamas/filter?type=ADULTO" },
                        { label: "Infantil", link: "/pijamas/filter?type=INFANTIL" }
                        ]}
                    />

                    <FilterButton
                        title="Estação"
                        isOpen={openFilter === "season"}
                        onToggle={() => toggleFilter("season")}
                        options={[
                        { label: "Todos", link: "/pijamas" },
                        { label: "Verão", link: "/pijamas/filter?season=VERAO" },
                        { label: "Inverno", link: "/pijamas/filter?season=INVERNO" }
                        ]}
                    />
                            

                </div>
            </section>

            <section className={styles.pijmaDisplayAndPagination}>
                <div className={styles.pijamasDisplay}>

                    <div className={styles.cardPijama}>
                        <img src="public/imagens_pijamas/Front view of a young lady in pajamas staying in bed.png" alt="" />
                        <p className={styles.descriçãoPijama}>Pijama feminino longo - estampa poá</p>
                        <p className={styles.price}>R$ 78,90</p>
                        <p className={styles.parcelamento}>6x de R$13,15</p>
                    </div>
                    <div className={styles.cardPijama}>
                        <img src="public/imagens_pijamas/Front view of a young lady in pajamas staying in bed.png" alt="" />
                        <p className={styles.descriçãoPijama}>Pijama feminino longo - estampa poá</p>
                        <p className={styles.price}>R$ 78,90</p>
                        <p className={styles.parcelamento}>6x de R$13,15</p>
                    </div>
                    <div className={styles.cardPijama}>
                        <img src="public/imagens_pijamas/Front view of a young lady in pajamas staying in bed.png" alt="" />
                        <p className={styles.descriçãoPijama}>Pijama feminino longo - estampa poá</p>
                        <p className={styles.price}>R$ 78,90</p>
                        <p className={styles.parcelamento}>6x de R$13,15</p>
                    </div>
                    <div className={styles.cardPijama}>
                        <img src="public/imagens_pijamas/Front view of a young lady in pajamas staying in bed.png" alt="" />
                        <p className={styles.descriçãoPijama}>Pijama feminino longo - estampa poá</p>
                        <p className={styles.price}>R$ 78,90</p>
                        <p className={styles.parcelamento}>6x de R$13,15</p>
                    </div>
                    <div className={styles.cardPijama}>
                        <img src="public/imagens_pijamas/Front view of a young lady in pajamas staying in bed.png" alt="" />
                        <p className={styles.descriçãoPijama}>Pijama feminino longo - estampa poá</p>
                        <p className={styles.price}>R$ 78,90</p>
                        <p className={styles.parcelamento}>6x de R$13,15</p>
                    </div>
                    <div className={styles.cardPijama}>
                        <img src="public/imagens_pijamas/Front view of a young lady in pajamas staying in bed.png" alt="" />
                        <p className={styles.descriçãoPijama}>Pijama feminino longo - estampa poá</p>
                        <p className={styles.price}>R$ 78,90</p>
                        <p className={styles.parcelamento}>6x de R$13,15</p>
                    </div>
                    <div className={styles.cardPijama}>
                        <img src="public/imagens_pijamas/Front view of a young lady in pajamas staying in bed.png" alt="" />
                        <p className={styles.descriçãoPijama}>Pijama feminino longo - estampa poá</p>
                        <p className={styles.price}>R$ 78,90</p>
                        <p className={styles.parcelamento}>6x de R$13,15</p>
                    </div>
                    <div className={styles.cardPijama}>
                        <img src="public/imagens_pijamas/Front view of a young lady in pajamas staying in bed.png" alt="" />
                        <p className={styles.descriçãoPijama}>Pijama feminino longo - estampa poá</p>
                        <p className={styles.price}>R$ 78,90</p>
                        <p className={styles.parcelamento}>6x de R$13,15</p>
                    </div>
                    <div className={styles.cardPijama}>
                        <img src="public/imagens_pijamas/Front view of a young lady in pajamas staying in bed.png" alt="" />
                        <p className={styles.descriçãoPijama}>Pijama feminino longo - estampa poá</p>
                        <p className={styles.price}>R$ 78,90</p>
                        <p className={styles.parcelamento}>6x de R$13,15</p>
                    </div>
                    <div className={styles.cardPijama}>
                        <img src="public/imagens_pijamas/Front view of a young lady in pajamas staying in bed.png" alt="" />
                        <p className={styles.descriçãoPijama}>Pijama feminino longo - estampa poá</p>
                        <p className={styles.price}>R$ 78,90</p>
                        <p className={styles.parcelamento}>6x de R$13,15</p>
                    </div>

                </div>

                <div className={styles.pagination}></div>
            </section>

        </div>
        </>
    )
}