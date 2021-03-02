import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import cn from 'classnames'

const Input = ({
    onChange,
    placeholder,
    label,
    disabled,
    type = 'text',
    inputClassName,
    labelClassName,
    name,
    required
  }) => {
  return <div className={styles.input}>
    <label className={cn(styles.inputLabel, labelClassName)}>
      <div className={styles.inputLabelText}>
        {label}
      </div>
      <input
        type={type}
        required={required}
        name={name}
        className={cn(styles.inputField, inputClassName)}
        onChange={onChange}
      />
    </label>
  </div>
}

export default Input
