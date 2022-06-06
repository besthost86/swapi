import {Dashboard, Footer, Header} from './components'
import { useGlobalContext } from './context/SwapiContext';
import styles from './styles/App.module.scss';


function App() {

 const [{themeDark}] = useGlobalContext();

  return (
    <div 
    className={styles.app}
    data-theme={themeDark ? 'dark' : 'light'}>
      <Header/>
      <Dashboard />
      <Footer/>
    </div>
  );
}

export default App;
