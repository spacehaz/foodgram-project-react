import styles from './styles.module.css'
import cn from 'classnames'

const Tag = ({ title, type = 'orange' }) => {
  return <div className={cn(styles.tag, styles[`tag_type_${type}`])}>
    {title}
  </div>
}

export default Tag
