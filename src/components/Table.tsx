import { useState, useEffect} from 'react'
import { useGlobalContext } from '../context/SwapiContext';
import {Loaders, ImageMosaic, Modal} from './'
import {BsJournalPlus   } from 'react-icons/bs';
import styles from '../styles/Table.module.scss'

export default function Table() {

    const [{results, keys, currentPage, rowsPerPage, searchPool, loading},dispatch] = useGlobalContext();
    const [rows, setRows] = useState(results);
    const [details, setDetails] = useState<object | null>(null);
    const [{rowToRemove, isRemote}, setRowToRemove] = useState({rowToRemove: -1, isRemote: false});
    const [{highlighted, rowIndex}, setHighLightedIndex] = useState({highlighted: false, rowIndex: -1});

    useEffect(() => {
        const prevRows = (currentPage-1) * rowsPerPage;
        const newRows = results.slice(prevRows, rowsPerPage * currentPage);
        setRows(newRows);
    },[results, rowsPerPage, currentPage]);

    const truncateCrawl = (crawl: string) => {
        return crawl.slice(0, 35) + '...'
    }
    const removeRowHandler = (index: number, remote: boolean = false) => {
        setRowToRemove({rowToRemove: index, isRemote: remote});
        dispatch({type: 'toggleModal', payload: {value: {delete: true} }})
     
    }

    const detailsHandler = (row: object) => {
        setDetails(row);
        dispatch({type: 'toggleModal', payload: {value: {details: true} }})
     
    }
    const modalCallback = () => {
        dispatch({type: 'removeFromList', payload: {value: {rowToRemove, isRemote}}})
        if (rows.length === 1)  dispatch({type: 'changeCurrentPage', payload: {value: -(currentPage-1)}});
        dispatch({type: 'toggleModal', payload: {value: {delete: false}}})
    }
 
return  (
        loading ? <Loaders/> : rows.length ?
            <div className={styles.table}>
            <Modal details={details} callback={modalCallback}/>
            <div className={styles['table-header']}>
            <p>ID</p>
            {keys.concat(['created', 'actions']).map((key, index) => <p key={index}>{key.toUpperCase()}</p>)}
            </div>
            {rows.map((row, index) => 
            <div className={styles.row} key={index} 
            onMouseEnter={()=> setHighLightedIndex({highlighted: true, rowIndex: index})}
            onMouseLeave={()=> setHighLightedIndex({highlighted: false, rowIndex: -1})}>
            <div className={`${highlighted && rowIndex === index && styles.highlighted}`}>{results.indexOf(row) + 1}</div>
            <p>{row[keys[0]]}</p>
            <p>{row[keys[1]]}</p>
            <p>{Object.hasOwn(row, 'opening_crawl') ? truncateCrawl(row['opening_crawl']) : row[keys[2]]}</p>
            <p>{row[keys[3]]}</p>
            <p>{new Date(row.created).toLocaleDateString('pl-PL', {day: 'numeric', month: 'numeric', year: '2-digit'})}</p>
            <div className={styles.actions}>
                <div onClick={()=> detailsHandler(row)} ><BsJournalPlus/>
                </div>
                <div onClick={() => removeRowHandler(results.indexOf(row ), row.remote)}>
                    <svg className="svg-icon" style={{height: '100%', width: '100%'}} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M256 810.666667c0 47.146667 38.186667 85.333333 85.333333 85.333333h341.333334c47.146667 0 85.333333-38.186667 85.333333-85.333333V298.666667H256v512zM810.666667 170.666667h-149.333334l-42.666666-42.666667H405.333333l-42.666666 42.666667h-149.333334v85.333333h597.333334V170.666667z" /></svg>
                </div>  
            </div>
            </div> )} 
            </div> : !searchPool.length ? <ImageMosaic/> :  !results.length ?  <div className={styles.noresults}><p>NOTHING FOUND</p></div> : null
        )}
 