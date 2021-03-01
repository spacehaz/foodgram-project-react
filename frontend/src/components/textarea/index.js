import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import cn from 'classnames'

const Textarea = ({
    onChange,
    placeholder,
    label,
    disabled,
    textareaClassName,
    labelClassName
  }) => {
  return <div className={styles.textarea}>
    <label className={cn(styles.textareaLabel, labelClassName)}>
      <div className={styles.textareaLabelText}>
        {label}
      </div>
      <textarea
        rows="8"
        className={cn(styles.textareaField, textareaClassName)}
        onChange={e => onChange && onChange(e.target.value)}
      />
    </label>
  </div>
}

export default Textarea
