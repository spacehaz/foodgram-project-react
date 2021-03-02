import styles from './styles.module.css'
import cn from 'classnames'
import { LinkComponent, Icons } from '../index'
import arrowLeft from './arrow-left.png'
import arrowRight from './arrow-right.png'

const Pagination = ({ pages = 5, active = 1, onPageChange }) => {
  return <div className={styles.pagination}>
    <img className={cn(styles.arrow, styles.arrowLeft)} src={arrowLeft} />
    {(new Array(pages)).fill().map((item, idx) => {
      return <div
        className={cn(
          styles.paginationItem, {
            [styles.paginationItemActive]: idx + 1 === active
          }
        )}
        key={idx}
      >{idx + 1}</div>
    })}
    <img src={arrowRight} className={cn(styles.arrow, styles.arrowRight)} />
  </div>
}

export default Pagination
