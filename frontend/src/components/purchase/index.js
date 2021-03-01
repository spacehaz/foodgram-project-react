import styles from './styles.module.css'
import cn from 'classnames'

const Purchase = ({ img, title, time, id }) => {
  return <li className={styles.purchase}>
    <div className={styles.purchaseContent}>
      <div
        alt="какой-то текст"
        className={styles.purchaseImage}
        style={{
          backgroundImage: `url(${img})`
        }}
      />
      <h3 className={styles.purchaseTitle}>{title}</h3>
      <p className={styles.purchaseText}>{time} мин.</p>
    </div>
    <a href="#" className={styles.purchaseDelete}>Удалить</a>
  </li>
}

export default Purchase
