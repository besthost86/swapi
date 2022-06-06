import React from 'react'
import styles from '../styles/DarkModeLoader.module.scss'

export default function SearchLoader() {
  return (
    <svg id={styles.inputLoader} xmlns="http://www.w3.org/2000/svg" width="300" height="300">
  <circle id={styles.arc1} className={styles.circle} cx="150" cy="150" r="120" opacity=".89" fill="none" stroke="#632b26" strokeWidth="12" strokeLinecap="square" strokeOpacity=".99213" paintOrder="fill markers stroke"/>
  <circle id={styles.arc2} className={styles.circle} cx="150" cy="150" r="120" opacity=".49" fill="none" stroke="#632b26" strokeWidth="8" strokeLinecap="square" strokeOpacity=".99213" paintOrder="fill markers stroke"/>
  <circle id={styles.arc3} className={styles.circle} cx="150" cy="150" r="100" opacity=".49" fill="none" stroke="#632b26" strokeWidth="20" strokeLinecap="square" strokeOpacity=".99213" paintOrder="fill markers stroke"/>
  <circle id={styles.arc4} className={styles.circle} cx="150" cy="150" r="120" opacity=".49" fill="none" stroke="#632b26" strokeWidth="30" strokeLinecap="square" strokeOpacity=".99213" paintOrder="fill markers stroke"/>
  <circle id={styles.arc5} className={styles.circle} cx="150" cy="150" r="100" opacity=".89" fill="none" stroke="#632b26" strokeWidth="8" strokeLinecap="square" strokeOpacity=".99213" paintOrder="fill markers stroke"/>
  <circle id={styles.arc6} className={styles.circle} cx="150" cy="150" r="90" opacity=".49" fill="none" stroke="#632b26" strokeWidth="16" strokeLinecap="square" strokeOpacity=".99213" paintOrder="fill markers stroke"/>
  <circle id={styles.arc7} className={styles.circle} cx="150" cy="150" r="90" opacity=".89" fill="none" stroke="#632b26" strokeWidth="8" strokeLinecap="square" strokeOpacity=".99213" paintOrder="fill markers stroke"/>
  <circle id={styles.arc1} className={styles.circle} cx="150" cy="150" r="80" opacity=".79" fill="#4DD0E1"
fillOpacity="0" stroke="#632b26" strokeWidth="8" strokeLinecap="square" strokeOpacity=".99213" paintOrder="fill markers stroke"/>
</svg>
  )
}
