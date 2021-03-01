import cn from 'classnames'
import styles from './styles.module.css'
import { useState } from 'react'
import { Icons } from '../index'

const Checkbox = ({
  onChange,
  className,
  color,
  defaultValue = false,
  title
}) => {
  const [ active, setActive ] = useState(defaultValue)
  const clickHandler = () => {
    const newState = !active
    setActive(newState)
    onChange && onChange(newState)
  }
  const classNames = cn(styles.checkbox, className, {
    [styles['checkbox_active']]: active
  })

  return <div className={styles['checkbox-container']}>
    <button
      className={classNames}
      onClick={clickHandler}
      style={{ backgroundColor: color }}
      type='button'
    >
      {active ? <Icons.CheckIcon /> : ''}
    </button>
    <span>{title}</span>
  </div>
}


export default Checkbox