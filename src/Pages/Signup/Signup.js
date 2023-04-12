import styles from './Signup.module.scss'
import SignupForm from '../../Components/Forms/Signup/SignupForm'

function Signup() {
    return (
        <section className={styles.section}>
            <SignupForm />
        </section>
    )
}

export default Signup