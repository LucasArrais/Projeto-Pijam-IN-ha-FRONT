import styles from "./styles.module.css"
import { Link } from "react-router-dom"

type Option = {
  label: string
  link: string
}

type FilterButtonProps = {
  title: string
  isOpen: boolean
  onToggle: () => void
  options: Option[]
}

export default function FilterButton({
  title,
  isOpen,
  onToggle,
  options
}: FilterButtonProps) {
  return (
    <div className={styles.expansionButtonEgaveta}>
      <div className={styles.expansionButton} onClick={onToggle}>
        <div className={styles.faixaEespecificacao}>
          <div className={styles.faixa}></div>
          <h4 className={styles.h4}>{title}</h4>
        </div>
        <div className={styles.expansionArrow}></div>
      </div>

      {isOpen && (
        <div className={styles.gaveta}>
          {options.map((option, index) => (
            <div key={index}>
              <div className={styles.barraDivisoria}></div>
              <Link to={option.link} className={styles.Link}>
                {option.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}