import { useState, useEffect } from 'react'
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth'
import styles from './SignupForm.module.scss'
import { auth } from '../../../firebase-config'
import logo from '../../../img/diamondDark.png'

function SignupForm() {

    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")

    const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [])

    const register = async (e) => {
        e.preventDefault()

        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
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

            </div>
            <div className={styles.divContainer}>
                <h1>Junte se<br />a nós!</h1>
                <img src={logo} alt='Logo' className={styles.logoBackground} />
            </div>
        </section>
    )
}

export default SignupForm

/*
 <div className={styles.formTitleContainer}>
                <h1>Realize Seu Cadastro</h1>
            </div>
            <form>
                <div className={styles.formContainerInput}>
                    <label>E-mail *</label>
                    <input type="email" onChange={(e) => { setRegisterEmail(e.target.value) }} />
                </div>
                <div className={styles.formContainerInput}>
                    <label>Senha *</label>
                    <input type="password" onChange={(e) => { setRegisterPassword(e.target.value) }} />
                </div>
                <div className={styles.formContainerInput}>
                    <label>Confirme a senha *</label>
                    <input type="password" />
                </div>
                <div className={styles.formContainerLegends}>
                    <p><b>*</b> Campo obrigatório.</p>
                </div>
                <div className={styles.formContainerButton}>
                    <button onClick={register}>Cadastrar</button>
                    <button className={styles.alredyHas}>Já tenho uma conta</button>
                </div>
            </form>

            <div className={styles.infoContainer}>
                <h1>Usuário logado:</h1>
                <p>{user?.email}</p>
                <button onClick={logout}>Deslogar</button>
            </div>

*/