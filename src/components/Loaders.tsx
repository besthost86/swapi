import { useGlobalContext } from '../context/SwapiContext';
import {DarkModeLoader, LightModeLoader} from './'

export default function Loaders() {
    const [{themeDark},] = useGlobalContext();
  return (
    themeDark ? <DarkModeLoader/> : <LightModeLoader/>
  )
}
