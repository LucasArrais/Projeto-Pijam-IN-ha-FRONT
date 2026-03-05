import styles from "./styles.module.css"

export default function PijamasPage() {
    return (
        <>
        <div className={styles.background}>
            <section className={styles.searchAndFilters}>
                <div className={styles.searchbarAndLupa}>
                    <input type="text" placeholder="Pesquise pelo produto..." />
                    <button className={styles.searchButton}></button>
                </div>
                <div className={styles.filtersArea}>
                    <button className={styles.genderButton}></button>
                    <button className={styles.typeButton}></button>
                    <button className={styles.seasonButton}></button>
                </div>
            </section>
                
            <section className={styles.pijmaDisplayAndPagination}>
                    <div className={styles.pijamasDisplay}>
                         
                        <div className={styles.cardPijama}>
                            <div></div>
                        </div>
                    </div>

                    <div className={styles.pagination}>

                    </div>
            </section>
        </div>
                
        </>
    )
}