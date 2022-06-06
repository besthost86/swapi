import {useGlobalContext} from '../context/SwapiContext';
import {BsFillSunFill, BsMoonFill} from 'react-icons/bs';
import styles from '../styles/ThemeSwitch.module.scss'

export default function ThemeToggle() {

    const [{themeDark}, dispatch] = useGlobalContext();
  
    return (
      <label  className={styles['toggle-wrapper']} htmlFor="toggle">
        <div className={`${styles.toggle} ${ themeDark ? styles.enabled : styles.disabled}`}>
          <span className={styles.hidden}>
          </span>
        <div className={styles.icons}>
            <BsMoonFill />
            <BsFillSunFill />
        </div>
          <input
            id="toggle"
            name="toggle"
            type="checkbox"
            checked={themeDark}
            onChange={() =>  dispatch({type: 'changeTheme', payload: {value: !themeDark} })}
          />
        </div>
      </label>
    );
  }