import styles from './Signin.module.scss'
import SigninForm from '../../Components/Forms/Signin/SigninForm'
import { useEffect } from 'react';

function Signin() {
    useEffect(() => {
        document.title = 'Acessar conta';
    }, ['Acessar conta']);

    return (
        <>
            <section className={styles.section}>
                <SigninForm />
            </section>
        </>
    )
}

export default Signin