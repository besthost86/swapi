import {ReactComponent as Logo} from '../assets/swlogo-vector.svg'
import {ThemeSwitch} from './index'
import styles from '../styles/Header.module.scss'
export default function Header() {

  return (
    <div className={styles.header}>
     <Logo className={styles['sw-logo-c']} /> 
      <ThemeSwitch/>
    </div>
  )
}
