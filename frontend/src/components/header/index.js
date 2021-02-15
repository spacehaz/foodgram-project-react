import styles from './style.module.css'
import { Nav, AccountMenu } from '../index.js'
import Container from '../container'

const Header = ({ loggedIn }) => {
  return <header
    className={styles.header}
  >
    <Container>
      <div className={styles.headerContent}>
        <Nav loggedIn={loggedIn} />
        <AccountMenu />
      </div>
    </Container>
  </header>
}

export default Header
