import styles from "./Carregando.module.css"
import icocarregando from "../../img/icocarregando.svg"

function Carregando() {
    return (
        <div className={styles.Carregando_container}>
            <p>Carregando</p>
            <img className={styles.Carregando} src={icocarregando} alt="Carregando" />
        </div>
    )
}

export default Carregando