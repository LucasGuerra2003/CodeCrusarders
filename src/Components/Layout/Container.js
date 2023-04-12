import styles from './Container.module.scss'

function Container(props){
    return <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div>
}

export default Container