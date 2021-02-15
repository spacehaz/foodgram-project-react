import styles from './style.module.css'
import { Container, LinkComponent } from '../index'

const Footer = () => {
  return <footer className={styles.footer}>
      <Container className={styles.footer__container}>
        <LinkComponent href='#' title='Продуктовый помощник' className={styles.footer__brand} />
        <ul className={styles.footer__items}>
            <li className={styles.footer__item}>
              <LinkComponent href='#' title='Об авторе' className={styles.footer__link} />
            </li>
            <li className={styles.footer__item}>
              <LinkComponent href='#' title='Технологии' className={styles.footer__link} />
            </li>
        </ul>
      </Container>
  </footer>
}

export default Footer
