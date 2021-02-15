import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'
import cn from 'classnames'

const LinkComponent = ({ href, title, className }) => {
  return <Link className={cn(styles.link, className)} to={href}>
    {title}
  </Link>
}

export default LinkComponent


// href
// title
// class