import cn from 'classnames'
import styles from './style.module.css'

const Button = ({ children, modifier, href, clickHandler }) => {
  const classNames = cn(styles.button, {
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