import styles from './styles.module.css'

const Description = ({ description }) => {
  if (!description) { return null }
  return <div class={styles.description}>
    <h3 class={styles['description__title']}>Описание:</h3>
    <div class={styles['description__content']} dangerouslySetInnerHTML={{ __html: description }} />
  </div>
}

export default Description

