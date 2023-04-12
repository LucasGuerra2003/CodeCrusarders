import styles from './SectionRedirect.module.scss'
import logo from '../../img/diamond.png'

function SectionRedirect() {
    return (
        <section className={styles.sectionRedirect}>
            <div className={styles.baseContainer}>
                <div className={styles.contentContainer}>
                    <h2>O que deseja?</h2>
                    <button className={styles.buttonSignup}>Criar Conta</button>
                    <button className={styles.buttonSignin}>Entrar</button>
                </div>
                <div className={styles.logoContainer}>
                    <img src={logo} alt='Logo' className={styles.logo}/>
                    <p>Sua Marca</p>
                </div>
            </div>
        </section>
    )
}
 
export default SectionRedirect