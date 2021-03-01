import styles from './styles.module.css'
import cn from 'classnames'
import { Purchase } from '../index'

const PurchaseList = ({ orders = [] }) => {
  return <ul className={styles.purchaseList}>
    {orders.map(order => <Purchase key={order.id} {...order} />)}
  </ul>
}

export default PurchaseList
