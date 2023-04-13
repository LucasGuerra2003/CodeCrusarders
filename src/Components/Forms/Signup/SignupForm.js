import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Carregando from '../../Layout/Carregando'
import { Navigate } from 'react-router-dom';

// Firebase
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../../../Services/firebase-config'

// Styles & Images
import styles from './SignupForm.module.scss'
import logo from '../../../img/diamondDark.png'

// Icons
import { CgProfile } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine, RiVipDiamondLine } from 'react-icons/ri';
import { BiMessageSquareError } from 'react-icons/bi';

function SignupForm() {
    // UseState
    /// Data
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState("")

    /// Error mensage
    const [mensagemErro, setMensagemErro] = useState("");

    /// Active user
    const [user, setUser] = useState({})

    // Loading state
    const [isLoading, setIsLoading] = useState(false);

    // Redirect
    const [goToHome, setGoToHome] = useState(false)

    // Set active user
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [])

    // Email validation 
    function isEmailValid(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Register function
    const register = async (e) => {
        e.preventDefault()

        // Validating
        if (!registerEmail) {
            return setMensagemErro("Por favor, preencha o campo e-mail.");
        }

        if (isEmailValid(registerEmail) === false) {
            return setMensagemErro("O e-mail informado é inválido.");
        }

        if (!registerPassword) {
            return setMensagemErro("Por favor, informe uma senha.");
        }

        if (!registerConfirmPassword) {
            return setMensagemErro("Por favor, confirme sua senha.");
        }

        if (registerPassword !== registerConfirmPassword) {
            return setMensagemErro("As senhas não conferem.");
        }

        setMensagemErro("");
        setIsLoading(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            const user = userCredential.user;
            localStorage.setItem("email", user.email);
            setIsLoading(false);
            redirect()
        } catch (error) {
            setIsLoading(false);
            return setMensagemErro("Não foi possível registrar, tente novamente mais tarde.");
        }
    }

    // Redirect
    const redirect = () => {
        setGoToHome(true)
    }

    if(goToHome){
        return <Navigate to="/home" />;
    }

    return (
        <section className={styles.section}>
            {isLoading && (
                <div className={styles.loadingScreen}>
                    <Carregando />
                </div>
            )}
            <div className={styles.divContainer}>
                <div className={styles.formContainer}>
                    <div className={styles.titleContainer}>
                        <h2><CgProfile />Registro</h2>
                    </div>
                    <form>
                        <div className={styles.inputContainer}>
                            <label><AiOutlineMail />Digite seu e-mail *</label>
                            <input type='email' onChange={(e) => { setRegisterEmail(e.target.value) }} />
                        </div>
                        <div className={styles.inputContainer}>
                            <label><RiLockPasswordLine />Digite sua senha *</label>
                            <input type='password' onChange={(e) => { setRegisterPassword(e.target.value) }} />
                        </div>
                        <div className={styles.inputContainer}>
                            <label><RiLockPasswordLine />Confirme sua senha *</label>
                            <input type='password' onChange={(e) => { setRegisterConfirmPassword(e.target.value) }} />
                        </div>
                        <div className={styles.legendContainer}>
                            <p><b>*</b> Campo obrigatório.</p>
                        </div>
                        <div className={styles.errorContainer}>
                            {mensagemErro && <p><BiMessageSquareError />{mensagemErro}</p>}
                        </div>
                        <div className={styles.buttonContainer}>
                            <button className={styles.register} onClick={register}>Registar<RiVipDiamondLine /></button>
                            <Link to="/"><button className={styles.back}>Voltar</button></Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className={styles.divContainer}>
                <h1>Junte se<br />a nós!</h1>
                <img src={logo} alt='Logo' className={styles.logoBackground} />
            </div>
        </section>
    )
}

export default SignupForm