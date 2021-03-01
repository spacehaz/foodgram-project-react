import styles from './styles.module.css'
import cn from 'classnames'
import { Tag } from '../index'

const TagsContainer = ({ tags }) => {
  if (!tags) { return null }
  return <div className={styles['tags-container']}>
    {tags.map(tag => {
      return <Tag color={tag.color} title={tag.title} />
    })}
  </div>
}

export default TagsContainer
