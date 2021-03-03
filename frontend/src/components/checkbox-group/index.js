import cn from 'classnames'
import styles from './styles.module.css'
import { useState } from 'react'
import { Checkbox } from '../index'

const CheckboxGroup = ({ onUpdated, label, values = [], handleChange }) => {
  return <div className={styles.checkboxGroup}>
    {label && <div className={styles.label}>
      {label}
    </div>}
    <div className={styles.checkboxGroupItems}>
      {values.map(item => {
        return <Checkbox
          key={item.id}
          id={item.id}
          value={item.value}
          title={item.title}
          color={item.color}
          onChange={handleChange}
        />
      })}
    </div>
  </div>
}


export default CheckboxGroup