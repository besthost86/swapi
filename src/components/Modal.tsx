
import {useGlobalContext} from '../context/SwapiContext'
import styles from '../styles/Modal.module.scss'

export default function Modal({details, callback, children}: any) {
    const [{modal}, dispatch] = useGlobalContext();
    
    return (
    modal.delete || modal.details ?
    <div className={styles['wrapper-overlay']}>
    <div className={styles.container}>
    { modal.delete ? 
        <div className={styles['modal-box']}>
        <div className={styles['modal-close-wrapper']}>
        <button 
        className={styles['modal-close']}
        onClick={() => dispatch({type: 'toggleModal', payload: {value: {delete: false}}})}>Close</button>
        </div>
        <p>Are you sure?</p>
        <div className={styles['button-wrapper']}>
        <button onClick={() => dispatch({type: 'toggleModal', payload: {value: {delete: false}}})}>NO</button>
        <button onClick={() => { callback()} }>YES</button>
        </div>
        </div> :
        <div className={styles['modal-box-details']}>
            <div className={styles['modal-close-wrapper']}>
                <button 
                className={styles['modal-close']}
                onClick={() => dispatch({type: 'toggleModal', payload: {value: {details: false}}})}>Close</button>
            </div>
            <div className={styles['modal-table']}>
                <div className={styles['detail-row']}><p className={styles.dummy}></p></div>
            {Object.keys(details).map((key, index) => {
                return (
                    <div className={styles['detail-row']} key={index}>
                    <p  className={styles.key}>{key}</p>
                    <p>{details[key]}</p>
                    </div>
                )})} 
            </div>
        </div> }
    </div>
    </div>  
    : null
  )
}
