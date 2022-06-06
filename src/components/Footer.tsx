import {useEffect} from 'react'
import {useGlobalContext} from '../context/SwapiContext'
import styles from '../styles/Footer.module.scss'
import { GrNext, GrPrevious } from 'react-icons/gr'

export default function Footer() {

  const [{results,rowsPerPage, pagesCount, currentPage}, dispatch] = useGlobalContext();

  useEffect(() => {
    const numberOfPages  = results.length ? Math.ceil(results.length/rowsPerPage) : 1;
    numberOfPages && dispatch({type: 'setPagesCount', payload: {value: numberOfPages}})
  },[rowsPerPage, results, currentPage, dispatch]);
  
  return (
    <div className={styles.footer}>
        <div></div>
        <div style={{justifyItems: 'end'}}>
          <GrPrevious onClick={() => (currentPage - 1) && dispatch({type: 'changeCurrentPage', payload: {value: -1}})}/></div>
        <div><p>{currentPage}</p></div>
        <div><span>of</span>
        <span>{pagesCount && pagesCount}</span>
        </div>  
        <div>
          <GrNext onClick={() => currentPage !== pagesCount && dispatch({type: 'changeCurrentPage', payload: {value: 1}})}/></div>
        <div className={styles.select}>
            <select name="results" defaultValue="10" onChange={(e)=>dispatch({type: 'setRowsPerPage', payload: {value: e.target.value}})} >
                <option value="5">5</option>
                <option  value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
        </div>
    </div>
  )
}
