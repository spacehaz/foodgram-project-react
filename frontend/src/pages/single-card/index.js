import { Container, Main, Button } from '../../components'
import { RecipesContext, AuthContext } from '../../contexts'
import { useContext, useState, useEffect } from 'react'
import styles from './styles.module.css'
import Ingredients from './ingredients'
import Description from './description'
import cn from 'classnames'
import { TagsContainer, Icons, LinkComponent } from '../../components'
import { useRouteMatch, useParams } from 'react-router-dom'

const SingleCard = ({ loadItem, handleLike }) => {
  const [ loading, setLoading ] = useState(true)
  const authContext = useContext(AuthContext)
  const value = useContext(RecipesContext)
  const { id } = useParams()
  useEffect(_ => {
    loadItem({ id, callback: () => setLoading(false)  })
  }, [])
  
  const { url } = useRouteMatch()
  const currentItem = value.find(card => Number(card.id) === Number(id))
  // if (loading) return 'Loading'
  if (!currentItem) return 'Not found'
  const { author, img, tags, time, title, ingredients, description, is_favorited } = currentItem
  
  return <Main>
    <Container>
      <div className={styles['single-card']}>
        <img src={img} alt="какой-то текст" className={styles["single-card__image"]} />
        <div className={styles["single-card__info"]}>
          <div className={styles["single-card__header-info"]}>
              <h1 className={styles["single-card__title"]}>{title}</h1>
              <Button
                modifier='style_none'
                clickHandler={_ => {
                  handleLike({ id, toLike: !is_favorited })
                }}
              >
                {is_favorited ? <Icons.StarActiveIcon /> : <Icons.StarIcon />}
              </Button>
          </div>
          <TagsContainer tags={tags} />
          <div>
            <p className={styles['single-card__text']}><Icons.ClockIcon /> 20 мин.</p>
            <p className={styles['single-card__text_with_link']}>
              <div className={styles['single-card__text']}><Icons.UserIcon /> Вероника Чернова</div>
              <LinkComponent
                href={`${url}/edit`}
                title='Редактировать рецепт'
                className={styles['single-card__edit']}
              />
            </p>
            
          </div>
          <div className={styles['single-card__buttons']}>
            <Button className={styles['single-card__button']} modifier='style_dark-blue'>
              Добавить в покупки
            </Button>
            {authContext && <Button className={styles['single-card__button']}>
              Подписаться на автора
            </Button>}
          </div>
          <Ingredients ingredients={ingredients} />
          <Description description={description} />
        </div>
    </div>
    </Container>
  </Main>
}

export default SingleCard

