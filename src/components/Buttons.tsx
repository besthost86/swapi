import {useGlobalContext } from '../context/SwapiContext';
import {FaTruckMonster} from 'react-icons/fa';
import { MdLocalMovies } from 'react-icons/md';
import { IoIosPeople, IoMdPlanet,IoIosRocket } from 'react-icons/io';
import {ReactComponent as Trooper} from '../assets/trooper.svg'
import type {ApiEndpoints} from '../utils/SWAPIKeys'
import styles from '../styles/Dashboard.module.scss'

export default function Buttons() {

  const [{endpoint: {slug}, }, dispatch] = useGlobalContext();
  

  const endpointHandler = (endpoint: ApiEndpoints) => {
    
    if (endpoint === slug) return dispatch({type: 'resetEndpoint', payload: {value: slug}});
    dispatch({type: 'setEnpoint', payload: {value: endpoint}});
  }
  return (
    <div className={styles['api-header']}>
      <div data-selected={slug === 'films'} onClick={()=> endpointHandler('films')}><MdLocalMovies /></div>
      <div data-selected={slug === 'people'} onClick={()=> endpointHandler('people')}><IoIosPeople /></div>
      <div data-selected={slug === 'planets'} onClick={()=> endpointHandler('planets')}><IoMdPlanet /></div>
      <div data-selected={slug === 'species'} data-trooper onClick={()=> endpointHandler('species')}><Trooper fill={styles.trooper} /></div>
      <div data-selected={slug === 'starships'} onClick={()=> endpointHandler('starships') }><IoIosRocket /></div>
      <div data-selected={slug === 'vehicles'} onClick={()=> endpointHandler('vehicles')}><FaTruckMonster /></div> 
    </div>
  )
}
