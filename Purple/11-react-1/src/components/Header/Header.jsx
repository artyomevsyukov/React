// import { useCallback, useState } from 'react'
// import Button from '../Button/Button'
import SelectUser from '../SelectUser/SelectUser'
// import styles from './Header.module.css'
import Logo from '../Logo/Logo'

const logos = ['/logo.svg', '/vite.svg']

function Header() {
    // const [logoIndex, setLogoIndex] = useState(0)

    // const toggleLogo = useCallback(() => {
    //     setLogoIndex(state => Number(!state))
    // }, [])
    return (
        <>
            {/* <Logo image={logos[logoIndex]} /> */}
            <Logo image={logos[0]} />
            <SelectUser />
            {/* <Button onClick={toggleLogo}>Сменить лого</Button> */}
        </>
    )
}

export default Header
