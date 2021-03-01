import cn from 'classnames'
import styles from './styles.module.css'
import { useState } from 'react'
import { Checkbox } from '../index'

const CheckboxGroup = () => {
  const [ value, setValue ] = useState([{
    id: 1,
    title: 'Завтрак',
    color: '#E26C2D',
    slug: 'breakfast'
  }, {
    id: 2,
    title: 'Обед',
    color: '#49B64E',
    slug: 'meal'
  }, {
    id: 3,
    title: 'Ужин',
    color: '#8775D2',
    slug: 'dinner'
  }])

  return <div className={styles.checkboxGroup}>
    <div className={styles.label}>
      Теги
    </div>
    <div className={styles.checkboxGroupItems}>
      {value.map(item => {
        return <Checkbox
          key={item.id}
          active={item.active}
          title={item.title}
          color={item.color}
        />
      })}
    </div>
  </div>
}


export default CheckboxGroup