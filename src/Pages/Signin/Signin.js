import styles from './Signin.module.scss'
import SigninForm from '../../Components/Forms/Signin/SigninForm'

function Signin() {
    return (
        <>
            <section className={styles.section}>
                <SigninForm />
            </section>
        </>
    )
}

export default Signin