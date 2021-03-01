import styles from './styles.module.css'

const Ingredients = ({ ingredients }) => {
  if (!ingredients) { return null }
  console.log({ ingredients })
  return <div class={styles.ingredients}>
    <h3 class={styles['ingredients__title']}>Ингридиенты:</h3>
    <div class={styles['ingredients__list']}>
      {ingredients.map(({
        title,
        amount,
        dimension
      }) => <p
        key={`${title}${amount}${dimension}`}
        class={styles['ingredients__list-item']}
      >
        {title} - {amount} {dimension}
      </p>)}
    </div>
  </div>
}

export default Ingredients

