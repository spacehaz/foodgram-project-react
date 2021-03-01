import styles from './styles.module.css'
import cn from 'classnames'
import { hexToRgba } from '../../utils'

const Tag = ({ title, color = '#E26C2D' }) => {
  const background = hexToRgba(color, 0.1)
  return <div className={cn(styles.tag)} style={{
    backgroundColor: background,
    color
  }}>
    {title}
  </div>
}

export default Tag
