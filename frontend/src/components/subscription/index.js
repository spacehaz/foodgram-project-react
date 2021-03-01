import styles from './styles.module.css'
import cn from 'classnames'
import { Icons, Button } from '../index'

const Subscription = ({ email, name, recipes_count, id, recipes }) => {
  return <div className={styles.subscription}>
    <div className={styles.subscriptionHeader}>
      <h2 className={styles.subscriptionTitle}>
        {name}
      </h2>
    </div>
    <div className={styles.subscriptionBody}>
      <ul className={styles.subscriptionItems}>
        {recipes.map(recipe => {
          return <li className={styles.subscriptionItem} key={recipe.id}>
            <div class={styles.subscriptionRecipe}>
                <img src={recipe.img} alt={recipe.title} class={styles.subscriptionRecipeImage} />
                <h3 class={styles.subscriptionRecipeTitle}>{recipe.title}</h3>
                <p class={styles.subscriptionRecipeText}>
                  <Icons.ClockIcon />{recipe.time} мин.
                </p>
            </div>
          </li>
        })}
        <li class={styles.subscriptionMore}>
            Еще 7 рецептов...
        </li>
      </ul>
    </div>
    <div className={styles.subscriptionFooter}>
        <Button className={styles.subscriptionButton}>
          Отписаться
        </Button>
    </div>
  </div>
}

export default Subscription
