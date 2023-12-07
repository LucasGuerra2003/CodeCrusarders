import styles from './Navbar.module.scss'
import logo from '../../img/diamond.png'
import { useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../Services/firebase-config'
import { Link, Navigate } from 'react-router-dom';
import Carregando from '../Layout/Carregando'

const thereisuser = localStorage.getItem("email");

function Navbar() {

    // Redirect
    const [goToHome, setGoToHome] = useState(false)

    // Loading state
    const [isLoading, setIsLoading] = useState(false);

    const logout = async () => {
        await signOut(auth)
    }

    const handleLogout = async () => {
        console.log("handleLogout is called"); // Adicione esta linha
        setIsLoading(true);

        try {
            await auth.signOut();
            localStorage.clear();
            setIsLoading(false);
            redirect()
        } catch (error) {
            setIsLoading(false);
            console.log(error.message);
        }
    }

    // Redirect
    const redirect = () => {
        setGoToHome(true)
    }

    return (
        <>
        {goToHome ? (
            <Navigate to="/" />
        ) : (
            <nav className={!thereisuser ? `${styles.navbar} ${styles.navbarNoLogin}` : `${styles.navbar}`}>
                <div className={styles.logo}>
                    <img src={logo} alt='Logo' />
                    <p>Sua Marca</p>
                </div>
                {thereisuser ? (
                    <div className={styles.logout}>
                        <button onClick={handleLogout}>Sair</button>
                    </div>
                ) : (
                    <div className={styles.default}>
                        <Link to='/signin'><button>Acessar</button></Link>
                        <Link to='/signup'><button>Registrar</button></Link>
                    </div>
                )}
            </nav>
        )}
        </>
    )
}

export default Navbar