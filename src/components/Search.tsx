import { useGlobalContext} from '../context/SwapiContext'
import React, {useState, useEffect, useRef} from 'react';
import { searchHandler } from './searchHandler';
import { FaTruckMonster} from 'react-icons/fa';
import { MdLocalMovies } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { IoIosPeople, IoMdPlanet, IoIosRocket} from 'react-icons/io';
import {ReactComponent as Trooper} from '../assets/trooper.svg'
import styles from '../styles/SearchNav.module.scss'

export default function Search() {

  const [{results, endpoint: {slug}, currentPage,  searchPool}, dispatch] = useGlobalContext();
  const [inputLoading1, setInputLoading1] = useState(false);
  const [inputLoading2, setInputLoading2] = useState(false);

  const localSearchInput = useRef<HTMLInputElement>(null);
  const endpointSearchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInputLoading2(false);
    setInputLoading1(false);
  },[results]);

  useEffect(() => {
    endpointSearchInput.current!.value = "";
    localSearchInput.current!.value = "";
  },[slug]);
  
  const searchHandlerCallback = (filtered: any[] | 'no results') => {
    if (filtered === "no results") return dispatch({type: 'searchLocal', payload: {value: []}});
    dispatch({type: 'searchLocal', payload: {value: filtered}});
    dispatch({type: 'changeCurrentPage', payload: {value: -(currentPage -1)}});
  }
  const endpointSearchHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    localSearchInput.current!.value = "";
    if (e.key === 'Enter' &&  e.currentTarget.value) {
      setInputLoading1(true);
      dispatch({type: 'searchEndpoint', payload: {value: e.currentTarget.value}}) 
    } 
    !e.currentTarget.value && dispatch({type: 'saveEndpointResults', payload: {value: searchPool}})
   } 

   const localSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLoading2(true);
    endpointSearchInput.current!.value = "";
    e.target.value ? searchHandler(e, searchPool, searchHandlerCallback) :
    dispatch({type: 'saveEndpointResults', payload: {value: searchPool}})
  }
  
  return (
    <div className={styles['search-nav']}>
        <div>
        <input type="text" placeholder={`Results:  ${results.length}`} disabled={true} />
        </div>
        <div>
          { slug === 'films' ? <MdLocalMovies/> :
            slug === 'people' ? <IoIosPeople/> :
            slug === 'planets' ? <IoMdPlanet/> :
            slug === 'species' ? <Trooper/> :
            slug === 'starships' ? <IoIosRocket/> :
            slug === 'vehicles' ? <FaTruckMonster/> : null}
        <input type="text" placeholder="...search endpoint and press enter"
        onKeyUp={e => { endpointSearchHandler(e)}}
        ref={endpointSearchInput}
        spellCheck="false"
        disabled={slug ? false : true}/>
        { inputLoading1 && <div className={[styles.spinner, styles.main].join(" ")}></div>}
        </div>
        <div>
        <BsSearch/>
        <input type="text" placeholder="...search local records" 
        onChange={e => localSearchHandler(e)}
        ref={localSearchInput}
        spellCheck="false" 
        disabled={slug ? false : true}/>
        { inputLoading2 && <div className={[styles.spinner, styles.main].join(" ")}></div>}
        </div>
      </div>
  )
}
