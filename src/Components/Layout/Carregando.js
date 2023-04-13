import styles from "./Carregando.module.css"
import Carregando from "../../img/icocarregando.svg"

function Carregando()
{
    return(
        <div className={styles.Carregando_container}>
            <img className = {styles.Carregando} src={icocarregando} alt= "Carregando"/>
        </div>
    )
        
    
 
}

export default loading
