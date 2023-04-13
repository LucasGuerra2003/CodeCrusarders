import styles from './Navbar.module.scss'
import logo from '../../img/diamond.png'
import { signOut } from 'firebase/auth'
import { auth } from '../../Services/firebase-config'

function Navbar() {

    const logout = async () => {
        await signOut(auth)
    }

    const handleLogout = async () => {
        try {
            await auth.signOut();
            localStorage.clear();
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt='Logo' />
                <p>Sua Marca</p>
            </div>
            <div className={styles.logout}>
                <button onClick={handleLogout}>Sair</button>
            </div>
        </nav>
    )
}

export default Navbar