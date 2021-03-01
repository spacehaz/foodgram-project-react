import cn from 'classnames'
import styles from './style.module.css'

const Button = ({
  children,
  modifier = 'style_light-blue',
  href,
  clickHandler,
  className
}) => {
  const classNames = cn(styles.button, className, {
    [styles[`button_${modifier}`]]: modifier
  })
  if (href) {
    return <a
      className={classNames}
      href={href}
    >
      {children}
    </a>
  }
  return <button
    className={classNames}
    onClick={_ => clickHandler()}
  >
    {children}
  </button>
}


export default Button