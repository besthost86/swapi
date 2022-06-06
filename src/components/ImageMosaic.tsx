import styles from '../styles/Table.module.scss'

export default function ImageMosaic() {
  return (
    <div className={styles.mosaic} >
         <div  className={styles.title}>
            <img src="furious.webp" alt="mozaic tile"/>
        </div>
        <div className={styles.title}>
            <img src="storm.png" alt="mozaic tile"/>
        </div>
        <div className={styles.title}>
            <img src="luke.jpg" alt="mozaic tile"/>
        </div>
        <div className={styles.title}>
            <img src="species.jpg" alt="mozaic tile"/>
        </div>
        <div className={styles.title}>
            <img src="yoda.jpeg" alt="mozaic tile"/>
        </div>
        <div className={styles.title}>
            <img src="greedo.webp" alt="mozaic tile"/>
        </div>
        <div className={styles.title}>
            <img src="alien.jpeg" alt="mozaic tile"/>
        </div>
        <div className={styles.title}>
            <img src="fight.jpg" alt="mozaic tile"/>
        </div>
        <div className={styles.title}>
            <img src="vader-why.jpg" alt="mozaic tile"/>
        </div>
        <div className={styles.title}>
            <img src="r2.jpg" alt="mozaic tile"/>
        </div>
        <div className={styles.title}>
            <img src="funnyEyes.jpeg" alt="mozaic tile"/>
        </div>
        <div className={styles.title}>
            <img src="helmets.jpg" alt="mozaic tile"/>
        </div>
    </div>
  )
}
