import { memo } from 'react'
import styles from './Logo.module.css'

function Logo({ image }) {
    return (
        <>
            <img className={styles.logo} src={image} alt="Логотип" />
        </>
    )
}

export default memo(Logo)
