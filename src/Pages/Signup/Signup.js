import styles from './Signup.module.scss'
import SignupForm from '../../Components/Forms/Signup/SignupForm'
import { useEffect } from 'react';

function Signup() {
    useEffect(() => {
        document.title = 'Registrar conta';
    }, ['Registrar conta']);

    return (
        <section className={styles.section}>
            <SignupForm />
        </section>
    )
}

export default Signup