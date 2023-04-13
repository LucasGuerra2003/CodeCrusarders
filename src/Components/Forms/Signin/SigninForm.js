import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import { createBrowserHistory } from 'history';
import { Navigate } from 'react-router-dom';
import Carregando from '../../Layout/Carregando'

// Firebase
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithPopup,
} from 'firebase/auth'
import { auth, googleProvider, facebookProvider, microsoftProvider } from '../../../Services/firebase-config'

// Styles & Images
import styles from './SigninForm.module.scss'
import logo from '../../../img/diamondDark.png'

// Icons
import { CgProfile } from 'react-icons/cg';
import { AiOutlineMail, AiOutlineLogin } from 'react-icons/ai';
import { RiLockPasswordLine, RiVipDiamondLine } from 'react-icons/ri';
import { BiMessageSquareError } from 'react-icons/bi';
import { FaGoogle, FaFacebookF, FaWindows } from 'react-icons/fa';

function Signin() {
    // UseState
    /// Data
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    // Google login
    const [googleValue, setGoogleValue] = useState('')

    // Facebook login
    const [facebookValue, setFacebookValue] = useState('')

    // Microsoft login
    const [microsoftValue, setMicrosoftValue] = useState('')

    /// Error mensage
    const [mensagemErro, setMensagemErro] = useState("");

    /// Active user
    const [user, setUser] = useState({})

    // Loading state
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [])

    // Google 
    useEffect(() => {
        setGoogleValue(localStorage.getItem('email'))
    })

    // Login Google
    const loginGoogleClick = () => {
        signInWithPopup(auth, googleProvider)
            .then((data) => {
                setGoogleValue(data.user.email)
            })
            .catch((error) => {
                setIsModalOpen(false)
                return setMensagemErro("Não foi possível acessar com Google");
            });
    }

    // Google 
    useEffect(() => {
        setFacebookValue(localStorage.getItem('email'))
    })

    // Login Facebook
    const loginFacebookClick = () => {
        signInWithPopup(auth, facebookProvider)
            .then((data) => {
                setFacebookValue(data.user.email)
            })
            .catch((error) => {
                setIsModalOpen(false)
                return setMensagemErro("Não foi possível acessar com Facebook");
            });
    }

    // Login Microsoft
    useEffect(() => {
        setMicrosoftValue(localStorage.getItem('email'));
    });

    const loginMicrosoftClick = () => {
        signInWithPopup(auth, microsoftProvider)
            .then((result) => {
                const email = result.user.email;
                setMicrosoftValue(email);
            })
            .catch((error) => {
                setIsModalOpen(false)
                return setMensagemErro('Não foi possível acessar com Microsoft');
            });
    };

    // Login Default
    const login = async (e) => {
        e.preventDefault()

        if (!loginEmail) {
            return setMensagemErro("Por favor, preencha o campo e-mail.");
        }

        if (!loginPassword) {
            return setMensagemErro("Por favor, informe uma senha.");
        }

        setIsLoading(true);
        setMensagemErro("");

        try {
            const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            const user = userCredential.user;
            localStorage.setItem("email", user.email);
            setIsLoading(false);
            setMensagemErro("Logado");
        } catch (error) {
            setIsLoading(false);
            return setMensagemErro("Não foi possível acessar, tente novamente mais tarde.");
        }
    }

    const logout = async () => {
        await signOut(auth)
    }

    // Modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLoginClick = (e) => {
        e.preventDefault()
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <section className={styles.section}>
            {isLoading && (
                <div className={styles.loadingScreen}>
                    <Carregando />
                </div>
            )}
            <div className={styles.divContainer}>
                <h1>Seja<br />Bem Vindo(a)!</h1>
                <img src={logo} alt='Logo' className={styles.logoBackground} />
            </div>
            <div className={styles.divContainer}>
                <div className={styles.formContainer}>
                    <div className={styles.titleContainer}>
                        <h2><CgProfile />Acesso</h2>
                    </div>
                    <form>
                        <div className={styles.inputContainer}>
                            <label><AiOutlineMail />Digite seu e-mail</label>
                            <input type='email' onChange={(e) => { setLoginEmail(e.target.value) }} />
                        </div>
                        <div className={styles.inputContainer}>
                            <label><RiLockPasswordLine />Digite sua senha</label>
                            <input type='password' onChange={(e) => { setLoginPassword(e.target.value) }} />
                        </div>
                        <div className={styles.alternativeLoginContainer}>
                            <button onClick={handleLoginClick}>
                                <AiOutlineLogin />Login alternativo
                            </button>
                        </div>
                        <Modal isOpen={isModalOpen} ariaHideApp={false} onRequestClose={handleModalClose} className={styles.modal}>
                            <h2>Login alternativo</h2>
                            <button className={styles.btngoogle} onClick={loginGoogleClick}>
                                <FaGoogle />
                                Login com Google
                            </button>
                            <button className={styles.btnfacebook} onClick={loginFacebookClick}>
                                <FaFacebookF />
                                Login com Facebook
                            </button>
                            <button className={styles.btnmicrosoft} onClick={loginMicrosoftClick}>
                                <FaWindows />
                                Login com Microsoft
                            </button>
                        </Modal>
                        <div className={styles.errorContainer}>
                            {mensagemErro && <p><BiMessageSquareError />{mensagemErro}</p>}
                        </div>
                        <div className={styles.buttonContainer}>
                            <button className={styles.register} onClick={login}>Acessar<RiVipDiamondLine /></button>
                            <Link to="/"><button className={styles.back}>Voltar</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Signin