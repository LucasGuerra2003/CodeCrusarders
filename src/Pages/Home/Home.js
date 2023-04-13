import Navbar from '../../Components/Navbar/Navbar'
import Profile from '../../Components/Profile/Profile'
import styles from './Home.module.scss'
import { useEffect } from 'react';

function Home() {
    useEffect(() => {
        document.title = 'Home';
    }, ['Home']);

    return (
        <section className={styles.homeContainer}>
            <Navbar />
            <Profile />
        </section>
    )
}

export default Home