import styles from './Profile.module.scss'

function Profile() {
    return (
        <div className={styles.profileContainer}>
            <h2>Meu dados</h2>
            <div className={styles.dataContainer}>
                <div className={styles.dataContainerChild}>
                    <h3>E-mail</h3>
                    <p>{localStorage.getItem("email")}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile