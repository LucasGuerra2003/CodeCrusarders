import { Link } from 'react-router-dom';
import styles from './Profile.module.scss'
import { useState, useEffect } from 'react'

function Profile() {
    const [email, setEmail] = useState(localStorage.getItem('email'));

    useEffect(() => {
        const updateEmail = () => {
            setEmail(localStorage.getItem('email'));
        };
        window.addEventListener('load', updateEmail);
        return () => window.removeEventListener('load', updateEmail);
    }, []);

    return (
        <div className={styles.profileContainer}>
            {email ? (
                <>
                    <h2>Meus dados</h2>
                    <div className={styles.dataContainer}>
                        <div className={styles.dataContainerChild}>
                            <h3>E-mail</h3>
                            <p>{localStorage.getItem("email")}</p>
                        </div>
                    </div>
                </>
            ) : (
                <p>Faça <Link to='/signin'>login</Link> para acessar seu perfil, ou <Link to='/signup'>registre-se</Link>.</p>
            )}
        </div>
    )
}

export default Profile