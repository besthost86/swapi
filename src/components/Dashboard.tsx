import {Buttons, Search, Table} from './'


import styles from '../styles/Dashboard.module.scss'

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Buttons/>
      <Search/>
      <Table />
    </div>
  )
}
