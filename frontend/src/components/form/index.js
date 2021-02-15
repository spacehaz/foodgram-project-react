import styles from './styles.module.css'
import cn from 'classnames'

const Form = ({ loggedIn, children, className }) => {
  return <form
    className={cn(styles.form, className)}
  >
    {children}
  </form>
}

export default Form
