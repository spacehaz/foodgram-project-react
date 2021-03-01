import { Container, Main, Button } from '../../components'
import { RecipesContext } from '../../contexts'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import styles from './styles.module.css'
import Ingredients from './ingredients'
import Description from './description'
import { TagsContainer, Icons, LinkComponent } from '../../components'
import { useRouteMatch } from 'react-router-dom'

const SingleCard = () => {
  const value = useContext(RecipesContext);
  const { id } = useParams();
  const currentItem = value.find(card => Number(card.id) === Number(id))
  const { url } = useRouteMatch()
  if (!currentItem) return 'Not found'
  const { author, img, tags, time, title, ingredients, description } = currentItem
  
  return <Main>
    <Container>
      <div class={styles['single-card']}>
        <img src={img} alt="какой-то текст" class={styles["single-card__image"]} />
        <div class={styles["single-card__info"]}>
            <div class={styles["single-card__header-info"]}>
                <h1 class={styles["single-card__title"]}>{title}</h1>
                <div class="single-card__favorite">
                    <button class="button button_style_none" name="favorites" data-out><span class="icon-favorite icon-favorite_big"></span></button>
                    <div class="single-card__favorite-tooltip tooltip">Добавить в избранное</div>
                </div>
            </div>
            <TagsContainer tags={tags} />
            <div>
              <p class="single-card__text"><Icons.ClockIcon /> 20 мин.</p>
              <p class="single-card__text"><Icons.UserIcon /> Вероника Чернова</p>
              <LinkComponent href={`${url}/edit`} title='Редактировать рецепт' />
            </div>
            <div className={styles['single-card__buttons']}>
                <Button className={styles['single-card__button']} modifier='style_dark-blue'>
                  Добавить в покупки
                </Button>
                <Button className={styles['single-card__button']}>
                  Подписаться на автора
                </Button>
            </div>
            <Ingredients ingredients={ingredients} />
            <Description description={description} />
        </div>
    </div>
    </Container>
  </Main>
}

export default SingleCard

