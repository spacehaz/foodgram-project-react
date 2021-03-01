import styles from './styles.module.css'
import cn from 'classnames'
import { LinkComponent, Icons } from '../index'

const Pagination = ({ pages = 5, active = 1 }) => {
  return <div className={styles.pagination}>
    <div className={styles.arrow}>{'<'}</div>
    {(new Array(pages)).fill().map((item, idx) => {
      return <div className={cn(
        styles.paginationItem, {
          [styles.paginationItemActive]: idx + 1 === active
        }
      )}>{idx + 1}</div>
    })}
    <div className={styles.arrow}>{'>'}</div>
  </div>
}

export default Pagination
