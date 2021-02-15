import cn from 'classnames'
import styles from './styles.module.css'
import { Button, LinkComponent } from '../index.js'

const AccountMenu = ({ loggedIn }) => {
  if (!loggedIn) {
    return <div className={styles.menu}>
      <LinkComponent
        href='/signup'
        title='Создать аккаунт'
        className={styles.menuButton}
      />
    </div>
  }
  return <div>
  </div>
}


export default AccountMenu