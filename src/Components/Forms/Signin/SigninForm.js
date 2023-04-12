import { useState, useEffect } from 'react'
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth'
import styles from './SigninForm.module.scss'
import { auth } from '../../../firebase-config'
import logo from '../../../img/diamondDark.png'

function Signin() {

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [])

    const login = async (e) => {
        e.preventDefault()

        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            console.log(user)
        } catch (error) {
            console.log(error.message)
        }
    }

    const logout = async () => {
        await signOut(auth)
    }

    return (
        <section className={styles.section}>
            <div className={styles.divContainer}>
                <h1>Seja<br />Bem Vindo(a)!</h1>
                <img src={logo} alt='Logo' className={styles.logoBackground}/>
            </div>
            <div className={styles.divContainer}>

            </div>
        </section>
    )
}

export default Signin

/*
  <div className={styles.formTitleContainer}>
                <h1>Realize Seu Login</h1>
            </div>
            <form>
                <div className={styles.formContainerInput}>
                    <label>E-mail *</label>
                    <input type="email" onChange={(e) => { setLoginEmail(e.target.value) }} />
                </div>
                <div className={styles.formContainerInput}>
                    <label>Senha *</label>
                    <input type="password" onChange={(e) => { setLoginPassword(e.target.value) }} />
                </div>
                <div className={styles.formContainerLegends}>
                    <p><b>*</b> Campo obrigatório.</p>
                </div>
                <div className={styles.formContainerButton}>
                    <button onClick={login}>Acessar</button>
                    <button className={styles.alredyHas}>Não tenho uma conta</button>
                </div>
            </form>

            <div className={styles.infoContainer}>
                <h1>Usuário logado:</h1>
                <p>{user?.email}</p>
                <button onClick={logout}>Deslogar</button>
            </div>
*/