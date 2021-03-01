import styles from './styles.module.css'
import cn from 'classnames'
import { Subscription } from '../index'

const SubscriptionList = ({ subscriptions }) => {
  return <div className={styles.subscriptionList}>
    {subscriptions.map(subscription => <Subscription key={subscription.id} {...subscription} />)}
  </div>
}

export default SubscriptionList
