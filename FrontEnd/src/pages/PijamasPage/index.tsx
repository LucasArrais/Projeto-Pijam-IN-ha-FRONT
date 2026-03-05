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
                
                <div className={styles.filtersBox}>
                    
                    <div className={styles.expansionButton}>
                        <div className={styles.faixaEespecificacao}>
                            <div className={styles.faixa}></div>
                            <h4 className={styles.h4}>Gênero</h4>
                        </div>
                        <div className={styles.expansionArrow}></div>  
                    </div>
                    
                    <div className={styles.expansionButton}>
                        <div className={styles.faixaEespecificacao}>
                                <div className={styles.faixa}></div>
                                <h4 className={styles.h4}>Tipo</h4>
                            </div>
                            <div className={styles.expansionArrow}></div>
                        </div>
                    
                    <div className={styles.expansionButton}>
                        <div className={styles.faixaEespecificacao}>
                                <div className={styles.faixa}></div>
                                <h4 className={styles.h4}>Estação</h4>
                            </div>
                            <div className={styles.expansionArrow}></div>
                        </div>
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